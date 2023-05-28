# Crear Servicios y Tipos

>Habrá notado que hemos instanciado [Axios](https://axios-http.com/) en los componentes que representan las vistas. Por lo tanto, si en algún momento quisieramos cambiar el paquete con que hacemos las solicitudes [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) a otro como [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) (nativo), [useFetch](https://vueuse.org/core/useFetch/) o [useAxios](https://vueuse.org/integrations/useAxios/#useaxios), entre otros, tendríamos que modificar todos los [SFC](https://vuejs.org/guide/scaling-up/sfc.html) que hemos creado previamente. Eso sería una labor muy tediosa, así que  avancemos para ello desacoplando los métodos respectivos construyendo un archivo de servicios.

## Crear `./services/index.ts`

Creemos la carpeta `./services/` y dentro el archivo `index.ts`

📃`./services/index.ts`
```ts{4}
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const getTasks = async () => {
  return await instance.get("/tasks");
}

export const getTask = async <T>(taskId: T) => {
  return await instance.get(`/tasks/${taskId}`);
}

export const insertTask = async <T>(payload: T) => {
  return await instance.post(`/tasks`, payload);
}
  
export const updateTask = async <T,U>(taskId: T, payload: U) => {
  return instance.put(`/tasks/${taskId}`, payload);
}

export const removeTask = async <T>(taskId: T) => {  
  return instance.delete(`/tasks/${taskId}`);
}
```

>Tenga en cuenta que primero creamos una instancia de Axios estableciendo la `baseURL`. Aquí no solo estamos ahorrando código fuente repetido, sino que también, más adelante será más facil cambiar esta propiedad directamente estableciéndola desde el archivo de configuración `.env` de nuestro proyecto ubicado en la carpeta raíz.

## Crear `./types/index.ts`

Ha llegado el momento de definir el tipado del objeto `Task`. Con ello gozaremos de los beneficios de TypeScript, como es la verificación de tipos en tiempo de desarrollo y la auto-documentación del aplicativo.

📃`./types/index.ts`
```ts
export type Task = {
  id: number;
  title: string;
  description: string;
  done: boolean;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}
```

El siguiente paso será refactorizar y tipar las correspondientes vistas consumiendo estos archivos recién creados.
