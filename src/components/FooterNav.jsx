import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <footer className='bg-LBlue mt-8'>
      <div className='lg:px-32 px-4 lg:flex py-10 justify-between'>
        <div className='lg:w-[25%]'>
          <div className='flex'>
            <img className='w-[4rem]' src="./favicon.png" alt="" />
            
          </div>
          <p className=' my-5'>Be the first to receive all the recent updates, articles, and valuable materials.</p>
          <div className='lg:flex'>
            <input type="text" className='p-3 sm:w-full border border-[#686764] bg-transparent rounded-md' placeholder='Email address' />
            <button className='p-3 sm:mt-3 sm:w-full rounded-md bg-DBlue lg:ml-2 font-bold px-6'>Subscribe</button>
          </div>
        </div>
        <div className='flex sm:mt-6 justify-between lg:w-[25%]'>
          <div>
            <h4 className='font-medium '>Products</h4>
            
            <Link href={'/'}>
              <p className='my-2'>International Transfers</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Loans</p>
            </Link>
            
          </div>
          <div>
            <h4 className='font-medium'>Company</h4>
            <Link href={'/'}>
              <p className='my-2'>About Us</p>
            </Link>
           
          </div>
        </div>
      </div>

      <div className='flex border-t lg:px-32 px-4 py-5 items-center justify-center'>

        
        <p className='flex '>  2023 Peyme. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNav;