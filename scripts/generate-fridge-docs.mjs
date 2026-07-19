import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const appRoot = path.resolve(siteRoot, "../../apps/fridge-manager");
const typescript = require(path.join(appRoot, "node_modules/typescript"));

const localeSpecs = [
  { key: "en", code: "en", path: "en", label: "English", languages: ["en"] },
  { key: "ko", code: "ko-KR", path: "ko-kr", label: "한국어", languages: ["ko"] },
  { key: "ja", code: "ja", path: "ja", label: "日本語", languages: ["ja"] },
  { key: "es", code: "es", path: "es", label: "Español", languages: ["es"] },
  { key: "pt-BR", code: "pt-BR", path: "pt-br", label: "Português (Brasil)", languages: ["pt"] },
  { key: "de", code: "de", path: "de", label: "Deutsch", languages: ["de"] },
  { key: "fr", code: "fr", path: "fr", label: "Français", languages: ["fr"] },
  { key: "zh-Hans", code: "zh-Hans", path: "zh-hans", label: "简体中文", languages: ["zh", "zh-cn", "zh-sg", "zh-hans"] },
  { key: "zh-Hant", code: "zh-Hant", path: "zh-hant", label: "繁體中文", languages: ["zh-tw", "zh-hk", "zh-mo", "zh-hant"] },
  { key: "it", code: "it", path: "it", label: "Italiano", languages: ["it"] },
  { key: "id", code: "id", path: "id", label: "Bahasa Indonesia", languages: ["id"] },
  { key: "th", code: "th", path: "th", label: "ไทย", languages: ["th"] },
  { key: "vi", code: "vi", path: "vi", label: "Tiếng Việt", languages: ["vi"] },
  { key: "hi", code: "hi", path: "hi", label: "हिन्दी", languages: ["hi"] },
  { key: "ar", code: "ar", path: "ar", label: "العربية", languages: ["ar"] },
  { key: "tr", code: "tr", path: "tr", label: "Türkçe", languages: ["tr"] },
  { key: "pl", code: "pl", path: "pl", label: "Polski", languages: ["pl"] },
  { key: "ru", code: "ru", path: "ru", label: "Русский", languages: ["ru"] }
];

