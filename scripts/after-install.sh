#!/bin/bash
cd /var/www/html/atphoto

sudo docker stop atphoto || true
sudo docker rm atphoto || true
sudo docker rmi atphoto:Latest || true
sudo docker rmi 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest || true

sudo aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 941377117805.dkr.ecr.us-east-2.amazonaws.com
sudo docker pull 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest
sudo docker tag 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest atphoto:Latest 
