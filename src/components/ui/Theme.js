import { createMuiTheme } from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "2.5rem",
      lineHeight: "1.5",
      color: `${arcBlue}`,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: "1.8rem",
      color: `${arcBlue}`,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    estimate: {
      fontSize: "1rem",
      fontFamily: "Pacifico",
      textTransform: "none",
      color: "white",
    },
    learnMoreButton: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      color: arcBlue,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: arcBlue,
    },
  },
});
