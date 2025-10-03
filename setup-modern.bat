@echo off
echo 🚀 Setting up Modern Saddleworth Blinds Website
echo ==============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm with Node.js
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed
echo.

REM Build the project
echo 🔨 Building the project...
npm run build
if errorlevel 1 (
    echo ❌ Failed to build the project
    pause
    exit /b 1
)

echo ✅ Project built successfully
echo.

REM Copy webhook files to build directory
echo 🔗 Setting up webhook deployment...
if exist webhook-deploy.php (
    copy webhook-deploy.php dist\ >nul
    echo ✅ Copied webhook-deploy.php
) else (
    echo ⚠️  webhook-deploy.php not found
)

if exist webhook-config.php (
    copy webhook-config.php dist\ >nul
    echo ✅ Copied webhook-config.php
) else (
    echo ⚠️  webhook-config.php not found ^(this is expected^)
)

REM Copy other necessary files
if exist .htaccess (
    copy .htaccess dist\ >nul
    echo ✅ Copied .htaccess
) else (
    echo ⚠️  .htaccess not found
)

if exist sitemap.xml (
    copy sitemap.xml dist\ >nul
    echo ✅ Copied sitemap.xml
) else (
    echo ⚠️  sitemap.xml not found
)

if exist robots.txt (
    copy robots.txt dist\ >nul
    echo ✅ Copied robots.txt
) else (
    echo ⚠️  robots.txt not found
)

REM Copy images directory
if exist images (
    echo 🖼️  Copying images...
    xcopy /E /I /Y images dist\images >nul
    echo ✅ Copied images directory
) else (
    echo ⚠️  images directory not found
)

echo.
echo 🎉 Modernization Complete!
echo ==========================
echo.
echo 📁 Build output: .\dist\
echo 🌐 Development server: npm run dev
echo 🏗️  Production build: npm run build
echo 🔍 Preview build: npm run preview
echo.
echo 📋 Next Steps:
echo 1. Test the build: npm run preview
echo 2. Deploy the 'dist' folder to your web server
echo 3. Update your webhook to point to the new structure
echo 4. Keep your existing webhook-config.php and webhook-deploy.php files
echo.
echo ✨ Your website is now modernized with:
echo    • React for interactive UI
echo    • Tailwind CSS for styling
echo    • Modern build system with Vite
echo    • Better performance and SEO
echo    • Mobile-responsive design
echo    • TypeScript-ready structure
echo.
pause
