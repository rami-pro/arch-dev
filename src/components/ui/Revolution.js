import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

import vision from "../../assets/vision.svg";
import consultation from "../../assets/consultationIcon.svg";
import review from "../../assets/reviewIcon.svg";
import mockup from "../../assets/mockupIcon.svg";
import design from "../../assets/designIcon.svg";
import build from "../../assets/buildIcon.svg";
import launch from "../../assets/launchIcon.svg";
import maintain from "../../assets/maintainIcon.svg";
import iterate from "../../assets/iterateIcon.svg";

import techAnimation from "../../animations/technologyAnimation/data.json";

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
    marginBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  visionContainer: {
    textAlign: "right",
    maxWidth: "40em",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  },
  techContainer: {
    textAlign: "left",
    maxWidth: "40em",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  },
}));

function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: techAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direection="column">
      <Grid
        item
        className={`${classes.titleContainer}`}
        style={{ marginTop: "2em" }}
      >
        <Typography variant="h2" className={classes.title} gutterBottom>
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
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
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          className={classes.techContainer}
          lg
        >
          <Grid item>
            <Typography variant="h4">Technology</Typography>
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

        <Grid item lg style={{ padding: "2em" }}>
          <Lottie options={defaultOptions} style={{ maxWidth: "40em" }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{ marginBottom: 0 }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#b3b3b3",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={consultation}
            alt="handshake"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#ff7373",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={mockup}
            alt="basic website design"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#39b54a",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#a67c52",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={design}
            alt="paint brush leaving a stroke of paint"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#fbb03b",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={build}
            alt="Building construction site"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#c1272d",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={launch} alt="space ship" style={{ maxWidth: "40em" }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#8e45ce",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={maintain}
            alt="wrench tightening bolts"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
        style={{
          backgroundColor: "#29abe2",
          minHeight: "100vh",
          paddingTop: "5em",
          marginBottom: 0,
        }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" style={{ color: "#060606" }} gutterBottom>
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fafafa", maxWidth: "20em" }}
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              veritatis fugiat ab?
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={iterate}
            alt="falling dominos"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Revolution;
