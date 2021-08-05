import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RouteConfig } from '../Configure/RouteConfig'
import Home from './Home/index'
import About from './About/index'
import Portfolio from './Portfolio/index'
import Blog from './Blog/index'
import Contact from './Contact/index'
import RouterService from '../Service/RouterService'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter ref={RouterService.setBrowserHistoryRef}>
                <Switch>
                    <Route exact path={RouteConfig.LANDING} component={Home} />
                    <Route exact path={RouteConfig.ABOUT} component={About} />
                    <Route exact path={RouteConfig.PORTFOLIO} component={Portfolio} />
                    <Route exact path={RouteConfig.BLOG} component={Blog} />
                    <Route exact path={RouteConfig.CONTACT} component={Contact} />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRoutes;