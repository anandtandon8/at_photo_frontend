#!/bin/bash
if [ "$(docker ps -q -f name=^/atphoto$)" ]; then
    echo "Stopping atphoto container..."
    sudo docker stop atphoto
    sudo docker rm atphoto
elif [ "$(docker ps -aq -f status=exited -f name=^/atphoto$)" ]; then
    echo "Removing stopped atphoto container..."
    sudo docker rm atphoto
fi 
