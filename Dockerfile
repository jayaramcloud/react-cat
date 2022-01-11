# build env
FROM node:13.12.0-alpine as build
WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --production
COPY . ./
#RUN npm run build

# if you want to npm start
EXPOSE 3000
CMD ["npm", "run", "start"]

# production env
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# build and push to registry
# sudo docker build  -t  canada/en:v0.4 .
# sudo docker run -p 3000:3000  canada/en:v0.4
# sudo docker push  canada/en:v0.4