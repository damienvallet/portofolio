"use client";

/**
 * File Name: Home.tsx
 * Description: Main App component
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2025
 * License:
 * Language: JavaScript
 */

import React, { useState, useEffect } from "react";

const taglines = [
  "Audio Creative",
  "Sound Designer",
  "Musician",
  "Sound Engineer",
  "Audio Product Designer",
  "Programmer",
];

const getRandomTagline = () => {
  return taglines[Math.floor(Math.random() * taglines.length)];
};

const HomePage = () => {
  const [tagline, setTagline] = useState(getRandomTagline());
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTagline(getRandomTagline());
        setFade(true);
      }, 1000); // Duration of the fade-out effect
    }, 11000); // Change tagline every 11 seconds (10s + 1s fade-out)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <section className="container-fluid home d-flex flex-column justify-content-center align-items-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="title font-weight-bold ">Damien Vallet</h1>
          <h2 className={`tagline ${fade ? "fade-in" : "fade-out"}`}>
            <b suppressHydrationWarning>{tagline}</b>
          </h2>
          <p className="biography mx-auto">
            <b>About me : </b>
            <br />
            I&apos;m a sound activist with over a decade of experience in the audio software industry.
          </p>
        </div>
      </section>
    </>
  );
};
export default HomePage;
