---
layout: document
title: 개인정보처리방침
description: NeverSame의 기기 내 사진 저장과 위치, 날씨, Firebase Analytics 및 Google AdMob 이용 내용을 안내합니다.
locale: ko-KR
locale_label: 한국어
language_gateway_url: /apps/never-same/privacy/
permalink: /apps/never-same/privacy/ko-kr/
app_name: NeverSame
app_url: /apps/never-same/
document_type: privacy
document_label: 개인정보처리방침
support_url: /apps/never-same/support/ko-kr/
privacy_url: /apps/never-same/privacy/ko-kr/
updated_at: 2026년 8월 21일
---

DDak Labs(이하 “운영자”)는 NeverSame(이하 “앱”) 이용자의 개인정보를 중요하게 생각합니다. 이 방침은 어떤 정보가 기기에 저장되고 외부 서비스에서 처리될 수 있는지 설명합니다.

<div class="callout">
  <strong>핵심 안내</strong><br>
  사진, 프로젝트 이름, 메모와 저장된 장소 문구는 기기에 보관되며 분석·광고 서비스로 전송되지 않습니다. 앱은 개인정보를 제외한 이용 분석과 비개인 맞춤 광고를 사용합니다. 자동 날씨를 켜면 정밀도를 낮춘 좌표가 현재 날씨 조회를 위해 DDak Labs 날씨 게이트웨이로 전송됩니다.
</div>

## 1. 앱이 처리하는 정보

### 1.1 기기에 저장되는 정보

- 촬영하거나 불러온 사진, 썸네일, 스탬프 사진과 생성한 영상
- 프로젝트 이름, 촬영 주기, 보기 방식, 프레임과 가이드 설정
- 사진의 촬영 날짜·시간, 메모, 장소 문구와 날씨
- 화면 모드, 테마, 동의 및 광고 노출 주기 설정

이 정보는 로컬 파일과 SQLite 데이터베이스에 저장됩니다. 운영자는 계정이나 클라우드 사진 보관함을 제공하지 않으며 기기에 저장된 내용을 조회할 수 없습니다.

### 1.2 카메라, 사진 보관함과 위치

앱은 사진 촬영을 위해 카메라 권한을, 사용자가 사진을 불러올 때 사진 보관함 권한을 요청합니다. 사진은 기기에서 처리됩니다. 위치 권한은 선택 사항이며 새 사진의 장소와 선택적 날씨 정보를 만드는 데 사용됩니다. 주소 변환은 운영체제의 기본 지오코더에서 처리됩니다.

자동 날씨를 켜면 위도와 경도를 소수점 둘째 자리로 반올림해 HTTPS로 DDak Labs 날씨 게이트웨이에 보냅니다. 게이트웨이는 MET Norway에서 현재 날씨를 받아 짧은 공유 캐시를 사용하며 좌표를 의도적으로 영구 보관하거나 위치 이력을 만들지 않습니다. 과거 사진을 불러올 때는 현재 위치나 현재 날씨를 대신 사용하지 않습니다.

### 1.3 분석 및 광고

앱은 Google Analytics for Firebase와 Google AdMob을 사용합니다. Google은 다음 정보를 처리할 수 있습니다.

- 앱 실행과 개인정보를 제외한 기능 이용 이벤트
- 광고 요청, 노출, 클릭 및 광고 오류 정보
- 기기 종류, 운영체제, 앱 버전, 언어, 대략적 지역, IP 주소와 서비스가 생성한 앱·기기 식별자
- SDK가 생성하는 진단 및 성능 정보

Analytics 이벤트에는 사진 내용이나 파일 경로, 프로젝트 이름, 메모, 장소 문구, 위도 또는 경도를 넣지 않도록 차단합니다. 광고는 비개인 맞춤 광고로 요청합니다. iOS에서 앱 추적 투명성 권한을 요청하지 않으며 Firebase Analytics는 광고 ID 지원 없이 연결합니다.

앱에는 배너 광고가 표시될 수 있습니다. 전면 광고는 사진 저장 성공 뒤에만 표시될 수 있고 프로젝트의 첫 사진은 제외하며, 성공 노출 기준 24시간에 한 번으로 제한합니다.

