#!/bin/bash
sudo docker run -d \
    --name atphotopls \
    -p 5000:3000 \
    --restart unless-stopped \
    atphoto:Latest 
    