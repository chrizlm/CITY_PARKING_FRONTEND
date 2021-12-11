import React from "react";
import SideNavBar from "../components/SideBar/SideNavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Bookings from "./Bookings";
import About from "./About";
import Support from "./Support";
import Registration from './Registration';
import ParkingLot from "./ParkingLot";
import PTable from "./PTable";

export default function MotoristPage() {
  return (
    <>
      <Router>
        <SideNavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/booking" component={Bookings}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/support" component={Support}></Route>
          <Route exact path="/registration" component={Registration}></Route>
          <Route exact path="/parkingLot" component={ParkingLot}></Route>
          <Route exact path="/pTable" component={PTable}></Route>
        </Switch>
      </Router>
    </>
  );
}


