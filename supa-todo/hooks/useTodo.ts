import { createTodo, getTodos } from "@/actions/todo";
import { QUERY_KEY } from "@/constants/queryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useTodo() {
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY.TODO],
    queryFn: () => getTodos({ searchInput }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => createTodo({ todo: "", isDone: false }),
    onSuccess: () => {
      refetch();
    },
  });

  return {
    searchInput,
    setSearchInput,
    todoList: data,
    isGetTodoListLoading: isLoading,
    createTodo: mutate,
    isCreateTodoPending: isPending,
  };
}
