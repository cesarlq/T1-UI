declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// Para poder importar también como URL si necesitas
declare module '*.svg?url' {
  const content: string;
  export default content;
}

// Para poder importar como componente explícitamente
declare module '*.svg?react' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}