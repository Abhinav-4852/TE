@echo off
REM Deployment Setup Script for Trident Escapes (Windows)
REM This script copies email from .env to config.js for deployment

echo 🚀 Setting up Trident Escapes for deployment...

REM Check if .env file exists
if not exist ".env" (
    echo ❌ .env file not found! Please create one from .env.example
    exit /b 1
)

REM Extract email from .env
for /f "tokens=2 delims==" %%i in ('findstr "WEB3FORMS_EMAIL=" .env') do set EMAIL=%%i

if "%EMAIL%"=="" (
    echo ❌ WEB3FORMS_EMAIL not found in .env file
    exit /b 1
)

echo 📧 Found email: %EMAIL%

REM Update config.js with the email
if exist "frontend\js\config.js" (
    REM Create backup
    copy "frontend\js\config.js" "frontend\js\config.js.bak" >nul

    REM Replace placeholder with actual email using PowerShell
    powershell -Command "(Get-Content 'frontend\js\config.js') -replace 'REPLACE_WITH_YOUR_EMAIL', '%EMAIL%' | Set-Content 'frontend\js\config.js'"

    echo ✅ Updated frontend\js\config.js with email
    echo 📁 Backup saved as config.js.bak
) else (
    echo ❌ frontend\js\config.js not found!
    exit /b 1
)

echo 🎉 Setup complete! Your site is ready for deployment.
echo.
echo 📝 Next steps:
echo    1. Deploy to your hosting platform
echo    2. Ensure the hosting platform can serve static files
echo    3. Test form submissions
echo.
echo ⚠️  Remember: Don't commit config.js with real email to git!
pause