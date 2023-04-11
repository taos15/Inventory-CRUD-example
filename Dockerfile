FROM node:19-alpine3.17 AS ui-build

# set the directory docker is runnin the commands
WORKDIR /ui

# copy source code
COPY ./ui/package.json .

# # update packages
# RUN apk update && \
#   apk upgrade -f && \
#   npm install -g pnpm

# Clean modules
RUN rm -rf ./node_modules

# install
RUN npm install

# copy source code
COPY ./ui/ .
# install
RUN npx vite build


FROM node:19-alpine3.17

# set the directory docekr is runnin the commands
WORKDIR /api

# copy source code
COPY ./api/package.json .

# # update packages
# RUN apk update && \
#   apk upgrade -f && \
#   npm install -g pnpm

# Clean modules
RUN rm -rf ./node_modules

# install
RUN npm install

# copy source code
COPY ./api/ .
COPY ./ui/.env .
# Copy ui
COPY --from=ui-build /ui/dist/ /api/view/



CMD [ "npm", "start" ]
