import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrouserRouter, Switch, Route} from 'react-router-dom';



if (document.getElementById('root')) {
    ReactDOM.render(
        <BrouserRouter>
            <div>
                <Switch>
                    <Route exact path="/:id/edit" component={TaskEdit}/>
                    <App />
                </Switch>
            </div>

        </BrouserRouter>
        , document.getElementById('root'));
}
