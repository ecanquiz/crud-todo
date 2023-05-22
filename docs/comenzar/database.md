# Base de Datos

:::info Nota
Para este tutorial utilizaremos [PostgreSQL](https://www.postgresql.org/) como motor de base de datos. Siéntase libre de elegir otro como [MySQL](https://www.mysql.com/).
:::

## Entrar en el ambiente de PostgreSQL

Para entrar en el ambiénte de PostgreSQL ejecute:

```sh
su postgres
```

Luego:

```sh
# psql -h ip_servidor -U usuario -d base_de_datos
psql -U postgres -d postgres
```

## Crear Base de Datos

Dentro del ambiente de PostgreSQL, crearemos la base de datos `crud_todo_db` ejecutando:

```sh
# CREATE DATABASE new_db;
CREATE DATABASE crud_todo_db;
```

:::info Nota
Siéntase libre de elegir otro nombre de base de datos mientras sea concistente a lo largo del tutorial.
:::

Ya fue creada la base de datos para este tutorial,  avancemos con el backend...
