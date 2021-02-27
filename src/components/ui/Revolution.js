import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, useMediaQuery } from "@material-ui/core";

import vision from "../../assets/vision.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Pacifico",
    textAlign: "center",
  },
  titleContainer: {
    width: "100%",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  visionContainer: {
    textAlign: "right",
    maxWidth: "40em",
  },
}));

function Revolution() {
  const classes = useStyles();
  return (
    <Grid container direection="column">
      <Grid
        item
        className={`${classes.titleContainer} ${classes.rowContainer}`}
        style={{ marginTop: "2em" }}
      >
        <Typography variant="h2" className={classes.title}>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg style={{ padding: "2em" }}>
          <img
            src={vision}
            alt="mountains through binoculars"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.visionContainer}
          lg
        >
          <Grid item>
            <Typography variant="h4">Vision</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Revolution;
