import React from 'react'
import styles from '../styles/hamburger.module.css'

function BurgerMenu() {
  return (
    <nav role="navigation">
        <section className={styles.menuToggle}>
            <input type="checkbox" />
            
            <span></span>
            <span></span>
            <span></span>

            <ul className={styles.menu}>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Category</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </section>
    </nav>
  )
}

export default BurgerMenu