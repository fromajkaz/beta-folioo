import styles from './style.module.scss';
import { motion } from 'framer-motion';
import Magnetic from '../../../../common/Magnetic'

export default function index() {
  return (
    <motion.div className={styles.footer}>
      <Magnetic>
        <div className={styles.el}>
          <div className={styles.indicator}></div>
          <a target='_blank' href='https://t.me/fromajkaz'>Telegram</a>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
          <div className={styles.indicator}></div>
          <a target='_blank' href='https://www.instagram.com/fromajkaz/'>Instagram</a>
        </div>
      </Magnetic>
      <Magnetic>
        <div className={styles.el}>
          <div className={styles.indicator}></div>
          <a target='_blank' href='https://github.com/fromajkaz'>Github</a>
        </div>
      </Magnetic>
    </motion.div>
  )
}
