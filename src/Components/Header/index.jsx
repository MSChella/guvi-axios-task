import React from 'react'
import { Link } from 'react-router-dom'
// import SignupForm from '../../Pages/signup'

const Navigation = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <Link>Logo</Link>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/aboutus'>About Us</Link>

                            </li>
                            <Link className='nav-link' to='/contactus'>Contact Us</Link>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/signup'>Signup</Link>

                            </li>

                        </ul>
                    </div></div>
            </nav>

        </header>
    )
}

export default Navigation
