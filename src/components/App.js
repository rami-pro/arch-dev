import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./ui/Header";
import Footer from "./ui/Footer";

import theme from "./ui/Theme";
import LandingPage from "./LandingPage";
import ServicesPage from "./ui/Services";
import CustomSoftwarePage from "./ui/CustomSoftware";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        <Header />
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route
            exact
            path="/customsoftware"
            component={() => <CustomSoftwarePage />}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/services" component={() => <ServicesPage />} />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
