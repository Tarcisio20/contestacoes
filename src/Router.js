import React from 'react'
import { Switch } from 'react-router-dom'

import RouterHandler from './Components/RouteHandler'


import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'

export default () => {
    return (
        <Switch>
            <RouterHandler private exact path="/"><Home /></RouterHandler>
            <RouterHandler exact path="/signin"><SignIn /></RouterHandler>
            <RouterHandler><NotFound /></RouterHandler>
        </Switch>
    )
}