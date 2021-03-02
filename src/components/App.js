import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import CallToAction from "./ui/CallToAction";

import theme from "./ui/Theme";
import LandingPage from "./LandingPage";
import ServicesPage from "./ui/Services";
import CustomSoftwarePage from "./ui/CustomSoftware";
import MobileAppsPage from "./ui/MobileApps";
import WebsitesPage from "./ui/Websites";
import RevolutionPage from "./ui/Revolution";
import AboutPage from "./ui/About";
import ContactPage from "./ui/Contact";

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
            component={() => (
              <>
                <CustomSoftwarePage />
                <CallToAction />
              </>
            )}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => (
              <>
                <MobileAppsPage />
                <CallToAction />
              </>
            )}
          />
          <Route
            exact
            path="/websites"
            component={() => (
              <>
                <WebsitesPage />
                <CallToAction />
              </>
            )}
          />
          <Route
            exact
            path="/services"
            component={() => (
              <>
                <ServicesPage />
                <CallToAction />
              </>
            )}
          />
          <Route
            exact
            path="/revolution"
            component={() => (
              <>
                <RevolutionPage />
                <CallToAction />
              </>
            )}
          />
          <Route
            exact
            path="/about"
            component={() => (
              <>
                <AboutPage />
                <CallToAction />
              </>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <>
                <ContactPage />
              </>
            )}
          />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
