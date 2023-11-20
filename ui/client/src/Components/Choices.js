import React from "react";
import styles from '../styles/Choices.module.css';


function Choices(){
    const options = ['Country1', 'Country2', 'Country3', 'Country4']

    return(
        <div className={styles.container}>
            <ul className={styles.choicesContainer}>
                {options.map((item, i) =>{
                   return( <li key={i} className={styles.item}><button>{item}</button></li> )
                })}
            </ul>
        </div>
    )
}

export default Choices;