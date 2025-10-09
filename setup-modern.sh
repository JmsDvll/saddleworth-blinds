#!/bin/bash

echo "🚀 Setting up Modern Saddleworth Blinds Website"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm with Node.js"
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build the project"
    exit 1
fi

echo "✅ Project built successfully"

echo "ℹ️  Webhook deployment removed as it's not compatible with React build process"

# Copy other necessary files
cp .htaccess dist/ 2>/dev/null || echo "⚠️  .htaccess not found"
cp sitemap.xml dist/ 2>/dev/null || echo "⚠️  sitemap.xml not found"
cp robots.txt dist/ 2>/dev/null || echo "⚠️  robots.txt not found"

# Copy images directory
if [ -d "images" ]; then
    echo "🖼️  Copying images..."
    cp -r images dist/
fi

echo ""
echo "🎉 Modernization Complete!"
echo "=========================="
echo ""
echo "📁 Build output: ./dist/"
echo "🌐 Development server: npm run dev"
echo "🏗️  Production build: npm run build"
echo "🔍 Preview build: npm run preview"
echo ""
echo "📋 Next Steps:"
echo "1. Test the build: npm run preview"
echo "2. Deploy the 'dist' folder to your web server"
echo "3. Upload all files from the 'dist' folder to your public_html directory"
echo "4. Ensure .htaccess file is in the root directory for proper routing"
echo ""
echo "✨ Your website is now modernized with:"
echo "   • React for interactive UI"
echo "   • Tailwind CSS for styling"
echo "   • Modern build system with Vite"
echo "   • Better performance and SEO"
echo "   • Mobile-responsive design"
echo "   • TypeScript-ready structure"
echo "   • Centralized styling system"
