# Migrar Componente `FormTask.vue`

```vue
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Task } from '@/types'

export default defineComponent({
  props: {
    task: Object    
  },
  emits: ['submit'],
  setup(props, ctx) {
    const form = ref(props.task as Task)
    const submit = () => ctx.emit('submit', form.value )

    return {
      form,
      submit
    }
  }
})
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
