import React from 'react';

export interface ProjectSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const projectContents: Record<string, { sections: ProjectSection[] }> = {
  "beomgg": {
    sections: [
      {
        id: "background",
        title: "프로젝트 배경 및 목표",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              기존의 기술 블로그들은 정적 사이트 생성기(Jekyll, Hugo)나 단순한 플랫폼(Tistory)에 의존하여 커스터마이징에 한계가 있었습니다. 이를 해결하고자 최신 웹 기술을 도입하여 <strong>확장성 높은 개인화된 포트폴리오 겸 기술 블로그</strong>를 직접 구축하는 것을 목표로 했습니다.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <li>
                <strong>Velog RSS 연동:</strong> 외부 플랫폼에 작성한 글을 일일이 복사할 필요 없이, Velog RSS 피드를 파싱하여 최신 게시물을 실시간으로 동기화합니다.
              </li>
              <li>
                <strong>모던 UI/UX 및 반응형:</strong> Tailwind CSS v4를 활용하여 데스크탑과 모바일 모두에서 최적화된 유려한 디자인(다크모드 포함)을 제공합니다.
              </li>
              <li>
                <strong>유연한 확장성:</strong> 현재는 Velog를 데이터 소스로 사용하지만, 추후 Notion API나 자체 CMS 등으로 데이터 소스를 변경하더라도 쉽게 대응할 수 있는 아키텍처를 지향했습니다.
              </li>
            </ul>
          </div>
        )
      },
      {
        id: "tech-stack",
        title: "시스템 아키텍처 및 기술 스택",
        content: (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-x-auto mb-6">
              <pre className="text-xs sm:text-sm font-mono text-gray-800 dark:text-gray-200 leading-relaxed min-w-[600px]">
{`┌─────────────────────────────────────────────────────────┐
│                 Client Layer (Web Browser)              │
│  - UI/UX: React 19, Tailwind CSS v4, Dark Mode          │
│  - Interactivity: Client Components, Lucide Icons       │
└────────────────────────────┬────────────────────────────┘
                             │ React Server Components
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 Server Layer (Next.js 16.2 App Router)  │
│  - Routing & Layouts: File-system based router          │
│  - Data Fetching: Server-side fetch (fast-xml-parser)   │
└────────────────────────────┬────────────────────────────┘
                             │ RSS Feed Request
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 External Data Source                    │
│  - Velog RSS (XML Feed for Blog Posts)                  │
└─────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Frontend & Core</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework & Runtime:</span> Next.js 16.2 (App Router, React Server Components), React 19</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Language & Type System:</span> TypeScript 5 (Strict Typing)</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Styling & Design System:</span> Tailwind CSS v4, next-themes (Dark mode)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Data & Integration</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Data Fetching:</span> Fetch API with RSS (`fast-xml-parser`)</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Iconography:</span> Lucide React</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">External Components:</span> react-github-calendar</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "challenges",
        title: "핵심 기술적 도전 및 해결 과정",
        content: (
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">RSS 파싱과 렌더링 최적화</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> Velog RSS 피드는 XML 형태로 제공되며, <code>description</code> 필드에 HTML 태그가 포함되어 있어 그대로 렌더링하면 UI가 깨지거나 불필요한 요소가 노출되는 문제가 있었습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> <code>fast-xml-parser</code>를 사용하여 XML을 파싱한 후, 정규표현식(<code>/&lt;[^&gt;]*&gt;?/gm</code>)을 통해 HTML 태그를 모두 제거하고 순수 텍스트만 추출하여 150자로 자르는(truncate) 로직을 구현했습니다.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Tailwind CSS v4 도입 및 설정 최적화</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> 기존 <code>tailwind.config.js</code> 기반 설정이 사라진 v4 환경에서 폰트 설정과 다크모드 대응을 완벽하게 세팅해야 했습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> CSS 변수(Variables)를 적극 활용하여 <code>globals.css</code> 내에서 테마 토큰을 관리하고, Next.js의 <code>next/font/google</code>과 결합하여 런타임 오버헤드 없이 최적화된 폰트를 적용했습니다.
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "results",
        title: "프로젝트 성과 및 배운 점",
        content: (
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">RSC(React Server Components)의 이해:</span> Next.js 16의 App Router 환경에서 데이터 패칭을 수행하는 서버 컴포넌트와 인터랙션(검색 필터 등)을 담당하는 클라이언트 컴포넌트를 명확히 분리하는 패턴을 학습했습니다.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">유지보수성 향상:</span> 외부 플랫폼(Velog)에 종속되지 않고 포트폴리오와 블로그를 통합하여, 새로운 기술 스택을 언제든 실험해볼 수 있는 튼튼한 기반을 마련했습니다.
              </li>
            </ul>
          </div>
        )
      }
    ]
  },
  "ssoksik": {
    sections: [
      {
        id: "background",
        title: "프로젝트 배경 및 목표",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              '쏙식(Ssoksik)'은 개인의 혈당 관리와 건강한 식습관 형성을 돕기 위해 기획된 AI 기반 종합 헬스케어 플랫폼입니다. 평소 건강과 식단 관리에 대한 관심, 특히 당뇨 환자분들의 일상적 피로도에 착안해 기존의 단순 기록형 앱에서 벗어나 <strong className="font-semibold text-gray-900 dark:text-white">최신 AI 기술을 활용한 맞춤형 분석 및 추천</strong>을 제공하는 것을 목표로 했습니다.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <li>
                <strong className="text-gray-900 dark:text-white">AI 기반 맞춤형 식단 추천:</strong> Google GenAI를 연동하여 혈당 수치와 식사 기록(이미지/텍스트)을 분석하고 실시간 피드백 제공
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">멀티 플랫폼 통합 시스템:</strong> React Native 기반 모바일 앱(사용자용)과 React 기반 관리자 웹 대시보드 구축
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">직관적인 기록 및 통계:</strong> 캘린더와 통계 차트를 통해 매일의 식단과 혈당 변화를 쉽게 파악
              </li>
            </ul>
          </div>
        )
      },
      {
        id: "tech-stack",
        title: "시스템 아키텍처 및 기술 스택",
        content: (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-x-auto mb-6">
              <pre className="text-xs sm:text-sm font-mono text-gray-800 dark:text-gray-200 leading-relaxed min-w-[600px]">
{`┌─────────────────────────────────────────────────────────┐
│                 Client Layer (Mobile & Admin)           │
│  - Mobile (React Native/Expo): User UI, Camera Input    │
│  - Admin (React/Vite): Web Dashboard, Statistics        │
└────────────────────────────┬────────────────────────────┘
                             │ HTTP / REST API (JWT)
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 Core Backend (Spring Boot 4.0)          │
│  - Auth Domain: Spring Security, JWT Token Management   │
│  - Core Domain: Food Record, Blood Sugar Tracking       │
│  - AI Integration: Prompt Engineering, Data Parsing     │
└────────────┬───────────────┬────────────────┬───────────┘
             │ (JPA/SQL)     │ (HTTP)         │ (SDK)
             ▼               ▼                ▼
┌───────────────┐ ┌────────────────┐ ┌────────────────────┐
│   MySQL 8.0   │ │     AWS S3     │ │   Google GenAI     │
│ (User, Record)│ │ (Food Images)  │ │ (Vision & Text AI) │
└───────────────┘ └────────────────┘ └────────────────────┘`}
              </pre>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Frontend & Core</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework (Mobile):</span> React Native (Expo), React 19</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework (Admin):</span> React 19, Vite</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Styling & Viz:</span> Tailwind CSS v3, Recharts</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Backend & Data</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework:</span> Java 21, Spring Boot 4.0, Spring WebMVC, Spring Data JPA</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Storage & Security:</span> MySQL, AWS S3, Spring Security (JWT)</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">AI & Integration:</span> Google GenAI SDK, Springdoc OpenAPI</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "challenges",
        title: "핵심 기술적 도전 및 해결 과정",
        content: (
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Google GenAI 연동 및 프롬프트 최적화</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> AI 분석 요청 시 응답 형식이 일관되지 않아 모바일 앱 내에서 UI로 파싱하는 데 잦은 렌더링 오류가 발생했습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> 백엔드에서 엄격한 프롬프트 엔지니어링을 적용하고, 응답을 특정 JSON 포맷으로 강제(Structured Output) 처리하여 클라이언트 단의 파싱 안정성을 크게 높였습니다.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">대용량 이미지 처리와 AWS S3 업로드 최적화</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> 모바일 기기에서 촬영한 고해상도 이미지를 그대로 전송하면 네트워크 지연과 스토리지 낭비가 심했습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> 클라이언트 단에서 Expo Image Picker를 활용해 이미지 리사이징을 선행하고, 백엔드는 AWS S3 연동을 통해 빠르고 안전하게 저장하는 업로드 파이프라인을 구축했습니다.
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "results",
        title: "프로젝트 성과 및 배운 점",
        content: (
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">통합 시스템 설계 경험:</span> 모바일 앱, 관리자 웹, API 백엔드로 분리된 3개의 저장소를 동시에 운영하며, 각 플랫폼 간의 원활한 데이터 통신(REST API)과 아키텍처 설계 역량을 길렀습니다.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">최신 AI 기술 실무 적용:</span> 외부 모델인 Google GenAI를 단순 연동하는 것을 넘어, 서비스의 핵심 비즈니스 로직에 결합해 사용자에게 실질적인 가치를 제공하는 방법을 체득했습니다.
              </li>
            </ul>
          </div>
        )
      }
    ]
  },
  "android-memory-game": {
    sections: [
      {
        id: "background",
        title: "프로젝트 배경 및 목표",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              안드로이드 플랫폼에서 동작하는 직관적이고 몰입감 있는 동물 메모리 게임 앱입니다. 제한 시간 내에 타겟 동물 카드를 모두 찾아내는 것을 목표로 하며, <strong>커스텀 뷰(Custom View)를 활용한 그래픽 처리와 상태 관리 능력</strong>을 향상시키기 위해 개발되었습니다.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <li>
                <strong className="text-gray-900 dark:text-white">동적 카드 배치 및 게임 로직:</strong> 24장의 카드(정답 4장, 오답 18장, 폭탄 2장)를 랜덤하게 섞어 매번 새로운 경험 제공
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">실시간 반응형 점수 시스템:</strong> 반응 시간에 따른 차등 보너스 점수 및 연속 정답 콤보 구현
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">로컬 데이터 보존:</strong> SharedPreferences를 활용한 기기 내 최고 점수(High Score) 기록
              </li>
            </ul>
          </div>
        )
      },
      {
        id: "tech-stack",
        title: "시스템 아키텍처 및 기술 스택",
        content: (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Frontend & Core</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework & Language:</span> Android SDK, Java</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">UI & Graphics:</span> Custom <code>View</code> (Canvas, Drawable API), XML Layouts</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Data & Integration</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Local Storage:</span> <code>SharedPreferences</code></li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Multimedia & Concurrency:</span> <code>MediaPlayer</code> API, <code>Handler</code>, <code>CountDownTimer</code>, Background <code>Thread</code></li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "challenges",
        title: "핵심 기술적 도전 및 해결 과정",
        content: (
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Custom View를 활용한 동적 그리드 렌더링</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> 안드로이드의 기본 Layout을 사용하지 않고, 4x6 배열의 카드를 다양한 화면 크기에 맞춰 비율이 깨지지 않게 렌더링해야 했습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> <code>CustomView</code>의 <code>onDraw()</code> 메서드를 오버라이드하여, 화면의 너비와 높이를 기반으로 카드 간격과 크기를 동적으로 연산해 Canvas에 카드를 직접 그리는 방식으로 해결했습니다.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">게임 상태 동기화 및 터치 이벤트 제어</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> 시작 시 4초간 전체 카드를 보여준 후 뒤집는 기능과, 의도치 않은 연속 터치(다중 터치)로 인한 로직 오류를 방지해야 했습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> <code>Thread</code>와 <code>Handler.postDelayed()</code>를 조합해 비동기 UI 업데이트를 구현하고, 터치 발생 시 1초 동안 추가 입력을 차단하는 플래그를 두어 버그를 방지했습니다.
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "results",
        title: "프로젝트 성과 및 배운 점",
        content: (
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">Android 2D Graphics 렌더링 이해:</span> 기본 위젯에 의존하지 않고 드로잉 사이클과 직접적인 터치 이벤트(<code>onTouchEvent</code>) 처리 방식을 깊이 이해하게 되었습니다.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">비동기 처리 및 스레드 통신:</span> 게임 타이머와 UI 지연 처리를 통해 안드로이드의 메인 UI 스레드와 백그라운드 스레드 간의 안전한 통신 방법을 학습했습니다.
              </li>
            </ul>
          </div>
        )
      }
    ]
  },
  "jg-estate": {
    sections: [
      {
        id: "background",
        title: "디지털 소외 문제 해결을 위한 ERP 기획",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              국내 공인중개사 시장의 고령화(50대 이상 60~70% 육박)로 인한 디지털 소외 문제와 기존 ERP의 과도한 복잡성을 포착했습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              이를 해결하기 위해, 별도의 학습이 필요 없는 <strong className="font-semibold text-gray-900 dark:text-white">엑셀 친화적 UI 기반의 통합 업무 솔루션</strong>을 기획하여 예비창업패키지에 제안했습니다.
            </p>
          </div>
        )
      },
      {
        id: "design",
        title: "현장 조사 기반의 사용자 중심 설계",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              직접 부동산 현장 조사를 통해 실무자들의 생생한 의견을 듣고, 프로그램을 직접 구동해 보며 기존 시스템의 문제점을 깊이 있게 파악했습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              수집된 피드백을 바탕으로, 기존 시스템의 단점을 보완하고 사용성을 극대화할 수 있도록 <strong className="font-semibold text-gray-900 dark:text-white">단순화된 ERP 아키텍처</strong>를 설계했습니다.
            </p>
          </div>
        )
      },
      {
        id: "features",
        title: "현장 밀착형 핵심 기능 정의",
        content: (
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">직관적인 UX/UI:</strong> 중장년층에게 익숙한 엑셀 기반의 간단한 인터페이스를 제공합니다.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">CTI 연동 서비스:</strong> 전화 수신 시 고객 정보와 상담 내역을 화면에 즉시 띄워주는 팝업 기능을 구현했습니다.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">공동중개 네트워크:</strong> 실시간 쪽지 기반의 공동중개 네트워크를 구축하고, 활성화되지 않은 모바일 앱을 대체할 구체적 해결책을 제시했습니다.
              </li>
            </ul>
          </div>
        )
      },
      {
        id: "business",
        title: "비즈니스 모델 구축 및 시장 진입 전략",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="font-semibold text-gray-900 dark:text-white">월 정액 SaaS 구독 모델</strong>을 기반으로 수익 구조를 확립했습니다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              CTI 연동, 전자계약 수수료 등 부가서비스로 확장성을 넓히고, 초기 타깃층의 진입 장벽을 완화하기 위해 데이터 이관 대행 서비스를 핵심 전략으로 제공합니다.
            </p>
          </div>
        )
      }
    ]
  },
  "checkproduct": {
    sections: [
      {
        id: "background",
        title: "프로젝트 배경 및 목표",
        content: (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              시중에 유통되는 식품 중 위해 물질 검출 등으로 리콜 조치된 상품들을 소비자가 손쉽게 확인하여 피해를 예방할 수 있도록 돕는 <strong>모바일 식품 리콜 정보 조회 서비스</strong>입니다.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              <li>
                <strong className="text-gray-900 dark:text-white">공공데이터 연동:</strong> 식품의약품안전처의 공공데이터(XML)를 파싱하여 최신 리콜 정보를 실시간으로 제공
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">REST API 서버 구축:</strong> Spring Boot 기반으로 상품 조회 및 관리 기능을 제공하는 백엔드 API 설계
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">협업 환경 구축:</strong> Github PR(Pull Request) 중심의 코드 리뷰 및 협업 프로세스 도입
              </li>
            </ul>
          </div>
        )
      },
      {
        id: "tech-stack",
        title: "시스템 아키텍처 및 기술 스택",
        content: (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50 overflow-x-auto mb-6">
              <pre className="text-xs sm:text-sm font-mono text-gray-800 dark:text-gray-200 leading-relaxed min-w-[600px]">
{`┌─────────────────────────────────────────────────────────┐
│                 Client Layer (Mobile App)               │
│  - Presentation: React Native (Expo)                    │
│  - Data Parsing: fast-xml-parser (Public Data XML)      │
└────────────────────────────┬────────────────────────────┘
                             │ HTTP / REST API
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 Core Backend (Spring Boot 3.5)          │
│  - Product Domain: Search, Pagination, Filtering        │
│  - Admin Domain: Recall Data Management                 │
│  - API Docs: Springdoc OpenAPI (Swagger)                │
└────────────────────────────┬────────────────────────────┘
                             │ (JPA / SQL)
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 Database (H2 Database)                  │
│  - Tables: Products, Recall Info, Categories            │
└─────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Backend (Spring Boot)</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework:</span> Java 17, Spring Boot 3.5</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Database & ORM:</span> H2 Database, Spring Data JPA</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">API Docs:</span> Swagger (Springdoc OpenAPI)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-slate-700/50">
              <h4 className="font-bold text-lg mb-3">Frontend (Mobile App)</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold text-gray-900 dark:text-white">Framework:</span> React Native, Expo</li>
                <li><span className="font-semibold text-gray-900 dark:text-white">Data Parsing:</span> fast-xml-parser (공공데이터 XML 처리)</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "challenges",
        title: "핵심 기술적 도전 및 해결 과정",
        content: (
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">공공데이터 XML 파싱과 구조화</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> 식품안전정보원 공공데이터가 복잡한 XML 형태로 제공되어 클라이언트 앱에서 데이터를 직접 렌더링하기 까다로웠습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> <code>fast-xml-parser</code>를 도입하여 모바일 클라이언트 단에서 XML 데이터를 효율적으로 JSON 객체로 변환하고, 필요한 핵심 데이터만 추출해 UI에 바인딩했습니다.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Spring Boot REST API 설계와 명세화</h4>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> 프론트엔드와 백엔드 개발 병렬 진행 시, API 엔드포인트와 데이터 규격에 대한 의사소통 비용이 컸습니다.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Solution:</span> Swagger(OpenAPI) 개념을 적용하여 백엔드에서 명확하게 API 스펙을 설계하고, 원활한 협업 흐름을 가져갈 수 있도록 기반을 마련했습니다.
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "results",
        title: "프로젝트 성과 및 배운 점",
        content: (
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">팀 협업 프로세스 확립:</span> Github PR 리뷰 문화를 경험하고, 프론트엔드와 백엔드의 브랜치를 분리하여 협업하는 구조를 이해했습니다.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">풀스택 아키텍처 경험:</span> Spring Boot 백엔드와 React Native 모바일 앱이 연동되는 전체 시스템 아키텍처 흐름을 파악하는 계기가 되었습니다.
              </li>
            </ul>
          </div>
        )
      }
    ]
  }
};

export const getDefaultContent = () => ({
  sections: [
    {
      id: "preparing",
      title: "내용 준비 중",
      content: (
        <div className="py-20 text-center text-gray-500 dark:text-gray-400">
          <p className="text-lg">이 프로젝트에 대한 상세 설명은 아직 준비 중입니다.</p>
        </div>
      )
    }
  ]
});
