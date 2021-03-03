FROM node:latest
WORKDIR /user/src/app
EXPOSE 3000
RUN npm install -g nodemon
COPY . . 
RUN npm install
ENTRYPOINT ["nodemon", "/user/src/app/play.js"]

