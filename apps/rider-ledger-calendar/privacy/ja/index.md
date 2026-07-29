---
layout: document
title: プライバシーポリシー
description: 配達収支帳における帳簿、バックアップ、分析、広告データの取扱い
locale: ja
locale_label: 日本語
language_gateway_url: /apps/rider-ledger-calendar/privacy/
permalink: /apps/rider-ledger-calendar/privacy/ja/
app_name: 配達収支帳
app_url: /apps/rider-ledger-calendar/
app_icon: /assets/images/rider-ledger-calendar-icon.png
document_type: privacy
document_label: プライバシーポリシー
support_url: /apps/rider-ledger-calendar/support/ja/
privacy_url: /apps/rider-ledger-calendar/privacy/ja/
updated_at: 2026年7月29日
updated_label: 最終更新
home_label: アプリサポート
app_overview_label: アプリ案内
support_nav_label: サポート
privacy_nav_label: プライバシーポリシー
change_language_label: 文書の言語を変更
document_menu_label: 文書メニュー
breadcrumb_label: 現在位置
---

DDak Labs（以下「当方」）は配達収支帳を運営しています。本方針は、端末内に保存される情報、クラウドバックアップ時に送信される情報、分析・広告サービスが処理する可能性のある情報を説明します。

<div class="callout"><strong>概要</strong><br>帳簿は端末に保存されます。アプリは復元用バックアップIDを作成して初期クラウドバックアップを設定し、その後は利用者がバックアップを選択したときに更新します。Firebase Analyticsには金額やメモを含まない少数の機能イベントのみを送信します。広告は地域で利用可能な同意設定に基づきGoogle AdMobが提供します。</div>

## 1. 取り扱う情報

アプリは、日付、国・通貨、収入・支出、プラットフォーム・分類、金額、任意の項目名、配達件数、距離、稼働時間、目標、税率見積もり、表示・言語・バックアップ設定を端末のSQLiteに保存します。JSONファイルにも同じ情報が含まれる場合がありますが、利用者が共有しない限り当方は受け取りません。

初回利用時にランダムなバックアップIDを作成し、バックアップサービスへ初期リクエストを送ります。クラウドバックアップには帳簿・設定、バックアップID、日時、集計値が含まれる場合があります。氏名、メールアドレス、電話番号、連絡先、正確な位置情報は含みません。IDを知る人が復元できる可能性があるため、公開しないでください。

Firebase Analyticsは、アプリ起動、記録の作成・更新、バックアップ実行の有無、端末・アプリ情報、おおよその地域、識別子、診断情報を処理する場合があります。金額、プラットフォーム名、自由入力項目、日付、距離、稼働時間は分析イベントに含めません。

Google AdMobは、広告識別子、IPアドレス、おおよその位置、端末・アプリ情報、広告リクエスト・表示・操作・診断情報を処理する場合があります。アプリは非パーソナライズド広告を要求し、必要な地域では広告要求前にGoogleの同意画面を表示します。サポートメールを送る場合は、メールアドレス、本文、任意の添付情報を当方とGmailが処理します。

## 2. 外部サービス

- DDak LabsのCloudflare Workers・D1：バックアップIDによるバックアップと復元
- Google Firebase Analytics：利用状況と安定性の分析
- Google AdMob・User Messaging Platform：広告、同意、測定、不正防止
- Google Gmail：お問い合わせ対応

[Googleプライバシーポリシー](https://policies.google.com/privacy)、[Googleサービス利用サイトの情報](https://policies.google.com/technologies/partner-sites)、[Cloudflareプライバシーポリシー](https://www.cloudflare.com/privacypolicy/)をご確認ください。当方は個人情報を販売しません。

## 3. 保存・削除と選択

端末内の記録は、利用者が削除、アプリデータ消去、またはアンインストールするまで残ります。ファイルバックアップは保存・共有先に残ります。クラウドバックアップは上書きまたは当方による削除まで復元用に保持されます。削除依頼はバックアップIDを添えてメールでご連絡ください。Googleのデータ保持は各サービスの設定と方針に従います。

## 4. 安全性、国外処理、児童

通信にはHTTPSを使用します。バックアップIDは公開しないでください。GoogleとCloudflareは利用者の国以外で情報を処理する場合があります。本アプリは児童向けではなく、児童の氏名や連絡先を求めません。

## 5. お問い合わせ

プライバシー、権利行使、クラウドバックアップ削除の依頼は [ddaklabs@gmail.com](mailto:ddaklabs@gmail.com?subject=%5B%E9%85%8D%E9%81%94%E5%8F%8E%E6%94%AF%E5%B8%B3%5D%20%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC) までお送りください。重要な変更は更新日とともに本ページで公開します。
