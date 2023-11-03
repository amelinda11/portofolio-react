import React, { useCallback } from 'react';
import styles from './homepage.module.css'
import Image from 'next/image';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import HomepageContent from './HomepageContent';
import { motion } from "framer-motion";
import AboutMe from '../aboutme/AboutMe';
import Experience from '../experience/Experience';
import ListTools from '../tools/ListTools';
import Tools from '../tools/Tools';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";


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

  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
}, []);

  return (
    <div className={styles['wrapper-header']}>
      <div>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      </div>
    
      <div className={styles['wrapper-content']}>
        <div className={styles['background-wrapper']}>
          <div className='flex justify-between max-h-28'>
            <Link href="/home">
              <Image 
                src='/icon-a.png' 
                alt='icon-master'
                width={50}
                height={50}
                />
            </Link>
            <FloatingElement className='relative bottom-[113px] left-[76px]'>
              <Image
                src='/astronaut-hero.png'
                alt="astronaut"
                width={250}
                height={250}
              />
            </FloatingElement>
          </div>
          <div className='flex flex-col gap-40'>
            <HomepageContent/>
            <AboutMe/>
            <Experience/>
            <Tools/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;

const FloatingAnimation = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); } 
`;

export const FloatingElement = styled.div`
   animation-name: ${FloatingAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;

`;
