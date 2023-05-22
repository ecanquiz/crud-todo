# Refactorizar Vista `Index.vue`

>Como habrá notado cuando [creamos la vista Index.vue](../options-api/create-index-view.html), hay mucho código que huele mal. Es decir, partes de código que se repite y que no ayudan a la escalabilidad y testeo del mismo. Además que TypeScript tampoco está muy de acuerdo con el tipado. Así que vamos a empezar a consumir e implementar [el servicio y el tipado construido en la sección anterior](../options-api/create-services-types.html).

En el siguiente código resaltado notará que se reflejan los cambios que hicimos para mejorar nuestro código.

📃`./views/Index.vue`
```vue{3,4,9,10,18,19,26,28,29,30,31,33,42,51,52}
<script lang="ts">
import { defineComponent } from 'vue'
import * as Services from '../services/'
import type { Task } from '@/types'

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
      pending: false
    }
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      this.pending = true
      Services.getTasks()
        .then(response => this.tasks = response.data )
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        )
        .finally(() => this.pending = false)
    },
    removeTask(id: string) {
      if (confirm("Do you want to delete this task?")) {
        this.pending = true
        Services.removeTask(id)
          .then(response => {
            console.log({ statusCode: response.status })
            if (response.status===204)
              this.getTasks();
            })
          .catch(
            error => console.log({
              errorCode: error.code, errorMessage: error.message
            })
          )
          .finally(() => this.pending = false)
      }
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

Además de lo antes dicho, habrá notado que tanbién sacamos provecho a lo anterior para agregar un poquito más de funcionalidad al mismo.

>Ahora nos toca mejorar `CreateOrEdit.vue`, así que avancemos...
