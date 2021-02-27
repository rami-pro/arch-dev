import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    marginBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionContainer: {
    fontStyle: "italic",
    fontWeight: 300,
    maxWidth: "50em",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid item className={classes.missionContainer}>
          <Typography variant="h4">About Us</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
