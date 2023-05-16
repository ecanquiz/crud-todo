# Refactorizar Vista `CreateOrEdit.vue`

```vue
<script lang="ts">
import { defineComponent } from 'vue'
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
  data() {
    return {
      task: {},
      pending: false
    }
  },
  mounted() {
    if (this.$props.id)
      this.getTask();
  },
  computed:{
    isRenderable() {
      return (
        this.$props.id && Object.keys(this.task).length > 0)
          || this.$props.id===undefined
    }
  },  
  methods: {
    getTask() {
      this.pending = true
      Services
        .getTask(this.$props.id)
        .then(response => this.task = response.data)
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        )
        .finally(() => this.pending = false)
    },
    submit(payload: Task) {
      this.pending = true
      if (this.$props.id===undefined) {
        Services.insertUser(payload)
          .then(response => {
            alert(response.data.message)
            this.$router.push({name: 'index'})            
          })
          .catch(error => console.log(error))
          .finally(() => this.pending = false)
      } else {      
        Services.updateUser(this.$props.id, payload)
          .then(response => {
            alert(response.data.message)
            this.$router.push({name: 'index'})            
          })
          .catch(error => console.log(error))
          .finally(() => this.pending = false)
      }
    }  
  }
})
</script>

<template>
  <div class="container row col-md-6 mx-auto w-1/2">
    <h1 v-if="pending" class="text-2xl" align="center">Loading...</h1>    
    <h1 v-else class="text-2xl" align="center">Tast Edit {{$props.id}}</h1>    
    <FormTask v-if="isRenderable" :task="task" @submit='submit' />
  </div>
</template>
```

