import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import styles from '../homepage/homepage.module.css'
import { FloatingElement } from '../homepage';

const AboutMe = () => {
  return (
    <div className='w-full flex'>
      <div className='w-1/2 flex justify-center items-center'>
        <StyledWrapperCircle>
          <Image
            src='/astronaut-hero.png'
            alt="astronaut"
            width={250}
            height={250}
          />
        </StyledWrapperCircle>
      </div>
      <div className='w-1/2 flex items-center flex-col gap-4'>
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
        <p className='text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque lacinia quam eu porttitor. 
          Mauris nec purus elit. Fusce lobortis dapibus orci, sed convallis sem dignissim eu. Vestibulum et bibendum mauris. 
          Nullam rutrum dignissim erat, nec ultricies risus mattis ac. Cras eu ipsum eget diam pharetra sollicitudin. 
          Duis hendrerit dui nec lectus tincidunt semper. Donec vitae felis sit amet leo aliquet scelerisque.
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