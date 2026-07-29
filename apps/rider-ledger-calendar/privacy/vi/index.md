---
layout: document
title: Chính sách quyền riêng tư
description: Cách Sổ Shipper xử lý dữ liệu sổ thu chi, sao lưu, phân tích và quảng cáo
locale: vi
locale_label: Tiếng Việt
language_gateway_url: /apps/rider-ledger-calendar/privacy/
permalink: /apps/rider-ledger-calendar/privacy/vi/
app_name: Sổ Shipper
app_url: /apps/rider-ledger-calendar/
app_icon: /assets/images/rider-ledger-calendar-icon.png
document_type: privacy
document_label: Chính sách quyền riêng tư
support_url: /apps/rider-ledger-calendar/support/vi/
privacy_url: /apps/rider-ledger-calendar/privacy/vi/
updated_at: 29 tháng 7, 2026
updated_label: Cập nhật lần cuối
home_label: Hỗ trợ ứng dụng
app_overview_label: Giới thiệu ứng dụng
support_nav_label: Hỗ trợ
privacy_nav_label: Chính sách quyền riêng tư
change_language_label: Đổi ngôn ngữ tài liệu
document_menu_label: Trình đơn tài liệu
breadcrumb_label: Vị trí hiện tại
---

DDak Labs (“chúng tôi”) vận hành Sổ Shipper. Chính sách này giải thích dữ liệu nào được lưu trên thiết bị, dữ liệu nào được gửi khi dùng sao lưu đám mây và dữ liệu mà dịch vụ phân tích hoặc quảng cáo có thể xử lý.

<div class="callout"><strong>Tóm tắt</strong><br>Sổ thu chi được lưu trên thiết bị. Ứng dụng tạo mã sao lưu để khôi phục và khởi tạo bản sao lưu đám mây; các bản sao lưu sau được cập nhật khi bạn chọn Sao lưu. Firebase Analytics chỉ ghi lại một số sự kiện tính năng, không gồm số tiền hoặc ghi chú. Google AdMob cung cấp quảng cáo theo lựa chọn đồng ý có tại khu vực của bạn.</div>

## 1. Dữ liệu được xử lý

Ứng dụng lưu ngày, quốc gia và tiền tệ, loại thu hoặc chi, nền tảng hoặc danh mục, số tiền, nhãn tùy chọn, số đơn, quãng đường, thời gian làm việc, mục tiêu, tỷ lệ thuế ước tính, số tiền nhanh, giao diện, ngôn ngữ và trạng thái sao lưu trong SQLite trên thiết bị. Tệp JSON có thể chứa cùng dữ liệu; DDak Labs không nhận tệp trừ khi bạn chủ động chia sẻ.

Khi sử dụng lần đầu, ứng dụng tạo mã sao lưu ngẫu nhiên và gửi yêu cầu ban đầu đến dịch vụ sao lưu. Bản sao lưu đám mây có thể gồm sổ thu chi, cài đặt, mã và thời gian sao lưu cùng số liệu tổng hợp; không gồm tên, email, số điện thoại, danh bạ hoặc vị trí chính xác. Người biết mã sao lưu có thể khôi phục dữ liệu, vì vậy không công khai mã.

Firebase Analytics có thể xử lý lần mở ứng dụng, việc tạo/cập nhật bản ghi hoặc chạy sao lưu, thông tin thiết bị và ứng dụng, khu vực gần đúng, mã định danh dịch vụ và dữ liệu chẩn đoán. Sự kiện phân tích không chứa số tiền, tên nền tảng, nhãn tự nhập, ngày, quãng đường hoặc thời gian làm việc.

Google AdMob có thể xử lý mã quảng cáo, địa chỉ IP, vị trí gần đúng, thông tin thiết bị/ứng dụng, yêu cầu, lượt hiển thị, tương tác và chẩn đoán quảng cáo. Ứng dụng yêu cầu quảng cáo không cá nhân hóa và hiển thị biểu mẫu đồng ý của Google trước khi yêu cầu quảng cáo tại nơi cần thiết. Khi bạn gửi email hỗ trợ, chúng tôi và Gmail có thể xử lý địa chỉ email, nội dung và tệp bạn đính kèm.

## 2. Dịch vụ bên ngoài

- DDak Labs trên Cloudflare Workers và D1: sao lưu và khôi phục bằng mã sao lưu
- Google Firebase Analytics: phân tích mức sử dụng tổng hợp và độ ổn định
- Google AdMob và User Messaging Platform: quảng cáo, đồng ý, đo lường và chống gian lận
- Google Gmail: trao đổi hỗ trợ

Xem [Chính sách quyền riêng tư của Google](https://policies.google.com/privacy) và [Chính sách quyền riêng tư của Cloudflare](https://www.cloudflare.com/privacypolicy/). Chúng tôi không bán dữ liệu cá nhân.

## 3. Lưu giữ, xóa và lựa chọn

Dữ liệu cục bộ còn đến khi bạn xóa bản ghi, xóa dữ liệu ứng dụng hoặc gỡ ứng dụng. Tệp sao lưu còn tại nơi bạn lưu hoặc chia sẻ. Bản sao lưu đám mây được giữ để khôi phục đến khi bị ghi đè hoặc được DDak Labs xóa; để yêu cầu xóa, hãy gửi email kèm mã sao lưu. Google lưu dữ liệu theo cài đặt và chính sách dịch vụ của họ.

## 4. Bảo mật, xử lý quốc tế và trẻ em

Yêu cầu mạng dùng HTTPS. Mã sao lưu là thông tin khôi phục, không nên công khai. Google và Cloudflare có thể xử lý dữ liệu ngoài quốc gia của bạn. Ứng dụng không hướng đến trẻ em và không yêu cầu tên hoặc thông tin liên hệ của trẻ.

## 5. Liên hệ

Gửi câu hỏi về quyền riêng tư, yêu cầu thực hiện quyền hoặc xóa sao lưu đám mây đến [ddaklabs@gmail.com](mailto:ddaklabs@gmail.com?subject=%5BS%E1%BB%95%20Shipper%5D%20Quy%E1%BB%81n%20ri%C3%AAng%20t%C6%B0). Thay đổi quan trọng sẽ được đăng trên trang này cùng ngày cập nhật.
