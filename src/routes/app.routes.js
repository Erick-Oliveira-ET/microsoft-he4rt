import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing/Landing.jsx';

const AppRoutes = () => (
    <Switch>
        <Route path="/" exact component={Landing} /> 
    </Switch>
)

export default AppRoutes; 