import React from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../Navbar";
import Feeds from "../Feeds/Feeds";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid
        className={classes.gridContainer}
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={4}
      >
        <Feeds />
      </Grid>
    </div>
  );
};

export default Home;
