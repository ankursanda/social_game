import React from "react";
import Choices from "./Choices";
import styles from '../styles/Flag.module.css';
import flagImg from '../styles/Assets/images/flag.png'

function Flag(){
    return(
        <div className={styles.container}>
            <div className={styles.flagContainer} >
                <h1 className={styles.flagTitle}>Country Flag</h1>
                <img src={flagImg} alt="flag image" />
            </div>
            <Choices />
        </div>
    )
}

export default Flag;