const chrome = {
  en: { home: "App support", guide: "App guide", updated: "Last updated", language: "Change document language", support: "Support", privacy: "Privacy policy", email: "Email", core: "Key points", providers: "External services", providerPolicy: "Provider policy" },
  ko: { home: "앱 지원", guide: "앱 안내", updated: "최종 수정일", language: "문서 언어 변경", support: "고객지원", privacy: "개인정보처리방침", email: "이메일", core: "핵심 안내", providers: "외부 서비스", providerPolicy: "서비스 제공자 정책" },
  ja: { home: "アプリサポート", guide: "アプリ案内", updated: "最終更新日", language: "文書の言語を変更", support: "サポート", privacy: "プライバシーポリシー", email: "メール", core: "重要なポイント", providers: "外部サービス", providerPolicy: "提供者のポリシー" },
  es: { home: "Soporte de apps", guide: "Guía de la app", updated: "Última actualización", language: "Cambiar idioma", support: "Soporte", privacy: "Política de privacidad", email: "Correo", core: "Puntos clave", providers: "Servicios externos", providerPolicy: "Política del proveedor" },
  "pt-BR": { home: "Suporte de apps", guide: "Guia do app", updated: "Última atualização", language: "Alterar idioma", support: "Suporte", privacy: "Política de privacidade", email: "E-mail", core: "Pontos principais", providers: "Serviços externos", providerPolicy: "Política do provedor" },
  de: { home: "App-Support", guide: "App-Anleitung", updated: "Zuletzt aktualisiert", language: "Dokumentsprache ändern", support: "Support", privacy: "Datenschutz", email: "E-Mail", core: "Das Wichtigste", providers: "Externe Dienste", providerPolicy: "Anbieter-Richtlinie" },
  fr: { home: "Assistance apps", guide: "Guide de l’app", updated: "Dernière mise à jour", language: "Changer la langue", support: "Assistance", privacy: "Politique de confidentialité", email: "E-mail", core: "À retenir", providers: "Services externes", providerPolicy: "Politique du fournisseur" },
  "zh-Hans": { home: "应用支持", guide: "应用指南", updated: "最后更新", language: "更改文档语言", support: "支持", privacy: "隐私政策", email: "电子邮件", core: "重点说明", providers: "外部服务", providerPolicy: "服务商政策" },
  "zh-Hant": { home: "應用程式支援", guide: "應用程式指南", updated: "最後更新", language: "變更文件語言", support: "支援", privacy: "隱私權政策", email: "電子郵件", core: "重點說明", providers: "外部服務", providerPolicy: "服務商政策" },
  it: { home: "Supporto app", guide: "Guida app", updated: "Ultimo aggiornamento", language: "Cambia lingua", support: "Supporto", privacy: "Informativa privacy", email: "E-mail", core: "Punti chiave", providers: "Servizi esterni", providerPolicy: "Policy del fornitore" },
  id: { home: "Dukungan aplikasi", guide: "Panduan aplikasi", updated: "Terakhir diperbarui", language: "Ubah bahasa dokumen", support: "Dukungan", privacy: "Kebijakan privasi", email: "Email", core: "Poin utama", providers: "Layanan eksternal", providerPolicy: "Kebijakan penyedia" },
  th: { home: "การช่วยเหลือแอป", guide: "คู่มือแอป", updated: "อัปเดตล่าสุด", language: "เปลี่ยนภาษาเอกสาร", support: "ฝ่ายช่วยเหลือ", privacy: "นโยบายความเป็นส่วนตัว", email: "อีเมล", core: "ประเด็นสำคัญ", providers: "บริการภายนอก", providerPolicy: "นโยบายผู้ให้บริการ" },
  vi: { home: "Hỗ trợ ứng dụng", guide: "Hướng dẫn ứng dụng", updated: "Cập nhật lần cuối", language: "Đổi ngôn ngữ tài liệu", support: "Hỗ trợ", privacy: "Chính sách quyền riêng tư", email: "Email", core: "Điểm chính", providers: "Dịch vụ bên ngoài", providerPolicy: "Chính sách nhà cung cấp" },
  hi: { home: "ऐप सहायता", guide: "ऐप गाइड", updated: "अंतिम अपडेट", language: "दस्तावेज़ की भाषा बदलें", support: "सहायता", privacy: "गोपनीयता नीति", email: "ईमेल", core: "मुख्य बातें", providers: "बाहरी सेवाएँ", providerPolicy: "प्रदाता नीति" },
  ar: { home: "دعم التطبيقات", guide: "دليل التطبيق", updated: "آخر تحديث", language: "تغيير لغة المستند", support: "الدعم", privacy: "سياسة الخصوصية", email: "البريد الإلكتروني", core: "نقاط أساسية", providers: "خدمات خارجية", providerPolicy: "سياسة مقدم الخدمة" },
  tr: { home: "Uygulama desteği", guide: "Uygulama rehberi", updated: "Son güncelleme", language: "Belge dilini değiştir", support: "Destek", privacy: "Gizlilik politikası", email: "E-posta", core: "Önemli noktalar", providers: "Harici hizmetler", providerPolicy: "Sağlayıcı politikası" },
  pl: { home: "Pomoc aplikacji", guide: "Przewodnik po aplikacji", updated: "Ostatnia aktualizacja", language: "Zmień język dokumentu", support: "Pomoc", privacy: "Polityka prywatności", email: "E-mail", core: "Najważniejsze informacje", providers: "Usługi zewnętrzne", providerPolicy: "Polityka dostawcy" },
  ru: { home: "Поддержка приложений", guide: "Руководство по приложению", updated: "Последнее обновление", language: "Изменить язык документа", support: "Поддержка", privacy: "Политика конфиденциальности", email: "Эл. почта", core: "Главное", providers: "Внешние сервисы", providerPolicy: "Политика поставщика" }
};

