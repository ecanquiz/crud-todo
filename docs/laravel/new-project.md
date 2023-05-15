# Nuevo Proyecto Laravel

Ubíquese dentro de la terminal en su directorio donde desea instalar el proyecto y ejecute el siguiente comando para descargar un nuevo proyecto.

```sh
composer create-project laravel/laravel crud-todo-laravel
```

Luego, para instalar los paquetes (dependencias) ejecute:

```sh
composer install -vvv
```

Verifique que en el archivo `.env` el valor de la constante `APP_KEY` se generó correctamente. De lo contrario (si está vacío) ejecute:

```sh
php artisan key:generate
```

Avancemos para crear los correspondientes archivos de migración, sembradora, fábrica y controlador asociados al modelo `Task`.

```sh
php artisan make:model Task -mcrsf
``` 
