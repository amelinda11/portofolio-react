import React from 'react';
import ListTools from './ListTools';
import styles from '../homepage/homepage.module.css'

const Tools = () => {
  return (
    <div className='align-center'>
    <div className='flex items-center gap-2 justify-center'>
      {/* <FloatingElementX>
        <Image
          src="/saturn.png"
          alt="Experiences"
          width={90}
          height={90}
          className='rotate-[348deg]'
        />
      </FloatingElementX> */}
      <div className='text-5xl font-extrabold mb-2'>
        <b>TO</b><b className={styles['stroke-font']}>OLS</b>
      </div>
    </div>
    <ListTools/>

  </div>
  );
};

export default Tools;