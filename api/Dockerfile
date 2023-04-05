FROM node:alpine

# set the directory docekr is runnin the commands
WORKDIR /

# copy source code
COPY . /api

# install
RUN npm install

CMD [ "npm", "start" ]
