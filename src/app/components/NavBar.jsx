/**
* File Name: NavBar.jsx
* Description: Composant qui gère la barre pour naviguer entre les versions
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// import React from 'react';
import Link from 'next/link'
const navItems = {
    '/': {
      className: 'navbar-brand',
      name: 'DV',
    },
    '/projects': {
      className: 'nav-item nav-custom-link',
      name: 'Projects',
    },
}

function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top flex flex-row align-items-start relative px-0 pb-0 " role="navigation">
            <div className="flex flex-row space-x-0 pr-10" id="navbarNav">

                    {/* <Link href="/" className="navbar-brand">DV</Link> */}
                    {Object.entries(navItems).map(([path, { className, name }]) => {
                        return (
                            <Link
                            key={path}
                            href={path}
                            className={className}
                            >
                            {name}
                            </Link>
                        )
                        })}

            
                {/* <Link className="navbar-brand" to="/">Damien Vallet</Link> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                    {/* <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> */}
                        {/* <li className="nav-item active">
                            <Link className="nav-link" href="/">Home</Link>
                        </li> */}
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/aboutme">About Me</Link>
                        </li> */}
                        {/* <li className="nav-item"> */}
                            {/* <Link className="nav-link" href="/Projects" replace={true}>Projects</Link> */}
                        {/* </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> */}
                    {/* </ul> */}
                {/* </div> */}
            {/* </div> */}
            </div>
        </nav>
        </>
    );
}

export default NavBar;