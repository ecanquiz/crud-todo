# Sobre TypeScript

>[TypeScript](https://www.typescriptlang.org/) es un lenguaje de programación fuertemente tipado basado en [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), lo que le brinda mejores herramientas a cualquier escala.

Vue está escrito en TypeScript y proporciona compatibilidad con TypeScript de primera clase. En este apartado consideraremos tres aspectos que debemos tomar en cuenta respecto a usar TypeScript con Vue.

## Archivos con extensión `.ts`

Los archivos dentro de la carpeta `src/` con extensión `.js` son renombrados con la extensión `.ts`.

Ejemplos:
- `src/main.ts`
- `src/router/index.ts`
- `src/services/foo.ts`
- `src/store/bar.ts`
- `src/composables/useBaz.ts`

## Uso en Single-File Components
​
>Para usar [TypeScript en SFC](https://vuejs.org/guide/typescript/overview.html#usage-in-single-file-components), agregue el atributo `lang="ts"` a las etiquetas `<script>`.

Cuando `lang="ts"` está presente, todas las expresiones de `template` también disfrutan de una verificación de tipos más estricta.

Ejemplo
```vue{1}
<script lang="ts">
  //
</script>

<template>
  <!-- -->
</template>
```

## `definirComponente()`

Para permitir que TypeScript infiera correctamente los tipos dentro de las opciones de los componentes, necesitamos definir los componentes con [defineComponent()](https://vuejs.org/guide/typescript/overview.html#definecomponent).

```vue{2,4}
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  //
})
</script>

<template>
  <!-- -->
</template>
```

---

Llegado a este punto, es momento de construir nuestro CRUD ToDo con la Options API...
