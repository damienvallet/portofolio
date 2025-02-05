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


const Footer = () => {
    return (
        <footer className="footer ">
            <div className="container container-fluid ">
                <div className="row justify-content-center p-2 ">
                    <div className="col d-flex justify-content-start align-items-end bottom">
                        <p className="copyright">© 2025 Damien Vallet</p>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="col d-flex justify-content-end">
                            <a href="https://www.linkedin.com/in/damien-vallet-84464195/">
                                <FaLinkedin className="social-icons" />
                            </a>
                        </li>
                        <li className="col d-flex justify-content-end" >
                            <a href="https://github.com/damienvallet">
                                <FaGithub className="social-icons" />
                            </a>
                        </li>
                        <li className="col d-flex justify-content-end">
                            <a href="https://mastodon.social/@darladada">
                                <FaMastodon className="social-icons" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;