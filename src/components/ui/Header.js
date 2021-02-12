import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuItem } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3rem",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25rem",
      },
    },
    appBar: {
      zIndex: theme.zIndex.modal + 1,
    },
    logo: {
      height: "7rem",
      [theme.breakpoints.down("md")]: {
        height: "6rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "5rem",
      },
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: 0,
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      margin: 0,
      color: "white",
      "&:hover": {
        opacity: 1,
      },
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    drawerIcon: {
      height: "50px",
      width: "50px",
      color: "white",
      opacity: 0.7,
      "&:hover": {
        opacity: 0.9,
      },
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
    drawerItemActive: {
      ...theme.typography.tab,
      color: "white",
    },
    drawerEstimate: {
      backgroundColor: theme.palette.common.orange,
      opacity: 1,
      [ListItemText]: {
        opacity: 0.7,
      },
    },
    button: {
      ...theme.typography.estimate,
      marginLeft: "25px",
      marginRight: "50px",
      height: "45px",
      borderRadius: "50px",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  };
});

const menuOptions = [
  { name: "Services", link: "/services" },
  { name: "Custom Software", link: "/customsoftware" },
  { name: "IOS/Android Development Apps", link: "/mobileapps" },
  { name: "Website Dvelopment", link: "/websites" },
];

const routes = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "The Revolution", link: "/revolution" },
  { name: "About Us", link: "/about" },
  { name: "Contact Us", link: "/contact" },
  { name: "Free Estimate", link: "/estimate" },
];

function Header() {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  useEffect(() => {
    const paths = ["/", "/services", "/revolution", "/about", "/contact"];
    const servicesPaths = [
      "/services",
      "/customsoftware",
      "/mobileapps",
      "/websites",
    ];

    let pathIndex = paths.findIndex((path) => path === location.pathname);
    let servicesIndex = servicesPaths.findIndex(
      (path) => path === location.pathname
    );

    if (servicesIndex !== -1) {
      setSelectedIndex(servicesIndex);
      setValue(1);

      return;
    }

    setValue(pathIndex);
  }, [location]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={classes.tabContainer}
      >
        {routes.map((route, i) => {
          if (i === 5) return null;
          if (i !== 1)
            return (
              <Tab
                label={route.name}
                className={classes.tab}
                component={Link}
                key={i}
                to={route.link}
              />
            );

          return (
            <Tab
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? true : undefined}
              label={route.name}
              className={classes.tab}
              onMouseOver={handleClick}
              component={Link}
              key={i}
              to={route.link}
            />
          );
        })}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={openMenu}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              handleClose();
              setValue(1);
            }}
            selected={i === selectedIndex && value === 1}
            classes={{ root: classes.menuItem }}
            component={Link}
            to={option.link}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        classes={{ paper: classes.drawer }}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, i) => {
            let className;
            if (i < 5) {
              className =
                value === i ? classes.drawerItemActive : classes.drawerItem;
            } else {
              className = `${classes.drawerEstimate} ${
                value === 5 ? classes.drawerItemActive : classes.drawerItem
              }`;
            }

            return (
              <ListItem
                divider
                button
                key={i}
                className={className}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(i);
                }}
                selected={value === i}
                component={Link}
                to={route.link}
              >
                <ListItemText disableTypography>{route.name}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer((openDrawer) => !openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}
            >
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
