#!/bin/bash
docker run -d \
    --name atphoto \
    -p 80:80 \
    --restart unless-stopped \
    atphoto:Latest 