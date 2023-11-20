import React from "react";
import styles from '../styles/Navbar.module.css'
import profilePicture from '../styles/Assets/images/profile.jpg'

function Navbar(props){
    return(
        <div >
            <nav className={styles.container}>
                <h1 className={styles.item}>Guess The Flag</h1>
                <section className={styles.item}>
                    <div className={styles.profileContainer}>
                        <img className={styles.profilePicture} src={profilePicture} alt="profile picture" />
                    </div>
                </section>
            </nav>
        </div>
    )

}

export default Navbar