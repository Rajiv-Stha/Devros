import React from 'react'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
    <div className={styles.leftContent}>
        <img src='/images/devrosLogo.png' alt='logo'/>
    </div>
    <div className={styles.rightContent}>
    <ul className={styles.navList}>
    <li>Home</li>
    <li>
    {/* yeslai k garne? select ma rakhne ki dropdown icon halne?  */}
        <select>
            <option value="service">Service</option>

        </select>
    </li>
    <li>
        About
    </li>
    <li>Contact</li>
    <li>Portfolio</li>

    </ul>
    </div>
       
    </div>
  )
}

export default Navbar
