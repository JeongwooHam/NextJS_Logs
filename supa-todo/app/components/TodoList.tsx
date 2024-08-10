import { MOCK_TODO } from "../constants/mockTodo";
import OneTodo from "./OneTodo";

export default function TodoList() {
  return (
    <div className='w-full'>
      {MOCK_TODO.map((todo) => (
        <OneTodo oneTodo={todo} key={todo.id} />
      ))}
    </div>
  );
}
