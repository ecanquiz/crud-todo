# Limpiar el Proyecto

Vaciemos la carpeta `./components` eliminando todo su contenido, ya que no la necesitaremos.

![vue-cleaning-the-project](./img/vue-cleaning-the-project-1.jpg)

Inmediatamente aparecerá un error en la pantalla como el siguiente:

![vue-cleaning-the-project](./img/vue-cleaning-the-project-2.jpg)

No se preocupe. Vayamos al archivo `./App.vue` y comentemos las siguientes líneas resaltadas.

📃`./App.vue`
```vue{3,11,13,14,15,16}
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!--HelloWorld msg="You did it!" /-->

      <!--nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav-->
    </div>
  </header>

  <RouterView />
</template>
```

Todavía falta comentar algo en otro archivo. Se trata de la vista `HomeView.vue`.

📃`./views/HomeView.vue`
```vue{2,7}
<script setup lang="ts">
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!--TheWelcome /-->
  </main>
</template>
```

>No dude en eliminar esas líneas que acabamos de comentar, no serán necesarias.

Desocupemos tambíen el contenido de la carpeta `./views`. Es decir, eliminemos los archivos `AboutView.vue` y `HomeView.vue` dejando la carpeta completamente vacía. 

![vue-cleaning-the-project](./img/vue-cleaning-the-project-3.jpg)

Aparecerá otro error...

![vue-cleaning-the-project](./img/vue-cleaning-the-project-4.jpg)

>Pero este error lo trataremos en la siguiente sección.

Por ahora, es todo lo que tenemos por limpiar.
