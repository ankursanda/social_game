import React from "react";
import styles from '../styles/RankCard.module.css';


function RankCard(){
    const playersList = ['Player1', 'Player2', 'Player3']
    return(
        <div className={styles.container}>
            <h1 className={styles.rankTitle}>Rank</h1>
            <ul className={styles.rankList}>
             {playersList.map((item)=> {
                return( <li className={styles.rankItems}>{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default RankCard;