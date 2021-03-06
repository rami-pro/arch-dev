import React from "react";
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
import analytics from "../../assets/analytics.svg";
import seo from "../../assets/seo.svg";
import outreach from "../../assets/outreach.svg";
import ecommerce from "../../assets/ecommerce.svg";

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
  paragraphContainer: {
    maxwidth: "30em",
  },
}));

export default function Websites() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

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
              <IconButton component={Link} to="/mobileapps">
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
                <Typography variant="h2">Websites</Typography>
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
              <IconButton component={Link} to="/services">
                <img src={forwardArrow} alt="forward arrow" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        style={{
          marginBottom: "4em",
          textAlign: matchesSM ? "center" : undefined,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">Analytics</Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="graph with 1's and 0's"
                style={{ marginLeft: "-3em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ maxWidth: "30em" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, vel
            maiores cumque suscipit nisi consectetur aliquam obcaecati
            exercitationem ex sapiente dolorum expedita cupiditate reiciendis,
            delectus placeat velit assumenda, beatae tenetur
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify={matchesMD ? "center" : "flex-end"}
        style={{
          marginBottom: "4em",
          textAlign: matchesSM ? "center" : undefined,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">Outreach</Typography>
            </Grid>
            <Grid item>
              <img style={{ padding: "1em" }} src={outreach} alt="outreach" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ maxWidth: "30em" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, vel
            maiores cumque suscipit nisi consectetur aliquam obcaecati
            exercitationem ex sapiente dolorum expedita cupiditate reiciendis,
            delectus placeat velit assumenda, beatae tenetur
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        style={{
          marginBottom: "4em",
          textAlign: matchesSM ? "center" : undefined,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">SEO</Typography>
            </Grid>
            <Grid item>
              <img style={{ padding: "1em" }} src={seo} alt="seo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ maxWidth: "30em" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, vel
            maiores cumque suscipit nisi consectetur aliquam obcaecati
            exercitationem ex sapiente dolorum expedita cupiditate reiciendis,
            delectus placeat velit assumenda, beatae tenetur
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify={matchesMD ? "center" : "flex-end"}
        style={{
          marginBottom: "4em",
          textAlign: matchesSM ? "center" : undefined,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">E-Commere</Typography>
            </Grid>
            <Grid item>
              <img style={{ padding: "1em" }} src={ecommerce} alt="ecommerce" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ maxWidth: "30em" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, vel
            maiores cumque suscipit nisi consectetur aliquam obcaecati
            exercitationem ex sapiente dolorum expedita cupiditate reiciendis,
            delectus placeat velit assumenda, beatae tenetur
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
