import React from "react";
import styles from '../styles/ScoreCard.module.css';

function ScoreCard(){
    return(
        <div className={styles.container}>
            <h1 className={styles.scoreItem} >Your Best</h1>
            <h2 className={styles.scoreItem} >136</h2>
            <h1 className={styles.scoreItem} >Your Current</h1>
            <h2 className={styles.scoreItem} >22</h2>
        </div>
    )
}

export default ScoreCard;