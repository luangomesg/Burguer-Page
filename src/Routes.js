import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Faça pedidos';
import Pedidos from './pages/Pedidos';


function Myroutes() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Pedidos' element={<Pedidos/>}/>
            </Routes>
        </Router>
    )
}

export default Myroutes

