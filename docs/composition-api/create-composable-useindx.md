# Crear Composable `useIndex.ts`

>Si aún no conoce o no se ha familiarizado con los composables consulte [aquí](https://vuejs.org/guide/reusability/composables.html)

En el contexto de las aplicaciones de Vue, un "composables" es una función que aprovecha la Compositions API de Vue para encapsular y reutilizar la lógica con estado. Al crear aplicaciones frontend, a menudo necesitamos reutilizar la lógica para tareas comunes. La lógica con estado implica administrar el estado que cambia con el tiempo. 

## Creando el archivo `./composables/useIndex.ts`

Primero creemos la carpeta `.composables/` en el archivo raiz.

Luego, para tener una idea general de como se ve un composable, comencemos creando, dentro de la respectiva carpeta, un archivo llamado `useIndex.ts`.

`./composables/useIndex.ts`
```ts
export default () => {
 
  return {

  }
}
```

Tenga en cuenta que en este caso se trata de una simple función exportada por defecto y que la misma retorna algo.

## Reubicando la Lógica de Negocio

Simplemente cortemos y peguemos el código que representa la lógica de negocio que tenemos en la vista [`./views/Index.vue`](../composition-api/migrate-index-view.html)

```ts
import { ref, onMounted } from 'vue'
import * as Services from '../services/'
import type { Ref } from 'vue'
import type { Task } from '@/types'

export default () => {
  const tasks: Ref<Task[]> = ref([])
  const pending = ref(false)

  const getTasks = () => {
    pending.value = true
    Services.getTasks()
      .then(response => tasks.value = response.data )
      .catch(
        error => console.log({
          errorCode: error.code, errorMessage: error.message
        })
      )
      .finally(() => pending.value = false)
  }

  const removeTask = (id: string) => {
    if (confirm("Do you want to delete this task?")) {
      pending.value = true
      Services.removeTask(id)
        .then(response => {
          console.log({ statusCode: response.status })
          if (response.status===204)
            getTasks();
          })
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        )
        .finally(() => pending.value = false)
    }
  }

  onMounted(() => getTasks())

  return {
    pending,
    tasks,
    
    getTasks,
    removeTask
  }
}
```

## Limpiando el archivo `./views/Index.vue`

Solo nos queda importar el composable `useIndex` e instanciarlo para poder implementar las propiedades y funciones de retorno.


`./views/Index.vue`
```vue{3,7,8,9,10,11,12,13}
<script lang="ts">
import { defineComponent } from 'vue'
import useIndex from '../composables/useIndex'

export default defineComponent({
  setup() {
    const {
      pending,
      tasks,
    
      getTasks,
      removeTask
    } = useIndex()

    return {
      pending,
      tasks,
      removeTask
    }
  }
})
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

De esta forma todo queda mucho más limpio, reutilizable y testeable.

---

Continuemos con el `./composables/useCreateOrEdit.ts`.
