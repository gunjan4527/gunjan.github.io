@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM Ensure Git and Node are available in this session
if exist "C:\Program Files\Git\cmd\git.exe" set "PATH=C:\Program Files\Git\cmd;%PATH%"
if exist "C:\Program Files\nodejs\npm.cmd" set "PATH=C:\Program Files\nodejs;%PATH%"

where git >nul 2>&1 || (
  echo [ERROR] Git not found. Please install Git or add it to PATH.
  pause
  exit /b 1
)

where npm >nul 2>&1 || (
  echo [ERROR] npm not found. Please install Node.js or add it to PATH.
  pause
  exit /b 1
)

echo [INFO] Staging changes...
git add . || (
  echo [ERROR] git add failed.
  pause
  exit /b 1
)

git diff --cached --quiet
if %errorlevel%==0 (
  echo [INFO] No staged changes to commit.
) else (
  for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format ''yyyy-MM-dd HH:mm:ss''"') do set "TS=%%I"
  set "MSG=update portfolio - !TS!"

  echo [INFO] Committing with message: !MSG!
  git commit -m "!MSG!" || (
    echo [ERROR] git commit failed.
    pause
    exit /b 1
  )
)

echo [INFO] Pushing to remote...
git push || (
  echo [ERROR] git push failed.
  pause
  exit /b 1
)

echo [INFO] Deploying...
npm run deploy || (
  echo [ERROR] deploy failed.
  pause
  exit /b 1
)

echo [SUCCESS] Push and deployment completed.
pause