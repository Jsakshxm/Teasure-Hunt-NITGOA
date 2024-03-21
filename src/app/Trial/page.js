"use client"
import Image from 'next/image';
import { useEffect } from 'react';

const Page = () => {
useEffect(()=>{
  console.log("https://teasure-hunt-nitgoa-gf7x.vercel.app/Trial/1")
},[])
    
  return (
    <div className='bg-[#fefae0] flex flex-col items-center min-h-screen pt-4 px-2'>
      <h1 className='mb-4 text-2xl font-medium text-center md:text-3xl'>The Canary 1961 Begins</h1>
      <div className='relative w-full max-w-md px-4 mb-8'>
        
        <Image
          src="/riddle.jpg"
          layout="responsive"
          width={500}
          height={500}
          alt="Riddle"
          objectFit="contain"  className='pt-5 mt-5'
        />
      </div>
      <div className='max-w-lg space-y-3 text-center'>
        <p className='pt-5 mt-5 text-lg font-semibold'>
          Find hidden words from this image and use one of those words in the next stage.
        </p>
        <p className='pt-3 mt-3 font-light'>
          Hint: 6 possible words exist
        </p>
        <p className='pt-1 mt-1 font-light'>
          To Proceed to Stage 2, find the link somewhere here.
        </p>
      </div>
    </div>
  );
};

export default Page;
