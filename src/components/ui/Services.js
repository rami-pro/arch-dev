import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";

import ButtonArrow from "../ui/ButtonArrow";

import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  servicesContainer: {
    marginBottom: "1em",
    padding: "4em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },

  learnMoreButtonServices: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    padding: 5,
    height: 35,
  },

  subtitle: {
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.2em",
    },
  },
  icon: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      marginLeft: "0em",
    },
  },
}));

function Services() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "4em",
          textAlign: matchesSM ? "center" : undefined,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Servicecs
        </Typography>
      </Grid>
      <Grid item>
        {/*---------IOS/Android Block--------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
          alignItems="center"
        >
          <Grid
            item
            xs={matchesSM ? undefined : 6}
            style={{
              textAlign: matchesSM ? "center" : "left",
            }}
          >
            <Typography variant="h4">IOS/Android Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate your own web experience or create a standalone app{" "}
              {matchesSM ? null : <br />}with either mobile platform
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/mobileapps"
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
          <Grid item xs={matchesSM ? undefined : 2}>
            <img src={mobileIcon} alt="Mobile Icon" className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---------Services Block--------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-start"}
          alignItems="center"
        >
          <Grid
            item
            xs={matchesSM ? undefined : 6}
            style={{
              textAlign: matchesSM ? "center" : "left",
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Time. Save Money. Save Energy
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solution from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/customsoftware"
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
          <Grid item xs={matchesSM ? undefined : 2}>
            <img
              src={customSoftwareIcon}
              alt="Custom Software Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---------Services Block--------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
          alignItems="center"
        >
          <Grid
            item
            xs={matchesSM ? undefined : 6}
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : "left",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More
            </Typography>
            <Typography variant="subtitle1">
              Optimized for serch engines. Built for speed
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              to="/websites"
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
          <Grid item xs={matchesSM ? undefined : 2}>
            <img
              src={websiteIcon}
              alt="Custom Software Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
