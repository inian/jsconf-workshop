#!/bin/bash
prevFileName="images/image-0000.jpg"
url="https://static.chope.co/uploads/2018/08/SG_Forty_Hands_East_Coast_Eggs_1535544136.jpg"
wget $url -O $prevFileName
for i in {0001..1000}
do  
   quality=$(shuf -i 80-89 -n 1)
   echo "Choosing $quality for iteration $i"
   convert $prevFileName -quality $quality "images/image-$i.jpg";
   prevFileName="images/image-$i.jpg"
done
