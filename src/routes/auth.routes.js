import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { useAuth } from '../context/auth.jsx';

import List from '../pages/List/List';
import FaceRecognition from '../pages/FaceRecognition/FaceRecognition';

const AuthRoutes = () => {
    const {signed} = useAuth();

    const history = useHistory();

    if(signed){
        return(
            <Switch>
                <Route path="/list" component={List} />
                <Route path="/face-recognition" component={FaceRecognition} />
            </Switch>
            )

    } else{
        history.push('/');

        return <></>


    }


}

export default AuthRoutes; 