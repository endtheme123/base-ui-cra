import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";
import FeaturedPost from "./FeaturedPost";
import { Link } from "react-router-dom";


function Main(props) {
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider/>
      {/* {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}

      <Grid sx={{marginTop: "10px"}} spacing={2}>
        {posts.map((post, index) => (
          <Link style={{ textDecoration: 'none' }} to={"/" + index}><FeaturedPost key={post.title} post={post} /></Link>
        ))}
      </Grid>
    </Grid>
  );
}

Main.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.string).isRequired,

  title: PropTypes.string.isRequired,
};

export default Main;
