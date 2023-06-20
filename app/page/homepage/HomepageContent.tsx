import React from 'react';
import styles from './homepage.module.css'

const HomepageContent = () => {
  return (
    <div className='flex flex-col items-center gap-2 tracking-normal h-[45vw] justify-center'>
      <span className='text-lg'>Web Designer | Web Developer | Front-end Developer </span>
      <div className='text-5xl font-extrabold mb-2'>
        <b>PORTO</b><b className={styles['stroke-font']}>FOLIO</b>
      </div>
      <span>Anisa Melinda R</span>
    </div>
  );
};

export default HomepageContent;