## Pruebas con Postman

Devolverá todas las tareas.

```sh
# get
http://127.0.0.1:8000/api/tasks
```
Devuelve una tarea.
```sh
# get
http://127.0.0.1:8000/api/tasks/1
```

Crea una nueva tarea.
```sh
# post
http://127.0.0.1:8000/api/tasks
```
Actualiza una tarea.
```sh
#put
http://127.0.0.1:8000/api/tasks/4
```

Elimina una tarea
```sh
#delete
http://127.0.0.1:8000/api/tasks/4
```

## Algunas instrucciones útiles que pueden ayudar

Aquí algunas instrucciones útiles para ejecutar cuando algo anda mal.

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
