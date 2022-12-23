    1

pnpm i -D jest babel-jest @babel/preset-env @babel/preset-react 
pnpm i -D @testing-library/react @types/jest jest-environment-jsdom
Opcional: Si usamos Fetch API en el proyecto:
pnpm i -D whatwg-fetch
para archivos css
pnpm i -D identity-obj-proxy

    2

Actualizar los scripts del package.json
"scripts: {
  ...
  "test": "jest --watchAll"

    3

Crear la configuración de babel babel.config.js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

    4

Opcional, pero eventualmente necesario, crear Jest config y setup:
jest.config.js

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

    5

jest.setup.js

// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch