import React from 'react'
import { NavLink } from 'react-router-dom'
const navItem = [
    {
        content: 'Accueil',
        href: '/'
    },
    {
        content: 'Acheter',
        href: '/achat'
    },
    {
        content: 'Louer',
        href: '/louer'
    },
    {
        content: 'Recherche',
        href: '/recherche'
    },
    {
        content: 'A propos',
        href: '/about'
    },
    {
        content: 'Contact',
        href: '/contact'
    },
    {
        content: 'Se connecter',
        href: '/login'
    }, {
        content: "S'inscrire",
        href: '/register'
    },
]
const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-xl  bg-tranparent " >
            <div className="container " >
                <NavLink to="/" className="navbar-brand fw-bolder  " ><img src="/assets/images/logo.png" alt="logo" width="90px" /></NavLink>
                <button className="navbar-toggler bg-light mb-4 position-absolute top-0 mt-4 end-0 me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" >
                        {
                            navItem.map(item => {
                                return (
                                    <li className='nav-item me-2 mt-0 mb-1 mt-lg-3' >
                                        <NavLink className="fontSize18 nav-link text-black" to={item.href} >{item.content}</NavLink>
                                    </li>
                                )
                            })
                        }
                        <li className='nav-item mt-2 mt-lg-3'>
                            <NavLink className="btn btn-warning fw-semibold   rounded-5 fontSize17 shadow-sm px-3"  to={''}><i class="bi bi-camera-fill me-1 align-midlle fontSize17"></i> Publier une annonce</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar