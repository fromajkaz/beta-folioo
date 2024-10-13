import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import Magnetic from '../../../common/Magnetic'

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export default function Index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen) 
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen])

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
              <div onMouseLeave={()  => {setSelectedIndicator(pathname)}} className={styles.nav}>
                      {
                        navItems.map( (data, index) => {
                          return <Link 
                          
                          key={index} 
                          data={{...data, index}} 
                          isActive={selectedIndicator == data.href} 
                          onClick={toggleMenu}
                          setSelectedIndicator={setSelectedIndicator}>
                          </Link>
                        })
                      }         
              </div>
     
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}
