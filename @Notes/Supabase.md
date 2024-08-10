## 🦕 왜 Supabase일까요?

### 🔥 Firebase

- BaaS (Backend as a Service)

  - 서버 없이도 빠르게 앱을 출시할 수 있게 함
  - 가입 인증, 클라우드 호스팅, 실시간 데이터베이스, 클라우드 저장소 등
  - 실시간 충돌 데이터 확인, 앱 퍼포먼스 모니터링 및 기기별 테스트 지원
  - 인앱 메세지, 다이나믹 링크 등 지원

- 장점

  - 다양한 서비스와 폭넓은 연동 지원
  - Google 서비스와 연동이 쉽고 문서화가 잘 되어 있음
  - NoSQL 기반이어서 앱, 웹에서 단순하게 사용할 수 있음

- 단점
  - 오픈 소스가 아님 (Vendor Lock-In)
    - 보안상 이유로 방화벽에 넣는 작업 등이 불가능
  - NoSQL 기반이어서 복잡한 쿼리 불가능
  - 사용자가 많아진 경우 비용이 많이 듦
  - 웹 개발에는 최적화 되어 있지 않음

### ⚡ Supabase

> Build in a weekend. Scale to millions.

- 장점

  - 오픈 소스 프로젝트여서 자체 서버 구축이 가능함
    - 보안상의 이유로 직접 서버 구축을 해야할 때 비교적 쉬운 이전이 가능함
  - **PostgreSQL** 기반이어서 관계형 DB의 장점을 가져감
  - Firebase에 대비해 저렴함
  - GraphQL, API, SDK, DB Connection과 같은 다양한 연동 방식 지원
  - 개인, 소규모 팀이 풀스택 개발을 하기 위한 대부분의 것들이 갖춰져 있음
  - 복잡한 요구사항 대응에 용이함

- 단점
  - 커뮤니티가 덜 활성화되어 있음
  - 서비스 연동 지원이 비교적 적고 문서화가 부족함
  - Firebase에 비해 러닝 커브가 높음

## ⭐ Supabase 주요 기능

### Table Editor

> Enable Row Level Security (RLS)

- Supabase에 내장된 RDB인 PostgreSQL의 유저별/테이블별 권한 관리 기능의 활성화 여부를 관리하는 체크 박스

### SQL Editor

- DB에 직접 적용 가능한 SQL문을 작성할 수 있다.
- Assistant 기능을 사용하여 Copliot처럼 코드 지원을 받을 수 있다.

### Database

- 전반적인 DB 관련 기능을 사용할 수 있다.
- function이나 update/delete 등에 대한 trigger을 설정할 수 있다.
- 접근 권한에 대한 설정이 가능하다.
- backup, migration, webhooks 등을 설정하는 것도 가능하다.
- schema vizualizer로 테이블 간 관계를 도식화하여 볼 수 있다.
- Query Performance를 통해 성능 tracking이 가능하다.

### Authentication

- 로그인, 사용자 관리 등을 할 수 있다.
- 사용자 별 정책 관리가 가능하다.
- 소셜 로그인에 용이한 provider 관련 기능을 제공한다.

### Storage

- S3처럼 버킷 생성 후 파일 조회, 업로드 등이 가능하다.

### Edge Functions

- AWS Lamba처럼 Serverless Function을 사용할 수 있다.

### Realtime

- 실시간으로 사용되고 있는 채널에 대한 모니터링이 가능하다.
