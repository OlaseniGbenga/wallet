import Link from 'next/link';
import React from 'react';

const FooterNav = () => {
  return (
    <footer className='bg-[#FDF8E2]'>
      <div className='lg:px-32 px-4 lg:flex py-10 justify-between'>
        <div className='lg:w-[25%]'>
          <div className='flex'>
            <img className='w-10' src="./images/logo.png" alt="" />
            <p className='my-auto ml-4'>Ethereum Nigeria</p>
          </div>
          <p className=' my-5'>Be the first to receive all the recent updates, articles, and valuable materials.</p>
          <div className='lg:flex'>
            <input type="text" className='p-3 sm:w-full border border-[#686764] bg-transparent rounded-md' placeholder='Email address' />
            <button className='p-3 sm:mt-3 sm:w-full rounded-md bg-[#6DB36C] lg:ml-2 font-bold px-6'>Subscribe</button>
          </div>
        </div>
        <div className='flex sm:mt-6 justify-between lg:w-[25%]'>
          <div>
            <h4 className='font-medium '>Products</h4>
            <Link href={'/'}>
              <p className='my-2'>Hackathons</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Contributions</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Events</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Workshops</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Sponsor Us</p>
            </Link>
          </div>
          <div>
            <h4 className='font-medium'>Company</h4>
            <Link href={'/'}>
              <p className='my-2'>About Us</p>
            </Link>
            <Link href={'/'}>
              <p className='my-2'>Blog</p>
            </Link>
          </div>
        </div>
      </div>

      <div className='lg:flex border-t lg:px-32 px-4 py-5 justify-between'>

        <div className='flex justify-between lg:w-[20%] order-last'>
        <a target="_blank" href="https://github.com/ETHNIGERIA" ><img src="./images/icons/mdi_github.png" className='w-8' alt="" /></a>
          
          <img src="./images/icons/mingcute_linkedin-fill.png" className='w-8' alt="" />
          <img src="./images/icons/basil_instagram-solid.png" className='w-8' alt="" />
          <a target="_blank" href="https://twitter.com/EthereumNigeria" >  <img  src="./images/icons/simple-icons_x.png" className='w-8' alt="" /></a> 
          <a target="_blank" href="https://medium.com/@ethereumnigeria" ><img src="./images/icons/bi_medium.png" className='w-8' alt="" /></a> 
        </div>
        <p className='flex my-auto sm:text-sm sm:mt-6 order-first'> <img className='w-4 h-4 my-auto mr-2' src="./images/icons/ic_outline-copyright.png" alt="" /> 2023 Ethereum Nigeria. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNav;