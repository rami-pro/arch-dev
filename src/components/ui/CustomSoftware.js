import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, IconButton, useMediaQuery } from "@material-ui/core";

import documentsAnimation from "../../animations/documentsAnimation/data";
import scaleAnimation from "../../animations/scaleAnimation/data";
import automationAnimation from "../../animations/automationAnimation/data";
import uxAnimation from "../../animations/uxAnimation/data";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightBulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";
import roots from "../../assets/root.svg";

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
      paddingLeft: "0em",
      paddingRight: "0em",
      paddingTop: "1em",
      paddingBottom: "3em",
    },
  },
  infoContainer: {
    paddingLeft: "2em",
    paddingRight: "2em",
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
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row" className={classes.mainContainer}>
          <Grid item xs={2} className={classes.arrowContainer}>
            <IconButton component={Link} to="/services">
              <img src={backArrow} alt="forward arrow" />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={matchesSM ? 8 : 6}
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
          <Grid
            item
            xs={2}
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
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item xs={8}>
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
                      Save Time
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      src={stopwatch}
                      alt="stop watch"
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
                      Save Money
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img src={cash} alt="stop watch" className={classes.icon} />
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
                      Save Energy
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      src={lightBulb}
                      alt="stop watch"
                      className={classes.icon}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justiffy="space-around"
        className={classes.mainContainer}
        style={{ paddingBottom: "2em" }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{
            marginLeft: matchesMD ? "auto" : undefined,
            marginRight: matchesMD ? "auto" : undefined,
            marginBottom: "4em",
          }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci maxime consequuntur asperiores optio porro minima
                repudiandae ducimus corrupti!
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis fugiat ab?
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <div>
              <Lottie options={documentsOptions} isStopped={true} />
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{
            marginLeft: "auto",
            marginRight: matchesMD ? "auto" : undefined,
            textAlign: matchesMD ? "left" : "right",
          }}
        >
          <Grid item md>
            <div>
              <Lottie options={scaleOptions} />
            </div>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Scale</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci maxime consequuntur asperiores optio porro minima
                repudiandae ducimus corrupti!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="a tree with roots all around"
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Typography variant="body1" paragraph>
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              maxime consequuntur asperiores optio porro minima repudiandae
              ducimus corrupti!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justiffy="space-around"
        className={classes.mainContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{
            marginLeft: matchesMD ? "auto" : undefined,
            marginRight: matchesMD ? "auto" : undefined,
            marginBottom: "4em",
          }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci maxime consequuntur asperiores optio porro minima
                repudiandae ducimus corrupti!
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis fugiat ab?
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <div>
              <Lottie options={automationOptions} isStopped={true} />
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{
            marginLeft: "auto",
            marginRight: matchesMD ? "auto" : undefined,
            textAlign: matchesMD ? "left" : "right",
          }}
        >
          <Grid item md>
            <div>
              <Lottie
                options={uxOptions}
                style={{ maxHeight: 310, maxWidth: 155 }}
              />
            </div>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">User Experience</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci maxime consequuntur asperiores optio porro minima
                repudiandae ducimus corrupti!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
