import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './home'
import Repositories from './repositories'

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/repositories' element={<Repositories />}></Route>
            </Routes>
        </BrowserRouter>
    )
}