import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import footerImg from "../../assets/Footer Adornment.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.common.blue,
      width: "100%",
      zIndex: 1302,
      position: "relative",
    },
    footerImg: {
      width: "25em",
      verticalAlign: "bottom",
      [theme.breakpoints.down("md")]: {
        width: "21em",
      },
      [theme.breakpoints.down("xs")]: {
        width: "15em",
      },
    },
    mainContainer: {
      position: "absolute",
      width: "100%",
    },
    socialContainer: {
      position: "absolute",
      width: "100%",
      marginTop: "-5rem",
    },
    link: {
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
    },
    gridItem: {
      margin: "3rem",
    },
    icon: {
      width: "2.2rem",
      height: "2.2rem",
      [theme.breakpoints.down("xs")]: {
        width: "1.5rem",
        height: "1.5rem",
      },
    },
  };
});

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
              >
                IOS/Android Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
              >
                Custom Software
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/websites"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/about">
                About Us
              </Grid>
              <Grid item className={classes.link} component={Link} to="/about">
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to="/about">
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerImg}
        alt="decorative black adornment"
        className={classes.footerImg}
      />
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        alignItems="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={facebookIcon}
            alt="social media icon"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={instagramIcon}
            alt="social media icon"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={twitterIcon}
            alt="social media icon"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
