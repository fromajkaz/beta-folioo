'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
// import Description from '../components/Description';
import Paragraph from '@/components/Paragraph/index';

import { Righteous } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400',  ],
});

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <section className={righteous.className}>
      <main 
      className={styles.main}>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Landing />
        <Paragraph/>
        <Projects />

        <Footer/>
      </main>
    </section>
  )
}
