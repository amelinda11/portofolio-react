import { experiences_list } from '@/app/constant/experience';
import { ListExperienceType } from '@/app/type';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import styles from './experiences.module.css';




const ListExperience = () => {
  return (
    <div className={styles['wrapper-list-experience']}>
      {experiences_list.map((res: ListExperienceType, i: number) => (
        <div key={i} className='flex items-center justify-around'>
          <div className='w-[fit-content] flex flex-col items-center'>
            <StyledWrapperCircle>
              <Image
                src='/astronaut-hero.png'
                alt="astronaut"
                width={65}
                height={65}
              />
            </StyledWrapperCircle>
            <div className='w-[fit-content] flex flex-col items-center mt-3 text-[#DBDFEA] font-medium'>
              <b className='font-bold text-[#FFEAD2] text-lg'>{res.name}</b>
              <span>{res.nick_name}</span>
              <span>{res.role}</span>
              <span>{res.duration}</span>
            </div>
          </div>

          <div className={styles['wrapper-plane']}>
            <Image 
              src='/airplane.png'
              alt="plane-line"
              width={50}
              height={50}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListExperience;

const StyledWrapperCircle = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='130%25' height='130%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23FFEAD2FF' stroke-width='5' stroke-dasharray='6%2c 3%2c 7%2c 12' stroke-dashoffset='26' stroke-linecap='square'/%3e%3c/svg%3e");
  display: flex;
  justify-content: center;
  width: 130px;
  height: 130px;
  border-radius: 100px;
  padding: 12px;
`;