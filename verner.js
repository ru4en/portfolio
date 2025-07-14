import { execSync } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

function safeExec(cmd, fallback) {
  try {
    return execSync(cmd, { encoding: 'utf-8' }).trim();
  } catch {
    return fallback;
  }
}

function getPackageVersion() {
  try {
    const pkgPath = path.resolve(process.cwd(), 'package.json');
    const pkgJson = JSON.parse(readFileSync(pkgPath, 'utf-8'));
    return pkgJson.version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

// Get package version and Git commit hash
const packageVersion = getPackageVersion();
const gitCommit = safeExec('git rev-parse --short HEAD', 'no-commit');

// Determine build mode (default to 'dev' if no valid argument is provided)
const buildMode = process.env.VITE_MODE || 'dev';

// Generate build version in the format: <package-version>-<git-commit>-<mode>
const buildVersion = `${packageVersion}-${gitCommit}-${buildMode}`;

// Create .env.local content
const envContent = `VITE_BUILD_VERSION=${buildVersion}
VITE_GIT_COMMIT_HASH=${gitCommit}
VITE_BUILD_MODE=${buildMode}
`;

// Write to .env.local
writeFileSync('.env.local', envContent, { encoding: 'utf-8' });

console.log('.env.local created with build info:');
console.log(`  Build Version: ${buildVersion}`);
console.log(`  Git Commit: ${gitCommit}`);
console.log(`  Build Mode: ${buildMode}`);