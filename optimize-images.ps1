# Image Optimization Script for Saddleworth Blinds
# This script optimizes images for web use in multiple sizes and formats

$sourceDir = "images\to-optimize"
$targetDir = "images\optimized"

Write-Host "Starting image optimization..." -ForegroundColor Green

# Check if Sharp is installed
try {
    Import-Module -Name "sharp" -ErrorAction Stop
    Write-Host "Sharp module loaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Sharp module not found. Installing globally..." -ForegroundColor Yellow
    npm install -g sharp-cli
}

# Get all images in the to-optimize folder
$images = Get-ChildItem $sourceDir -Name "*.jpg"

foreach ($image in $images) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($image)
    $sourcePath = Join-Path $sourceDir $image

    Write-Host "Optimizing: $image" -ForegroundColor Yellow

    # Create 400px version (JPG)
    sharp -i $sourcePath -o "$targetDir\$baseName-400.jpg" resize 400 --format jpeg

    # Create 400px version (WebP)
    sharp -i $sourcePath -o "$targetDir\$baseName-400.webp" resize 400 --format webp

    # Create 800px version (JPG)
    sharp -i $sourcePath -o "$targetDir\$baseName-800.jpg" resize 800 --format jpeg

    # Create 800px version (WebP)
    sharp -i $sourcePath -o "$targetDir\$baseName-800.webp" resize 800 --format webp

    # Create 1600px version (JPG) - for hero images
    sharp -i $sourcePath -o "$targetDir\$baseName-1600.jpg" resize 1600 --format jpeg

    # Create 1600px version (WebP) - for hero images
    sharp -i $sourcePath -o "$targetDir\$baseName-1600.webp" resize 1600 --format webp

    Write-Host "Completed: $image" -ForegroundColor Green
}

Write-Host "All images optimized successfully!" -ForegroundColor Green
