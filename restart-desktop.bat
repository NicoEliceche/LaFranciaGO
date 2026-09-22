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
rem El servidor de desarrollo si tiene que estar levantado, porque la
rem ventana carga la aplicacion desde ahi. Si no lo encuentra avisa en
rem pantalla, pero mejor avisarlo antes de abrirla.

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

if not defined DEV (
  echo.
  echo       No hay servidor de desarrollo escuchando.
  echo.
  echo       La ventana carga la aplicacion desde tu maquina, asi que sin
  echo       servidor no hay nada que mostrar. En otra terminal:
  echo.
  echo         npm run dev
  echo.
  echo       O corre restart.bat, que lo levanta.
  echo.
  popd
  endlocal
  pause
  exit /b 1
)

echo       Encontrado en el puerto %DEV%.

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
