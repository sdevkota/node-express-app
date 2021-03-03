#!/bin/bash
cd ../containers/sql/
docker build -t maria .
docker run --name mariadb -ti -d -p 3306:3306 maria