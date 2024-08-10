export type Todo = {
  id: number;
  todo: string;
  isDone: boolean;
  created_at: Date;
  updated_at?: Date;
};

export const MOCK_TODO: Todo[] = [
  { id: 1, todo: "끝내주게 잠 자기", isDone: false, created_at: new Date() },
  { id: 2, todo: "끝내주게 잠 자기", isDone: false, created_at: new Date() },
];
