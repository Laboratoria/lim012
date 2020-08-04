# specify the node base image with your desired version node:<version>
FROM node:12
# replace this with your application's default port
EXPOSE 8080 3000/tcp

WORKDIR /usr/src/app 

COPY . .

CMD ["node","index.js"]
