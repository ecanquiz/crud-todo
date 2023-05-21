# Migrar Componente `FormTask.vue`

>Llegado a este punto ya deberíamos estar algo familiarizados con la Composition API y el gancho `setup()`.

Para el componente `FormTask.vue`, tenga en cuenta que, además de recibir el objeto `props`, también emite un evento. Dicho [evento `emit` deberá ser pasado al gancho `setup()` a través del contexto](https://vuejs.org/api/composition-api-setup.html#setup-context).

```vue{9,10,12}
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
>Tenga en cuenta que el `template` no sufre ninguna modificación.
