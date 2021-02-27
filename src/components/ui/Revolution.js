import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Revolution() {
  return (
    <Grid container direection="column">
      <Grid item>
        <Typography variant="h4"></Typography>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
}

export default Revolution;
