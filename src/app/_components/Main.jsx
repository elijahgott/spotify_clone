import React from "react";
import styles from '../page.module.css';
import '../global.css';

function Main() {
    return(
        <div className="main">
            <div className="homeButtons">
                <button className="active">All</button>
                <button>Music</button>
                <button>Podcasts</button>
                <button>Audiobooks</button>
            </div>

            <div className="recentButtons">
                <button>EP.164 - drama</button>
                <button>Sixteen Stone (Remastered)</button>
                <button>Liked Songs</button>
                <button>CHROMAKOPIA</button>
                <button>IGOR</button>
                <button>Ep. 238: Kumail Nanjiani</button>
                <button>goated</button>
                <button>Sublime</button>
            </div>

            <h1>Your shows</h1>
            <div className="yourShows">
                <button>The Adam Friedland Show Podcast</button>
                <button>The Tim Dillon Show</button>
                <button>Matt and Shane's Secret Podcast</button>
                <button>Numbers on the Board</button>
                <button>Soder</button>
            </div>

            <p>Made For</p>
            <h1>elijahgott_</h1>
            <div className="madeFor">
                <button>Discover Weekly</button>
                <button>Daily Mix 01</button>
                <button>Daily Mix 02</button>
                <button>Daily Mix 03</button>
                <button>DJ</button>
                <button>Release Radar</button>
            </div>
        </div>
    )
}

export default Main;