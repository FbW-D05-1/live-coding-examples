# Docker
## Docker vs Virtual Machine

vm is full os and needs licenses etc
vm is very slow to start
recource intensive

containers allow multiple apps in isolation
are lightweight
use os of the host
starts quickly
needs less hardware resources



## Docker architecture 

Client talks to Server via Rest API
instead of using full os uses kernel of the host (kernel manages applications and hardware resources)

Windows can run both Windows and Linux Containers (win 10 and win 11)
Linux can only run Linux Containers
Mac has Linux VM



## getting started with docker

add dockerfile to existing application

dockerfile = plain text file that includes instruction to package app into an image(iso)

image file = a cut down os, run time environment(node), app files, third party libraries, environment variables



how container works
dev uploads the image to registry like docker hub(storage) after that it will work on any machine 




## DOCKER TUT
mkdir folder-name
cd folder-name
create a file named Dockerfile (capital D) inside of it 

FROM node:alpine

CMD node /app/app.js

(alternative to above: WORKDIR /app)


## Building docker image

   -t: tag    . where docker can find the dockerfile

docker build -t hello-docker .


### To find docker images
docker image
or
docker image ls < list


### TO RUN THE IMAGE
docker run hello-docker


## PUSHING TO DOCKERHUB

docker login -u username

tag nameoftheimage:latest username/dockerhub:nameoftheimagepush

docker push username/dockerhub:nameoftheimagepush


## PULLING DOCKER (TESTED ON UBUNTU)

docker pull username/nameoftheimage

docker image ls

docker run imagenamehere



#### more info [here](https://github.com/AriiMe/docker-development-youtube-series/tree/master/nodejs)