declare module '*.svg' {
  const content: string;
  export default content;
}

// Para poder importar también como URL si necesitas
declare module '*.svg?url' {
  const content: string;
  export default content;
}

// Para poder importar como componente explícitamente
declare module '*.svg?react' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Image file declarations
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
