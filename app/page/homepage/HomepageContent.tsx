import React from 'react';
import styles from './homepage.module.css'

const HomepageContent = () => {
  return (
    <div className='flex flex-col items-center gap-2 tracking-normal h-[45vw] justify-center'>
      <div data-aos="zoom-in" data-aos-duration="400">
        <span className='text-2lg'>Web Designer | Web Developer | Front-end Developer </span>
      </div>
      <div 
        data-aos="zoom-in" 
        data-aos-duration="400" 
        data-aos-delay="350" 
        className='text-7xl font-extrabold mb-2'
      >
        <b>PORTO</b><b className={styles['stroke-font']}>FOLIO</b>
      </div>
      <div 
        data-aos="zoom-in" 
        data-aos-duration="300" 
        data-aos-delay="550"
      >
        <span>Anisa Melinda R</span>
      </div>
    </div>
  );
};

export default HomepageContent;