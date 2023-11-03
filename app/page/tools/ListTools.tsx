import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import styles from './listTools.module.css'
import Slider from "react-slick";
import { listToolsOthers, listToolsStack } from '@/app/constant/tools';
import Image from 'next/image';

const ListTools = () => {
  return (
    <div className='mt-8'>
      <Tabs position="relative" variant="unstyled">
        <TabList className={styles['tabListCustome']}>
          <Tab>Stack</Tab>
          <Tab>Others</Tab>
        </TabList>
        <hr className={styles['seperate-line']}></hr>
        <TabIndicator
          mt="-2.5px"
          height="4px"
          bg="#8294C4"
          borderRadius="1px"
          width="50%"
        />
        <TabPanels>
      <TabPanel mt='2rem' fontSize="18px">
        <Slider {...settings}>
          {listToolsStack.map((res: any) => (
          <div key={res.id} className={styles['wrapper-tools']}>
            <div className={styles['wrapper-background']}>
              <Image
                src={'/icons/'+res.image}
                alt={res.name}
                width={40}
                height={40}
              />
            </div>
            <span className='text-xl font-medium'>{res.name}</span>
          </div>
          ))}
        </Slider>
        
      </TabPanel>
      <TabPanel mt='2rem' fontSize="18px">
        <Slider {...settings}>
            {listToolsOthers.map((res: any) => (
              <div key={res.key} className={styles['wrapper-tools']}>
                <div className={styles['wrapper-background']}>
                  <Image
                    src={'/icons/'+res.image}
                    alt={res.name}
                    width={40}
                    height={40}
                  />                
                </div>
                <span className='text-xl font-medium'>{res.name}</span>
              </div>
            ))}
        </Slider>
      </TabPanel>
    </TabPanels>
      </Tabs>
    </div>
  );
};

export default ListTools;

export const settings = {
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900000,
  cssEase: "linear"
};