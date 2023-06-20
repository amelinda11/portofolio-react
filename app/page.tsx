"use client";
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import Homepage from './page/homepage';
import LoadingPage from './page/loading'

export default function Home() {
  const [count, setCount] = useState<number>(0)

  useInterval(() => {
      setCount(count + 1)
    }, 1000
  )
  return (
    <>
      {count > 3 ? <Homepage></Homepage> : <LoadingPage/>}
    </>
  )
}