### 1.4 고객지원 이메일

이메일 문의 시 이용자가 직접 제공한 이메일 주소, 문의 내용과 첨부 파일이 Gmail을 통해 처리될 수 있습니다. 민감한 사진, 정확한 위치 또는 불필요한 개인정보는 보내지 마세요.

## 2. 처리 목적

- 반복 사진 촬영, 정리, 비교와 변화 재생 기능 제공
- 선택한 날짜·시간·장소·날씨 정보를 사진 기록에 추가
- 집계된 기능 이용 현황 파악과 안정성 개선
- 광고 제공, 측정과 부정 이용 방지
- 고객지원 문의 처리

운영자는 개인정보를 판매하지 않습니다.

## 3. 외부 서비스

| 서비스 | 제공자 | 목적 | 정책 |
| --- | --- | --- | --- |
| Google Analytics for Firebase | Google LLC | 개인정보를 제외한 앱 이용 분석 | [Google 개인정보처리방침](https://policies.google.com/privacy) |
| Google AdMob | Google LLC | 비개인 맞춤 광고와 측정 | [Google 광고 개인정보 보호](https://business.safety.google/privacy/) |
| DDak Labs 날씨 게이트웨이 | DDak Labs / Cloudflare | 정밀도를 낮춘 현재 날씨 요청과 단기 캐시 | [Cloudflare 개인정보처리방침](https://www.cloudflare.com/privacypolicy/) |
| MET Norway | 노르웨이 기상연구소 | 현재 날씨 데이터 | [MET Norway 개인정보 안내](https://www.met.no/en/About-us/privacy) |
| 운영체제 기본 지오코더 | 플랫폼에 따라 Apple 또는 Google | 좌표를 장소 문구로 변환 | [Apple 개인정보처리방침](https://www.apple.com/legal/privacy/) · [Google 개인정보처리방침](https://policies.google.com/privacy) |
| Gmail | Google LLC | 고객지원 이메일 | [Google 개인정보처리방침](https://policies.google.com/privacy) |

MET Norway 날씨 데이터는 CC BY 4.0 조건으로 제공됩니다. 출처는 사진 픽셀에 새기지 않고 해당 사진 기록과 파일 메타데이터에 보관합니다.

## 4. 보유 및 삭제

로컬 정보는 앱에서 삭제하거나 앱 데이터 삭제 또는 앱 제거를 할 때까지 기기에 남습니다. 내보내거나 백업하지 않은 내용은 앱 제거 시 영구 삭제될 수 있습니다. 분석·광고 정보는 Google의 설정과 정책에 따라 보관됩니다. 고객지원 이메일은 법령상 더 긴 보관이 필요한 경우를 제외하고 문의 처리 후 통상 1년 안에 삭제합니다.

## 5. 이용자의 선택

- 시스템 설정에서 카메라, 사진 보관함 또는 위치 권한 거부·해제
- 프로젝트에서 장소나 날씨 표시 끄기
- **설정 → 정보 및 개인정보 → 광고 개인정보 보호**에서 광고 동의 선택 확인·변경
- 앱에서 사진·프로젝트 삭제, 앱 데이터 삭제 또는 앱 제거
- 아래 연락처로 열람, 삭제 등 개인정보 문의

## 6. 안전성과 국외 처리

외부 통신은 HTTPS를 사용합니다. Google, Cloudflare, Apple과 MET Norway는 각 정책과 보호조치에 따라 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 어떤 인터넷 전송이나 로컬 저장 방식도 완전한 안전을 보장할 수는 없습니다.

## 7. 문의

- 운영자: DDak Labs
- 개인정보 문의: [ddaklabs@gmail.com](mailto:ddaklabs@gmail.com?subject=%5BNeverSame%5D%20%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%AC%B8%EC%9D%98)

## 8. 방침 변경

법령, 앱 기능 또는 외부 서비스가 변경되면 이 방침도 수정될 수 있습니다. 중요한 변경은 앱 또는 이 페이지에서 안내합니다.

- 공고일: 2026년 8월 21일
- 시행일: 2026년 8월 21일
