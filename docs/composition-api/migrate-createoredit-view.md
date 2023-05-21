# Migrar Vista `CreateOrEdit.vue`

>Tomando en cuenta las consideraciones sobre el gancho `setup` de la Composition API descritas en la [sección anterior](../composition-api/migrate-index-view.html), avancemos entonces con el archivo `./views/CreateOrEdit.vue`.

## `./views/CreateOrEdit.vue`

Tenga en cuenta que las `props` y `components` hijos, se declaran en la Composition API igual que lo venimos haciendo en la Options API. De hecho, recuerde que el gancho `setup` es una opción más de la misma.

Una diferencia entre la Options API y la Composition API es que el [`router`](https://router.vuejs.org/guide/advanced/composition-api.html) es instanciado como un composable.

La diferencia de la [`./views/Index.vue`](../composition-api/migrate-index-view.html) con respecto a la `./views/CreateOrEdit.vue`, es que en esta debemos pasar como argumento [las `props` al gancho `setup()`](https://vuejs.org/api/composition-api-setup.html#accessing-props).

Note que aquí también necesitamos importar el método [`computed`](https://vuejs.org/guide/essentials/computed.html) de nuestro framework Vue, así como lo hicimos previamente en [la sección anterior](../composition-api/migrate-index-view.html) con [`onMounted`](https://vuejs.org/api/composition-api-lifecycle.html#onmounted).

```vue{2,3,9,10,11,12,13,14,15,16,20,21,22,23}
<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as Services from '../services/'
import FormTask from '../components/FormTask.vue'
import type { Task } from '@/types'

export default defineComponent({
  props: {
    id: String
  },
  components: {
    FormTask
  },
  setup(props) {
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

>Tenga en cuenta que el `template` no sufre ninguna modificación.

