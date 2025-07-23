// scripts/testCompatibility.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reactVersions = ['16.8.0', '17.0.0', '18.0.0', '19.0.0'];

console.log('🧪 Testing compatibility with different React versions...\n');

for (const version of reactVersions) {
  console.log(`Testing with React ${version}...`);
  
  try {
    // Crea un proyecto temporal
    const testDir = path.join(__dirname, `../test-react-${version}`);
    fs.mkdirSync(testDir, { recursive: true });
    
    // package.json temporal - IMPORTANTE: sin "type": "module"
    const testPackageJson = {
      name: `test-react-${version}`,
      private: true,
      dependencies: {
        'react': version,
        'react-dom': version,
        '@t1-org/t1components': 'file:../'
      }
    };
    
    fs.writeFileSync(
      path.join(testDir, 'package.json'),
      JSON.stringify(testPackageJson, null, 2)
    );
    
    // Test file - CommonJS para compatibilidad
    const testFile = `
const React = require('react');
const T1Components = require('@t1-org/t1components');

console.log('React version:', React.version);
console.log('T1Components exports:', Object.keys(T1Components));

if (T1Components.checkCompatibility) {
  const result = T1Components.checkCompatibility();
  console.log('Compatibility result:', result);
  
  if (!result.isCompatible) {
    console.error('Not compatible!');
    process.exit(1);
  }
}

console.log('✓ Basic import works');
`;
    
    fs.writeFileSync(path.join(testDir, 'test.js'), testFile);
    
    // Instala y prueba
    execSync('npm install --force --silent', { 
      cwd: testDir, 
      stdio: ['ignore', 'pipe', 'pipe'] 
    });
    
    execSync('node test.js', { 
      cwd: testDir, 
      stdio: 'inherit' 
    });
    
    console.log(`✅ React ${version} - Compatible\n`);
    
    // Limpia
    fs.rmSync(testDir, { recursive: true, force: true });
    
  } catch (error) {
    console.error(`❌ React ${version} - Failed`);
    console.error(error.message);
    console.log('');
  }
}

console.log('✨ Compatibility testing complete!');