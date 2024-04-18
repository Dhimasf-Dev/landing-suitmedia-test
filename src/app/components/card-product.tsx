import React from 'react'
import styles from '../styles/card.module.css'
import Image from 'next/image'

interface cardProduct {
    image: string,
    title: string,
    gene: string,
    age: string,
    price: string
}

function CardProduct({  image, title, gene, age, price }: cardProduct) {
  return (
    <section className={styles.mainCardProduct}>
        <Image src={image} alt='button-outline' width={0} height={0} style={{width: "100%", height: "100%", maxWidth: "264px", maxHeight: "264px"}} />
        <h3 className='neutral-100 text-sm font-700'>{title}</h3>
        <p className='neutral-60 text-xs'>
          Gene : &nbsp;
          <span className='font-700'>{gene}</span>
        </p>
        <p className='neutral-60 text-xs'>
          Age : &nbsp;
          <span className='font-700'>{age}</span>
        </p>
        <p className='neutral-100 text-base font-700'>
          {price}
        </p>
    </section>
  )
}

export default CardProduct