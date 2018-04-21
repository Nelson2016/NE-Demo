import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Root from '../views/Root';

import Client from '../views/client/Client';

import NotFound from '../views/NotFound';


const Routes = (state) => <Root>
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/client"/>}/>
        <Route path="/client" component={Client}/>

        <Route path="/404" component={NotFound}/>
        <Redirect to="/404"/>
    </Switch>
</Root>;

export default Routes;