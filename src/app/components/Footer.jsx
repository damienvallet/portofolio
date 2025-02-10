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
        <footer className="footer d-flex justify-content-between">
            <div className=" d-flex row p-2 ">
                <div className="d-flex col align-items-end bottom">
                    <p className="copyright">© {new Date().getFullYear()} Damien Vallet</p>
                </div>
                <div className="d-flex col p-2 justify-content-end align-items-end bottom">
                    <ul className="nav col-md-4  list-unstyled">
                        <li className="col ">
                            <a href="https://www.linkedin.com/in/damien-vallet-84464195/">
                                <FaLinkedin className="social-icons" />
                            </a>
                        </li>
                        <li className="col " >
                            <a href="https://github.com/damienvallet">
                                <FaGithub className="social-icons" />
                            </a>
                        </li>
                        <li className="col ">
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