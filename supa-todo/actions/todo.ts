"use server";

import { Database } from "types_db";
import { createServerSupabaseClient } from "utils/supabase/server";

// 최상단에 사용할 타입 지정
export type TodoRow = Database["public"]["Tables"]["Todo"]["Row"];
export type TodoRowInsert = Database["public"]["Tables"]["Todo"]["Insert"];
export type TodoRowUpdate = Database["public"]["Tables"]["Todo"]["Update"];

type ErrorType = {
  message: any;
  details?: string;
  hint?: string;
  code?: string;
};

function handleError(error: ErrorType) {
  console.error(error);
  throw new Error(error.message);
}

export async function getTodos({ searchInput = "" }): Promise<TodoRow[]> {
  // 항상 비동기로 사용
  const supabase = await createServerSupabaseClient();
  // Todo 테이블을 Query
  const { data, error } = await supabase
    .from("Todo")
    .select("*")
    // todo 필드가 앞뒤로 searchInput 값을 가지고 있다면
    // 빈 문자열을 넣을 경우 모든 todo가 query 된다.
    .like("todo", `%${searchInput}%`)
    // 오름차순으로 나열
    .order("created_at", { ascending: true });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function createTodo(todo: TodoRowInsert) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("Todo").insert({
    ...todo,
    // 클라이언트에서 잘못된 값을 넣더라도 서버에서 새롭게 정의
    created_at: new Date().toISOString(),
  });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function updateTodo(todo: TodoRowUpdate) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("Todo")
    .update({
      ...todo,
      updated_at: new Date().toISOString(),
    })
    // 업데이트할 대상 지정
    .eq("id", todo.id);

  if (error) {
    handleError(error);
  }

  return data;
}

export async function deleteTodo(id: number) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("Todo").delete().eq("id", id);

  if (error) {
    handleError(error);
  }

  return data;
}
