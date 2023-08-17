# build angular app
FROM node AS client
RUN mkdir angular
WORKDIR /angular
COPY src ./src
COPY package.json package-lock.json ./
COPY tsconfig.json tsconfig.app.json tsconfig.spec.json tslint.json ./
RUN npm install --legacy-peer-deps
COPY angular.json ./
RUN ng build


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
#COPY --from=client /src/static/dist ./src/static/dist
CMD [ "python3", "-m" , "flask", "run" ]

# good commands from MCP 
# ADD - adds files from internet  (works like COPY)
# ENTRYPOINT - similar to CMD. Specifies what docker shell uses when it starts. Usually use CMD over ENTRYPOINT
# ARG - good for taking in arguements for your build. Passing in secrets into docker image. 
