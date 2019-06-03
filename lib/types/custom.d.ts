declare module '*.svg' {
  const output: any
  export default output
}

declare module '*.module.css' {
  const output: { [key: string]: string }
  export default output
}