# Crear Base de Datos

:::info Nota
Para este tutorial utilizaremos Postgres como motor de base de datos. Siéntase libre de elegir otro como MySQL.
:::

## Entrar en el ambiente de Postgres

Para entrar en el ambiénte de Postgres ejecute:

```sh
su postgres
```

```sh
# psql -h ip_servidor -U usuario -d base_de_datos
psql -U postgres -d postgres
```

```sh
# CREATE DATABASE nuevadb;
CREATE DATABASE crud_todo_db;
```
