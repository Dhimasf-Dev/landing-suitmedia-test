import React from 'react'
import ButtonContain from '@/app/components/button-contain'
import ButtonOutline from '@/app/components/button-outline'
import styles from '../../styles/home.module.css'
import BannerWoman2 from '../../../../public/images/woman-with-dog-2.svg'
import PlayIcon from '../../../../public/icons/play-icon.png'
import Image from 'next/image'

function Section3() {
  return (
    <section className={styles.mainContent3}>
      <section className={styles.content3}>
        <h1 className="font-800 text-3xl primary-80">One more friend</h1>
        <h2 className="font-700 text-xl primary-80">Thousands more fun!</h2>
        <p className="primary-80 text-xs line-height-18">
          Having a pet means you have more joy, 
          a new friend, a happy person who will always be 
          with you to have fun. We have 200+ different pets 
          that can meet your needs!
        </p>

        <section className={styles.mainButton2}>
          <ButtonOutline image={PlayIcon} text="View Intro" width="161px" height="48px" />
          <ButtonContain text="Explore Now" width="163px" height="48px" />
        </section>
      </section>

      <figure>
        <Image src={BannerWoman2} alt="woman-with-dog" width={380} />
    </figure>
  </section>
  )
}

export default Section3