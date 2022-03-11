import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import Home from './home'

import Repositories from './repositories'

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Routes>
        </Router>
    )
}