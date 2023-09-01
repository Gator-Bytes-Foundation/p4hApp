# to build image, go to directory with Dockerfile and run: docker build -t p4h-docker .
# to run image, run: docker run -p 5000:5000 -p 4200:4200 -it p4h-docker -d

# build angular app
FROM node:16-alpine AS client
RUN mkdir angular
RUN npm install -g @angular/cli@15.0.0
WORKDIR /angular
COPY src ./src
COPY package*.json ./
#COPY tsconfig.json tsconfig.app.json tsconfig.spec.json tslint.json ./
RUN npm install --legacy-peer-deps
COPY . .
COPY angular.json ./
RUN npm run build-dev
EXPOSE 4200
CMD ["npm", "start"]

FROM python:3.9-alpine AS backend
# put file inside of container
RUN mkdir app
WORKDIR /app
COPY src ./src
COPY config ./config
COPY secrets.yml ./
COPY requirements.txt ./ 
COPY app.py ./ 
# getting cffi setup.py error from installing requirements.txt
# this command fixes it somehow
# https://stackoverflow.com/questions/71372066/docker-fails-to-install-cffi-with-python3-9-alpine-in-dockerfile
RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev \
    && apk add libffi-dev 

RUN pip3 install -r requirements.txt
EXPOSE 5000
COPY --from=client /angular/src/static/dist ./src/static/dist
CMD [ "python3", "-m" , "flask", "run" ]



# good commands from MCP 
# ADD - adds files from internet  (works like COPY)
# ENTRYPOINT - similar to CMD. Specifies what docker shell uses when it starts. Usually use CMD over ENTRYPOINT
# ARG - good for taking in arguements for your build. Passing in secrets into docker image. 
