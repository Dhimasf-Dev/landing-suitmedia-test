"use client"
import React, { useState } from 'react';
import ButtonOutline from '@/app/components/button-outline'
import styles from '../../styles/home.module.css'
import dataProduct from '../data/product'
import CardProduct from '@/app/components/card-product'
import ArrowRight from '../../../../public/icons/arrow-right-icon.svg'

function Section2() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  )

  return (
    <section className={styles.mainContent2}>
    <h3 className="text-sm">Whats new?</h3>
    <h2 className="text-lg primary font-700">Take a look at some of our pets</h2>
  
    <section className={styles.mainProduct}>
      {
        dataProduct.map((data:any, index:number) => (
          <CardProduct 
            key={index}
            image={data.image}
            title={data.title}
            gene={data.gene}
            age={data.age}
            price={data.price}
          />
        ))
      }

      {
        isMobile &&
        <ButtonOutline image={ArrowRight} text="View more" width="85vw" height="48px" />
      }
    </section>
  </section>
  )
}

export default Section2