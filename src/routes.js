import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/app.routes.js';
import AuthRoutes from './routes/auth.routes.js';

import { AuthProvider, useAuth } from './context/auth';

const Routes = () => {
    const {loading} = useAuth();

    if (loading) {
        return <h1>Carregando</h1>
    }

    //The switch is used to allow just one route at a time to be accessed
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRoutes /> 
                <AuthRoutes />
            </AuthProvider>

        </BrowserRouter>
    );
}

export default Routes; 