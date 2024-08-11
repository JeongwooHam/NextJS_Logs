"use client";

import { Checkbox } from "@material-tailwind/react";
import { Todo } from "@/constants/mockTodo";
import CustomIconButton from "@/components/CustomIconButton";
import { ChangeEvent, useState } from "react";
import { deleteTodo, TodoRow, updateTodo } from "@/actions/todo";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/config/QueryClientProvider";
import { QUERY_KEY } from "@/constants/queryKey";

type TodoProps = {
  oneTodo: TodoRow;
};

export default function OneTodo({ oneTodo }: TodoProps) {
  const { id, todo, isDone } = oneTodo;
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(isDone);
  const [editedValue, setEditedValue] = useState(todo);

  const { mutate: mutateUpdateTodo, isPending: isUpdateLoading } = useMutation({
    mutationFn: () => updateTodo({ id, todo: editedValue, isDone: isChecked }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO] });
    },
  });

  const { mutate: mutateDeleteTodo, isPending: isDeleteLoading } = useMutation({
    mutationFn: () => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO] });
    },
  });

  const handlCheckboxChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    mutateUpdateTodo();
  };

  const handleEditValueChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEditedValue(e.target.value);

  const handleEdit = () => {
    if (isUpdateLoading) return;
    if (!isEditing) {
      setIsEditing(true);
      return;
    }
    mutateUpdateTodo();
  };

  const handleDelete = () => {
    if (isDeleteLoading) return;
    mutateDeleteTodo();
  };

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
