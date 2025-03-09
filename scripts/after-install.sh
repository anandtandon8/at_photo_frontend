#!/bin/bash
cd /var/www/html/atphoto

# Remove old images
echo "Removing old images..."
sudo docker rmi atphoto:Latest || true
sudo docker rmi 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest || true

# Login and pull new image
echo "Logging into ECR and pulling new image..."
sudo aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 941377117805.dkr.ecr.us-east-2.amazonaws.com
sudo docker pull 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest
sudo docker tag 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest atphoto:Latest 
