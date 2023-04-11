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
VITE_APIHOST= # API Server hostname/IP address, comment if using docker
```

### To get the app running:

1. Clone the repo
1. Create a .env file with the following variables at the root of the project

```environment
# global variables
DATABASENAME=inventory
DATABASEUSER=admin
DATABASEPASSWORD=password

# api environment varibles
APIPORTI=5010
DBHOST=localhost

# PG_CONNECTION_STRING='postgres://USER:PASSWORD@HOST:PORT/DATABASE'

# ui environment varibles
UIPORTI=5011
VITE_APIHOST=localhost # API Server hostname/IP address, comment if using docker
```

1. Create a docker compose file with the bellow information (there is an example oin the porject's root) and run `docker compose up -d`

```Compose
services:
  db:
    image: postgres
    container_name: db
    env_file:
      - .env
    restart: always
    ports:
      - 5432:5432
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=${DATABASEUSER}
      - POSTGRES_DB=${DATABASENAME}
      - POSTGRES_PASSWORD=${DATABASEPASSWORD}
  api:
    image: api
    build: .
    container_name: api
    depends_on:
      - db
    env_file:
      - .env
    # volumes:
    #   - ./api:/api
    environment:
      - DBHOST=db # database hostname/IP address
      - API_URL=localhost # database hostname/IP address
      - APIPORTI=5010
    ports:
      - ${APIPORTI}:${APIPORTI}
  # ui:
  #   image: ui
  #   build: ./ui
  #   container_name: ui
  #   depends_on:
  #     - api
  #   env_file:
  #     - .env
  #   # volumes:
  #   #   - ./ui:/ui
  #   environment:
  #     - UIPORTI=5011
  #   ports:
  #     - ${UIPORTI}:${UIPORTI}


```

1. Install and run the api server:

- In the api folder run `npm install`
- In the api folder run `npm start &`

1. Install and run the ui server

- In the ui folder run `npm install`
- In the ui folder run `npm run dev`

#### Note: when creating am account you might see a user already exist message, since this build is running on test/dev environment react might try to run command twice(usually only on the first user create after a app refresh) when refreshing the page. So after creating a use if not redirected to the login page just click the login at the top of the page.

## Docker Compose

1. Clone and create a .env just like in the local install. Make sure to comment the VITE_APIHOST variable in the .env

1. Create a docker compose file with the bellow information (there is an example oin the porject's root) and run `docker compose up -d`

```Compose
services:
  db:
    image: postgres
    container_name: db
    env_file:
      - .env
    restart: always
    ports:
      - 5432:5432
    volumes:
      - ./db:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=${DATABASEUSER}
      - POSTGRES_DB=${DATABASENAME}
      - POSTGRES_PASSWORD=${DATABASEPASSWORD}
  api:
    image: api
    build: ./api
    container_name: api
    depends_on:
      - db
    env_file:
      - .env
    # volumes:
    #   - ./api:/api
    environment:
      - DBHOST=db # database hostname/IP address
      - APIPORTI=5010
    ports:
      - ${APIPORTI}:${APIPORTI}
  ui:
    image: ui
    build: ./ui
    container_name: ui
    depends_on:
      - api
    env_file:
      - .env
    # volumes:
    #   - ./ui:/ui
    environment:
      - UIPORTI=5011
    ports:
      - ${UIPORTI}:${UIPORTI}

```
