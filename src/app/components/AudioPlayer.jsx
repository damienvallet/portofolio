/**
 * File Name: AudioPlayer.jsx
 * Description: 
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2025
 * License: 
 * Language: JavaScript
 */

import {FaPlay} from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import {FaPause} from "react-icons/fa";

const AudioPlayer = () => {
    return (
        <div className="container">
            <div className="player">
                <div className="player_content">
                    <div id="player-album-art">
                        {/* <img
                        src=""
                        alt="song cover art"
                        /> */}
                    </div>
                    <div className="player-display">
                        <div className="player-display-song-artist">
                            <p id="player-song-title"></p>
                            <p id="player-song-artist"></p>
                        </div>
                        <div className="player-buttons">
                            <button id="previous-button" className="player-button"></button>
                            <button id="next-button" className="player-button"></button>
                            <button id="play-button" className="player-button"></button>
                            <button id="pause-button" className="player-button"></button>
                        </div>
                        <div className="player-playlist">
                            <ul id="playlist-songs"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;