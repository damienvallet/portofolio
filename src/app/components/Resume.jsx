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

function Resume() {
    return (
        <div className="container p-5 custom-gradient biography">
            <div className="row p-2">
                <div className="col">
                    <h6>
                        <span className="subsection-title"> About me : </span>
                    </h6>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        I&apos;m a sound activist with over a decade of experience in the audio software industry. Specializing in sound design and music production, I&apos;ve dedicated my career to creating innovative soundware and audio products. My passion for music and sound continues to drive me, and I&apos;m always exploring new ways to craft unique audio experiences that push creative boundaries.
                    </p>
                    <p>
                        Naturally, I've added to my skills some programming knowledge to sprinkle a bit of magic into my sound design. After being stroke by a genetic cancer and survived from the worst experience of my existence, I had decided to go back to school to learn programming.
                        I've always had a strong interest in programming. I am currently learning C++ and JUCE to help my audio creativity. I am also interested in web development, and I am currently learning different technologies such as React, Next.js, and Node.js to create web applications (No template has been hurt in the process).
                    </p>
                    <p>
                        I've always been engaged in human rights and social justice issues, and I am particularly involved in the cancer community and the right to die with dignity. I'm also the father of a child with dwarfism so I am engaged in the fight against discrimination and for the rights of people with disabilities.
                        I'm an elected member of the city council of my hometown, where I work to improve the quality of life for all citizens. I'm particularly engaged in issues related to food security, the environment, and citizen participation. I trulybelieve that local politics is the best place to make a difference.
                    </p>
                    <p>
                        I'm committed to make a positive impact in the world, and I believe that social change comes from the bottom up. I am convinced that we can all make a difference, and I am determined to do my part.
                    </p>
                </div>
            </div>
            <div className="row p-5">
                <div className="col p-3">
                    <a
                        href="/DV-CV2025_en.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        download
                    >
                        Download Resume English version
                    </a>
                </div>
                <div className="col p-3">
                    <a
                        href="/DV-CV2025_fr.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        download
                    >
                        Télécharger CV version française
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
