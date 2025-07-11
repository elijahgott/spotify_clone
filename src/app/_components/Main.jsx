import React from "react";
import styles from '../global.css';

function Main() {
    return(
        <div className="main">
            <div className="homeButtons">
                <button className="active">All</button>
                <button>Music</button>
                <button>Podcasts</button>
                <button>Audiobooks</button>
            </div>

            <div className="section recentButtons">
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">EP.164 - drama</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">Sixteen Stone (Remastered)</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">Liked Songs</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">CHROMAKOPIA</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">IGOR</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">Ep. 238: Kumail Nanjiani</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">goated</p>
                </button>
                <button>
                    <img src="https://placehold.co/100x100"></img>
                    <p className="btn-title">Sublime</p>
                </button>

            </div>

            <h1 className="title">Your shows</h1>
            <div className="section yourShows">
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">The Adam Friedland Show Podcast</a>
                    <p className="btn-subtitle">The Adam Friedland Show</p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">The Tim Dillon Show</a>
                    <p className="btn-subtitle">The Tim Dillon Show</p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Matt and Shane's Secret Podcast</a>
                    <p className="btn-subtitle">Matt McCusker & Shane Gillis</p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Numbers on the Board</a>
                    <p className="btn-subtitle">Omaha Productions, ESPN, Enjoy Basketball</p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Soder</a>
                    <p className="btn-subtitle">Dan Soder</p>
                </button>
            </div>

            <p className="subtitle">Made For</p>
            <h1 className="title">elijahgott_</h1>
            <div className="section madeFor">
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Discover Weekly</a>
                    <p className="btn-subtitle"></p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Daily Mix 01</a>
                    <p className="btn-subtitle"></p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Daily Mix 02</a>
                    <p className="btn-subtitle"></p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Daily Mix 03</a>
                    <p className="btn-subtitle"></p>
                </button>
                <button>
                    <img src="https://placehold.co/400x400"></img>
                    <a className="btn-title">Release Radar</a>
                    <p className="btn-subtitle"></p>
                </button>
            </div>
        </div>
    )
}

export default Main;