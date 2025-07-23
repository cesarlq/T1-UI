// scripts/generateExports.js
const fs = require('fs');
const path = require('path');

// Configuración
const componentsDir = path.join(__dirname, '../src/components');
const outputFile = path.join(__dirname, 'exports.txt');

// Función para encontrar componentes
function findComponents(dir, category = '') {
  const exports = [];
  const typeExports = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Si es una carpeta de categoría (Atoms, molecules, organisms)
        if (['Atoms', 'molecules', 'organisms', 'Icons'].includes(item)) {
          const subExports = findComponents(fullPath, item);
          exports.push(...subExports.exports);
          typeExports.push(...subExports.typeExports);
        } else {
          // Es una carpeta de componente
          const componentName = item;
          const mainFile = path.join(fullPath, `${componentName}.tsx`);
          const typesFile = path.join(fullPath, `${componentName}.types.ts`);
          
          // Verifica si existe el archivo principal
          if (fs.existsSync(mainFile)) {
            const relativePath = `./components/${category}/${componentName}/${componentName}`;
            exports.push(`export { ${componentName} } from '${relativePath}';`);
          }
          
          // Verifica si existe el archivo de tipos
          if (fs.existsSync(typesFile)) {
            const relativePath = `./components/${category}/${componentName}/${componentName}.types`;
            // Lee el archivo para encontrar qué tipos exporta
            const content = fs.readFileSync(typesFile, 'utf-8');
            const exportMatches = content.match(/export\s+(type|interface)\s+(\w+)/g);
            
            if (exportMatches) {
              const typeNames = exportMatches.map(match => {
                const parts = match.split(/\s+/);
                return parts[parts.length - 1];
              });
              
              if (typeNames.length > 0) {
                typeExports.push(`export type { ${typeNames.join(', ')} } from '${relativePath}';`);
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error procesando ${dir}:`, error.message);
  }
  
  return { exports, typeExports };
}

// Genera las exportaciones
console.log('🔍 Buscando componentes...\n');

const result = findComponents(componentsDir);

// Crea el contenido del archivo
let content = '// Exportaciones generadas automáticamente\n\n';

// Agrupa por categorías
const categories = {
  Atoms: [],
  molecules: [],
  organisms: [],
  Icons: []
};

// Organiza las exportaciones
result.exports.forEach(exp => {
  for (const category of Object.keys(categories)) {
    if (exp.includes(`/components/${category}/`)) {
      categories[category].push(exp);
      break;
    }
  }
});

// Escribe las exportaciones organizadas
for (const [category, exports] of Object.entries(categories)) {
  if (exports.length > 0) {
    content += `// ${category}\n`;
    content += exports.sort().join('\n') + '\n\n';
  }
}

// Agrega las exportaciones de tipos
if (result.typeExports.length > 0) {
  content += '// Types\n';
  content += result.typeExports.sort().join('\n') + '\n\n';
}

// Agrega otras exportaciones comunes
content += `// Utils y constantes
export * from './utils/staticData';
export * from './types/commonInterfaces';
export * from './types/props';
export * from './types/rules';

// Theme
export { theme } from './styles/theme';
`;

// Guarda el archivo
fs.writeFileSync(outputFile, content);

console.log(`✅ Exportaciones generadas en: ${outputFile}`);
console.log(`📊 Total de componentes encontrados: ${result.exports.length}`);
console.log(`📊 Total de tipos encontrados: ${result.typeExports.length}`);
console.log('\n📋 Copia el contenido de exports.txt en tu src/index.ts');