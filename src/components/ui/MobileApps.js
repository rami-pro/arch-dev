import React from "react";
//import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1em",
      paddingRight: "1em",
      paddingTop: "1em",
      paddingBottom: "3em",
    },
  },

  descriptionContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    width: "auto",
    height: "4em",
    marginBottom: "2em",
  },
}));

export default function MobileApps() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  //const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      style={{ maxWidth: "100%" }}
    >
      <Grid item>
        <Grid
          container
          direction="row"
          style={{ marginBottom: matchesSM ? "10em" : undefined }}
        >
          <Hidden smDown>
            <Grid item sm={2} className={classes.arrowContainer}>
              <IconButton component={Link} to="/services">
                <img src={backArrow} alt="forward arrow" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            item
            xs={10}
            sm={8}
            md={6}
            className={classes.descriptionContainer}
          >
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h2">Custom Software</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae temporibus facilis similique illum tempora
                  consequuntur.
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                  vel maiores cumque suscipit nisi consectetur aliquam obcaecati
                  exercitationem ex sapiente dolorum expedita cupiditate
                  reiciendis, delectus placeat velit assumenda, beatae tenetur
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                  vel maiores cumque suscipit nisi consectetur aliquam obcaecati
                  exercitationem ex sapiente dolorum expedita cupiditate
                  reiciendis, delectus placeat velit assumenda, beatae tenetur
                </Typography>
                <Typography variant="body1" paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  commodi quam delectus!.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid
              item
              sm={2}
              className={classes.arrowContainer}
              style={{
                marginLeft: "auto",
                textAlign: "right",
              }}
            >
              <IconButton component={Link} to="/mobileapps">
                <img src={forwardArrow} alt="forward arrow" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
}
