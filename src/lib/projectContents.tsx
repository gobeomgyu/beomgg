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
