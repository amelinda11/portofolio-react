import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import styles from '../homepage/homepage.module.css'
import { FloatingElement } from '../homepage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className='w-full flex'>
      <div 
        data-aos="fade-right" 
        data-aos-duration="600" 
        className='w-1/2 flex justify-center items-center'
      >
        <StyledWrapperCircle>
          <Image
            src='/astronaut-hero.png'
            alt="astronaut"
            width={250}
            height={250}
          />
        </StyledWrapperCircle>
      </div>
      <div 
        data-aos="fade-left" 
        data-aos-duration="600" 
        data-aos-delay="550"
        className='w-1/2 flex items-center flex-col gap-4'
      >
        <div className='w-full flex flex-col items-center gap-2'>
          <FloatingElement>
            <Image
              src='/ufo.png'
              alt="astronaut"
              width={50}
              height={50}
            />
          </FloatingElement>
          <div className='text-5xl font-extrabold mb-2'>
            <b>ABOUT</b><b className={styles['stroke-font']}> ME</b>
          </div>
        </div>
        <p className='font-normal'>
          Hello there! My name is Anisa Melinda Rahmayunita, but you can call me Nisa.<br/>
          I graduated in 2019 from&nbsp; 
          <Link href="https://telkomuniversity.ac.id/en/">Telkom University</Link> 
          with a major in&nbsp; 
          <Link href="https://telkomuniversity.ac.id/en/">Information Systems</Link>.  
          I am a dedicated and passionate front-end developer with <b>over three years</b> of specialized experience in web development, 
          I have experience developing and designing software for the web, from simple landing pages to progressive web applications. 
          <br/><br/>
          Currently, I work as an&nbsp; 
          <Link href="https://kfcku.com/">Engineer at PT Fast Food Indonesia</Link>, 
          commonly known as KFC, where I am responsible for building components for the internal website. I thoroughly enjoy my role as a front-end developer in this company as it grants me the privilege to enhance UI and UX designs, cause in my opinion
          design is a primary aspect of a front-end developer&apos;s responsibilities.
          <br/><br/>
          When I&apos;m not in front of a computer screen, you&apos;ll likely find me at the park, enjoying nature, or simply relaxing in a comfortable spot to learn new things, such as delving deeper into improving my English language skills and tech skills, for now I learn about development with mobile apps (react native, flutter).<br/>
          Travelling around the town is a must&nbsp;
          <FontAwesomeIcon icon={faSmile}/>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

export const StyledWrapperCircle = styled.div`
  width: 210px;
  height: 210px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23FFEAD2FF' stroke-width='5' stroke-dasharray='6%2c 3%2c 7%2c 12' stroke-dashoffset='26' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 100px;
`;