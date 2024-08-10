"use client";

import { Checkbox } from "@material-tailwind/react";
import { Todo } from "@/constants/mockTodo";
import CustomIconButton from "@/components/CustomIconButton";
import { ChangeEvent, useState } from "react";

type TodoProps = {
  oneTodo: Todo;
};

export default function OneTodo({ oneTodo }: TodoProps) {
  const { todo, isDone } = oneTodo;
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(isDone);
  const [editedValue, setEditedValue] = useState(todo);
  const handleEdit = () => setIsEditing((prev: boolean) => !prev);
  const handleEditValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEditedValue(e.target.value);
  const handlCheckboxChange = (e: ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked);
  const handleDelete = () => {};

  return (
    <div className='w-full flex items-center gap-2 justify-between'>
      <Checkbox checked={isChecked} onChange={handlCheckboxChange} />
      {isEditing ? (
        <input
          className='flex-1 border-b-black border-b pb-1 focus:outline-none'
          value={editedValue}
          onChange={handleEditValueChange}
        />
      ) : (
        <p className={`flex-1 ${isChecked && "line-through"}`}>{todo}</p>
      )}
      <CustomIconButton
        className={`fas ${isEditing ? "fa-check" : "fa-pen"}`}
        onClick={handleEdit}
      />
      <CustomIconButton className='fas fa-trash' onClick={handleDelete} />
    </div>
  );
}
