# Crear Vistas y Rutas

Epecemos por crear las correspondientes vistas y rutas para acayar el error de la sección anterior.

## Rutas

Vayamos al archivo de rutas y remplacemos el código con lo siguiente.

`./router/index.ts`
```ts
import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import CreateOrEdit from '../views/CreateOrEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateOrEdit.vue'),
      props: true
    },
    {
      path: '/edit/:id(\\d+)',      
      name: 'edit',
      component: () => import('../views/CreateOrEdit.vue'),
      props: true
    }
  ]
})

export default router
```

Tenga en cuenta que implementaremos el mismo componente `CreateOrEdit.vue` tanto para crear tareas como para editarlas y modificarlas.

## Vistas

Para que deje de aparecer el error debemos crear los componentes (brevemente vacios) `Index.vue` y `CreateOrEdit.vue` en la carpeta `.\views` respectivamente.

`./views/Index.vue`
```vue
<script lang="ts"></script>

<template></template>
```
`./views/CreateOrEdit.vue`
```vue
<script lang="ts"></script>

<template></template>
```
