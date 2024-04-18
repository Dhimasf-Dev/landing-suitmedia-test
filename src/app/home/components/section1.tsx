import React from 'react'
import ButtonContain from '@/app/components/button-contain'
import ButtonOutline from '@/app/components/button-outline'
import styles from '../../styles/home.module.css'
import Image from 'next/image'
import PlayIcon from '../../../../public/icons/play-icon.png'
import BannerWoman from '../../../../public/images/woman-with-dog.svg'

function Section1() {
  return (
    <section className={styles.mainContent1}>
       <section className={styles.content1}>
            <h1 className="primary-80 text-4xl font-800">One more friend</h1>
            <h2 className="primary-80 text-2xl font-700">Thousands more fun!</h2>
            <p className="neutral-80 text-xs line-height-18">
            Having a pet means you have more joy, a new friend, 
            a happy person who will always be with you to have fun. We have 200+ 
            different pets that can meet your needs!
            </p>

            <section className={styles.mainButton}>
                <ButtonOutline image={PlayIcon} text="View Intro" width="161px" height="48px" />
                <ButtonContain text="Explore Now" width="163px" height="48px" />
            </section>
       </section>

        <figure>
            <Image src={BannerWoman} alt="woman-with-dog" width={380} />
        </figure>
    </section>
  )
}

export default Section1