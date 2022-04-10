import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";

import useStyles from "./styles";
import axios from "axios";
import { URL } from "../../constants/config";

const Feeds = () => {
  const classes = useStyles();
  const [feeds, setFeeds] = useState([]);
  const [query, setQuery] = useState("");

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
      <TextField
        name="search"
        variant="outlined"
        label="Type something..."
        fullWidth
        onChange={(e) => setQuery(e.target.value)}
      />
      {feeds
        .filter((items) => {
          if (query === "") {
            return items;
          } else if (
            items.tags.toLowerCase().includes(query.toLocaleLowerCase())
          ) {
            return items;
          }
        })
        .slice()
        .map((items) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} key={items.id}>
              <Card className={classes.card} raised elevation={6}>
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
