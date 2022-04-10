import React, { useEffect, useState } from "react";
import { Card, CardMedia, Typography, Grid } from "@material-ui/core";

import useStyles from "./styles";
import axios from "axios";
import { URL } from "../../constants/config";

const Feeds = () => {
  const classes = useStyles();
  const [feeds, setFeeds] = useState([]);

  const getAllFeeds = () => {
    axios
      .get(`${URL}/feed/getFeed`, {
        headers: {
          "Content-Type": "application/json",
        },
        crossDomain: true,
      })
      .then((response) => {
        const allFeeds = response.data.items;
        setFeeds(allFeeds);
        console.log(allFeeds, "Feed Fetch");
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
  };

  useEffect(() => {
    getAllFeeds();
  }, []);
  return (
    <>
      {feeds.map((items) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card} raised elevation={6} key={items.id}>
              <CardMedia
                className={classes.media}
                image={items.media.m}
                title={feeds.title}
              />
              <div className={classes.overlay}>
                <Typography variant="h6">{items.title}</Typography>
              </div>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Feeds;
