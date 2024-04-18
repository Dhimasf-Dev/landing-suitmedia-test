import React from 'react'
import styles from '../styles/button.module.css'
import Image from 'next/image'


interface buttonOutline {
    image: any,
    text: string,
    width: string,
    height: string
}

function ButtonOutline({image, text, width, height}: buttonOutline) {
  return (
    <section className={styles.mainButtonOutline} style={{width: width, height: height}}>
        <p className='primary text-base'>{text}</p>
        <Image src={image} alt='button-outline' />
    </section>
  )
}

export default ButtonOutline