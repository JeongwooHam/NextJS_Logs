"use client";

import Image from "next/image";

export default function LogoBox() {
  return (
    <div className='flex items-center gap-1'>
      <Image
        src='/logo.png'
        alt='Mini Dropbox Logo'
        width={50}
        height={30}
        className='!w-8 !h-auto'
      />
      <span className='text-xl font-bold'>Supa-Box</span>
    </div>
  );
}
