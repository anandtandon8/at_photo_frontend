#!/bin/bash
docker run -d \
    --name atphoto \
    -p 443:3000 \
    --restart unless-stopped \
    atphoto:Latest 