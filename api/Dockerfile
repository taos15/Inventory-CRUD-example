FROM node:19-alpine3.17

# set the directory docekr is runnin the commands
WORKDIR /api

# copy source code
COPY . /api

# update packages
RUN apk update && \
  apk upgrade -f && \
  npm install -g pnpm

# install
RUN pnpm install

CMD [ "pnpm", "start" ]
