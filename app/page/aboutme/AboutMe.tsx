import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <div className='w-full flex'>
      <div className='w-1/2 flex justify-center align-center'>
        <StyledWrapperCircle>
          <Image
            src='/astronaut-hero.png'
            alt="astronaut"
            width={250}
            height={250}
          />
        </StyledWrapperCircle>
      </div>
      <div className='w-1/2 flex items-center'>
        <Image
          src='/ufo.png'
          alt="astronaut"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}

export default AboutMe;

const StyledWrapperCircle = styled.div`
  width: fit-content;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23FFEAD2FF' stroke-width='7' stroke-dasharray='17%2c 14%2c 23%2c 8' stroke-dashoffset='15' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 100px;
`;