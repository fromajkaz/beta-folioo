'use client';
import Paragraph from '../Paragraph/Paragraph';
import Word from '../Paragraph/Word';
import Character from '../Paragraph/Character';
import styles from '../Paragraph/style.module.scss'

const paragraph = "I'm a web developer with a focus on the React JS, but still exploring other technologies and frameworks that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you!"

export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main id='about' className={styles.main}>
        <Word paragraph={paragraph}/>
    </main>
  )
}