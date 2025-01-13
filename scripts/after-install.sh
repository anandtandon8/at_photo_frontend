#!/bin/bash
cd /var/www/html/atphoto

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 941377117805.dkr.ecr.us-east-2.amazonaws.com
docker pull 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest
docker tag 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest atphoto:Latest 

