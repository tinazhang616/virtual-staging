import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Services from "./Services/Services";
import Account from "./Account/Account";
import ContactUs from "./ContactUs/ContactUs";
import NotFound from "./NotFound";
import Affiliate from "./Resources/Affiliate";
import Furniture from "./Resources/Furniture";
import AboutUs from "./Resources/About";
import VirtualStaging from "./Services/VirtualStaging";
import Restyle from "./Services/Restyle";
import Envision from "./Services/Envision";
import FloorPlan from "./Services/FloorPlan";
import Remodel from "./Services/Remodel";
import Checkout from "./Checkout/Checkout";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <MainPage />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/services/virtual-staging">
        <VirtualStaging />
      </Route>
      <Route exact path="/services/restyle">
        <Restyle />
      </Route>
      <Route exact path="/services/remodel">
        <Remodel />
      </Route>
      <Route exact path="/services/envision">
        <Envision />
      </Route>
      <Route exact path="/services/3d-floor-plan">
        <FloorPlan />
      </Route>
      <Route path="/furniture">
        <Furniture />
      </Route>
      <Route exact path="/about">
        <AboutUs />
      </Route>
      <Route exact path="/affiliate-program">
        <Affiliate />
      </Route>
      <Route exact path="/furniture">
        <Furniture />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      <Route exact path="/contact-us">
        <ContactUs />
      </Route>
      <Route path="/cart">
        <Checkout />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
export default Routes;
