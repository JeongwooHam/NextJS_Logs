"use client";

import TodoList from "@/components/TodoList";
import useTodo from "@/hooks/useTodo";
import { Button, Input } from "@material-tailwind/react";

export default function Client() {
  const {
    searchInput,
    setSearchInput,
    todoList,
    isGetTodoListLoading,
    createTodo,
    isCreateTodoPending,
    searchTodo,
  } = useTodo();

  return (
    <div className='w-3/4 mx-auto flex flex-col items-center py-10 gap-4'>
      <h1 className='text-lg font-extrabold'>🌱 TODO LIST</h1>
      <form onSubmit={(e) => searchTodo(e)} className='w-full'>
        <Input
          label='할 일 찾기'
          placeholder='계획한 할 일을 찾아보세요:)'
          icon={<i className='fas fa-search text-black' />}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
      <TodoList todoList={todoList} isLoading={isGetTodoListLoading} />
      <Button
        className='mt-5'
        onClick={() => createTodo()}
        loading={isCreateTodoPending}
      >
        + ADD TODO
      </Button>
    </div>
  );
}
