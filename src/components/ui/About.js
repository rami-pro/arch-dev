import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Avatar, useMediaQuery } from "@material-ui/core";

import history from "../../assets/history.svg";
import puppy from "../../assets/puppy.svg";
import founder from "../../assets/founder.jpg";
import yearbook from "../../assets/yearbook.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionContainer: {
    fontStyle: "italic",
    fontWeight: 300,
    maxWidth: "50em",
    fontSize: "1.5em",
    lineHeight: 1.4,
  },
  avatar: {
    height: "25em",
    width: "25em",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginBottom: "10em" }}
      >
        <Grid item className={classes.missionContainer}>
          <Typography variant="h4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            maxime consequuntur ducimus corrupti! it amet consectetur
            adipisicing elit. Adipisci maxime consequuntur asperiores optio
            porro minima repudiandae ducimus corrupti!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginBottom: "10em" }}
      >
        <Grid item container md direction="column" style={{ maxWidth: "35em" }}>
          <Grid item>
            <Typography variant="h2">History</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ fontWeight: 700, fontStyle: "italic" }}
            >
              We are the new kid in the block
            </Typography>
            <Typography variant="body1" paragraph>
              adipisicing elit. Adipisci maxime consequuntur asperiores optio
              porro minima repudiandae ducimus corrupti!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur ducimus corrupti! it amet consectetur
              adipisicing elit. Adipisci maxime consequuntur asperiores optio
              porro minima.
            </Typography>
            <Typography variant="body1" paragraph>
              adipisicing elit. Adipisci maxime consequuntur asperiores optio
              porro minima repudiandae ducimus.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center" alignItems="center" md>
          <img
            src={history}
            alt="qui pen setting on top of a book"
            style={{ maxHeight: "22em" }}
          />
        </Grid>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Bob martin, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 years old
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: "2em" }}>
          <Avatar src={founder} alt="founder" className={classes.avatar} />
        </Grid>
        <Grid
          item
          container
          className={classes.rowContainer}
          style={{ marginBottom: "10em" }}
        >
          <Grid item conntainer lg direction="column">
            <Grid item>
              <img src={yearbook} alt="yearbook page about the founder" />
            </Grid>
            <Grid item>
              <Typography variant="caption" paragraph>
                a page from my sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ padding: "2em", maxWidth: "45em" }}>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur ducimus corrupti! it amet consectetur
              adipisicing elit. Adipisci maxime consequuntur asperiores optio
              porro minima.
            </Typography>
            <Typography variant="body1" paragraph>
              adipisicing elit. Adipisci maxime consequuntur asperiores optio
              porro minima repudiandae ducimus.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={puppy} alt="grey spotted puppy" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                adipisicing elit. Adipisci maxime consequuntur asperiores.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
