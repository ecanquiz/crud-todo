# Crear Composable `useCreateOrEdit.ts`

## Creando el archivo `./composables/useCreateOrEdit.ts`

```ts
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
## Limpiando el archivo `./views/CreateOrEdit.vue`

```ts
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