const foodSafety = {
  en: { question: "Does the app decide whether food is safe to eat?", answer: "No. FridgeTick organizes the dates you enter. Always check the package, storage conditions, smell and local food-safety guidance before eating food." },
  ko: { question: "앱이 음식의 섭취 가능 여부를 판단하나요?", answer: "아니요. FridgeTick은 사용자가 입력한 날짜를 정리해 보여줍니다. 섭취 전 포장지, 보관 상태, 냄새와 공공 식품안전 안내를 함께 확인해 주세요." },
  ja: { question: "食品が安全に食べられるか判定しますか？", answer: "いいえ。FridgeTickは入力した日付を整理するアプリです。食べる前に包装、保存状態、におい、公的な食品安全情報を確認してください。" },
  es: { question: "¿La app decide si un alimento es seguro?", answer: "No. FridgeTick organiza las fechas que introduces. Comprueba el envase, la conservación, el olor y las recomendaciones locales antes de consumirlo." },
  "pt-BR": { question: "O app decide se um alimento é seguro?", answer: "Não. O FridgeTick organiza as datas informadas. Verifique a embalagem, o armazenamento, o cheiro e as orientações locais antes de consumir." },
  de: { question: "Entscheidet die App, ob Lebensmittel sicher sind?", answer: "Nein. FridgeTick ordnet die eingegebenen Daten. Prüfe Verpackung, Lagerung, Geruch und örtliche Lebensmittelsicherheitshinweise." },
  fr: { question: "L’app détermine-t-elle si un aliment est sûr ?", answer: "Non. FridgeTick organise les dates saisies. Vérifiez l’emballage, la conservation, l’odeur et les recommandations locales avant consommation." },
  "zh-Hans": { question: "应用会判断食品是否可以安全食用吗？", answer: "不会。FridgeTick只整理你输入的日期。食用前请检查包装、储存情况、气味及当地食品安全指南。" },
  "zh-Hant": { question: "應用程式會判斷食物是否可安全食用嗎？", answer: "不會。FridgeTick只整理你輸入的日期。食用前請檢查包裝、保存狀況、氣味與當地食品安全指引。" },
  it: { question: "L’app decide se un alimento è sicuro?", answer: "No. FridgeTick organizza le date inserite. Controlla confezione, conservazione, odore e indicazioni locali prima di consumare." },
  id: { question: "Apakah aplikasi menentukan makanan aman dimakan?", answer: "Tidak. FridgeTick hanya mengatur tanggal yang Anda masukkan. Periksa kemasan, penyimpanan, bau, dan panduan keamanan pangan setempat." },
  th: { question: "แอปตัดสินว่าอาหารปลอดภัยหรือไม่หรือไม่", answer: "ไม่ FridgeTick จัดระเบียบวันที่ที่คุณกรอก โปรดตรวจสอบบรรจุภัณฑ์ การเก็บรักษา กลิ่น และคำแนะนำด้านความปลอดภัยในพื้นที่ก่อนรับประทาน" },
  vi: { question: "Ứng dụng có quyết định thực phẩm an toàn không?", answer: "Không. FridgeTick chỉ sắp xếp ngày bạn nhập. Hãy kiểm tra bao bì, cách bảo quản, mùi và hướng dẫn an toàn thực phẩm địa phương." },
  hi: { question: "क्या ऐप तय करता है कि खाना सुरक्षित है?", answer: "नहीं। FridgeTick आपके दर्ज किए गए दिन व्यवस्थित करता है। खाने से पहले पैकेज, भंडारण, गंध और स्थानीय खाद्य सुरक्षा सलाह देखें।" },
  ar: { question: "هل يحدد التطبيق ما إذا كان الطعام آمناً؟", answer: "لا. ينظم FridgeTick التواريخ التي تدخلها فقط. افحص العبوة وظروف التخزين والرائحة وإرشادات سلامة الغذاء المحلية قبل الأكل." },
  tr: { question: "Uygulama yiyeceğin güvenli olup olmadığına karar verir mi?", answer: "Hayır. FridgeTick girdiğiniz tarihleri düzenler. Tüketmeden önce ambalajı, saklama koşullarını, kokuyu ve yerel gıda güvenliği rehberini kontrol edin." },
  pl: { question: "Czy aplikacja ocenia, czy jedzenie jest bezpieczne?", answer: "Nie. FridgeTick porządkuje wpisane daty. Przed spożyciem sprawdź opakowanie, warunki przechowywania, zapach i lokalne zalecenia." },
  ru: { question: "Определяет ли приложение безопасность продукта?", answer: "Нет. FridgeTick упорядочивает введённые даты. Перед употреблением проверьте упаковку, условия хранения, запах и местные рекомендации." }
};

