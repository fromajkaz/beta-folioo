import React, { useState } from 'react';
import {motion} from "framer-motion"
import Image from 'next/image';
import styles from './style.module.scss'
import Magnetic from '../../common/Magnetic'

// import { Permanent_Marker } from 'next/font/google';
import { DotGothic16, Pacifico } from 'next/font/google';
// Pacifico
// DotGothic16
const lond = Pacifico({
  subsets: ['latin'],
  weight: ['400', ],
});


function HoverImageText() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Обработчик перемещения мыши
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <main className={lond.className}>
      <motion.div
      className={styles.main}>
        {/* Текст с событиями наведения */}
        <Magnetic>
        <motion.h1 
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}

          className={styles.h1}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          >☀ fromajkaz ☀</motion.h1>
        </Magnetic>

        {/* Картинка под текстом */}
        {isHovered && (
          
          <Image
          src="/images/rb.jpg"
          width={500}
          height={500}
          style={{
            left: mousePosition.x - 50 + 'px', // Центрирование картинки по горизонтали
            top: mousePosition.y - 50 + 'px',  // Центрирование картинки по вертикали
          }}
          className={styles.img}
          />
            // src={FlagImage} // Замените на свою картинку
            // alt="Картинка"
            // className="absolute w-1/3  pointer-events-none z-0 "

        )}
      </motion.div>
    </main>
  );
}

export default HoverImageText;
