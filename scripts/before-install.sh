#!/bin/bash
rm -rf /var/www/html/atphoto/* 

sudo docker stop atphoto
sudo docker rm atphoto
sudo docker rmi atphoto:Latest
sudo docker rmi 941377117805.dkr.ecr.us-east-2.amazonaws.com/anandtandon8/atphoto:Latest