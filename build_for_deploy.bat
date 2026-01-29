@echo off
echo ===========================================
echo   Crimson Gravity Deployment Builder
echo ===========================================
echo.
echo 1. Stopping any running servers...
taskkill /F /IM node.exe >nul 2>&1

echo.
echo 2. Preparing files for Static Export...
if exist app\api rename app\api _api_disabled
if exist app\keystatic rename app\keystatic _keystatic_disabled

echo.
echo 3. Building the website...
set IS_STATIC_EXPORT=true
call npm run build

echo.
echo 4. Restoring files...
if exist app\_api_disabled rename app\_api_disabled api
if exist app\_keystatic_disabled rename app\_keystatic_disabled keystatic

echo.
echo ===========================================
echo   BUILD COMPLETE!
echo ===========================================
echo.
echo You can now upload the "out" folder to Netlify.
echo.
pause
