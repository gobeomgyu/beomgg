# 프로젝트 배경 및 목표

안드로이드 플랫폼에서 동작하는 직관적이고 몰입감 있는 동물 메모리 게임 앱입니다. 제한 시간 내에 타겟 동물 카드를 모두 찾아내는 것을 목표로 하며, 커스텀 뷰(Custom View)를 활용한 그래픽 처리와 상태 관리 능력을 향상시키기 위해 개발되었습니다.

- **동적 카드 배치 및 게임 로직**: 24장의 카드(정답 4장, 오답 18장, 폭탄 2장)를 게임 시작 시마다 랜덤하게 섞어 배치하여 매번 새로운 게임 경험을 제공합니다.
- **실시간 반응형 점수 시스템**: 카드를 찾는 반응 시간(2초 이하, 4초 이하 등)과 연속 정답 여부에 따라 차등적인 점수(Bonus)를 부여하고, 폭탄 클릭 시 즉시 게임 오버 처리되는 긴장감 있는 룰을 구현했습니다.
- **SharedPreferences 기반 데이터 저장**: 기기 내부에 최고 기록(High Score)을 지속적으로 저장하고 불러와 사용자의 도전 의식을 자극합니다.

# 시스템 아키텍처 및 기술 스택

## Frontend & Core
- **Framework & Runtime**: Android SDK, Java
- **Language & Type System**: Java
- **UI & Graphics**: Custom `View` (Canvas, Drawable API), XML Layouts

## Data & Integration
- **Local Storage**: `SharedPreferences` (최고 점수 저장)
- **Multimedia**: `MediaPlayer` API (배경음, 정답/오답 및 동물 울음소리 효과음)
- **Concurrency**: `Handler`, `CountDownTimer`, Background `Thread` (타이머 및 상태 지연 처리)

# 핵심 기술적 도전 및 해결 과정

## Custom View를 활용한 동적 그리드 렌더링
- **Challenge**: 안드로이드의 기본 Layout(예: GridLayout)을 사용하지 않고, 4x6 배열의 카드를 다양한 화면 크기(해상도)에 맞춰 비율이 깨지지 않게 렌더링해야 했습니다.
- **Solution**: `CustomView`의 `onDraw()` 메서드를 오버라이드하여, 화면의 너비와 높이를 계산한 후 카드 간의 간격과 크기(가로/세로 1:1.4 비율)를 동적으로 연산하여 Canvas에 직접 카드를 그리는(`Drawable.draw()`) 방식으로 해결했습니다.

## 게임 상태 동기화 및 터치 이벤트 제어
- **Challenge**: 게임 시작 시 4초간 전체 카드를 보여준 후 뒤집는 기능과, 사용자가 카드를 클릭할 때 의도치 않은 연속 터치(다중 터치)를 방지하는 처리가 필요했습니다.
- **Solution**: 백그라운드 `Thread`와 `Handler.postDelayed()`를 조합하여 4초 후 UI 상태를 업데이트하고 카드를 덮는 로직을 구현했습니다. 또한 터치 이벤트 발생 시 1초 동안 추가 입력을 막는 상태 플래그(`isTouchBlocked`)를 사용하여 버그를 방지했습니다.

# 프로젝트 성과 및 배운 점

- **Android 2D Graphics 및 생명주기 이해**: 기본 제공되는 위젯에 의존하지 않고 Canvas를 이용해 직접 화면을 구성하며, 안드로이드 뷰의 드로잉 사이클과 터치 이벤트(`onTouchEvent`) 처리 방식을 깊이 이해하게 되었습니다.
- **비동기 처리 및 스레드 통신**: 게임 타이머 동작과 카드 공개/숨김 처리 등 비동기적인 타이밍 이슈를 해결하면서 안드로이드의 메인 UI 스레드와 백그라운드 스레드 간의 안전한 통신 방법(`Handler`, `post()`)을 학습했습니다.
