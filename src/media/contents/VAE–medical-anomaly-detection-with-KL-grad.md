
**1 Problem**\
\- The pixel-wise localization methods at that time mostly depended on reconstruction loss => discard the meaning of KL loss term\
\- Models are mostly designed to serve a specific tasks => a form of predefined knowledge => against the meaning of unsupervised learning\
\- Contribution: integrate the KL-divergence of a VAE into a pixel-wise localization\

**2 Working principle**\
\- The derivative 𝑑𝑦/𝑑𝑥 reflect the impact of x to the final output of y in y(x)\
=> By calculating the derivative of KL divergence of each pixel input => the impact of the pixel value to the final loss.

**3 Experiments**

**3.1 MNIST experiment (sample-wise)**\
• Objective: test the impact of different loss function (ELBO, KL-Div, Rec) part separately\
• Idea:\
\- train and validate the model on 54000 images using 9 out of the 10 provided classes\
\- evaluate the performance by attempting to discriminate between the classes seen during\ training and the 10th unseen class
• Settings:\
\- Model: model with a 3-layer fully connected encoder and decoder with 400 hidden units and ReLU non-linearities\
\- Hparam: use 20 latent variables, c = 1, a scaling factor of 1 and class 0 is left out during training\

**3.1 - Results**\
• in most cases the reconstruction-term shows lower discriminative power than either the KL-term or the ELBO => important information is lost when focusing on rec loss\
• cases where it has better performance, the model is severely constrained, for example by having a small latent variable dimension\
• Reconstruction loss have competitive performance when an annotated validation set is used to tune the parameters, but by adjusting the hyperparameter (log c = 1.4) => Kl-loss will outperform

![Alttext](/diagram1.png "gg")


**3.2 Anomaly detection test (pixel-wise)**

• Objective: test new method generalization (assumption-free)

• Idea:\
\- Train on HCP dataset and test on BrainTS dataset => domain shift\
\- More than 20 annotated tumor voxels => diseased3.2 Anomaly detection test

• Settings:\
\- Model:\
\+ 5-Layer fullyconvolutional encoder and decoder with feature-map size of 16-32-64-256\
\+ strided convolutions (stride 2) as downsampling and transposend convolutions as upsampling\ operations, each followed by a LeakyReLU nonlinearity\
\+ Optimizer: Adam

\- Hparam:\
\+ Initial LR: 0.0001\
\+ Learning rate scheduler (decay = 0.1) + early stoping (patient = 3 epochs)

**3.2 Results**\
• in most cases the reconstruction error alone is outperformed by other methods\
• for most choices the KL-Grad and the combi model perform best, indicating a more robust performance

![Alttext](/diagram2.png "gg")

**3.3 Hyperparameter tunning test**\
• Objective: investigating the top performance of the KL-term approach in a scenario where an annotated validation set can be employed\
• Idea: compare with other reconstruction-based approach with hyperparameter tuning (metric: dice score)\
• Settings:\
\- Use 1/5 of the data to determine the threshold for anomaly values

**3.3 Results**\
• The researcher approach is outperformed by non-deep learning approaches that were specifically designed with domain knowledge of the dataset in mind
![Alttext](/diagram3.png "gg")
![Alttext](/diagram4.png "gg")




\-\-\-\-\-\-\-\-\-\-\-

**How to run experiment**\

**Stage 1: Setting up the enviroment**\

Step 1: Download and set up anaconda
https://www.anaconda.com/download
then open Anaconda Prompt
Step 2: create virtual environment on conda
Using conda create -n <name of the environment> <preinstall library>
=> in this project we will use conda create -n MICDKFZ python=3.6

Step 3: get into the environment
Use: conda activate <name of the environment> 
=> conda activate MICDKFZ

Step 4: install GitHub to the virtual environment
Use: Conda install git

Step 5: Clone the paper’s GitHub
Use: git clone https://github.com/MIC-DKFZ/vae-anomaly-experiments.git

Step 6:  Clone trixi (a library used in the paper’s code) 
Since the trixi used in this paper is coming from an older version => we will need to revert the library GitHub version to an older commit
Use: git clone https://github.com/MIC-DKFZ/trixi.git
Use: git checkout e9354d375c06f175c55cb07f940b3ff73f773a90 
Step 7: install the requirments from trixi
- Open trixi folder, fix all the “>=” to “==” except scipy and numpy in requirements.txt
- Redirect to the trixi folder
- Use: pip install -r requirements.txt
- Wait until the installation end
- Install pytorch: 
pip install torch==1.1.0 torchvision==0.2.1  https://download.pytorch.org/whl/cu90/torch-1.1.0-cp36-cp36m-win_amd64.whl
- Install cuda: Conda install cudatoolkit=9.0
- Use: pip install -r requirements_full.txt
- Use: pip install -e .

Step 8: install pycocotools
Use: pip install pycocotools-windows

**State 2: Run the experiment**\
Step 1: run visdom server
- open new anaconda prompt 
- activate MICDKFZ environment
- Use: python -m visdom.server

Step 2: run the experiments
- back to the setting prompt
- redirect to vae-anomaly-experiments
- open  mnist_script.py in the folder => add “port=8097” to the vlog define
- Use: python mnist_script.py
- open: localhost:8097
- change to vae experiment to see the results


ref: https://arxiv.org/abs/1907.02796