## Naming containers instead of working with ids
```
docker run -d -p 8000:3000 --name part2 mehmet/node:latest # create a container with name part2
docker stop part2 # stop container with name part2
docker rm part2 # remove stopped container with name part2
```

## Volumes
Volumes are needed to store persistent data between containers. 
This can help enormously during development by mounting working directory as a volume into the container to see changes immediately without having to re-build new images and rerun containers.

## Creating volumes
```
docker volume create test-volume # create a volume named test-volume
```

## Listing volumes
```
docker volume ls
```

## Removing detached volumes
```
docker volume prune # remove all the volumes which are not used by any container
docker volume rm test-volume # remove volume named test-volume
```

## Inspect volume
To see where the volume is created and getting information `inspect` command can be used
```
docker inspect test-volume

[
    {
        "CreatedAt": "2019-03-16T19:10:28+03:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/test-volume/_data",
        "Name": "test-volume",
        "Options": {},
        "Scope": "local"
    }
]
```

## Mounting a volume into container
```
docker run -d -p 8000:3000 --name part2 --volume my-volume:/logs mehmet/node:latest # attach my-volume to \logs directory inside the container named part2
```

##Mounting working directory as a volume into container
You don't have to rely on docker to create the location of the volume. The location of the volume can be specified too.
Using this its possible to mount the working directory of your source code into the container to get changes immediately into the container.

```
docker run -d -p 8001:3000 --name part2 --volume $(pwd):/app mehmet/node:latest
```
The above command mount the current working directory into `/app` folder inside the container named `part2`
`$(pwd)` is a unix command which returns the full path of the current working directory

Now using nodemon or other mechanism to restart the node process, all the changes during development will be reflected into the container.









