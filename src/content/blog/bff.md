---
title: BFF(Backend For Frontend)에 대한 짧막한 이야기들
description: 'BFF에 관한 짧막한 이야기입니다.'
pubDate: '2022-10-08'
tags: msa architecture bff
category: development
heroImage: '/blog-placeholder-2.jpg'
---

## Micro Service Architcture의 Backend For Frontend Pattern

### Micro Service Architecture

> 마이크로서비스란 소프트웨어를 구축하기 위한 아키텍처이자 하나의 접근 방식으로, 애플리케이션을 상호 독립적인 최소 구성 요소로 분할합니다. 모든 요소를 하나의 애플리케이션에 구축하는 전통적인 모놀리식 접근 방식 대신 마이크로서비스에서는 모든 요소가 독립적이며 연동되어 동일한 태스크를 완수합니다. 이러한 각각의 구성 요소 또는 프로세스가 마이크로서비스입니다.

_RedHat - 마이크로서비스(Microservices) 이해 https://www.redhat.com/ko/topics/microservices_

_Monolithic Service 구조_
<img width="443" alt="Monolithic architecture@2x" src="https://user-images.githubusercontent.com/66833339/193855785-99716163-5f65-4155-aec3-8ede37c81c91.png">

_Micro Service Architecture 구조_
<img width="443" alt="Microservice architecture@2x" src="https://user-images.githubusercontent.com/66833339/193855881-80069092-65f8-4855-91c0-4b79a1d9c2e5.png">

MSA 이전의 서비스의 모든 기능이 하나의 서버에서 동작하는 모놀리식(Monolithic) Architecture를 따르던 방식과 다르게 MSA로 변화되는 과정에서 Frontend에서 여러 MSA서버와 통신하는 과정 중 다음과 같은 문제들이 발생하게 됩니다.

- 각각의 서비스 마다 Frontend 인증과 관련된 공통 로직의 재구현이 필요합니다.
- Frontend에서 여러 MSA 서비스에 대한 정보를 알고 있어야 합니다.
- 각각 다른 언어 및 방식으로 개발될 수 있는 MSA 서비스들에 대한 대응이 필요할 수 있습니다.

이와 같은 문제들은 MSA 서비스의 갯수가 많아질수록 기하급수적으로 늘어나게 됩니다.
이러한 문제를 해결 하고자 모든 MSA API 서비스의 앞단에서 Frontend와의 통신을 담당하게 되는 **API Gateway**가 생겨나게 됩니다.

### API Gateway

_API Gateway 개요_
<img src="https://user-images.githubusercontent.com/66833339/193857771-22e1c266-c11d-4fbd-b48a-a19fb419141b.png" width="400" />

API Gateway의 주요한 기능으로써 다음과 같은 기능들이 있습니다.

- **인증 및 인가의 단일화**
- Frontend에서의 요청에 따라 적절한 서비스와 인스턴스로 요청을 보낼 수 있는 **라우팅과 로드밸런싱**
- 여러개의 MSA 서비스를 묶어 새로운 서비스로 만드는 **서비스 오케스트레이션**

이러한 API Gateway를 사용 함으로써 Frontend는 여러곳의 서비스와 통신을 주고받으며 데이터를 조합하여 UI를 만들어 주어야 하는 문제에서 벗어날 수 있었습니다. 하지만 아직까지 Frontend 개발자가 원하는대로 데이터를 포멧팅 하여 전달할 수 없었기 때문에, Frontend 단에서 불필요한 데이터를 덜어내고, 데이터를 가공해야 하는 일이 빈번하게 발생 하였습니다.

### BFF의 등장

_첫 번째 아이폰_
<img src="https://user-images.githubusercontent.com/66833339/193856886-7065750c-c8a3-4107-a010-90d7fa04d77f.jpeg" width="400" />

2007년 아이폰의 첫 등장 이후 클라이언트는 Web 뿐만 아니라 Mobile App 이라는 새로운 주류가 생겨나게 됩니다.
하나의 서비스에서 여러 UI/UX에 대한 대응이 필요해짐에 따라 같은 정보라도 각각의 Client에 도달해야 하는 데이터의 종류와 양이 달라져야 할 필요가 생겼습니다.
이에따라 각각의 MSA 서비스들 앞단에 여러 Client Frontend 서비스에 매칭되는 API Gateway를 둘 수 있도록 변화 되었는데, 여기서 BFF의 개념이 등장 합니다. BFF란 MSA에서 사용되는 하나의 패턴입니다.

