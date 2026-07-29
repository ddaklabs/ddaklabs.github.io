---
layout: document
title: 隱私權政策
description: 外送記帳處理帳本、備份、分析與廣告資料的方式
locale: zh-Hant
locale_label: 繁體中文
language_gateway_url: /apps/rider-ledger-calendar/privacy/
permalink: /apps/rider-ledger-calendar/privacy/zh-hant/
app_name: 外送記帳
app_url: /apps/rider-ledger-calendar/
app_icon: /assets/images/rider-ledger-calendar-icon.png
document_type: privacy
document_label: 隱私權政策
support_url: /apps/rider-ledger-calendar/support/zh-hant/
privacy_url: /apps/rider-ledger-calendar/privacy/zh-hant/
updated_at: 2026年7月29日
updated_label: 最後更新
home_label: App 支援
app_overview_label: App 介紹
support_nav_label: 客戶支援
privacy_nav_label: 隱私權政策
change_language_label: 變更文件語言
document_menu_label: 文件選單
breadcrumb_label: 目前位置
---

DDak Labs（以下稱「我們」）營運外送記帳。本政策說明哪些資料留在裝置上、使用雲端備份時會傳送哪些資料，以及分析與廣告服務可能處理的資料。

<div class="callout"><strong>重點</strong><br>帳本儲存在裝置上。App 會建立復原用備份 ID 並初始化雲端備份；之後在你選擇備份時更新。Firebase Analytics 僅記錄少量不含金額或備註的功能事件。Google AdMob 依所在地區可用的同意選項提供廣告。</div>

## 1. 處理的資料

App 在裝置的 SQLite 中儲存日期、國家與幣別、收入或支出、平台或分類、金額、自訂名稱、外送件數、距離、工作時間、目標、預估稅率、快捷金額、外觀、語言及備份設定。JSON 備份可能包含相同資料；除非你主動分享，DDak Labs 不會收到該檔案。

首次使用時，App 會建立隨機備份 ID 並向備份服務送出初始要求。雲端備份可能包含上述帳本與設定、備份 ID、備份時間及彙總數字，不包含姓名、電子郵件、電話、聯絡人或精確位置。知道備份 ID 的人可能可以復原資料，請勿公開。

Firebase Analytics 可能處理 App 啟動、建立或更新記錄、執行備份，以及裝置與 App 資訊、概略地區、服務識別碼和診斷資料。分析事件不包含帳本金額、平台名稱、自訂名稱、日期、距離或工作時間。

Google AdMob 可能處理廣告識別碼、IP 位址、概略位置、裝置與 App 資訊、廣告要求、曝光、互動與診斷資料。App 要求非個人化廣告，必要地區會在要求廣告前顯示 Google 同意畫面。聯絡支援時，我們與 Gmail 可能處理你的郵件地址、內容及自選附件。

## 2. 外部服務

- DDak Labs 使用 Cloudflare Workers 與 D1：依備份 ID 備份及復原
- Google Firebase Analytics：彙總使用情況與穩定性分析
- Google AdMob 與 User Messaging Platform：廣告、同意、衡量及防止詐欺
- Google Gmail：支援通信

請參閱 [Google 隱私權政策](https://policies.google.com/privacy)、[Google 合作夥伴網站說明](https://policies.google.com/technologies/partner-sites)及 [Cloudflare 隱私權政策](https://www.cloudflare.com/privacypolicy/)。我們不出售個人資料。

## 3. 保存、刪除與選擇

本機記錄會保留至你刪除記錄、清除 App 資料或移除 App。檔案備份留在你儲存或分享的位置。雲端備份會保留供復原，直到被新備份覆蓋或由 DDak Labs 刪除；如需刪除，請附上備份 ID 寄信申請。Google 資料依其服務設定與政策保存。

## 4. 安全、跨境處理與兒童

網路請求使用 HTTPS。備份 ID 是復原憑證，請勿公開。Google 與 Cloudflare 可能在你所在國家以外處理資料。本 App 並非為兒童設計，也不會要求兒童姓名或聯絡資料。

## 5. 聯絡方式

隱私權、權利行使及雲端備份刪除申請請寄至 [ddaklabs@gmail.com](mailto:ddaklabs@gmail.com?subject=%5B%E5%A4%96%E9%80%81%E8%A8%98%E5%B8%B3%5D%20%E9%9A%B1%E7%A7%81%E6%AC%8A)。重大變更會在本頁更新日期後公布。
