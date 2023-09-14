import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Slogo from "../media/img/Slogo.png";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* <Button size="small">Subscribe</Button> */}
        <CardMedia
          component="img"
          sx={{ width: 120, display: { xs: "none", sm: "block" }, margin: "10px 0px 10px 0px" }}
          image={Slogo}
          alt="logo"
          
        ></CardMedia>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          marginLeft="-6%"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-arround", overflowX: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
