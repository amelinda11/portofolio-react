import React from 'react';
import styles from './homepage.module.css'
import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import HomepageContent from './HomepageContent';
import { motion } from "framer-motion";
import AboutMe from '../aboutme/AboutMe';


const Homepage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        delay: 0.2
      }
    }
  }

  return (
    <div className={styles['wrapper-header']}>
      {/* <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      </div> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
      <div className={styles['wrapper-content']}>
        <div className='flex justify-between max-h-28'>
          <Link href="/home">
            <Image 
              src='/icon-a.png' 
              alt='icon-master'
              width={50}
              height={50}
              />
          </Link>
          <FloatingElement className='relative bottom-[113px] left-[30px]'>
            <Image
              src='/astronaut-hero.png'
              alt="astronaut"
              width={250}
              height={250}
            />
          </FloatingElement>
        </div>
        <div>
          <HomepageContent/>
          <AboutMe/>
        </div>
      </div>

    </motion.div>
    </div>
  );
};

export default Homepage;

const FloatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-18px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FloatingElement = styled.div`
  animation: ${FloatingAnimation} 4s ease-in-out infinite;
`;