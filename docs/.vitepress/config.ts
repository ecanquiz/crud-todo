import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'CRUD ToDo',
  description: 'Laravel + Vue',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpeg',
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
    socialLinks: [{
      icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
      },
      link: 'https://gitlab.com/fdsoil/auxilio-doc'
    }],    
  }
})