> _BFF === 여러개의 API Gateway 로 설명 했지만 하나이상의 API Gateway 레이어가 존재하고, 그 앞단에 BFF 레이어가 존재할 수 있습니다._

_BFF 개요_
<img src="https://user-images.githubusercontent.com/66833339/193864848-4eb6e5b5-e843-45d1-ba31-33c0bfa336eb.png" width="600" />

### BFF의 역할

BFF는 각각의 클라이언트에 알맞는 API를 제공해 준다는 특징이 있습니다. 예를들어 같은 정보를 요청하는 API를 사용자에게 표시할 정보량이 비교적 적은 Mobile BFF와 Web BFF에서 다르게 구현하여 over fetching 문제를 해결할 수 있습니다. 또한 다른 지역에 따라 다른 서버를 바라보고 있어야 할 경우에도 BFF를 활용할 수 있습니다. Frontend가 마이크로서비스에 의존하고 많은 외부 API나 다른 서비스를 사용해야 한다면, 데이터 흐름을 간소화하고 서비스에 많은 효율성을 제공하므로 BFF를 사용하는 것이 좋습니다.
더불어, 어플리케이션이 특정 프론트엔드 인터페이스에 대해 최적화된 백엔드를 개발해야 하거나 클라이언트가 굉장히 많은 양의 집합 연산을 요구하는 데이터를 사용해야 한다면 BFF는 꽤 적절한 선택지가 됩니다.

#### BFF를 도입 함으로써 다음과 같은 장점들을 얻을 수 있습니다.

- 프론트엔드는 백엔드의 관심사에서 분리될 수 있습니다.
- 각 디바이스별 BFF를 두었을 때 디바이스별로 분산 처리가 가능합니다.
- 응답의 추상화를 통해 특정 민감한 정보는 숨기면서 프론트엔드에 응답값을 보낼 때 불필요한 정보는 생략됩니다. 보안에 장점이 있습니다.
- BFF단에서 프론트엔드가 원하는 데이터를 정렬 또는 포멧팅 해줄 수 있습니다. 브라우저 및 디바이스 자원의 소모를 줄입니다.
- 이 외에도 많은 장점이 있습니다!

#### 이러한 BFF에도 단점은 당연히 존재합니다.

- 전체 서비스 플로우에 BFF라는 레이어가 하나 더 생기기 때문에 **당연히** latency 가 발생할 수 있습니다.
- 유지보수에 대한 대상이 늘어나게 됩니다.
- 모놀리식 아키텍쳐에는 필요가 없습니다. 오히려 장애물이 됩니다.

#### BFF를 도입 함으로써 얻는 단점들에 비해 장점들이 많아 보입니다. 그럼 BFF를 도입하기로 결정한 팀에서 고려해야할 사항은 무엇이 있을까요?

- BFF단에서 자체적인 API등 서비스의 구현은 피해야 합니다. BFF는 클라이언트와 마이크로서비스 간의 인터페이스, 번역기 역할만을 맡는것이 좋습니다.
- BFF에 지나치게 의존하면 안됩니다. BFF는 일정 수준의 보안을 제공하긴 하지만, 그저 클라이언트와 서버 사이의 한장의 레이어일 뿐입니다. BFF의 존재와는 무관하게 서버와 클라이언트에서 필요한 보안과 기능에 대한 모든 조치를 적용해야 합니다.
- 여러 BFF를 운용할 때, 로직의 중복을 피해야 합니다. BFF는 한가지의 UX를 기반으로 구현되어야 합니다. 예를들어 대부분의 모바일 디바이스는 같은 UX를 공유합니다. iOS와 Android의 BFF를 따로 만들 필요는 없습니다.
- BFF는 Frontend 개발자가 개발 및 유지/보수 하는것이 이상적입니다. 이름에서 알 수 있듯, 이 레이어(또는 프록시 서버)는 Frontend를 위한 Backend 입니다. Frontend 개발, UI 개발 요구사항을 가장 잘 아는 사람은 Frontend 개발자 입니다.
  <br />
  <br />
  다음에는 재직중인 회사에서 BFF를 어떻게 구축하고 사용하고 있는지 소개 하도록 하겠습니다.
