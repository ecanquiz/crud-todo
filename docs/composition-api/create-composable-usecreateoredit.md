# Crear Composable `useCreateOrEdit.ts`

>En esta sección aplicaremos la misma técnica que utilizamos en la [sección anterior](../composition-api/create-composable-useindx.html). Es decir, separar la lógica de negocio de la UI, gracias a los [composables](https://vuejs.org/guide/reusability/composables.html) de Vue.

## Creando el archivo `./composables/useCreateOrEdit.ts`

Simplemente cortemos y peguemos el código que representa la lógica de negocio que tenemos en la vista [./views/CreateOrEdit.vue](../composition-api/migrate-createoredit-view.html).

📃`./composables/useCreateOrEdit.ts`
```ts{6,12,13,18,30,39,50}
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as Services from '../services/'
import type { Task } from '@/types'

export default (props: { readonly id?: string; }) => {
  const router = useRouter()
  const task = ref({} as Task)
  const pending = ref(false)

  const isRenderable = computed(
    ()=> (props.id && Object.keys(task.value).length > 0)
      || props.id===undefined
  )
    
  const getTask = ()=> {
    pending.value = true
    Services.getTask(props.id)
      .then(response => task.value = response.data)
      .catch(
        error => console.log({
          errorCode: error.code, errorMessage: error.message
        })
      )
      .finally(() => pending.value = false)
  }

  const submit = (payload: Task) => {
    pending.value = true
    if (props.id===undefined) {
      Services.insertTask(payload)
        .then(response => {
          alert(response.data.message)
          router.push({name: 'index'})
        })
        .catch(error => console.log(error))
        .finally(() => pending.value = false)
    } else {      
      Services.updateTask(props.id, payload)
        .then(response => {
          alert(response.data.message)
          router.push({name: 'index'})
        })
        .catch(error => console.log(error))
        .finally(() => pending.value = false)
    }
  }

  onMounted(()=>{
    if (props.id)
      getTask();
  })
    
  return {
    isRenderable,
    pending,
    task,
    
    submit
  }
}
```

>Tenga en cuenta que esta lógica de negocio específicamente necesita las `props` para funcionar correctamente.


## Limpiando el archivo `./views/CreateOrEdit.vue`

Solo nos queda importar el composable `useCreateOrEdit` e instanciarlo para poder implementar las propiedades y funciones de retorno.

Tenga en cuenta que las [`props` deben ser pasadas como primer argumento a la función `setup()`](https://vuejs.org/api/composition-api-setup.html#accessing-props), ya que las necesitamos para pasarlas al composable `useCreateOrEdit`.

📃`./views/CreateOrEdit.vue`
```ts{4,7,8,9,13,20}
<script lang="ts">
import { defineComponent } from 'vue'
import FormTask from '../components/FormTask.vue'
import useCreateOrEdit from '../composables/useCreateOrEdit'

export default defineComponent({
  props: {
    id: String
  },
  components: {
    FormTask
  },
  setup(props) {
    const {
      isRenderable,
      pending,
      task,
    
      submit
    } = useCreateOrEdit(props)

    return {
      isRenderable,
      pending,
      task,

      submit
    }
  }
})
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
De esta forma todo queda mucho más limpio, reutilizable y testeable.
