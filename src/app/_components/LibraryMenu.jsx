import React from "react";
import styles from './LibraryMenu.module.css';

function LibraryMenu() {

    return(
        <div style={{backgroundColor: "rgb(18, 18, 18)", width: "20%", height: "100dvh", minWidth: "250px", maxWidth: "400px",paddingLeft: "16px", paddingRight: "16px", borderRadius: "8px", margin: "8px", marginRight: "4px"}}>
            <div style={{display: "flex", marginTop: "24px", marginBottom: "12px"}}>
                <h1 style={{color: "white"}}>Your Library</h1>
                <button className="pill-button" style={{marginRight: "0", marginLeft: "auto", marginTop: "-12px"}}>+ Create</button>
            </div>

            <div className={styles.categories}>
                <button className="pill-button">Playlists</button>
                <button className="pill-button">Podcasts</button>
                <button className="pill-button">Audiobooks</button>
                <button className="pill-button">Albums</button>
                <button className="pill-button">Artists</button>
                <button className="pill-button">Downloaded</button>
            </div>

            <div style={{display: "flex", marginTop: "8px", marginBottom: "16px"}}>
                <button className={styles.searchButton}>
                    <img src="https://placehold.co/15x15"></img>
                </button>
                <button className={styles.recentsButton}>Recents</button>
            </div>

            <div>
                <button className={styles.libraryButton}>
                    <div style={{width: "16%", minWidth: "50px",borderRadius: "4px", margin: "8px"}}>
                        <img src="https://placehold.co/100x100"></img>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h1 className={styles.libraryTitle}>Liked Songs</h1>
                        <p className={styles.librarySubtitle}>Playlist • 3,156 songs</p>
                    </div>
                </button>
                <button className={styles.libraryButton}>
                    <div style={{width: "16%", minWidth: "50px", borderRadius: "4px", margin: "8px"}}>
                        <img src="https://placehold.co/100x100"></img>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h1 className={styles.libraryTitle}>bart simpson</h1>
                        <p className={styles.librarySubtitle}>Playlist • elijahgott_</p>
                    </div>
                </button>


                <button className={styles.libraryButton}>
                    <div style={{width: "16%", minWidth: "50px", borderRadius: "4px", margin: "8px"}}>
                        <img src="https://placehold.co/100x100"></img>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h1 className={styles.libraryTitle}>CHROMAKOPIA</h1>
                        <p className={styles.librarySubtitle}>Album • Tyler, The Creator</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default LibraryMenu;