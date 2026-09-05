# 프로젝트 배경 및 목표

'쏙식(Ssoksik)'은 개인의 혈당 관리와 건강한 식습관 형성을 돕기 위해 기획된 AI 기반 종합 헬스케어 플랫폼(모바일 앱 및 관리자 웹)입니다. 기존의 단순 기록형 앱에서 벗어나, 최신 AI 기술을 활용한 맞춤형 분석 및 추천을 통해 사용자에게 실질적인 가치를 제공하는 것을 목표로 했습니다.

- **AI 기반 맞춤형 식단 추천**: Google GenAI를 연동하여 사용자의 혈당 수치와 식사 기록(이미지 및 텍스트)을 분석하고, 개인화된 식단과 피드백을 실시간으로 제공합니다.
- **멀티 플랫폼 통합 시스템 구축**: 사용자 편의를 위한 React Native(Expo) 기반 모바일 앱과, 데이터 시각화 및 관리를 위한 React(Vite) 기반의 관리자 웹 대시보드를 통합 구축했습니다.
- **직관적인 식사 및 혈당 기록**: 직관적인 모바일 UI/UX를 통해 매일의 식단과 혈당을 손쉽게 기록하고, 캘린더 및 통계 차트를 통해 건강 상태 변화를 한눈에 파악할 수 있도록 구현했습니다.

# 시스템 아키텍처 및 기술 스택

## Frontend & Core (Mobile / Admin)
- **Framework & Runtime**: 
  - [Mobile] React Native (Expo), React 19
  - [Admin] React 19, Vite
- **Language & Type System**: TypeScript, JavaScript
- **Styling & Visualization**: Tailwind CSS v3 (Admin), Recharts (통계 시각화)

## Backend & Data
- **Framework**: Java 21, Spring Boot 4.0, Spring WebMVC, Spring Data JPA
- **Database**: MySQL
- **Security & Storage**: Spring Security (JWT 기반 인증), AWS S3 (이미지 스토리지)
- **AI & Integration**: Google GenAI SDK (`com.google.genai:google-genai`), Springdoc OpenAPI (Swagger)

# 핵심 기술적 도전 및 해결 과정

## Google GenAI 연동 및 프롬프트 최적화
- **Challenge**: 사용자의 식사 및 혈당 데이터를 바탕으로 AI에게 분석 및 추천을 요청할 때, 응답 형식이 일관되지 않아 앱 내에서 UI로 파싱하고 렌더링하는 데 오류가 발생했습니다.
- **Solution**: Google GenAI SDK를 활용하면서 백엔드에서 엄격한 프롬프트 엔지니어링을 적용하고, 응답을 특정 JSON 포맷으로 강제(Structured Output)하도록 처리하여 클라이언트 단의 파싱 안정성을 크게 높였습니다.

## 모바일 대용량 이미지 처리와 AWS S3 업로드 최적화
- **Challenge**: 사용자가 모바일 기기(Expo Image Picker)에서 촬영한 고해상도 식사 이미지를 그대로 서버에 전송하면 네트워크 지연과 AWS S3 스토리지 낭비가 발생했습니다.
- **Solution**: 클라이언트(앱) 단에서 이미지 리사이징을 선행하여 용량을 최소화한 후 백엔드로 전송하고, 백엔드는 AWS S3와 연동하여 빠르고 안전하게 이미지를 저장하도록 최적화된 업로드 파이프라인을 구축했습니다.

# 프로젝트 성과 및 배운 점

- **마이크로서비스에 준하는 통합 시스템 설계**: 모바일(사용자), 웹(관리자), 백엔드(API)로 구성된 3개의 저장소를 분리 운영하면서, 각 플랫폼 간의 원활한 데이터 통신(REST API, JWT 인증)과 구조적 결합을 이끌어내는 아키텍처 설계 역량을 습득했습니다.
- **최신 AI 기술의 실무 적용**: 단순 CRUD 구현을 넘어 Google GenAI라는 외부 AI 모델을 서비스의 핵심 비즈니스 로직에 결합함으로써, 실제 사용자에게 인공지능이 어떻게 맞춤형 가치를 제공할 수 있는지 실무적으로 경험했습니다.
