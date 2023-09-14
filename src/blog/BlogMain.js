import React, { useState, useEffect, Suspense } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactMarkdown from "react-markdown";
import VAE from "../media/contents/VAE–medical-anomaly-detection-with-KL-grad.md";
import YOLO from "../media/contents/Introduction_to_Object_Detection_wi.md";
import rehypeRaw from "rehype-raw";

import remarkGfm from "remark-gfm";
// import gg from "../media/"
import Markdown from "./Markdown";
import FeaturedPost from "./FeaturedPost";

function Main(props) {
  const { posts, id } = props;
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    let content = id==0? VAE:YOLO ;
    fetch(content)
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
      });
  },[]);
  return (
    <Grid item xs={12} md={8} sx={{
        '& img': {
          width: "100%"
      }}}>
      <Typography variant="h3" gutterBottom>
        {posts[id].title}
      </Typography>
      <Typography variant="h8" gutterBottom>
        {posts[id].author + " - " + posts[id].date}
      </Typography>
      <Divider />
      
      <ReactMarkdown  children={markdown} remarkPlugins={[remarkGfm]} escapeHtml={false} rehypePlugins={[rehypeRaw]}></ReactMarkdown>
      
    </Grid>
  );
}

Main.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.string).isRequired,

  title: PropTypes.string.isRequired,
};

export default Main;
