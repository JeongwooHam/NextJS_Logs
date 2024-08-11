"use client";

import { Checkbox } from "@material-tailwind/react";
import CustomIconButton from "@/components/CustomIconButton";
import { TodoRow } from "@/actions/todo";
import useOneTodo from "@/hooks/useOneTodo";

type TodoProps = {
  oneTodo: TodoRow;
};

export default function OneTodo({ oneTodo }: TodoProps) {
  const { todo } = oneTodo;

  const {
    isChecked,
    isEditing,
    editedValue,
    handlCheckboxChange,
    handleDelete,
    handleEdit,
    handleEditValueChange,
    isUpdateLoading,
    isDeleteLoading,
  } = useOneTodo({ oneTodo });

  return (
    <div className='w-full flex items-center gap-2 justify-between'>
      <Checkbox checked={isChecked} onChange={handlCheckboxChange} />
      {isEditing && (
        <input
          className='flex-1 border-b-black border-b pb-1 focus:outline-none'
          value={editedValue}
          onChange={handleEditValueChange}
        />
      )}
      {!isEditing && (
        <p className={`flex-1 ${isChecked && "line-through"}`}>{todo}</p>
      )}
      <CustomIconButton
        className={`fas ${isEditing ? "fa-check" : "fa-pen"}`}
        onClick={handleEdit}
        isLoading={isEditing && isUpdateLoading}
      />
      <CustomIconButton
        className='fas fa-trash'
        onClick={handleDelete}
        isLoading={isDeleteLoading}
      />
    </div>
  );
}
