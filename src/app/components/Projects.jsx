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

function Projects() {
    return (
        <>
            {/* section Projets */}
            <section id="projets">
                <div className="container p-5 custom-gradient ">
                    <div className="row">
                        <div className="col">
                            <h2>
                                <span className="title"> Projets </span>
                            </h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col ratio ratio-16x9">
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/LHycQ7z5rUE?si=fkmdlyK2lCbW6rwj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                        </div>
                        <div className="col">
                            <a
                                href="https://www.uvi.net/glass-orchestra"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Glass Orchestra
                            </a>
                            &nbsp; by UVI Sounds and Software
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col">
                            <a
                                href="https://www.uvi.net/en/bass-drums-perc/soul-drums.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Soul Drums
                            </a>
                            &nbsp; by UVI Sounds and Software
                        </div>
                        <div className="col ratio ratio-16x9">
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/9N-y51YpAcQ?si=O2FHB0yuk1iwzv_z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col ratio ratio-16x9">
                            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/x4JVg3drMms?si=xGZqecbKc8XgB6ro" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div className="col">
                            Mc Solaar &nbsp;
                            <a href="https://youtu.be/x4JVg3drMms?feature=shared">
                                <em>Les Mirabelles</em>
                            </a>
                            &nbsp; sur l'album Géopoétique (2017)
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
