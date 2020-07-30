import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'

export default () => {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/signin"><SignIn /></Route>
            <Route><NotFound /></Route>
        </Switch>
    )
}