"use client"
import React, { useState } from 'react';
import BurgerMenu from '@/app/components/burger-menu'
import styles from '../../styles/header.module.css'
import Image from 'next/image'
import Logo from '../../../../public/icons/logo.svg'
import SerchIcon from '../../../../public/icons/search-icon.svg'
import ButtonContain from '@/app/components/button-contain';

function Header() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  )

  return (
    <section className={styles.mainHeader}>
        {
          isMobile &&
          <BurgerMenu /> 
        }
        <Image src={Logo} alt='logo' width={92} height={32}/>
        {
          !isMobile &&
          <nav>
            <ul className={styles.menu}>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Category</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
          </nav>
        }
        <section className={styles.mainSearch}>
        {
          isMobile ?
          <Image src={SerchIcon} alt='logo' width={23} height={23}/> :
          <input className={styles.inputHeader} type='text' placeholder='Search something here!'/>
        }
        {
          !isMobile &&
          <ButtonContain text="Join the community" width="203px" height="48px" />
        }
        </section>
    </section>
  )
}

export default Header