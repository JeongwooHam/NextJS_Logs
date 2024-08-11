import { createTodo, getTodos } from "@/actions/todo";
import { queryClient } from "@/config/QueryClientProvider";
import { QUERY_KEY } from "@/constants/queryKey";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

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

  const searchTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO] });
    refetch();
  };

  return {
    refetch,
    searchInput,
    setSearchInput,
    todoList: data,
    isGetTodoListLoading: isLoading,
    createTodo: mutate,
    isCreateTodoPending: isPending,
    searchTodo,
  };
}
