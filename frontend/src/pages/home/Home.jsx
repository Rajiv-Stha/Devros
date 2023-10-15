import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className={styles.homepage_container}>
      <Navbar/>
      <div className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <p>WE ARE HERE FOR</p>
          <h1>WEBSITE, DESIGN AND TRAINING</h1>
        </div>
        <div className={styles.heroRight}>
          <img src='/images/Asset1.png' alt='heroImg' />
        </div>
      </div>

    </div>
  )
}

export default Home
