"use client";

import TodoList from "@/app/components/TodoList";
import { Input } from "@material-tailwind/react";

export default function Client() {
  return (
    <div className='w-3/4 mx-auto flex flex-col items-center py-10 gap-4'>
      <h1 className='text-lg font-extrabold'>🌱 TODO LIST</h1>
      <Input
        label='할 일 찾기'
        placeholder='계획한 할 일을 찾아보세요:)'
        icon={<i className='fas fa-search text-black' />}
      />
      <TodoList />
    </div>
  );
}
