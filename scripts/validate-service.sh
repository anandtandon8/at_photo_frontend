#!/bin/bash
sleep 10

echo "Checking container status..."
docker ps | grep atphoto

echo "Checking container logs..."
docker logs atphoto

echo "Checking port status..."
netstat -tulpn | grep LISTEN | grep :443

if curl -f https://localhost:443 > /dev/null 2>&1; then
    echo "Application is running"
    exit 0
else
    echo "Application is not running"
    docker ps -a
    exit 1
fi 