function loadTranslations() {
  const source = fs.readFileSync(path.join(appRoot, "src/i18n/config.ts"), "utf8");
  const compiled = typescript.transpileModule(source, {
    compilerOptions: { module: typescript.ModuleKind.CommonJS, target: typescript.ScriptTarget.ES2022, esModuleInterop: true }
  }).outputText;
  let initOptions;
  const fakeI18n = { use() { return this; }, init(options) { initOptions = options; return Promise.resolve(this); } };
  const moduleRecord = { exports: {} };
  vm.runInNewContext(compiled, {
    module: moduleRecord,
    exports: moduleRecord.exports,
    require(specifier) {
      if (specifier === "i18next") return { __esModule: true, default: fakeI18n };
      if (specifier === "react-i18next") return { initReactI18next: {} };
      if (specifier === "expo-localization") return { getLocales: () => [{ languageCode: "en", regionCode: "US" }] };
      throw new Error(`Unexpected import in i18n config: ${specifier}`);
    },
    console,
    process
  }, { filename: "fridge-manager-i18n.js" });
  if (!initOptions?.resources) throw new Error("Could not read FridgeTick i18n resources");
  return initOptions.resources;
}

function metadataFor(spec) {
  const filename = spec.key === "ko" ? "ko-KR.json" : `${spec.key}.json`;
  return JSON.parse(fs.readFileSync(path.join(appRoot, "store/metadata", filename), "utf8"));
}

function quote(value) { return JSON.stringify(value); }

function documentPage(spec, kind, allSpecs) {
  const metadata = metadataFor(spec);
  const translation = translations[spec.key].translation;
  const title = kind === "support" ? translation.support.title : translation.privacy.title;
  const description = kind === "support" ? translation.support.intro : translation.privacy.intro;
  const alternates = allSpecs.map((item) => `  - locale: ${item.code}\n    url: /apps/fridge-manager/${kind}/${item.path}/`).join("\n");
  return `---\nlayout: fridge-document\ntitle: ${quote(title)}\ndescription: ${quote(description)}\nlocale: ${spec.code}\nlocale_key: ${quote(spec.key)}\nlocale_label: ${quote(spec.label)}\nlanguage_gateway_url: /apps/fridge-manager/${kind}/\npermalink: /apps/fridge-manager/${kind}/${spec.path}/\napp_name: ${quote(metadata.appName)}\napp_url: /apps/fridge-manager/\napp_icon: /assets/images/fridge-manager-icon.png\ndocument_type: ${kind}\ndocument_label: ${quote(title)}\nsupport_url: /apps/fridge-manager/support/${spec.path}/\nprivacy_url: /apps/fridge-manager/privacy/${spec.path}/\nupdated_at: 2026-07-19\npage_class: fridge-app\nalternates:\n${alternates}\n---\n`;
}

function gatewayPage(kind, specs) {
  const title = kind === "support" ? "Support" : "Privacy Policy";
  const links = specs.map((spec) => `  - code: ${spec.code}\n    languages:\n${spec.languages.map((language) => `      - ${language}`).join("\n")}\n    label: ${quote(spec.label)}\n    url: /apps/fridge-manager/${kind}/${spec.path}/`).join("\n");
  return `---\nlayout: locale-gateway\ntitle: ${quote(title)}\ndescription: ${quote(`Choose a language for FridgeTick ${title.toLowerCase()}.`)}\nlocale: en\nlocale_key: ${quote("en")}\npermalink: /apps/fridge-manager/${kind}/\napp_name: FridgeTick\napp_icon: /assets/images/fridge-manager-icon.png\npage_class: fridge-app\navailable_locales:\n${links}\n---\n`;
}

const translations = loadTranslations();
const generated = { locales: {} };
for (const spec of localeSpecs) {
  const translation = translations[spec.key].translation;
  generated.locales[spec.key] = {
    code: spec.code,
    path: spec.path,
    label: spec.label,
    appName: metadataFor(spec).appName,
    chrome: chrome[spec.key],
    foodSafety: foodSafety[spec.key],
    support: translation.support,
    privacy: translation.privacy
  };
}

fs.writeFileSync(path.join(siteRoot, "_data/fridge_manager_docs.json"), `${JSON.stringify(generated, null, 2)}\n`);
for (const kind of ["support", "privacy"]) {
  const root = path.join(siteRoot, "apps/fridge-manager", kind);
  fs.mkdirSync(root, { recursive: true });
  fs.writeFileSync(path.join(root, "index.md"), gatewayPage(kind, localeSpecs));
  for (const spec of localeSpecs) {
    const localeRoot = path.join(root, spec.path);
    fs.mkdirSync(localeRoot, { recursive: true });
    fs.writeFileSync(path.join(localeRoot, "index.md"), documentPage(spec, kind, localeSpecs));
  }
}

console.log(`Generated FridgeTick support and privacy pages for ${localeSpecs.length} locales.`);
