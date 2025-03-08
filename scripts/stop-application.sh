#!/bin/bash
if [ "$(docker ps -q --filter "name=atphoto")" ]; then
    sudo docker stop atphoto
    sudo docker rm atphoto
fi 
