"use client"
import React, { useState } from 'react';
import ButtonOutline from '@/app/components/button-outline'
import styles from '../../styles/home.module.css'
import dataBlog from '../data/blog'
import CardBlog from '@/app/components/card-blog'
import ArrowRight from '../../../../public/icons/arrow-right-icon.svg'

function Section4() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  )

  return (
    <section className={styles.mainContent4}>
      <h3 className="text-sm">You already know ?</h3>
      <h2 className="text-lg primary font-700">Useful pet knowledge</h2>
    
      <section className={styles.mainBlog}>
        {
          dataBlog.map((data:any, index:number) => (
            <CardBlog 
              key={index}
              image={data.image}
              title={data.title}
              introduction={data.introduction}
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

export default Section4