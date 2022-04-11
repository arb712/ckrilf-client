import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import useStyles from "./styles";
import axios from "axios";
import { URL } from "../../constants/config";
import usePagination from "../Pagination/Pagination";

const Feeds = () => {
  const classes = useStyles();
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemPerPage = 3;

  const count = Math.ceil(feeds.length / itemPerPage);
  const DataPagi = usePagination(feeds, itemPerPage);
  // Set handle for pagination change
  const pagiChange = (e, value) => {
    setPage(value);
    DataPagi.jump(value);
  };
  // Fetch data api
  const getAllFeeds = () => {
    setLoading(true);
    axios
      .get(`${URL}/feed/getFeed`)
      .then((response) => {
        const allFeeds = response.data.items;
        setFeeds(allFeeds);
      })
      .catch((error) => {
        console.log(`Error ${error}`);
      });
    setLoading(false);
  };

  useEffect(() => {
    getAllFeeds();
  }, []);

  return loading ? (
    // <CircularProgress size="7em" />
    <Typography variant="h1">L O A D I N G</Typography>
  ) : (
    <>
      <TextField
        name="search"
        variant="outlined"
        label="Type something..."
        fullWidth
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Filtering and mapping data with pagination */}

      <>
        {DataPagi.currentData()
          .filter((items) => {
            if (query === "") {
              return items;
            } else if (
              items.tags.toLowerCase().includes(query.toLocaleLowerCase())
            ) {
              return items;
            }
          })
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
      <Container className={classes.container}>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          onChange={pagiChange}
        />
      </Container>
    </>
  );
};

export default Feeds;
