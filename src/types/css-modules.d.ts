declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Si también usas SCSS normales
declare module '*.scss' {
  const content: { [key: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [key: string]: string };
  export default content;
}