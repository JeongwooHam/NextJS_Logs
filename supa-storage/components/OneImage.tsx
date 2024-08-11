import { IconButton } from "@material-tailwind/react";
import Image from "next/image";

export default function OneImage() {
  return (
    <div className='relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md'>
      <div>
        <Image
          alt='image'
          src='/sample.jpg'
          className='w-full aspect-square rounded-2xl'
          width={200}
          height={200}
        />
      </div>
      <div className=''>강아지 사진.jpeg</div>
      <div className='absolute top-4 right-4'>
        <IconButton onClick={() => {}} color='red'>
          <i className='fas fa-trash' />
        </IconButton>
      </div>
    </div>
  );
}
