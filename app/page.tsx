"use client";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { useEffect, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import Homepage from './page/homepage';
import LoadingPage from './page/loading'
import { ChakraProvider } from "@chakra-ui/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export default function Home() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-sine', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  });

  useInterval(() => {
      setCount(count + 1)
    }, 1000
  )
  return (
    <ChakraProvider>
      {count > 3 ? <Homepage></Homepage> : <LoadingPage/>}
    </ChakraProvider>
  )
}
