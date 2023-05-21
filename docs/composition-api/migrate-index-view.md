# Migrar Vista `Index.vue`

## Introducción a `setup()`

>El gancho [`setup()`](https://vuejs.org/api/composition-api-setup.html#composition-api-setup) sirve como punto de entrada para el uso de la Composition API en componentes. Puede acceder a los valores expuestos de la Composition API desde la Options API, pero no al revés.

```vue
<script>
import { defineComponent } from 'vue'
// respective imports

export default defineComponent({
  props: { /* respective properties */  },
  components: { /* respective components */ },
  mounted() { /* respective code */ },
  setup() { 
    // respective code
    
    return {
      // respective return
    }
  }
})
</script>

<template>
  <!-- respective ui -->
</template>
```

## Migrando a la Composition API

>Empezaremos migrando a la Composition API el archivo `./views/Index.vue`.

Tenga en cuenta que para manejar el estado del componente ya no utilizaremos la opción `data` sino el método integrado de Vue llamado `ref`. Igualmente sucederá con la opción `mounted`, para este caso importaremos `onMounted`.

Para asignar valores a las constantes reactivas declaradas con `ref` se harán a través de la propiedad `.value`. Note que aquí no se usa el prefijo `this.`

Para declarar los correspondientes métodos lo haremos como normalmente lo hacemos en JS6+TS. Es decir, declarando una constante a la cual le asignamos una función.

Por último, siempre se deberá retornar las propiedades y métodos que deberán ser expuestos en el `template`.

```vue{2,8,9,10,11,12,14,20,22,24,36,40,43,44,45}
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as Services from '../services/'
import type {Ref} from 'vue'
import type { Task } from '@/types'

export default defineComponent({
  setup() {
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

>Tenga en cuenta que dicho `template` no sufre ninguna modificación.
