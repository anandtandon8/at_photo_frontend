#!/bin/bash
if [ "$(docker ps -q --filter "name=atphoto")" ]; then
    docker stop atphoto
    docker rm atphoto
fi 