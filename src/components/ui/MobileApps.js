import React from "react";
import Lottie from "react-lottie";
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
import swiss from "../../assets/swissKnife.svg";
import engagement from "../../assets/increaseEngagement.svg";
import access from "../../assets/extendAccess.svg";

import integrationAnimation from "../../animations/integrationAnimation/data.json";

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
  infoContainer: {
    paddingLeft: "2em",
    paddingRight: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
      textAlign: "center",
    },
  },
  descriptionContainer: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    width: "auto",
    height: "10em",
    marginBottom: "2em",
  },
}));

export default function MobileApps() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      style={{ maxWidth: "100%" }}
    >
      <Grid item>
        <Grid container direction="row" style={{ marginBottom: "10em" }}>
          <Hidden smDown>
            <Grid item sm={2} className={classes.arrowContainer}>
              <IconButton component={Link} to="/customsoftware">
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
                <Typography variant="h2">
                  IOS/Android App Development
                </Typography>
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
              <IconButton component={Link} to="/websites">
                <img src={forwardArrow} alt="forward arrow" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            container
            direction="column"
            md
            style={{
              textAlign: matchesMD ? "center" : undefined,
              padding: "1em",
            }}
          >
            <Grid item>
              <Typography variant="h2">Integration</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae temporibus facilis similique illum tempora
                consequuntur.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                commodi quam delectus!.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ padding: "2em" }}>
            <Lottie options={defaultOptions} style={{ maxWidth: "20em" }} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{
              textAlign: matchesMD ? "center" : "right",
              padding: "1em",
            }}
          >
            <Grid item>
              <Typography variant="h2">
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae temporibus facilis similique illum tempora
                consequuntur.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                commodi quam delectus!.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justify="center">
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              className={classes.infoContainer}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Extend Funcionality
                </Typography>
              </Grid>
              <Grid item>
                <img src={swiss} alt="stop watch" className={classes.icon} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              className={classes.infoContainer}
              style={{ padding: matchesSM ? "0" : undefined }}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Extend Access
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={access}
                  alt="stop watch"
                  style={{ height: "6em" }}
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              className={classes.infoContainer}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Increase Rngagement
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={engagement}
                  alt="stop watch"
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
