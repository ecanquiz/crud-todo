# Pruebas con Postman

En este punto del tutorial, deberíamos poder hacer pruebas a la API (backend) de Laravel con alguna herramienta como [Postman](https://www.postman.com/).

Pero, primero asegurémonos que dicha API está [levantada](https://laravel.com/docs/10.x/installation#your-first-laravel-project) y [configurada](https://laravel.com/docs/10.x/database#configuration).

:::info EndPoints
A continuación, los puntos finales disponibles como recursos de nuestra API.
:::

## Devover todas las tareas
```sh
# get method
http://127.0.0.1:8000/api/tasks
```

## Devover una tarea
```sh
# get method
http://127.0.0.1:8000/api/tasks/1
```

## Crear una nueva tarea
```sh
# post method
http://127.0.0.1:8000/api/tasks
```

## Actualizar una tarea existente
```sh
# put method
http://127.0.0.1:8000/api/tasks/4
```

## Elimina una tarea existente
```sh
# delete method
http://127.0.0.1:8000/api/tasks/4
```

## Instrucciones útiles

Aquí algunas instrucciones útiles que pueden ayudar cuando algo anda mal.

```sh
composer dump-autoload
php artisan cache:clear
php artisan config:clear
# php artisan view:clear
php artisan route:clear
php artisan config:cache
php artisan optimize
php artisan storage:link
```

---

>Llegado a este punto, el resto del trabajo por hacer queda del lado de la SPA (frontend) con Vue. Avancemos...


