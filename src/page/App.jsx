import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home/components/Home';
import Voiture from './auto/components/Voiture';
import './app.css';
function App() {

    return (

        <>
            <div className='body'>
                <div className='title'>
                    <div>
                        <p>Finona Ny Aina </p>
                    </div>
                    <div>
                        <p>About</p>
                    </div>
                </div>

                <div className='container'>
                    <div className='nav-gauche'>
                        <div>
                            <nav>
                                <ul className='ul-nav'>
                                    <li><Link to="/" className='link'> Home </Link></li>
                                    <li><Link to="/voiture" className='link'> Voiture ID </Link></li>
                                </ul>
                            </nav>
                        </div>

                    </div>

                    <div className='nav-droite'>

                        <Routes>
                            <Route path='/' element={<Home />} ></Route>
                            <Route path='/voiture' element={<Voiture />}></Route>
                        </Routes>

                    </div>

                </div>
            </div>



        </>
    )
}

export default App;