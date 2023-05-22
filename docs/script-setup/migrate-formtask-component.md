# Migrar Componente `FormTask.vue`



Tenga en cuenta lo siguiente:

- Aquí las [`props`](https://vuejs.org/guide/typescript/composition-api.html#typing-component-props) se definen más TypeScript puro.
- Igualmente sucede con los [`emits`](https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits).

📃`./components/FormTask.vue`
```vue{5,6,7,9,10,11,17}
<script setup lang="ts">
import useFormTask from '../composables/useFormTask'
import type { Task } from '@/types'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  (e: 'submit', form: Task): void
}>()

const {
  form,

  submit
} = useFormTask(props, { emit })
</script>

<template>
  <form @submit.prevent="submit">
    <div class="m-2">
      <label>Title</label>
      <input type="text" v-model="form.title">
    </div>

   <div class="m-4">
      <label>Description</label>
      <textarea v-model="form.description"></textarea>
    </div>

    <div class="m-4">
      <label>Done</label>
      <input type="checkbox" v-model="form.done"/>
    </div>

    <button type="submit" class="btn btn-primary m-2">
      Save
    </button>
  </form>
</template>
```

>Maravillosamente increíble, cierto ??

## Espero que hayas disfrutado este tutorial

>**Por favor, compartelo y gracias !!**
