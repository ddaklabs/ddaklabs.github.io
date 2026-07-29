---
layout: document
title: 개인정보처리방침
description: 라이더 장부의 장부·백업·분석·광고 데이터 처리 안내입니다.
locale: ko-KR
locale_label: 한국어
language_gateway_url: /apps/rider-ledger-calendar/privacy/
permalink: /apps/rider-ledger-calendar/privacy/ko-kr/
app_name: 라이더 장부
app_url: /apps/rider-ledger-calendar/
app_icon: /assets/images/rider-ledger-calendar-icon.png
document_type: privacy
document_label: 개인정보처리방침
support_url: /apps/rider-ledger-calendar/support/ko-kr/
privacy_url: /apps/rider-ledger-calendar/privacy/ko-kr/
updated_at: 2026년 7월 29일
---

DDak Labs(이하 “운영자”)는 라이더 장부를 운영합니다. 이 방침은 기기에 남는 정보, 클라우드 백업 시 전송되는 정보, 분석과 광고 과정에서 외부 서비스가 처리할 수 있는 정보를 설명합니다.

<div class="callout"><strong>핵심 안내</strong><br>장부는 기기에 저장됩니다. 앱은 복구용 백업 ID를 만들고 최초 클라우드 백업을 초기화하며, 이후에는 사용자가 백업을 선택할 때 갱신합니다. Firebase Analytics에는 금액이나 메모 없이 일부 기능 이벤트만 기록합니다. 광고는 지역별 동의 선택을 반영해 Google AdMob에서 제공합니다.</div>

## 1. 처리하는 정보

### 장부와 설정

날짜, 국가·통화, 수입·지출 구분, 플랫폼·항목, 금액, 사용자가 입력한 항목명, 배달 건수, 거리, 운행 시간, 목표, 세금 추정률, 빠른 금액, 화면 설정, 언어와 백업 상태를 기기 내부 SQLite에 저장합니다. JSON 파일 백업에도 같은 정보가 포함될 수 있으며, 사용자가 직접 공유하지 않는 한 운영자는 해당 파일을 받지 않습니다.

### 클라우드 백업

앱을 처음 사용할 때 무작위 백업 ID를 만들고 라이더 장부 백업 서비스로 초기 요청을 보냅니다. 클라우드 백업에는 위 장부·설정, 백업 ID, 백업 시각과 요약 합계가 포함될 수 있습니다. 이름, 이메일, 전화번호, 연락처와 정밀 위치는 포함하지 않습니다. 백업 ID를 아는 사람은 백업을 복구할 수 있으므로 공개하지 마세요.

### 분석과 광고

Firebase Analytics는 앱 실행, 기록 생성·수정 여부와 백업 실행 여부, 앱·기기 정보, 대략적인 지역, 서비스 식별자와 진단 정보를 처리할 수 있습니다. 장부 금액, 플랫폼명, 사용자 입력 항목명, 날짜, 거리와 운행 시간은 분석 이벤트에 넣지 않습니다.

Google AdMob은 광고 제공·측정·보안·빈도 제한을 위해 광고 식별자, IP 주소, 대략적인 위치, 기기·앱 정보, 광고 요청·노출·상호작용과 진단 정보를 처리할 수 있습니다. 앱은 비개인 맞춤 광고를 요청하며, 필요한 지역에서는 광고 요청 전에 Google 동의 화면을 표시합니다. 가능한 경우 설정에서 동의 선택을 다시 확인할 수 있습니다.

이메일 문의 시에는 이용자가 보낸 이메일 주소, 문의 내용, 기기·앱 정보와 첨부파일을 운영자와 Gmail이 처리할 수 있습니다.

## 2. 외부 서비스와 목적

| 서비스 | 제공자 | 목적 |
| --- | --- | --- |
| 라이더 장부 백업 API | DDak Labs, Cloudflare Workers·D1 | 백업 ID를 이용한 백업과 복구 |
| Firebase Analytics | Google LLC | 기능 이용 현황과 안정성 분석 |
| Google AdMob·User Messaging Platform | Google LLC | 광고, 동의, 측정과 부정 이용 방지 |
| Gmail | Google LLC | 고객 문의 처리 |

[Google 개인정보처리방침](https://policies.google.com/privacy), [Google 제휴 서비스 안내](https://policies.google.com/technologies/partner-sites), [Cloudflare 개인정보처리방침](https://www.cloudflare.com/privacypolicy/)을 참고할 수 있습니다. 운영자는 개인정보를 판매하지 않습니다.

## 3. 보유·삭제와 이용자 선택

- 기기 내부 기록은 사용자가 삭제하거나 앱 데이터 또는 앱을 삭제할 때까지 남습니다.
- 파일 백업은 사용자가 저장하거나 공유한 위치에 남습니다.
- 클라우드 백업은 새 백업으로 덮어쓰거나 운영자가 삭제할 때까지 복구용으로 보관됩니다. 삭제 요청 시 백업 ID와 함께 이메일로 문의해 주세요.
- 분석·광고 정보는 Google의 설정과 정책에 따라 보관됩니다.
- 가능한 지역에서는 앱의 광고 개인정보 설정을 이용하고, 기기 광고 설정을 변경하거나 로컬 데이터를 삭제하거나 클라우드 백업 사용을 중단할 수 있습니다.

## 4. 안전성·국외 처리·아동

네트워크 요청은 HTTPS를 사용합니다. 백업 ID는 계정 비밀번호가 아니라 복구용 자격 정보이므로 게시하지 마세요. Google과 Cloudflare는 이용자의 국가 밖에서 정보를 처리할 수 있습니다. 라이더 장부는 아동을 대상으로 하지 않으며 아동의 이름이나 연락처를 요구하지 않습니다.

## 5. 문의와 변경

개인정보 문의, 권리 행사와 클라우드 백업 삭제 요청은 [ddaklabs@gmail.com](mailto:ddaklabs@gmail.com?subject=%5B%EB%9D%BC%EC%9D%B4%EB%8D%94%20%EC%9E%A5%EB%B6%80%5D%20%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%AC%B8%EC%9D%98)으로 보내 주세요. 백업 관련 요청에 필요한 경우에만 백업 ID를 포함하고 불필요한 장부 내용은 보내지 마세요.

중요한 변경 사항은 수정일과 함께 이 페이지에 게시합니다.
