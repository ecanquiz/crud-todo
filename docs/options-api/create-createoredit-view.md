# Crear Vista `CreateOrEdit.vue`

```vue
<script lang="ts">
import axios from 'axios'
import FormTask from '../components/FormTask.vue'

export default defineComponent({
  props: {
    id: String
  },
  components: {
    FormTask
  },
  data() {
    return {
      task: {}
    }
  },
  mounted() {
    if (this.$props.id)
      this.getTask();
  },
  computed:{
    isRenderable() {
        return
          (this.$props.id && Object.keys(this.task).length > 0)
            || this.$props.id===undefined
    }
  },  
  methods: {
    getTask() {
      axios
        .get(`http://localhost:8000/api/tasks/${this.$props.id}`)
        .then(response => this.task = response.data )
        .catch(
          error => console.log({
            errorCode: error.code, errorMessage: error.message
          })
        );
    },
    submit(payload) {
      if (this.$props.id===undefined) {
        axios
          .post("http://localhost:8000/api/tasks", payload)
          .then(response => (
            this.$router.push({name: 'index'})            
          ))
          .catch(error => console.log(error))
          //.finally(() => this.pending = false)*/
      } else {
        axios
          .put(`http://localhost:8000/api/tasks/${this.$props.id}`, payload)
          .then(response => (
            this.$router.push({name: 'index'})            
          ))
          .catch(error => console.log(error))
          //.finally(() => this.pending = false)*/
      }
    }  
  }
})
</script>

<template>
  <div class="container row col-md-6 mx-auto w-1/2">
    <h1 class="text-2xl" align="center">Tast Edit {{this.$props.id}}</h1>    
    <FormTask v-if="this.isRenderable" :task="this.task" @submit='submit' />
  </div>
</template>
```

