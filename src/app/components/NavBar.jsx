/**
* File Name: NavBar.jsx
* Description: Navigation bar component for the website.
* Author: Damien Vallet
* Version: 1.0
* Date: 2025
* Language: JavaScript
*/

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
    '/about': {
      className: 'nav-item nav-custom-link',
      name: 'About',
    },
}

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top flex flex-row align-items-start relative px-0 pb-2 " role="navigation">
                <div className="flex flex-row space-x-0 pr-10" id="navbarNav">
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
                </div>
            </nav>
        </>
    );
}

export default NavBar;