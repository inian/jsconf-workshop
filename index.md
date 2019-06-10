# Advanced Image Optimisation

## Workshop Overview

## Why images are important for performance

## Overview of different image formats
### GIF
- The oldest image format, created in 1987!
- Supports animation and transparency
- Data arranged in different types of blocks
- Each GIF frame has a colour palette of a maximum size of 256 entries. This is one of the biggest limitations of the GIF format is that each frame can have only at most 256 colours. 
- Uses [LZW compression](http://matthewflickinger.com/lab/whatsinagif/lzw_image_data.asp) which was pretty patent encumbered
- Interlace option to allow a rough version of an image to be displayed before the full image has been transmitted

![](DraggedImage.png)

Read more - [http://matthewflickinger.com/lab/whatsinagif/bits\_and\_bytes.asp](http://matthewflickinger.com/lab/whatsinagif/bits_and_bytes.asp)

### PNG
- Problems with GIF lead to creation of PNG
- Portable Networks Graphics or PNG is not GIF
- Lossless image format
- Supports transparency but not animation 
- Another (dead) format called MNG was created for animation, later APNG
#### PNG Chunks
##### Critical and ancillary chunks
![](DraggedImage-1.png)

The case of the first letter indicates whether the chunk is critical or not. If the first letter is uppercase, the chunk is critical; if not, the chunk is ancillary.
Ancillary chunks can be safely ignored. A decoder must be able to interpret critical chunks to read and render a PNG file.

- IHDR must be the first chunk; it contains (in this order) the image's width (4 bytes), height (4 bytes), bit depth (1 byte), colour type (1 byte), compression method (1 byte), filter method (1 byte), and interlace method (1 byte) (13 data bytes total).
- PLTE contains the palette; list of colours.
- IDAT contains the image, which may be split among multiple IDAT chunks.
- IEND marks the image end.

##### Types of PNG 
![](DraggedImage-2.png)

##### PNG compression
###### Prediction / Filtering
![](DraggedImage-3.png)
Read more [here](https://medium.com/@duhroach/how-png-works-f1174e3cc7b7)
###### Deflate
