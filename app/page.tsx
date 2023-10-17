"use client";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import Homepage from './page/homepage';
import LoadingPage from './page/loading'
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  const [count, setCount] = useState<number>(0)

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
