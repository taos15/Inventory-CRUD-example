# Inventory-CRUD-example

This is a VMP example of using CRUD in a full stack application

## Docker Compose Setup

This app has a docker compose file, you can set multiple variables.

```environment
DATABASENAME= #name of the database
DATABASEUSER= #database username
DATABASEPASSWORD= #database password

# api environment varibles
APIPORTI= #port number for the api
DBHOST= #database host, can be localhost or database hostname

# ui environment varibles
UIPORTI= #port number for the ui
```

### To get the app running:

- Create a .env file
