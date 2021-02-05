import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Layout from '../Components/Home/Layout';
import './App.css';
import Properties from './Properties/Properties';
import { Redirect, Route, Switch } from "react-router-dom";
import Explore from './Explore/Explore';
import Login from './Login/Login';
import Hosthotel from './HostHotel/Hosthotel';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Switch>
            <Route path="/loginWithGoogle">
              <Login/>
            </Route>
          <Route path="/host your property&value=null">
              <Hosthotel/>
            </Route>
            <Route path="/exploreNearby">
              <Explore/>
            </Route>
            <Route path="/" exact>
              <Banner/>
              <Properties/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;