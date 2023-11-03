import Image from 'next/image';
import React from 'react';
import styles from '../homepage/homepage.module.css'
import { FloatingElement } from '../homepage';
import styled, { keyframes } from 'styled-components';
import ListExperience from './ListExperience';

const Experience = () => {
  return (
    <div className='align-center'>
      <div className='flex items-center gap-2 justify-center'>
        <FloatingElementX>
          <Image
            src="/saturn.png"
            alt="Experiences"
            width={90}
            height={90}
            className='rotate-[348deg]'
          />
        </FloatingElementX>
        <div className='text-5xl font-extrabold mb-0'>
          <b>EXPERI</b><b className={styles['stroke-font']}>ENCES</b>
        </div>
      </div>
      <ListExperience/>

    </div>
  );
};

export default Experience;

const FloatingAnimationX = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(3deg);
  }
`;

const FloatingElementX = styled.div`
  animation: ${FloatingAnimationX} 4s ease-in-out infinite;
`;