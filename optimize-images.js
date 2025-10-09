#!/usr/bin/env node

/**
 * Image Optimization Script for Saddleworth Blinds
 * This script optimizes images for web use in multiple sizes and formats
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'images/to-optimize');
const targetDir = path.join(__dirname, 'images/optimized');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

console.log('🚀 Starting image optimization...');

// Get all images in the to-optimize folder
const images = fs.readdirSync(sourceDir)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

async function optimizeImage(image) {
    const baseName = path.parse(image).name;
    const sourcePath = path.join(sourceDir, image);

    console.log(`📸 Optimizing: ${image}`);

    try {
        // Read the original image
        const imageBuffer = fs.readFileSync(sourcePath);
        const metadata = await sharp(imageBuffer).metadata();

        // Create 400px version (JPG)
        await sharp(imageBuffer)
            .resize(400, 400, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 85 })
            .toFile(path.join(targetDir, `${baseName}-400.jpg`));

        // Create 400px version (WebP)
        await sharp(imageBuffer)
            .resize(400, 400, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(path.join(targetDir, `${baseName}-400.webp`));

        // Create 800px version (JPG)
        await sharp(imageBuffer)
            .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 85 })
            .toFile(path.join(targetDir, `${baseName}-800.jpg`));

        // Create 800px version (WebP)
        await sharp(imageBuffer)
            .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(path.join(targetDir, `${baseName}-800.webp`));

        // Create 1600px version (JPG) - for hero images
        await sharp(imageBuffer)
            .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 85 })
            .toFile(path.join(targetDir, `${baseName}-1600.jpg`));

        // Create 1600px version (WebP) - for hero images
        await sharp(imageBuffer)
            .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(path.join(targetDir, `${baseName}-1600.webp`));

        console.log(`✅ Completed: ${image}`);
    } catch (error) {
        console.error(`❌ Error optimizing ${image}:`, error.message);
    }
}

async function main() {
    if (images.length === 0) {
        console.log('⚠️  No images found in to-optimize directory');
        return;
    }

    // Process images sequentially to avoid overwhelming the system
    for (const image of images) {
        await optimizeImage(image);
    }

    console.log('🎉 All images optimized successfully!');
    console.log(`📊 Processed ${images.length} images`);
}

// Run the optimization
main().catch(console.error);
