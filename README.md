![Sites](https://res.cloudinary.com/dzkcloud/image/upload/v1672239543/Therry/a3_q3mttf.jpg)

# Título del Proyecto

_A3Sites_

[Live View](https://atres.therry.dev/)

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Detalles 📋

_El proyecto esta construido con vite y usa pnpm como manejador de paquetes_

### Instalación 🔧

_1 clona este repositorio_

```
git clone https://github.com/TherryMiranda1/atresmedia.git
```

_2 instala las dependencias_

```
pnpm i
```

_3 ejecuta los test_

```
pnpm run test
```

_4 inicia el proyecto_

```
pnpm run dev
```

## Ejecutando las pruebas ⚙️

_Hay solo dos test por el momento, uno para verificar que el componente SiteItem renderice sitios correctamente y otro para verificar que el componente NavBar renderice los logos de los canales correctamente_

```
const mockedUsedNavigate = jest.fn();

// el componente debe estar contenido dentro de un router
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// el componente debe estar contenido dentro de un provider de redux
const initialState = { filter: "" };
const mockStore = configureStore();
let store;
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- [React](https://es.reactjs.org/) - Framework de JavaScript
- [Redux](https://es.redux.js.org//) - Manejador de estado
- [Vite](https://vitejs.dev/) - Herramienta de compilacion

## Mas 📖

Puedes encontrar mucho mas en [Portfolio](https://www.therry.dev/)

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Preguntame si quieres hacer algo parecido, a lo mejor podria ayudarte.
- Comparte.

---

⌨️ con ❤️ por [Therry Miranda](https://github.com/TherryMiranda1) 😊
