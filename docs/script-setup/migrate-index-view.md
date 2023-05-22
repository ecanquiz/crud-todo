# Migrar Vista `Index.vue`

## Introducción a `script-setup`

>[`<script setup>`](https://vuejs.org/api/sfc-script-setup.html) es un azúcar sintáctico en tiempo de compilación para usar la Composition API dentro de los [Single-File Components (SFCs)](https://vuejs.org/guide/scaling-up/sfc.html). Es la sintaxis recomendada si está utilizando tanto SFC como Composition API. Proporciona una serie de ventajas sobre la sintaxis normal de `<script>`.
>- Código más sucinto con menos _boilerplate_
>- Capacidad para declarar propiedades y eventos emitidos usando TypeScript puro.
>- Mejor rendimiento en tiempo de ejecución (la plantilla se compila en una función de representación en el mismo ámbito, sin un proxy intermedio)
>- Mejor rendimiento de inferencia de tipo IDE (menos trabajo para que el servidor de idioma extraiga tipos del código)

## Migrando a `script-setup`

Con `script-setup` no tenemos que exportar (por defecto) ningún objeto, mucho menos utilizar la función `defineComponent({})` de Vue para TypeScript, ni retornar valores o funciones para sean expuestas en la plantilla.

📃`./views/Index.vue`
```vue{1,2,3,4,5,6,7,8,9,10}
<script setup lang="ts">
import useIndex from '../composables/useIndex'

const {
  pending,
  tasks,

  removeTask
} = useIndex()
</script>

<template>
  <div class="container mx-auto">
    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">ToDo List</h1>
      
    <router-link
      :to="{name: 'create'}"
      class="btn btn-primary"
      >Create
    </router-link>
    <table class="min-w-full text-left text-sm font-light">
      <thead class="border-b font-medium dark:border-neutral-500">
        <tr>
          <th class="p-2">ID</th>
          <th class="p-2">Title</th>
          <th class="p-2">Description</th>
          <th class="p-2">Done</th>
          <th class="p-2">Created At</th>
          <th class="p-2">Updated At</th>
          <th class="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="task in tasks"
          :key="task.id"
          class="border-b dark:border-neutral-500"
        >
          <td class="p-2">{{ task.id }}</td>
          <td class="p-2">{{ task.title }}</td>
          <td class="p-2">{{ task.description }}</td>
          <td class="p-2">{{ task.done }}</td>
          <td class="p-2">{{ task.created_at }}</td>
          <td class="p-2">{{ task.updated_at }}</td>          
          <td>
            <button
              class="btn btn-success m-1 text-sm"
              @click="$router.push({name: 'edit', params: {id: task.id}})"
            >
              Edit
            </button>
            <button
              class="btn btn-danger m-1 text-sm"
              @click="removeTask(task.id as unknown as string)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 v-if="tasks.length === 0">Empty list.</h4>
  </div>
</template>
```

Simplemente, pruébalo.
