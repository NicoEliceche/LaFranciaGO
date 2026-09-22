@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem Reinicia la aplicacion de escritorio (la ventana de Windows).
rem
rem La ventana no tiene pantallas propias: carga la misma aplicacion que anda
rem en el navegador, desde el servidor de desarrollo. Asi que primero tiene
rem que haber servidor.
rem
rem Lo que hace, en orden:
rem   1. Cierra la ventana si estaba abierta.
rem   2. Mira si la web esta corriendo.
rem   3. Si no esta, llama a restart.bat y espera a que conteste.
rem   4. Abre la ventana.
rem
rem Si la web ya estaba corriendo no la toca: reiniciarla obligaria a
rem recompilar y a esperar de gusto.

set "ROOT=%~dp0"
set "APP=%ROOT%escritorio"
set "PUERTOS=8081 8087 8086 8085 5173 3000"

echo.
echo ==========================================
echo   LaFranciaGO - restart app de escritorio
echo ==========================================
echo.

echo [1/4] Cerrando la aplicacion de escritorio...
rem /T por los procesos hijos: Chromium abre varios por ventana (el
rem principal, el que dibuja, la GPU, la red) y si queda uno vivo queda su
rem ventana puesta. /F porque una ventana colgada no responde al pedido
rem amable.
taskkill /F /T /IM electron.exe >nul 2>nul
if errorlevel 1 (
  echo       No habia ninguna abierta.
) else (
  echo       Cerrada.
)

rem Un momento para que Windows suelte los archivos de la corrida anterior.
rem Ruta completa por si hay otro timeout antes en el PATH (Git Bash trae uno
rem de Unix que no entiende /t).
"%SystemRoot%\System32\timeout.exe" /t 2 /nobreak >nul 2>nul

echo [2/4] Revisando si la web esta corriendo...
call :buscar_web
if defined DEV (
  echo       Si, en el puerto %DEV%. Se deja como esta.
  goto :abrir_ventana
)

echo       No esta.

echo [3/4] Levantando la web con restart.bat...
if not exist "%ROOT%restart.bat" (
  echo.
  echo       No encuentro restart.bat en %ROOT%
  echo.
  endlocal
  pause
  exit /b 1
)

rem restart.bat usa start, asi que vuelve enseguida: no espera a que Vite
rem termine de compilar. Por eso despues hay que esperar al puerto y no
rem alcanza con que este .bat haya vuelto.
call "%ROOT%restart.bat"

echo       Esperando que la web conteste...
rem Hasta 60 segundos, de a uno. La primera compilacion en una maquina lenta
rem tarda; si se abriera la ventana antes, no encontraria servidor.
set /a INTENTOS=0
:esperar
call :buscar_web
if defined DEV goto :web_lista

set /a INTENTOS+=1
rem !INTENTOS! y no %INTENTOS%: dentro de un bucle el %% se expande una sola
rem vez, asi que el contador quedaria congelado en 0 y esto nunca cortaria.
if !INTENTOS! GEQ 60 (
  echo.
  echo       La web no contesto despues de 60 segundos.
  echo.
  echo       Mira la terminal "LaFranciaGO Dev" que se abrio: ahi esta el
  echo       error. Cuando ande, volve a correr este archivo.
  echo.
  endlocal
  pause
  exit /b 1
)

"%SystemRoot%\System32\timeout.exe" /t 1 /nobreak >nul 2>nul
goto :esperar

:web_lista
echo       Lista en el puerto %DEV%.

:abrir_ventana
echo [4/4] Abriendo la aplicacion de escritorio...

if not exist "%APP%\node_modules\electron\dist\electron.exe" (
  echo.
  echo       Falta el binario de Electron.
  echo.
  echo       Son unos 270 MB que no vienen en el paquete y algunos npm tienen
  echo       bloqueados los scripts que los bajan. Para arreglarlo:
  echo.
  echo         cd escritorio
  echo         npm run reparar
  echo.
  endlocal
  pause
  exit /b 1
)

rem cmd /k y no /c: si la aplicacion falla al arrancar, la terminal queda
rem abierta con el error a la vista en vez de cerrarse sola.
start "LaFranciaGO Escritorio" /D "%APP%" cmd /k npm run dev

echo.
echo   Listo. La ventana se abre en unos segundos.
echo.

endlocal
exit /b 0

rem ── Subrutinas ──

rem Deja en DEV el primer puerto que este escuchando, o sin definir si no hay
rem ninguno. Son los mismos que prueba la ventana, en el mismo orden.
:buscar_web
set "DEV="
for %%P in (%PUERTOS%) do (
  rem "if not defined" adentro del bloque se evalua al leerlo, no en cada
  rem vuelta, asi que se usa !DEV! para mirar el valor de ese momento.
  if not defined DEV (
    netstat -ano | findstr /R /C:":%%P .*LISTENING" >nul 2>nul
    if not errorlevel 1 set "DEV=%%P"
  )
)
goto :eof
