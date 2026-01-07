{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.vitest.json"
    }
  ],
  "compilerOptions": {
    "allowJs": true,

    "noImplicitAny": false,
    "strict": false,

    // "allowSyntheticDefaultImports": true
    "verbatimModuleSyntax": true,
    "module": "ESNext",
    "target": "ES2022",
    "moduleResolution": "bundler"
    // "isolatedModules": true,
    // "esModuleInterop": true,
    // "allowSyntheticDefaultImports": true
  },
  // "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "packages/**/*", "src/examples/stack.ts"]
}
