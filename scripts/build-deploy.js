const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define paths
const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'app');
const apiDir = path.join(appDir, 'api');
const keyDir = path.join(appDir, 'keystatic');
const apiDisabled = path.join(appDir, '_api_disabled');
const keyDisabled = path.join(appDir, '_keystatic_disabled');

console.log('🚀 Starting Smart Build for Static Export...');

// 1. Rename folders to disable them
try {
    if (fs.existsSync(apiDir)) {
        console.log('   - Hiding API folder...');
        fs.renameSync(apiDir, apiDisabled);
    }
    if (fs.existsSync(keyDir)) {
        console.log('   - Hiding Keystatic folder...');
        fs.renameSync(keyDir, keyDisabled);
    }
} catch (err) {
    console.error('Error renaming folders:', err);
    process.exit(1);
}

// 2. Run Next.js Build
try {
    console.log('   - Running Next.js build...');
    // Enable static export mode via env var
    process.env.IS_STATIC_EXPORT = 'true';
    execSync('next build', { stdio: 'inherit', env: process.env, cwd: rootDir });
    console.log('✅ Build Complete!');
} catch (err) {
    console.error('❌ Build Failed');
    process.exit(1);
} finally {
    // 3. Restore folders (Always run this)
    console.log('   - Restoring folders...');
    try {
        if (fs.existsSync(apiDisabled)) {
            fs.renameSync(apiDisabled, apiDir);
        }
        if (fs.existsSync(keyDisabled)) {
            fs.renameSync(keyDisabled, keyDir);
        }
    } catch (restoreErr) {
        console.error('WARNING: Could not restore folders. Please check app/_api_disabled manually.', restoreErr);
    }
}
