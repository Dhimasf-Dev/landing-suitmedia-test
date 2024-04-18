import React from 'react'
import styles from '../styles/button.module.css'

interface buttonContain {
    text: string,
    width: string,
    height: string,
    borderRadius? : string
}

function ButtonContain({text, width, height, borderRadius}: buttonContain) {
  return (
    <section className={styles.mainButtonContain} style={{width: width, height: height, borderRadius: borderRadius}}>
      <p className='neutral-10 text-base'>{text}</p>
    </section>
  )
}

export default ButtonContain