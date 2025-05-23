/**
 * File Name: Resume.jsx
 * Description: Resume component
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2025
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
                        Naturally, I&apos;ve added to my skills some programming knowledge to sprinkle a bit of magic into my sound design. After surviving an aggressive genetic cancer, I made the decision to go back to school and learn programming. Working in the audio software industry, I realized that I needed to understand the code behind the software I was using. I started with Python to take care of the large numbers of samples I had to manage. I created a few scripts to automate the process of renaming, editing, and organizing samples. In parallel, I used Lua to create interfaces and engines for UVI soundware.
                    </p>
                    <p> 
                        I then moved on to C++ and JUCE, which allowed me to learn OOP more deeply by working on adding new features to existing tools. I also learned a bit of JavaScript, HTML, and CSS to create web-based interfaces for future plugins.
                         I&apos;m currently learning web front-end development to expand my skills and change my career path. I&apos;ve always been curious and passionate about technology. I find programming to be a (painfully) fascinating and rewarding challenge, and I&apos;m excited to see where this new path will take me.
                    </p>
                    <p>
                        I&apos;ve always been engaged in human rights and social justice issues, and I&apos;m particularly involved in the cancer community and the right to die with dignity. I&apos;m also the father of a child with dwarfism so I&apos;m deeply involved in the fight against discrimination and for the rights of people with disabilities.
                        Furthermore, I&apos;m an elected member of the city council of my hometown, where I work to improve the quality of life for all citizens. I&apos;m particularly engaged in issues related to food security, water access, the environment, and citizen participation. I truly believe that local politics is the best place to make a difference.
                    </p>
                    <p>
                        I&apos;m committed to making a positive impact in the world, and I believe that social change comes from the bottom up. I&apos;m convinced that we all have the power to make a difference, and I&apos;m determined to do my part in that process.
                        Feel free to reach out. 
                    </p>
                    <p>
                        <span className="signature">
                            D.V.
                        </span> 
                    </p>
                </div>
            </div>
            <div className="row p-4">
                <div className="col p-3 text-center">
                    <a
                        href="/DV-CV2025_en.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-download"
                        download
                    >
                        Download Resume English version
                    </a>
                </div>
                <div className="col p-3 text-center">
                    <a
                        href="/DV-CV2025_fr.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-download"
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
