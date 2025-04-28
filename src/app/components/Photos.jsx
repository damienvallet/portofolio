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

const pics_info = [
    {
        type: "/bw/",
        src: "dv-jesus.jpg",
        alt: "Cantal 2022",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-clavia.jpg",
        alt: "Immunovision",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-hightower.jpg",
        alt: "Oudon Castle",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-shoes.jpg",
        alt: "Shoes 2019",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-traktor.jpg",
        alt: "Normandy 2019",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-water.jpg",
        alt: "Loire 2019",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-hirond.jpg",
        alt: "Hirondelles 2019",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-eagle.jpg",
        alt: "Pygargue 2020",
        caption: "Damien Vallet"
    },
    {
        type: "/bw/",
        src: "dv-lioness.jpg",
        alt: "Lioness 2020",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-rose.jpg",
        alt: "The Wild Rose",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-chu.jpg",
        alt: "Stairway",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-hiddencricket.jpg",
        alt: "Cricket Camouflage",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-kinglizard.jpg",
        alt: "The King Lizard",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-hermine.jpg",
        alt: "Hermine",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-nanteslu.jpg",
        alt: "Lieu Unique",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-mouette.jpg",
        alt: "Seagull",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-seagull2.jpg",
        alt: "Seagulls",
        caption: "Damien Vallet"
    },
    {
        type: "/color/",
        src: "dv-grottaioio.jpg",
        alt: "Cat Cave",
        caption: "Damien Vallet"
    },

];

function Photos() {
    return (
        <>
            {/* section Photos */}
            <section id="projets">
                <div className="container p-2 custom-gradient mt-3 mb-5 p-4">
                    <div className="row p-3">
                        <div className="col">
                            <h4>
                                <span className="subsection-title"> Photography </span>
                            </h4>
                        </div>
                    </div>
                    <div className="row d-flex ">
                        <div className="col">
                            {pics_info
                                .filter((pic) => pic.type === "/bw/")
                                .map((pic, index) => (
                                    <figure key={index}>
                                        <img
                                            src={`${pic.type}${pic.src}`}
                                            className="img-fluid rounded-start p-1"
                                            alt={pic.alt}
                                            width="100%"
                                            height="auto"
                                            loading="lazy"
                                        />
                                        <figcaption className="figure-caption text-center">
                                            <b>{pic.alt}</b> - {pic.caption}
                                        </figcaption>
                                    </figure>
                                ))}
                        </div>
                        <div className="col ">
                            {pics_info
                                .filter((pic) => pic.type === "/color/")
                                .map((pic, index) => (
                                    <figure key={index}>
                                        <img
                                            src={`${pic.type}${pic.src}`}
                                            className="img-fluid rounded-start p-1"
                                            alt={pic.alt}
                                            width="100%"
                                            height="auto"
                                            loading="lazy"
                                        />
                                        <figcaption className="figure-caption text-center">
                                            <b>{pic.alt}</b> - {pic.caption}
                                        </figcaption>
                                    </figure>
                                ))}
                        </div>
                    </div>
                    <div className="row d-flex ">
                        <div className="col ">
                            <figure>
                                <img
                                    src="/color/dv-patf.jpg"
                                    className="img-fluid rounded-start"
                                    alt="Air Show"
                                    width="100%"
                                    height="auto"
                                    loading="lazy"
                                />
                                <figcaption className="figure-caption text-center">
                                    <b>"Air Show 2019"</b> - Damien Vallet
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
