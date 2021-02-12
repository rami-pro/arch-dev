import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import Lottie from "react-lottie";

import animationData from "../animations/landinganimation/data";
import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";

import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
  },
  container: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1rem",
    },
  },
  animation: {
    paddingLeft: "10%",
    paddingTop: "2em",

    maxWidth: "51em",
  },
  servicesContainer: {
    marginTop: "12em",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnMoreButton: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.9rem",
    height: 45,
  },
  learnMoreButtonServices: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    padding: 5,
    height: 35,
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.2em",
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      marginLeft: "0em",
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    padding: "5em",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "6em",
      paddingBottom: "6em",
      paddingLeft: "0",
      paddingRight: "0",
      borderRadius: 0,
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        {" "}
        {/*---------Landing page animation--------*/}
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          className={classes.mainContainer}
        >
          <Grid item xs={12} sm={6} className={classes.container}>
            <Typography variant="h2" align="center">
              Bringing west coast technologies <br /> to the Midwest
            </Typography>
            <Grid container justify="center" spacing={1}>
              <Grid item>
                <Button variant="contained" className={classes.estimate}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnMoreButton}>
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow
                    height="15"
                    width="15"
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.animation}>
            <Lottie options={defaultOptions} width="100%" height="100%" />
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
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
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
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="Custom Software Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---------IOS/Android Block--------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
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
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
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
        >
          <Grid
            item
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
          <Grid item>
            <img
              src={websiteIcon}
              alt="Custom Software Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---------Revolution  Block--------*/}
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "36rem", marginTop: "10em", width: "100%" }}
          className={classes.revolutionBackground}
        >
          <Grid item xs={matchesSM ? 12 : undefined}>
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Visionary insight coupled with cutting-edge technologies
                      is a recipe for revolution
                    </Typography>
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---------Call to action  Block--------*/}
        <Grid
          container
          justify={matchesXS ? "center" : "space-between"}
          alignItems="center"
          style={{ height: "36rem", width: "100%" }}
          className={classes.infoBackground}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              style={{ padding: matchesSM ? "2em" : "8em" }}
            >
              <Grid item>
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                  Let's get Personal
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnMoreButtonServices}
                  style={{ color: "white", borderColor: "white" }}
                >
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow height="10" width="10" fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? undefined : "flex-end"}
              style={{ padding: matchesSM ? "2em" : "8em" }}
            >
              <Grid item>
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                  Say Hello!
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnMoreButtonServices}
                  style={{ color: "white", borderColor: "white" }}
                >
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow height="10" width="10" fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ height: "80vh", marginBottom: "2em" }}>
        <CallToAction />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
