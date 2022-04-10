import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          component={Link}
          to={"/"}
          variant="h4"
          className={classes.title}
        >
          Ckrilf
        </Typography>
      </AppBar>
    </div>
  );
};
export default Navbar;
