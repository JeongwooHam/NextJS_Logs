## 🌱 TodoList with Supabase

### ⚠️ Error Logs

> material-tailwind react missing props

- Next.js 14 버전에서 material-tailwind/react 컴포넌트를 사용하자 아래와 같은 오류가 발생했다.
  - `Property 'crossOrigin' is missing in type ~`
- `package.json` 파일에서 `typescript`의 버전을 **5.2.2**로, `@types/react`의 버전을 **18.2.19**로 수정함으로써 해결할 수 있었다.
  - 혼자 구현하는 프로젝트여서 망설임 없이 해당 방법을 사용했지만 팀 프로젝트였다면 다른 해결 방법을 모색하거나 다른 UI Inventory를 사용했을 것 같다.
- 참조 링크
  - [Property 'crossOrigin is missing in type <Input/>](https://github.com/creativetimofficial/material-tailwind/issues/427)
