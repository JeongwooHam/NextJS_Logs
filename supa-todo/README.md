## 🌱 TodoList with Supabase

### ⭐ Supabase와 Next.js 프로젝트 연동하기

> 1. 환경 변수 파일 설정하기

```shell
# Home > Project API > Project URL
NEXT_PUBLIC_SUPABASE_URL= ''
# Home > Project API > API Key
NEXT_PUBLIC_SUPABASE_ANON_KEY= ''
# Project Settings > API Settings > Project API keys > service_role
NEXT_SUPABASE_SERVICE_ROLE= ''
# Supabase DB Password
NEXT_SUPABASE_DB_PASSWORD= ''
```

> 2. supabase CLI 설치 및 로그인 진행

```shell
npx supabase login
```

> 3. package.json 파일에 script 추가하기

```json
"scripts": {
  // ...
  "generate-types": "npx supabase gen types typescript --project-id [project_id] --schema public > types_db.ts"
}
```

- Supabase에서 지원하는 각 언어별 타입 생성 기능을 적용하기 위한 스크립트이다.
  - 특정 id 값을 가지는 supabase 프로젝트의 public schema를 가져와 `types_db.ts` 파일로 생성하게 한다.
- `project_id` 값은 환경변수로 설정한 `NEXT_PUBLIC_SUPABASE_URL` 값에서 `https://`와 `.supabase.co` 사이의 값을 넣어주면 된다.

### ⚠️ Error Logs

> material-tailwind react missing props

- Next.js 14 버전에서 material-tailwind/react 컴포넌트를 사용하자 아래와 같은 오류가 발생했다.
  - `Property 'crossOrigin' is missing in type ~`
- `package.json` 파일에서 `typescript`의 버전을 **5.2.2**로, `@types/react`의 버전을 **18.2.19**로 수정함으로써 해결할 수 있었다.
  - 혼자 구현하는 프로젝트여서 망설임 없이 해당 방법을 사용했지만 팀 프로젝트였다면 다른 해결 방법을 모색하거나 다른 UI Inventory를 사용했을 것 같다.
- 참조 링크
  - [Property 'crossOrigin is missing in type <Input/>](https://github.com/creativetimofficial/material-tailwind/issues/427)
