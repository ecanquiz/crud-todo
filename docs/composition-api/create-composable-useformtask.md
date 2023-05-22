# Crear Composable `useFormTask.ts`

>Después de haber visto las dos secciones anteriores ya deberíamos de estar un poco familiarizado con los composables.

Ya creamos un [composable que no recibe argumentos](../composition-api/create-composable-useindx.html) y otro que [recibe las `props` como primer argumento](../composition-api/create-composable-usecreateoredit.html). No obstante, aún nos falta un escenario donde tengamos que [pasar también el contexto](https://vuejs.org/api/composition-api-setup.html#setup-context) o parte de él.

## Creando el archivo `./composables/useFormTask.ts`

:::info Nota
No se preocupe si aún no se encuentra muy familiarizado con [TypeScript](https://www.typescriptlang.org/), porque gracias a los complementos de vscode ([Vue Language Features "Volar"](https://marketplace.visualstudio.com/items?itemName=Vue.volar) y [TypeScript Vue Plugin "Volar"](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)) estos nos ayuda con el soporte.
:::

Tenga en cuenta que aquí estaremos pasando tanto las [propiedades](https://vuejs.org/api/composition-api-setup.html#accessing-props) como el [contexto](https://vuejs.org/api/composition-api-setup.html#setup-context). En este caso, los eventos `ctx.emit`.

📃`./composables/useFormTask.ts`
```ts{9,12,14}
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

>Gracias a TypeScript, este tipado sirve tanto para el verificado de tipos como para tener alguna documentación referente a lo que recibe la función.

## Limpiando el archivo `./components/FormTask.vue`

Solo nos queda importar el composable `useFormTask` e instanciarlo para poder implementar sus propiedades y funciones de retorno.

Tenga en cuenta que las `props` y el `ctx` deben ser pasadas respectivamente como argumento a la función `setup()`, ya que las necesitamos para pasarlas al composable `useFormTask`.

📃`./components/FormTask.vue`
```vue{3,10,15}
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
De esta forma todo queda mucho más limpio, reutilizable y testeable.
