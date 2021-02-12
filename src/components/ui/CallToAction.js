import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import backgroundMobile from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnMoreButtonServices: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    padding: 5,
    height: 35,
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${backgroundMobile})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    height: "45px",
    maxHeight: "45px",
    borderRadius: "50px",
    marginBottom: "-6em",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
    },
  },
}));

function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      justify={matchesSM ? "center" : "space-between"}
      alignItems="center"
      className={classes.container}
    >
      <Grid item style={{ padding: matchesSM ? "2em" : "8em" }}>
        <Grid
          container
          direction="column"
          alignItems={matchesSM ? "center" : undefined}
          style={{ textAlign: matchesSM ? "center" : undefined }}
        >
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br></br>
              Revolutionary results.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              Take Advantage of the 21st century.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              className={classes.learnMoreButtonServices}
            >
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                height="10"
                width="10"
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ padding: matchesSM ? "2em" : "8em" }}>
        <Button variant="contained" className={classes.estimate}>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
