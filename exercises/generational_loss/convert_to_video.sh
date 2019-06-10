#!/bin/bash
ffmpeg -framerate 240 -i image-%04d.jpg -c:v libx264 -profile:v high -crf 20 -pix_fmt yuv420p output.mp4