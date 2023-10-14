import React from 'react'
import styles from "./home.module.css"
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className={styles.homepage_container}>
      <Navbar/>
    </div>
  )
}

export default Home
