export type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
};

export const MOCK_TODO: Todo[] = [
  { id: 1, todo: "끝내주게 잠 자기", isDone: false },
  { id: 2, todo: "끝내주게 잠 자기", isDone: false },
];
