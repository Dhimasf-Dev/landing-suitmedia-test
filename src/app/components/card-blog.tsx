import React from 'react'
import styles from '../styles/card.module.css'
import Image from 'next/image'
import ButtonTag from './button-tag'

interface cardBlog {
    image: string,
    title: string,
    introduction: string,
    btnTag?: string
}

function CardBlog({ image, title, introduction, btnTag }: cardBlog) {
  return (
    <section className={styles.mainCardProduct}>
      <Image src={image} alt='button-outline' width={0} height={0} style={{width: "100%", height: "100%", maxWidth: "364px", maxHeight: "240px"}} />
      <ButtonTag btnTag={"Pet knowledge"}/>
      <h3 className='neutral-100 text-sm font-700'>{title}</h3>
      <p className='neutral-60 text-xs line-height-18'>
        {introduction}
      </p>
    </section>
  )
}

export default CardBlog