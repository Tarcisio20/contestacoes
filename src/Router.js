import React from 'react'
import { Switch } from 'react-router-dom'

import RouterHandler from './Components/RouteHandler'


import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'
import Add from './Pages/Add'

export default () => {
    return (
        <Switch>
            <RouterHandler private exact path="/"><Home /></RouterHandler>
            <RouterHandler private exact path="/add"><Add /></RouterHandler>
            <RouterHandler exact path="/signin"><SignIn /></RouterHandler>
            <RouterHandler><NotFound /></RouterHandler>
        </Switch>
    )
}