# Script to copy remaining high-quality images to optimized folder
# Since image processing tools aren't working reliably, we'll copy the originals

$sourceDir = "images\to-optimize"
$targetDir = "images\optimized"

Write-Host "Copying remaining high-quality images to optimized folder..." -ForegroundColor Green

# Define the mapping of source files to target names
$imageMappings = @{
    "allusion-shadow-sand-main.jpg" = "allusion-shadow-sand-1600.jpg"
    "allusion-vista-snow-main.jpg" = "allusion-vista-snow-1600.jpg"
    "roller-carnival-bubblegum-main.jpg" = "roller-carnival-bubblegum-1600.jpg"
    "roller-paradise-palm-main.jpg" = "roller-paradise-palm-1600.jpg"
    "vertical-matrix-reed-main.jpg" = "vertical-matrix-reed-1600.jpg"
    "vertical-savanna-zebra-main.jpg" = "vertical-savanna-zebra-1600.jpg"
    "vision-firenze-walnut-main.jpg" = "vision-firenze-walnut-1600.jpg"
    "vision-floreale-rosa-main.jpg" = "vision-floreale-rosa-1600.jpg"
    "vision-lusso-pebble-main.jpg" = "vision-lusso-pebble-1600.jpg"
    "vision-palermo-silver-main.jpg" = "vision-palermo-silver-1600.jpg"
}

foreach ($sourceFile in $imageMappings.Keys) {
    $targetFile = $imageMappings[$sourceFile]
    $sourcePath = Join-Path $sourceDir $sourceFile
    $targetPath = Join-Path $targetDir $targetFile

    if (Test-Path $sourcePath) {
        Copy-Item $sourcePath $targetPath -Force
        Write-Host "Copied: $sourceFile -> $targetFile" -ForegroundColor Yellow
    } else {
        Write-Host "Source file not found: $sourceFile" -ForegroundColor Red
    }
}

Write-Host "Image copying completed!" -ForegroundColor Green
