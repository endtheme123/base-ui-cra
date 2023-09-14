Introduction to Object Detection with YOLOv4 using Google Colab

INTRODUCTION

In Computer Vision, Object Detection can be seen as a common problem that happens everywhere. A human can easily tell a cat from a dog, or another human for example. But how can we tell a computer to differentiate any of these things? The answer to this seemingly simple question is actually what makes things like self-driving cars, image retrieval and video surveillance system possible. 

So what do you need to have in order to have a system that can detect objects? 

The first thing that we need is a lot of data. Data is everything we know around us, but for the sake of this blog we will consider data as images. The computer will process those images into a list of parameters that it can understand and generalize. A popular example of this way of processing is the COCO datatype. A COCO dataset contains information regarding segmentation, captioning which makes it easier for computers to "learn" from images. 

ABOUT YOLO

Now that we have a way to store information of images, we need a way to process the information. After a computer learns from data, it will have a set of parameters (also known as weights) that it can use to process other images and come up with a label for that image. That set of parameters is called a model. YOLO is one of those model that is fast, easy to use and comes with pre-trained weights. As such, all you have to do is do some basic installation to run YOLO. 

SET UP AND RUN YOLOv4
- Open https://colab.research.google.com/drive/11pvsZEqDrKwWErejnk_g_SRdL_fIP3SU#scrollTo=y4TIEgH-M2VL

- Run the cells from the introduction (!nvcc --version) (!nvidia-smi) (NOTE: This could take a while since Colab needs a connection to the server GPU before running cells)

- Run the cell to build the project (!git clone https://github.com/AlexeyAB/darknet) (%cd darknet)

- Run the cell to build the project (!make) (you can also check for the project executable files using "!./darknet")

- Run the cell to download the YOLO weights (!wget https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.weights)

- Run the cells from Part 2 (Object detection from images and videos)

Final result should be like this:

<iframe width="100%" height="450" src="https://www.youtube.com/embed/DxWAhAjKnqg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>