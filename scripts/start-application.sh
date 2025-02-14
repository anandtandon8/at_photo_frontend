#!/bin/bash
sudo docker run -d \
    --no-cache=true \
    --name atphoto \
    -p 5000:3000 \
    --restart unless-stopped \
    atphoto:Latest 