# Migrar Vista `CreateOrEdit.vue`

## `./views/CreateOrEdit.vue`

Tenga en cuenta lo siguiente:

- Una vez importados los componente hijos, no es necesario redeclararlos.

- Aquí las [`props`](https://vuejs.org/guide/typescript/composition-api.html#typing-component-props) se definen más TypeScript puro.

📃`./views/CreateOrEdit.vue`
```vue{2,5,6,7,15}
<script setup lang="ts">
import FormTask from '../components/FormTask.vue'
import useCreateOrEdit from '../composables/useCreateOrEdit'

const props = defineProps<{
  id?: string
}>()
  
const {
  isRenderable,
  pending,
  task,
  
  submit
} = useCreateOrEdit(props)   
</script>

<template>
  <div class="container row col-md-6 mx-auto w-1/2">
    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>
    <h1 v-else class="text-2xl" align="center">
      {{$props.id ? 'Editing' : 'Creating'}} Tast
    </h1>
    <FormTask v-if="isRenderable" :task="task" @submit='submit' />
  </div>
</template>
```


