---
layout: document
title: Kebijakan Privasi
description: Cara Buku Kurir menangani data catatan, cadangan, analitik, dan iklan
locale: id
locale_label: Bahasa Indonesia
language_gateway_url: /apps/rider-ledger-calendar/privacy/
permalink: /apps/rider-ledger-calendar/privacy/id/
app_name: Buku Kurir
app_url: /apps/rider-ledger-calendar/
app_icon: /assets/images/rider-ledger-calendar-icon.png
document_type: privacy
document_label: Kebijakan Privasi
support_url: /apps/rider-ledger-calendar/support/id/
privacy_url: /apps/rider-ledger-calendar/privacy/id/
updated_at: 29 Juli 2026
updated_label: Terakhir diperbarui
home_label: Dukungan aplikasi
app_overview_label: Tentang aplikasi
support_nav_label: Dukungan
privacy_nav_label: Kebijakan Privasi
change_language_label: Ganti bahasa dokumen
document_menu_label: Menu dokumen
breadcrumb_label: Posisi saat ini
---

DDak Labs (“kami”) mengoperasikan Buku Kurir. Kebijakan ini menjelaskan data yang tetap di perangkat, data yang dikirim saat memakai cadangan cloud, serta data yang mungkin diproses layanan analitik dan iklan.

<div class="callout"><strong>Ringkasan</strong><br>Catatan disimpan di perangkat. Aplikasi membuat ID cadangan untuk pemulihan dan menginisialisasi cadangan cloud; cadangan berikutnya diperbarui saat Anda memilih Cadangkan. Firebase Analytics hanya mencatat beberapa peristiwa fitur tanpa nominal atau catatan. Google AdMob menampilkan iklan sesuai pilihan persetujuan yang tersedia di wilayah Anda.</div>

## 1. Data yang diproses

Aplikasi menyimpan tanggal, negara dan mata uang, jenis pemasukan/pengeluaran, platform atau kategori, nominal, label opsional, jumlah pengantaran, jarak, waktu kerja, target, perkiraan tarif pajak, nominal cepat, tampilan, bahasa, dan status cadangan di SQLite perangkat. File JSON dapat memuat data yang sama; DDak Labs tidak menerimanya kecuali Anda membagikannya.

Pada penggunaan pertama, aplikasi membuat ID cadangan acak dan mengirim permintaan awal ke layanan cadangan. Cadangan cloud dapat memuat catatan dan pengaturan di atas, ID dan waktu cadangan, serta ringkasan angka. Nama, email, nomor telepon, kontak, dan lokasi presisi tidak disertakan. Orang yang mengetahui ID cadangan mungkin dapat memulihkan data, jadi jangan mempublikasikannya.

Firebase Analytics dapat memproses peluncuran aplikasi, apakah catatan dibuat/diperbarui atau cadangan dijalankan, informasi perangkat dan aplikasi, perkiraan wilayah, pengenal layanan, dan diagnostik. Peristiwa analitik tidak memuat nominal, nama platform, label khusus, tanggal, jarak, atau waktu kerja.

Google AdMob dapat memproses pengenal iklan, alamat IP, perkiraan lokasi, informasi perangkat/aplikasi, permintaan, tayangan, interaksi, dan diagnostik iklan. Aplikasi meminta iklan yang tidak dipersonalisasi dan menampilkan formulir persetujuan Google sebelum meminta iklan bila diwajibkan. Jika menghubungi dukungan, kami dan Gmail dapat memproses alamat email, pesan, serta lampiran yang Anda pilih.

## 2. Layanan eksternal

- DDak Labs pada Cloudflare Workers dan D1: cadangan dan pemulihan dengan ID cadangan
- Google Firebase Analytics: analisis penggunaan agregat dan keandalan
- Google AdMob dan User Messaging Platform: iklan, persetujuan, pengukuran, dan pencegahan penipuan
- Google Gmail: korespondensi dukungan

Lihat [Kebijakan Privasi Google](https://policies.google.com/privacy) dan [Kebijakan Privasi Cloudflare](https://www.cloudflare.com/privacypolicy/). Kami tidak menjual data pribadi.

## 3. Penyimpanan, penghapusan, dan pilihan

Data lokal tetap ada sampai Anda menghapus catatan, menghapus data aplikasi, atau mencopot aplikasi. File cadangan tetap di lokasi penyimpanan atau berbagi. Cadangan cloud tersedia untuk pemulihan sampai ditimpa atau dihapus DDak Labs; untuk meminta penghapusan, kirim email beserta ID cadangan. Google menyimpan data sesuai pengaturan dan kebijakan layanannya.

## 4. Keamanan, pemrosesan internasional, dan anak

Permintaan jaringan menggunakan HTTPS. ID cadangan adalah kredensial pemulihan dan tidak boleh dipublikasikan. Google dan Cloudflare dapat memproses data di luar negara Anda. Aplikasi ini tidak ditujukan untuk anak dan tidak meminta nama atau informasi kontak anak.

## 5. Kontak

Pertanyaan privasi, permintaan hak, dan penghapusan cadangan cloud dapat dikirim ke [ddaklabs@gmail.com](mailto:ddaklabs@gmail.com?subject=%5BBuku%20Kurir%5D%20Privasi). Perubahan penting akan diterbitkan di halaman ini dengan tanggal yang diperbarui.
