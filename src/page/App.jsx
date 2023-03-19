import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/components/Home';
import Voiture from './auto/components/Voiture';
function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/voiture' element={<Voiture />}></Route>
            </Routes>

        </>
    )
}

export default App;