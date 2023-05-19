import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CRUD ToDo',
  description: 'Laravel + Vue',
  base: '/crud-todo/',
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
      collapsed: true, 
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
      collapsed: true,      
      items: [
        { text: 'Nuevo Proyecto Vue', link: '/vue/new-project' },
        { text: 'Limpiar el Proyecto', link: '/vue/cleaning-the-project' },        
        { text: 'Crear Rutas', link: '/vue/create-routes' },       
      ]
    },{
      text: 'Options API',
      path: '/options-api/',
      collapsible: true,
      collapsed: true,      
      items: [
        { text: 'Crear Vista Index', link: '/options-api/create-index-view' },
        { text: 'Crear Vista CreateOrEdit', link: '/options-api/create-createoredit-view' },
        { text: 'Crear Componente FormTask', link: '/options-api/create-formtask-component' },
        { text: 'Crear Servicios y Tipos', link: '/options-api/create-services-types' },
        { text: 'Refactor Vista Index', link: '/options-api/refactor-index-view' },
        { text: 'Refactor Vista CreateOrEdit', link: '/options-api/refactor-createoredit-view' },
        { text: 'Refactor Componente FormTask', link: '/options-api/refactor-formtask-component' }          
      ]
    },{
      text: 'Composition API',
      path: '/composition-api/',
      collapsible: true,
      collapsed: true,      
      items: [
        { text: 'Migrar Vista Index', link: '/composition-api/migrate-index-view' },
        { text: 'Migrar Vista CreateOrEdit', link: '/composition-api/migrate-createoredit-view' },
        { text: 'Migrar Componente FormTask', link: '/composition-api/migrate-formtask-component' },          
      ]
    }, {
      text: 'Script SetUp',
      path: '/script-setup/',
      collapsible: true,
      collapsed: true,      
      items: [          
      ]
    }],    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/crud-todo' }
    ],
  }
})
