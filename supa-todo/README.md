<style>h1 { border-bottom: 0; } </style>

<div align="center" style="border-none"><h1>🌱 TodoList with Supabase</h1></div>

## ⭐ Supabase로 DB Schema 타입 추출하기

### 1. 환경 변수 파일 설정하기

```shell
# Home > Project API > Project URL
NEXT_PUBLIC_SUPABASE_URL= ''
# Home > Project API > API Key
NEXT_PUBLIC_SUPABASE_ANON_KEY= ''
# Project Settings > API Settings > Project API keys > service_role
# 어드민에서 사용되므로 외부에 절대 공개하면 안 된다.
NEXT_SUPABASE_SERVICE_ROLE= ''
# Supabase DB Password
NEXT_SUPABASE_DB_PASSWORD= ''
```

### 2. supabase CLI 설치 및 로그인 진행

```shell
npx supabase login
```

### 3. package.json 파일에 script 추가하기

```json
"scripts": {
  // ...
  "generate-types": "npx supabase gen types typescript --project-id [project_id] --schema public > types_db.ts"
}
```

- Supabase에서 지원하는 각 언어별 타입 생성 기능을 적용하기 위한 스크립트이다.
  - 특정 id 값을 가지는 supabase 프로젝트의 public schema를 가져와 `types_db.ts` 파일로 생성하게 한다.
- `project_id` 값은 환경변수로 설정한 `NEXT_PUBLIC_SUPABASE_URL` 값에서 `https://`와 `.supabase.co` 사이의 값을 넣어주면 된다.

## ✍️ Supabase와 Server Actions로 CRUD 기능 구현하기

### 1. React Query 설정

- 아래의 명령어로 필요한 라이브러리를 설치한다.

```shell
npm i --save @supabase/ssr @tanstack/react-query
```

- React Query 사용을 위한 Provider 파일을 생성 후 `layout.tsx`에 설정해준다.

```tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({});

export default function QueryClientProvider({
  children,
}: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

### 2. Supabase에서 지원하는 Next.js 관련 라이브러리 설정하기

- **Supabase SSR**이라는 단일 라이브러리로 기존 Supabase Database/Auth/Storage가 지원하던 기능들을 모두 사용할 수 있다.

### `@/utils/supabase/client.ts`

> **createBrowserSupabaseClient**

### `@/utils/supabase/server.ts`

> **createServerSupabaseClient**

- `admin` props의 경우 기본 값이 `false`이다.
- 해당 함수로 클라이언트 생성 시 admin API는 사용 불가능하다.
- `Database` 타입을 지정하여 SQL 쿼리 등 사용 시 자동으로 타입을 지원한다.

> **createServerSupabaseAdminClient**

- 전체 사용하는 등의 어드민 기능을 사용할 수 있다.

### `@/app/middleware.ts`

- request를 받고 response를 전달하는 과정에 대한 interceptor 로직을 정의한다.
- `auth.getUser`
  - 매번 토큰을 가져오지 않더라도 최신화된 사용자 상태를 받아올 수 있게 한다.
- `config`
  - middleware 실행을 제외할 request를 지정한다.

### 3. CRUD Server Action 만들기

## ⚠️ Error Logs

### material-tailwind react missing props

- Next.js 14 버전에서 material-tailwind/react 컴포넌트를 사용하자 아래와 같은 오류가 발생했다.
  - `Property 'crossOrigin' is missing in type ~`
- `package.json` 파일에서 `typescript`의 버전을 **5.2.2**로, `@types/react`의 버전을 **18.2.19**로 수정함으로써 해결할 수 있었다.
  - 혼자 구현하는 프로젝트여서 망설임 없이 해당 방법을 사용했지만 팀 프로젝트였다면 다른 해결 방법을 모색하거나 다른 UI Inventory를 사용했을 것 같다.
- 참조 링크
  - [Property 'crossOrigin is missing in type Input>](https://github.com/creativetimofficial/material-tailwind/issues/427)
