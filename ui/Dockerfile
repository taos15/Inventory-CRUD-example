FROM node:alpine

# set the directory docekr is runnin the commands
WORKDIR /

# copy source code
COPY . /ui

# install
RUN npm install

# build the application
RUN npm run build

# run the built app on vite static server
CMD [ "npm", "run", "preview" ]
