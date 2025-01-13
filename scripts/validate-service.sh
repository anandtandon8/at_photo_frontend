#!/bin/bash
# Wait for the application to be ready
sleep 10

# Check if the application is responding
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "Application is running"
    exit 0
else
    echo "Application is not running"
    exit 1
fi 