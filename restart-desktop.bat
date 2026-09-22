@echo off
setlocal EnableExtensions

rem Levanta SOLO la aplicacion de escritorio (la ventana de Windows).
rem
rem Para la web esta restart.bat, que es otra cosa: ahi hay un servidor
rem escuchando en un puerto, y cerrarlo es matar al que ocupa ese puerto.
rem
rem Aca no. La aplicacion de escritorio no escucha ningun puerto, es un
rem programa. Lo que se cierra son los procesos de Electron, y hay que
rem cerrarlos TODOS: Chromium abre varios por ventana (el principal, el que
rem dibuja, la GPU, la red) y si queda uno vivo queda su ventana puesta.
rem
rem La ventana no tiene pantallas propias: carga la misma aplicacion que anda
rem en el navegador. Si hay servidor de desarrollo usa ese, y se ven los
rem cambios en vivo. Si no hay, usa la compilacion del disco, que es como
rem anda en el negocio; y si tampoco hay, la genera.

set "ROOT=%~dp0"
set "APP=%ROOT%escritorio"

echo.
echo ==========================================
echo   LaFranciaGO - restart app de escritorio
echo ==========================================
echo.

pushd "%APP%"

echo [1/4] Cerrando la aplicacion si ya estaba abierta...
rem /T por los procesos hijos, /F porque si la ventana esta colgada no
rem responde al pedido amable.
taskkill /F /T /IM electron.exe >nul 2>nul
if errorlevel 1 (
  echo       No habia ninguna abierta.
) else (
  echo       Cerrada.
)

rem Un momento para que Windows suelte los archivos de la corrida anterior.
rem Ruta completa por si hay otro timeout antes en el PATH (Git Bash trae
rem uno de Unix que no entiende /t).
"%SystemRoot%\System32\timeout.exe" /t 2 /nobreak >nul 2>nul

echo [2/4] Buscando el servidor de desarrollo...
rem Los mismos puertos que prueba la ventana, en el mismo orden.
set "DEV="
for %%P in (8081 8087 8086 8085 5173 3000) do (
  if not defined DEV (
    netstat -ano | findstr /R /C:":%%P .*LISTENING" >nul 2>nul
    if not errorlevel 1 set "DEV=%%P"
  )
)

if defined DEV goto :hay_servidor

rem Sin servidor se abre la compilacion del disco, que es como anda en el
rem negocio: ahi nadie levanta Vite. Lo que se ve es de la ultima vez que se
rem corrio npm run build, y la ventana lo avisa arriba.
echo       No hay ninguno. Se usa la compilacion del disco.

if exist "%ROOT%dist\index.html" goto :hay_compilacion

echo       No hay compilacion. Generandola, esto tarda un rato...
pushd "%ROOT%"
call npm run build
popd

if exist "%ROOT%dist\index.html" goto :hay_compilacion

echo.
echo       La compilacion fallo. Mira el error de arriba.
echo.
popd
endlocal
pause
exit /b 1

:hay_servidor
if defined DEV echo       Encontrado en el puerto %DEV%.

:hay_compilacion

echo [3/4] Revisando que Electron este instalado...
if not exist "%APP%\node_modules\electron\dist\electron.exe" (
  echo.
  echo       Falta el binario de Electron.
  echo.
  echo       Son unos 270 MB que no vienen en el paquete y algunos npm
  echo       tienen bloqueados los scripts que los bajan. Para arreglarlo:
  echo.
  echo         cd escritorio
  echo         npm run reparar
  echo.
  popd
  endlocal
  pause
  exit /b 1
)

echo       Listo.

echo [4/4] Abriendo la ventana...
rem cmd /k y no /c: si la aplicacion falla al arrancar, la terminal queda
rem abierta con el error a la vista en vez de cerrarse sola.
start "LaFranciaGO Escritorio" /D "%APP%" cmd /k npm run dev

echo.
echo   Listo. La ventana deberia abrirse en unos segundos.
echo.

popd
endlocal
exit /b 0
