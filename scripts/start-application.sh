#!/bin/bash
# Start the application container
docker run -d \
    --name atphoto \
    -p 3000:3000 \
    --restart unless-stopped \
    atphoto 