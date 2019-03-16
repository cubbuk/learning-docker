# Build a docker image from Dockerfile
````
docker build -t repoName:tagName . # . here represents the directory where the Dockerfile exists

docker build -t mehmet/node:latest . # build a new image for mehmet/node and tag it latest
````

# Create a container from a built image
```
docker run mehmet/node:latest # create a container out of image mehmet/node:latest
docker run -p 8000:7001 mehmet/node:latest # bind local port 8000 into 7001 of the container
docker run -d -p 8000:7001 mehmet/node:latest # run the container in the background
```

# Running commands inside containers
```
docker exec a9611e5dc488 ls # execute ls command on the container with id a9611e5dc488
docker exec -it a9611e5dc488 bash # work with bash inside the given container
``` 

#Listing Images
```
docker image ls # list all the images
```

#Deleting image
```
docker rmi 41d6c679d0b7 # remove the image with id 41d6c679d0b7
```

#Listing containers
```
docker container ls # list running containers
docker container ls -a # list all containers including stopped ones too
```

#Stopping containers
```
docker container stop a9611e5dc488 # stop the container with id a9611e5dc488 sends SIGTERM first then SIGKILL which is graceful way to stop a container
docker container kill a9611e5dc488 # stop the container with id a9611e5dc488 sends SIGKILL directly which can end up in losing state/data and not recommended for production usage
docker container rm a9611e5dc488 # remove the stopped container with id a9611e5dc488
docker container rm --force a9611e5dc488 # remove the container even its not stopped 
docker container ls -a # list all containers including stopped ones too
docker container rm --force $(docker ps -a -q) # remove forcefully all existing containers
```

#Abbreviation for container ids
The first 3 letters of container ids or container names can be used interchangeable with the complete container id.
```
docker container stop 2f9 # has the same affect with docker container stop 2f96afd2f667
docker container stop priceless_lichterman # has the same affect with docker container stop 2f96afd2f667
```

#Dockerfile
Each command in docker file is cached so after the first build if the command does not change consequent builds will be faster.
Whenever the dockerfile is changed a new image should be built to create a container with new content

```
FROM node:latest # use node:latest as base image

WORKDIR /app # set the working directory to "app" inside the container

COPY . . # copy the current local directory into the working directory (app in this case) defined in the container

ENV PORT=7001 # set an environment variable named PORT to 7001 which would be accesible inside the container

RUN npm install # run the command npm install

EXPOSE $PORT # expose the port defined in "PORT" environment variable to outside

ENTRYPOINT ["node", "app.js"] # run the command "node app.js" when the container starts
```
