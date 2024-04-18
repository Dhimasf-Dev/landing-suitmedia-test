"use client"
import React, { useState } from 'react';
import styles from '../../styles/footer.module.css'
import Image from 'next/image'
import Facebook from '../../../../public/icons/facebook-icon.svg'
import Twitter from '../../../../public/icons/twitter-icon.svg'
import Instagram from '../../../../public/icons/instagram-icon.svg'
import Youtube from '../../../../public/icons/youtube-icon.svg'
import Logo from '../../../../public/icons/logo.svg'
import ButtonContain from '@/app/components/button-contain'

function Footer() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  )

  return (
    <section className={styles.mainFooter}>
      <section className={styles.mainFooterRegist}>
        <h1 className='text-lg neutral-10 font-700 line-height-32'>Register now so you don't miss our programs</h1>
      
        <section className={styles.mainContentFooterRegist}>
          <input className={styles.inputFooterRegist} type='text' placeholder='Enter your email'/>
          <ButtonContain borderRadius="8px" text="Subscribe Now" width={isMobile ? "98%" : "163px"} height="48px" />
        </section>
      </section>

      <nav>
        <ul className={styles.menu}>
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Category</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Contact</li></a>
        </ul>
      </nav>

      <figure className={styles.mainSosialMedia}>
        <Image src={Facebook} alt='Facebook' width={20} height={20}/>
        <Image src={Twitter} alt='Twitter' width={20} height={20}/>
        <Image src={Instagram} alt='Instagram' width={20} height={20}/>
        <Image src={Youtube} alt='Youtube' width={20} height={20}/>
      </figure>
      
      <section className={styles.mainInfoFooter}>
        <span className={styles.lineBreak}/>    
        <Image src={Logo} alt='Logo' width={115} height={27}/>
        
        <section className={styles.mainPolicy}>
          <h4 className='neutral-60 text-xs'>Terms of Service</h4>
          <h4 className='neutral-60 text-xs'>Privacy Policy</h4>
        </section>
      </section>

      <h5 className='neutral-60 text-xxs'>© 2022 Monito. All rights reserved.</h5>
    </section>
  )
}

export default Footer