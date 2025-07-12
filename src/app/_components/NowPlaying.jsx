import React from 'react';
import styles from './NowPlaying.module.css';

function NowPlaying(){
    return(
        <div style={{position: "relative", backgroundColor: "rgb(18, 18, 18)", width: "20%", height: "100dvh", minWidth: "250px", maxWidth: "400px", borderRadius: "8px", margin: "8px", marginLeft: "4px", marginRight: "8px"}}>
            <div className={styles.bgFade}></div>
            <div style={{position: "relative"}}>
                <img style={{width: "100%", borderRadius: "4px 4px 0 0"}} src="https://placehold.co/200x300/grey/white"></img>
                <h1 style={{position: "absolute", zIndex: 100, top: "24px", left: "16px"}}>Sublime</h1>
                <h1 className="title" style={{position: "absolute", zIndex: 100, bottom: "32px", left: "16px", fontSize: "20px"}}>Pawn Shop</h1>
                <p className='subtitle' style={{position: "absolute", zIndex: 100,  bottom: "16px", left: "16px", fontSize: "16px"}}>Sublime</p>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginTop: "24px", marginBottom: "12px"}}>
                {/*  */}
            </div>
        </div>
    )
}
export default NowPlaying;