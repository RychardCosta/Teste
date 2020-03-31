import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Cadastro'
import Falha from './pages/status/Falha'
import Sucesso from './pages/status/Sucesso'


export default function Routes() {
    return (
        
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/falha' component={Falha} />
                <Route path='/sucesso' component={Sucesso} />

            </Switch>
        </BrowserRouter> 



        
    );
}