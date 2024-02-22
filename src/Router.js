import React from 'react'
import { Switch, Route } from 'react-router'
import About from './components/About'
import Listings from './containers/Listings'
import Listing from './containers/Listing'

const Router = () => {
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/:id" component={Listing} />
            <Route path="/" component={Listings} />

        </Switch>
    );
};

export default Router;