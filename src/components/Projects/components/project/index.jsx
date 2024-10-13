'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';

export default function index({index, title,subtitle, href, manageModal}) {

    return (

        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
              
             <a target='_blank' href={href} className={styles.div}>
                    <div className={styles.div}>
                        <div >
                            <h2>{title}</h2>
                            <p>Development</p>                      
                        </div> 
                        <div className={styles.divSub}>
                                <h3>{subtitle}</h3>
                                <div className={styles.year}>
                                <p>Year</p>
                                <p>2024</p>
                                </div>
                        </div> 
                    </div>
            </a>
  

        </div>
    )
}
