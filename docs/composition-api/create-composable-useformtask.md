# Crear Composable `useFormTask.ts`

## Creando el archivo `./composables/useFormTask.ts`

```ts
import { ref } from 'vue'
import type { Task } from '@/types'

type Props = {
  readonly task?: Record<string, any>;
  readonly onSubmit?: ((...args: any[]) => any);
}
type Ctx = {
  emit: (event: "submit", ...args: any[]) => void;
}

export default (props: Props, ctx: Ctx) => {
  const form = ref(props.task as Task)
  const submit = () => ctx.emit('submit', form.value )

  return {
    form,

    submit
  }
}
```
## Limpiando el archivo `./components/FormTask.vue`

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import useFormTask from '../composables/useFormTask'

export default defineComponent({
  props: {
    task: Object    
  },
  emits: ['submit'],
  setup(props, ctx) {
    const {
      form,

      submit
    } = useFormTask(props, ctx)

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


