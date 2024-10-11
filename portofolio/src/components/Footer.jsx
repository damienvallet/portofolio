/**
 * File Name: App.js
 * Description: Main App component
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: 
 * Language: JavaScript
 */

import React from 'react';

// 
import { FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";


function Footer() {
    return (
        <footer className="footer">
            <div className="container container-fluid">
                <div className="row p-2">
                    <div className="col d-flex justify-content-center align-items-center">
                        <p>© 2024 Damien Vallet</p>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <a href="https://www.linkedin.com/in/damien-vallet-84464195/">
                            <FaLinkedin className="social-icons" />
                        </a>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center" >
                        <a href="https://github.com/damienvallet">
                            <FaGithub className="social-icons" />
                        </a>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                        <a href="https://mastodon.social/@darladada">
                            <FaMastodon className="social-icons" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;