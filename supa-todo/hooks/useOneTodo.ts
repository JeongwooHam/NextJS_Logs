import { ChangeEvent, useState } from "react";
import { deleteTodo, TodoRow, updateTodo } from "@/actions/todo";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/config/QueryClientProvider";
import { QUERY_KEY } from "@/constants/queryKey";

type Props = {
  oneTodo: TodoRow;
};

export default function useOneTodo({ oneTodo }: Props) {
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

  return {
    isEditing,
    isChecked,
    editedValue,
    handlCheckboxChange,
    handleEditValueChange,
    handleEdit,
    handleDelete,
    isUpdateLoading,
    isDeleteLoading,
  };
}
