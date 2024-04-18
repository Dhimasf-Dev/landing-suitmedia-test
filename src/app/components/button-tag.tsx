import React from 'react'
import styles from '../styles/button.module.css'
import Image from 'next/image'

interface cardBlog {
  btnTag: string
}

function ButtonTag({ btnTag }: cardBlog) {
  return (
    <section className={styles.mainButtonTag}>
        <p className='neutral-10 text-xs'>
          {btnTag}
        </p>
    </section>
  )
}

export default ButtonTag