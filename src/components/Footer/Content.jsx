import React from 'react'
import Magnetic from '../../common/Magnetic'
import styles from '../Footer/style.module.scss'
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400',  ],
});

export default function Content() {
  return (
    <div className='bg-white lg:py-8 lg:px-12 py-4 px-8 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>   
          <div>
            <div className={pacifico.className}>
              <h1 className='text-right lg:mb-40 mb-60 md:mb-60  text-6xl'>bye - bye ~_~ </h1>
            </div>
           <h1 className='text-[12vw] leading-[0.8] '>FRONT <span className='text-5xl md:text-9xl'><b className={pacifico.className}>end</b></span></h1> 
            <h1 className='text-[12vw] leading-[0.8] '>DEVELOPER</h1>
          </div>
            <div>
            <p>©copyright</p>            
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div 
        className='flex items-center justify-start gap-20'>
            <div className='flex flex-row gap-8 mt-16'>
           
              <Magnetic>
                <div className={styles.el}>
                  <div className={styles.indicator}></div>
                  <a href="#home">Home</a>
                </div>
              </Magnetic>
              <Magnetic>
                <div className={styles.el}>
                  <div className={styles.indicator}></div>
                  <a href="#about">About</a>
                </div>
              </Magnetic>
              <Magnetic>
                <div className={styles.el}>
                  <div className={styles.indicator}></div>
                  <a href="#work">Work</a>
                </div>
              </Magnetic>
              <Magnetic>
                <div className={styles.el}>
                  <div className={styles.indicator}></div>
                  <a href="#contact">Contact</a>
                </div>
              </Magnetic>
            </div>
        </div>
    )
}