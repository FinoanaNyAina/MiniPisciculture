import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home/components/Home';
import Voiture from './auto/components/Voiture';
import './app.css';
import Car from '../images/Car.png';
import Fiche from '../images/Configuration.png';
import User from '../images/user.png';
import Liste from '../images/clipboard.png';



function App() {

    return (

        <>
            <div className='body'>
                <div className='title'>
                    <div>
                        <p className='logoP' >GESTION Voiture</p>
                    </div>
                    <div>
                        <p>About</p>
                    </div>
                </div>

                <div className='container'>
                    <div className='nav-gauche'>
                        <div>
                            <nav className='nav'>
                                <ul className='ul-nav'>
                                    <li className='li-nav1'><Link to="/" className='link'> <img src={User} className='logo' alt='logo cehicule' /></Link></li>
                                </ul>
                                <ul className='ul-nav'>
                                    <li className='li-nav2'><Link to="/" className='link'> <img src={Fiche} className='logo' alt='logo cehicule' /></Link></li>
                                </ul>
                                <ul className='ul-nav'>
                                    <li className='li-nav3'><Link to="/" className='link'> <img src={Car} className='logo' alt='logo cehicule' /></Link></li>
                                </ul>
                                <ul className='ul-nav'>
                                    <li className='li-nav4'><Link to="/voiture" className='link'><img src={Liste} className='logo' alt='logo cehicule' /></Link></li>
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