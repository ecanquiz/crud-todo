import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CRUD ToDo',
  description: 'Laravel + Vue',
  base: '/tuto-crud-todo/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/comenzar/intro' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }      
    ],

    sidebar: [{
      text: 'Comenzar',   // required
      path: '/comenzar/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Introducción', link: '/comenzar/intro' },
        { text: 'Crear Base de Datos', link: '/comenzar/create-database' }                 
      ]
    },{
      text: 'Laravel',   // required
      path: '/laravel/',      // optional, link of the title, which should be an absolute path and must exist        
      sidebarDepth: 1,    // optional, defaults to 1
      collapsible: true,
      collapsed: false, 
      items: [
        { text: 'Nuevo Proyecto Laravel', link: '/laravel/new-project' },
        { text: 'Migración, Fábrica y Sembradora', link: '/laravel/migration-factory-seeder' },
        { text: 'Modelo, Controlador y Rutas', link: '/laravel/model-controller-routes' },
        { text: 'Pruebas con Postman', link: '/laravel/try-with-the-postman' }                  
      ]
    },{
      text: 'Vue',
      path: '/vue/',
      collapsible: true,
      collapsed: false,      
      items: [
        { text: 'Nuevo Proyecto Vue', link: '/vue/new-project' },
        { text: 'Limpiar el Proyecto', link: '/vue/cleaning-the-project' },        
        { text: 'Crear Vistas y Rutas', link: '/vue/create-views-and-routes' },
        
      ]
    }],    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/tuto-crud-todo' }
    ],
  }
})
