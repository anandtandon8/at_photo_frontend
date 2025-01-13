#!/bin/bash
docker run -d \
    --name atphoto \
    -p 80:3000 \
    --restart unless-stopped \
    atphoto:Latest 