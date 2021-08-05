import React from 'react'
import './style.scss'
import { RouteConfig } from '../../../Configure/RouteConfig'
import Router from '../../../Service/RouterService'
import { useStickyHeader } from 'react-use-sticky-header';

const Header = () => {
    const [setHeaderRef] = useStickyHeader(300, {
        headerDetached: 'header--detached-custom'
    });
    return (
        <>
            <header class="header" ref={setHeaderRef}>
                <h1 style={{ cursor: "pointer" }} onClick={() => Router.pushRoute(RouteConfig.LANDING)} class="logo"><img src="data:image/webp;base64,UklGRhwCAABXRUJQVlA4TBACAAAvcMAIEIdAkG3T3d/5GmraNmDScZY/3RJI2rj373xFjSSpwX0zH+g4OxcAQAYVEWYETGjsgoA6Y96r85N67kOWbFtxWx3QFUKA2Hf+06VJ7CSv/Yno/wToX/UK+PcAUL9WzBXoJf0UIbN+7EcIje3zJyjs9/D9GeN9SGcDyO8Vrwrw3Lay0qEX+0gCuGdluDSGB+iTmBvQcnxR6qxLGEJlWcJW7EDTHODRPAFESc7aX3KynYfGZtlqQI8zG+6FDSZldvMr6nBFnQ1AkgNcId4AacMBTm35Qu7uUQZQDh0FwF6Qa62XJNlwSB1wSapAWRlA1ifNC1A1VqC+YHNiMoA4ONAX4QGaXgOQJifAS+JVGkvTNWg0d/dFAXp8zTHYxAZ7QWbb5BvLoQFc+jR392ifl9w9bWXeYvqEj9wrAHtBBepOYLwtymbXRnR336JshOFZHEM8XtMkhZkNl6SVDWEwoO9xrtQAfFaARxrS5By0zgCucA8+s6HO1AEfbqAu7mPocZUGyiEdBcClAtRJBapUAZfOYW2zeuisjFcMGeAK0QHSrEgOUFeqw2YPkgGUQ0cBsA21nSqps+yd0UJjs2nmkhrAtQpt75SkzG7WTmirGiSlRTvyTKGtWtiKHejHQuHeeExT33BtSakCvSRN7X6gXUHKHUqUlEqHXpLGlS6AFhZSzBXoJWkdcwNajvrIf8I=" alt="" /></h1>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul class="main-nav">
                        <li><a onClick={() => Router.pushRoute(RouteConfig.LANDING)}>Home</a></li>
                        <li><a onClick={() => Router.pushRoute(RouteConfig.ABOUT)}>About</a></li>
                        <li><a onClick={() => Router.pushRoute(RouteConfig.PORTFOLIO)}>Portfolio</a></li>
                        <li><a onClick={() => Router.pushRoute(RouteConfig.BLOG)}>Blog</a></li>
                        <li><a onClick={() => Router.pushRoute(RouteConfig.CONTACT)}>Contact</a></li>
                        <li><a id='email-contact' onClick={() => Router.pushRoute(RouteConfig.CONTACT)}>Fire Me An Email</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header;

