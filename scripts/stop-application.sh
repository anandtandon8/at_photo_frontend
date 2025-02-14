#!/bin/bash
if [ "$(docker ps -q --filter "name=atphoto")" ]; then
    sudo docker stop atphotopls
    sudo docker rm atphotopls
fi 
