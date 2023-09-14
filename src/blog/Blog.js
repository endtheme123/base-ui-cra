import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Posts', url: '#' },
  { title: 'About us', url: '#' },
  
];

const mainFeaturedPost = {
  title: 'Welcome to Swinburne Anomaly Lab',
  description:
    "Swinburne Anomaly Lab was formed to research and develop state-of-the-art anomaly detection techniques and apply them in many aspect of humam life (medical, healthcare, environmental preservation, e.g).",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  // linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Paper report: VAE-medical annomally detection with KL grad',
    date: 'Nov 12',
    description:
      'By Nguyen Ha Huy Hoang',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Side Project: Yolo v4',
    date: 'Nov 11',
    description:
      'By Duong Quoc Trung',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Header title="Swinburne Anomaly Lab" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Recent post" posts={featuredPosts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
