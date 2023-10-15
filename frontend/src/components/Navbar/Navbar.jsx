import React from 'react'
import styles from "./navbar.module.css"
import {IoMdArrowDropdown} from "react-icons/io"

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
    <div className={styles.leftContent}>
        <img src='/images/devrosLogo.png' alt='logo'/>
    </div>
    <div className={styles.rightContent}>
    <ul className={styles.navList}>
    <li>Home</li>
    <li className={styles.serviceOption}>
   <p>Service</p>
   <IoMdArrowDropdown className={styles.dropdownIcon}/>
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
