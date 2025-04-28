/**
 * File Name: Photos.jsx
 * Description: Projects component
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: 
 * Language: JavaScript
 */

import React from 'react';

function Photos() {
    return (
        <>
            {/* section Photos */}
            <section id="projets">
                <div className="container p-2 custom-gradient mt-3 mb-5 p-4">
                    <div className="row p-3">
                        <div className="col">
                            <h4>
                                <span className="subsection-title"> Photos </span>
                            </h4>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center ">
                        <div className="col">
                            <figure>
                                <img
                                    src="/dv-jesus.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    width="80%"
                                    height="auto"
                                    loading="lazy"
                                />
                                <figcaption className="figure-caption text-center">
                                    <b>Cantal 2022</b> - Damien Vallet
                                </figcaption>
                            </figure>
                        </div>
                   </div>
                </div>
            </section> 
        </>
    );
}

export default Photos;
