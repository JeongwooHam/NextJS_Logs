import OneTodo from "@/components/OneTodo";
import { TodoRow } from "@/actions/todo";

type Props = {
  todoList: TodoRow[];
  isLoading: boolean;
};

export default function TodoList({ todoList, isLoading }: Props) {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='w-full'>
      {todoList.map((todo) => (
        <OneTodo oneTodo={todo} key={todo.id} />
      ))}
    </div>
  );
}
