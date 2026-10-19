
/* =========================================
   PANA GAY DIL — پەناگەی دڵ
   Main JavaScript
   Languages: Kurdish, Arabic, English,
              Persian, Russian
========================================= */

"use strict";

/* ---------- 1. LANGUAGE SETTINGS ---------- */

const LANGUAGES = {
  ku: { name: "کوردی", dir: "rtl" },
  ar: { name: "العربية", dir: "rtl" },
  en: { name: "English", dir: "ltr" },
  fa: { name: "فارسی", dir: "rtl" },
  ru: { name: "Русский", dir: "ltr" }
};

const translations = {
  ku: {
    quoteSent: "وتەکەت لەسەر ئەم ئامێرە پاشەکەوت کرا.",
    quoteFailed: "نەنێردرا. تکایە دووبارە هەوڵ بدەرەوە.",
    storageNotice: "وتەکانت تەنها لەم وێبگەڕەدا پاشەکەوت دەبن؛ بۆ هەمووان نانێردرێن.",
    hope: "هیوا",
    loneliness: "تەنهایی",
    all: "هەموو",
    clearFilters: "پاککردنەوەی گەڕان",
    language: "زمان",
    loading: "چاوەڕێ بکە...",
    brand: "پەناگەی دڵ",
    explore: "گەڕان لە وتەکان",
    myFavorites: "دڵخوازەکانم",
    backToTop: "گەڕانەوە بۆ سەرەوە ↑",
    discoverQuotes: "وتەکان ببینە",
    siteName: "پەناگەی دڵ",
    home: "سەرەتا",
    quotes: "وتەکان",
    favorites: "دڵخوازەکان",
    addQuote: "زیادکردنی وتە",
    heroTitle: "وشەیەک، هەزار هەست",
    heroText: "شوێنێک بۆ وشە جوانەکان، هیوای دڵ و بیرۆکەی ژیان.",
    dailyTitle: "وتەی ئەمڕۆ",
    searchPlaceholder: "بگەڕێ بۆ وتەیەک...",
    allCategories: "هەموو پۆلەکان",
    love: "خۆشەویستی",
    life: "ژیان",
    motivation: "هاندەر",
    wisdom: "دانایی",
    sadness: "خەم",
    friendship: "هاوڕێیەتی",
    allQuotes: "هەموو وتەکان",
    noQuotes: "هیچ وتەیەک نەدۆزرایەوە.",
    noFavorites: "هێشتا هیچ وتەیەکت دڵخواز نەکردووە.",
    copy: "کۆپی",
    copied: "وتەکە کۆپی کرا!",
    share: "هاوبەشکردن",
    favorite: "دڵخواز",
    removeFavorite: "لابردن لە دڵخوازەکان",
    formTitle: "وتەی خۆت زیاد بکە",
    quoteLabel: "دەقی وتە",
    authorLabel: "ناوی نووسەر",
    categoryLabel: "پۆلی وتە",
    languageLabel: "زمانی وتە",
    submitQuote: "زیادکردنی وتە",
    quotePlaceholder: "وتەکەت لێرە بنووسە...",
    authorPlaceholder: "ناوی نووسەر بنووسە",
    quoteAdded: "وتەکەت بە سەرکەوتوویی زیاد کرا!",
    quoteRequired: "تکایە دەقی وتەکە بنووسە.",
    footerText: "شوێنێک بۆ ئارامی دڵ و جوانی وشەکان.",
    quoteOfDay: "وتەی ڕۆژ",
    source: "نووسەر",
    shareMessage: "ئەم وتە جوانە ببینە:",
    theme: "گۆڕینی ڕووکار"
  },

  ar: {
    quoteSent: "تم حفظ اقتباسك على هذا الجهاز.",
    quoteFailed: "تعذّر الإرسال. حاول مرة أخرى.",
    storageNotice: "تُحفظ اقتباساتك في هذا المتصفح فقط ولا تُرسل إلى الآخرين.",
    hope: "الأمل",
    loneliness: "الوحدة",
    all: "الكل",
    clearFilters: "مسح البحث",
    language: "اللغة",
    loading: "يرجى الانتظار...",
    brand: "ملاذ القلب",
    explore: "استكشف الاقتباسات",
    myFavorites: "مفضلاتي",
    backToTop: "العودة للأعلى ↑",
    discoverQuotes: "اكتشف الاقتباسات",
    siteName: "ملاذ القلب",
    home: "الرئيسية",
    quotes: "الاقتباسات",
    favorites: "المفضلة",
    addQuote: "أضف اقتباسًا",
    heroTitle: "كلمة واحدة، ألف شعور",
    heroText: "مساحة للكلمات الجميلة والأمل وأفكار الحياة.",
    dailyTitle: "اقتباس اليوم",
    searchPlaceholder: "ابحث عن اقتباس...",
    allCategories: "جميع الفئات",
    love: "الحب",
    life: "الحياة",
    motivation: "التحفيز",
    wisdom: "الحكمة",
    sadness: "الحزن",
    friendship: "الصداقة",
    allQuotes: "جميع الاقتباسات",
    noQuotes: "لم يتم العثور على اقتباسات.",
    noFavorites: "لم تضف أي اقتباس إلى المفضلة بعد.",
    copy: "نسخ",
    copied: "تم نسخ الاقتباس!",
    share: "مشاركة",
    favorite: "المفضلة",
    removeFavorite: "إزالة من المفضلة",
    formTitle: "أضف اقتباسك",
    quoteLabel: "نص الاقتباس",
    authorLabel: "اسم الكاتب",
    categoryLabel: "فئة الاقتباس",
    languageLabel: "لغة الاقتباس",
    submitQuote: "إضافة الاقتباس",
    quotePlaceholder: "اكتب اقتباسك هنا...",
    authorPlaceholder: "اكتب اسم الكاتب",
    quoteAdded: "تمت إضافة الاقتباس بنجاح!",
    quoteRequired: "يرجى كتابة نص الاقتباس.",
    footerText: "مساحة لراحة القلب وجمال الكلمات.",
    quoteOfDay: "اقتباس اليوم",
    source: "الكاتب",
    shareMessage: "اكتشف هذا الاقتباس الجميل:",
    theme: "تغيير المظهر"
  },

  en: {
    quoteSent: "Your quote was saved on this device.",
    quoteFailed: "Could not send. Please try again.",
    storageNotice: "Quotes are saved in this browser only; they are not sent to a server.",
    hope: "Hope",
    loneliness: "Loneliness",
    all: "All",
    clearFilters: "Clear search",
    language: "Language",
    loading: "Loading...",
    brand: "Heart Haven",
    explore: "Explore quotes",
    myFavorites: "My favorites",
    backToTop: "Back to top ↑",
    discoverQuotes: "Discover quotes",
    siteName: "Heart Haven",
    home: "Home",
    quotes: "Quotes",
    favorites: "Favorites",
    addQuote: "Add a Quote",
    heroTitle: "One Word, A Thousand Feelings",
    heroText: "A peaceful place for beautiful words, hope, and life inspiration.",
    dailyTitle: "Quote of the Day",
    searchPlaceholder: "Search for a quote...",
    allCategories: "All Categories",
    love: "Love",
    life: "Life",
    motivation: "Motivation",
    wisdom: "Wisdom",
    sadness: "Sadness",
    friendship: "Friendship",
    allQuotes: "All Quotes",
    noQuotes: "No quotes found.",
    noFavorites: "You haven't saved any favorite quotes yet.",
    copy: "Copy",
    copied: "Quote copied!",
    share: "Share",
    favorite: "Favorite",
    removeFavorite: "Remove from favorites",
    formTitle: "Add Your Own Quote",
    quoteLabel: "Quote text",
    authorLabel: "Author name",
    categoryLabel: "Quote category",
    languageLabel: "Quote language",
    submitQuote: "Add Quote",
    quotePlaceholder: "Write your quote here...",
    authorPlaceholder: "Enter the author's name",
    quoteAdded: "Your quote was added successfully!",
    quoteRequired: "Please enter the quote text.",
    footerText: "A place for peaceful hearts and beautiful words.",
    quoteOfDay: "Quote of the Day",
    source: "Author",
    shareMessage: "Discover this beautiful quote:",
    theme: "Change Theme"
  },

  fa: {
    quoteSent: "جمله‌ات در همین دستگاه ذخیره شد.",
    quoteFailed: "ارسال نشد. دوباره تلاش کن.",
    storageNotice: "جمله‌ها فقط در این مرورگر ذخیره می‌شوند و به سرور فرستاده نمی‌شوند.",
    hope: "امید",
    loneliness: "تنهایی",
    all: "همه",
    clearFilters: "پاک کردن جستجو",
    language: "زبان",
    loading: "لطفاً صبر کنید...",
    brand: "پناهگاه دل",
    explore: "گشت‌وگذر در جمله‌ها",
    myFavorites: "مورد علاقه‌هایم",
    backToTop: "بازگشت به بالا ↑",
    discoverQuotes: "دیدن جمله‌ها",
    siteName: "پناه دل",
    home: "خانه",
    quotes: "جملات",
    favorites: "علاقه‌مندی‌ها",
    addQuote: "افزودن جمله",
    heroTitle: "یک کلمه، هزار احساس",
    heroText: "جایی برای واژه‌های زیبا، امید و الهام زندگی.",
    dailyTitle: "جمله امروز",
    searchPlaceholder: "جمله‌ای جستجو کنید...",
    allCategories: "همه دسته‌ها",
    love: "عشق",
    life: "زندگی",
    motivation: "انگیزشی",
    wisdom: "حکمت",
    sadness: "اندوه",
    friendship: "دوستی",
    allQuotes: "همه جملات",
    noQuotes: "جمله‌ای پیدا نشد.",
    noFavorites: "هنوز جمله‌ای را به علاقه‌مندی‌ها اضافه نکرده‌اید.",
    copy: "کپی",
    copied: "جمله کپی شد!",
    share: "اشتراک‌گذاری",
    favorite: "علاقه‌مندی",
    removeFavorite: "حذف از علاقه‌مندی‌ها",
    formTitle: "جمله خود را اضافه کنید",
    quoteLabel: "متن جمله",
    authorLabel: "نام نویسنده",
    categoryLabel: "دسته جمله",
    languageLabel: "زبان جمله",
    submitQuote: "افزودن جمله",
    quotePlaceholder: "جمله خود را اینجا بنویسید...",
    authorPlaceholder: "نام نویسنده را وارد کنید",
    quoteAdded: "جمله با موفقیت اضافه شد!",
    quoteRequired: "لطفاً متن جمله را بنویسید.",
    footerText: "جایی برای آرامش دل و زیبایی واژه‌ها.",
    quoteOfDay: "جمله روز",
    source: "نویسنده",
    shareMessage: "این جمله زیبا را ببینید:",
    theme: "تغییر ظاهر"
  },

  ru: {
    quoteSent: "Ваша цитата сохранена на этом устройстве.",
    quoteFailed: "Не удалось отправить. Попробуйте ещё раз.",
    storageNotice: "Цитаты сохраняются только в этом браузере и не отправляются на сервер.",
    hope: "Надежда",
    loneliness: "Одиночество",
    all: "Все",
    clearFilters: "Очистить поиск",
    language: "Язык",
    loading: "Загрузка...",
    brand: "Убежище сердца",
    explore: "Читать цитаты",
    myFavorites: "Мои избранные",
    backToTop: "Наверх ↑",
    discoverQuotes: "Смотреть цитаты",
    siteName: "Пристанище сердца",
    home: "Главная",
    quotes: "Цитаты",
    favorites: "Избранное",
    addQuote: "Добавить цитату",
    heroTitle: "Одно слово — тысяча чувств",
    heroText: "Место красивых слов, надежды и вдохновения.",
    dailyTitle: "Цитата дня",
    searchPlaceholder: "Найти цитату...",
    allCategories: "Все категории",
    love: "Любовь",
    life: "Жизнь",
    motivation: "Мотивация",
    wisdom: "Мудрость",
    sadness: "Грусть",
    friendship: "Дружба",
    allQuotes: "Все цитаты",
    noQuotes: "Цитаты не найдены.",
    noFavorites: "У вас пока нет избранных цитат.",
    copy: "Копировать",
    copied: "Цитата скопирована!",
    share: "Поделиться",
    favorite: "В избранное",
    removeFavorite: "Удалить из избранного",
    formTitle: "Добавьте свою цитату",
    quoteLabel: "Текст цитаты",
    authorLabel: "Имя автора",
    categoryLabel: "Категория цитаты",
    languageLabel: "Язык цитаты",
    submitQuote: "Добавить цитату",
    quotePlaceholder: "Напишите цитату здесь...",
    authorPlaceholder: "Введите имя автора",
    quoteAdded: "Цитата успешно добавлена!",
    quoteRequired: "Пожалуйста, введите текст цитаты.",
    footerText: "Место спокойствия сердца и красоты слов.",
    quoteOfDay: "Цитата дня",
    source: "Автор",
    shareMessage: "Посмотрите эту красивую цитату:",
    theme: "Изменить тему"
  }
};

/* ---------- 2. SAMPLE QUOTES ---------- */

const defaultQuotes = [
  {
    id: "q1",
    category: "motivation",
    texts: {
      ku: "هەنگاوێکی بچووکیش دەتوانێت دەستپێکی گۆڕانکارییەکی گەورە بێت.",
      ar: "حتى الخطوة الصغيرة قد تكون بداية تغيير كبير.",
      en: "Even a small step can be the beginning of a great change.",
      fa: "حتی یک قدم کوچک می‌تواند آغاز یک تغییر بزرگ باشد.",
      ru: "Даже маленький шаг может стать началом больших перемен."
    },
    authors: {
      ku: "وتەی هاندەر",
      ar: "حكمة تحفيزية",
      en: "Daily Inspiration",
      fa: "سخن انگیزشی",
      ru: "Мотивационная мысль"
    }
  },
  {
    id: "q2",
    category: "life",
    texts: {
      ku: "ژیان لەو ساتانە دروست دەبێت کە بە دڵێکی ئارام تێیاندا دەژین.",
      ar: "تُصنع الحياة من اللحظات التي نعيشها بقلوب مطمئنة.",
      en: "Life is made of moments lived with a peaceful heart.",
      fa: "زندگی از لحظه‌هایی ساخته می‌شود که با دلی آرام می‌گذرانیم.",
      ru: "Жизнь состоит из мгновений, прожитых со спокойным сердцем."
    },
    authors: {
      ku: "وتەی ژیان",
      ar: "حكمة الحياة",
      en: "Life Wisdom",
      fa: "سخن زندگی",
      ru: "Мудрость жизни"
    }
  },
  {
    id: "q3",
    category: "love",
    texts: {
      ku: "خۆشەویستی لە کرداردا دەردەکەوێت، نەک تەنها لە وشەدا.",
      ar: "يظهر الحب في الأفعال، لا في الكلمات وحدها.",
      en: "Love is shown through actions, not words alone.",
      fa: "عشق در رفتار نمایان می‌شود، نه فقط در کلمات.",
      ru: "Любовь проявляется в поступках, а не только в словах."
    },
    authors: {
      ku: "وتەی خۆشەویستی",
      ar: "حكمة عن الحب",
      en: "Words on Love",
      fa: "سخن عشق",
      ru: "О любви"
    }
  },
  {
    id: "q4",
    category: "wisdom",
    texts: {
      ku: "هەموو شتێک پێویستی بە وەڵام نییە؛ هەندێک شت تەنها پێویستی بە تێگەیشتنە.",
      ar: "ليس لكل شيء جواب؛ فبعض الأمور تحتاج فقط إلى الفهم.",
      en: "Not everything needs an answer; some things simply need understanding.",
      fa: "هر چیزی پاسخ نمی‌خواهد؛ بعضی چیزها فقط به درک شدن نیاز دارند.",
      ru: "Не на всё нужен ответ; иногда достаточно понимания."
    },
    authors: {
      ku: "وتەی دانایی",
      ar: "حكمة",
      en: "Wisdom",
      fa: "سخن حکمت‌آمیز",
      ru: "Мудрость"
    }
  },
  {
    id: "q5",
    category: "friendship",
    texts: {
      ku: "هاوڕێی ڕاستەقینە لە کاتی تەنگانەدا ناسراوە.",
      ar: "يُعرف الصديق الحقيقي في أوقات الشدة.",
      en: "A true friend is known in difficult times.",
      fa: "دوست واقعی در روزهای سخت شناخته می‌شود.",
      ru: "Настоящий друг познаётся в трудные времена."
    },
    authors: {
      ku: "وتەی هاوڕێیەتی",
      ar: "حكمة عن الصداقة",
      en: "Words on Friendship",
      fa: "سخن دوستی",
      ru: "О дружбе"
    }
  },
  {
    id: "q6",
    category: "sadness",
    texts: {
      ku: "دوای شەوی تاریکیش، ڕووناکی دێتەوە.",
      ar: "حتى بعد أشد الليالي ظلامًا، يعود النور.",
      en: "Even after the darkest night, the light returns.",
      fa: "حتی پس از تاریک‌ترین شب، روشنایی بازمی‌گردد.",
      ru: "Даже после самой тёмной ночи возвращается свет."
    },
    authors: {
      ku: "وتەی هیوا",
      ar: "كلمات أمل",
      en: "Words of Hope",
      fa: "سخن امید",
      ru: "Слова надежды"
    }
  },
  {
    id: "q7",
    category: "motivation",
    texts: {
      ku: "خۆت بە کەسی دیکە مەپێوە؛ هەر کەسێک ڕێگای تایبەتی خۆی هەیە.",
      ar: "لا تقارن نفسك بالآخرين؛ لكل شخص طريقه الخاص.",
      en: "Don't compare yourself to others; everyone has their own path.",
      fa: "خودت را با دیگران مقایسه نکن؛ هرکس مسیر خودش را دارد.",
      ru: "Не сравнивай себя с другими: у каждого свой путь."
    },
    authors: {
      ku: "وتەی هاندەر",
      ar: "حكمة تحفيزية",
      en: "Daily Inspiration",
      fa: "سخن انگیزشی",
      ru: "Мотивационная мысль"
    }
  },
  {
    id: "q8",
    category: "life",
    texts: {
      ku: "ئارامی دڵ گەورەترین سامانە.",
      ar: "راحة القلب هي أعظم ثروة.",
      en: "Peace of heart is the greatest treasure.",
      fa: "آرامش دل بزرگ‌ترین ثروت است.",
      ru: "Душевное спокойствие — величайшее богатство."
    },
    authors: {
      ku: "وتەی ژیان",
      ar: "حكمة الحياة",
      en: "Life Wisdom",
      fa: "سخن زندگی",
      ru: "Мудрость жизни"
    }
  },
  {
    id: "q9",
    category: "hope",
    texts: {
      ku: "هەموو شەوێک کۆتایی دێت و بەیانییەک دەستپێدەکات.",
      ar: "كل ليل له نهاية، وكل صباح بداية جديدة.",
      en: "Every night ends, and a new morning begins.",
      fa: "هر شبی پایانی دارد و صبحی تازه آغاز می‌شود.",
      ru: "Каждая ночь кончается, и начинается новое утро."
    },
    authors: { ku: "پەناگەی دڵ", ar: "ملاذ القلب", en: "Heart Haven", fa: "پناهگاه دل", ru: "Убежище сердца" }
  },
  {
    id: "q10",
    category: "loneliness",
    texts: {
      ku: "تەنهایی کۆتایی نییە، تەنها پشوویەکە بۆ ئەوەی خۆت بدۆزیتەوە.",
      ar: "الوحدة ليست نهاية، بل استراحة لتجد نفسك.",
      en: "Loneliness is not an ending, just a pause to find yourself.",
      fa: "تنهایی پایان نیست، فقط مکثی است برای یافتن خود.",
      ru: "Одиночество — не конец, а пауза, чтобы найти себя."
    },
    authors: { ku: "پەناگەی دڵ", ar: "ملاذ القلب", en: "Heart Haven", fa: "پناهگاه دل", ru: "Убежище сердца" }
  }
];

/* ---------- 3. APP STATE ---------- */

// EMAIL SUBMISSION SETUP:
// Create a form at https://formspree.io and replace the placeholder below
// with the endpoint they provide, e.g. https://formspree.io/f/abcdwxyz.
// Do not put private API keys or passwords in this public frontend code.
const QUOTE_SUBMISSION_ENDPOINT = "https://formspree.io/f/mkjoazld";

const STORAGE_KEYS = {
  language: "panagayi-dil-language",
  favorites: "panagayi-dil-favorites",
  customQuotes: "panagayi-dil-custom-quotes",
  theme: "panagayi-dil-theme"
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save data:", error);
  }
}

let currentLanguage = readStorage(STORAGE_KEYS.language, "ku");
if (!LANGUAGES[currentLanguage]) currentLanguage = "ku";

let favorites = readStorage(STORAGE_KEYS.favorites, []);
let customQuotes = readStorage(STORAGE_KEYS.customQuotes, []);

if (!Array.isArray(favorites)) favorites = [];
if (!Array.isArray(customQuotes)) customQuotes = [];

let activeCategory = "all";
let searchTerm = "";
let activeView = "all";

/* ---------- 4. HELPER FUNCTIONS ---------- */

function t(key) {
  return translations[currentLanguage]?.[key]
    ?? translations.en[key]
    ?? key;
}

function allQuotes() {
  return [...defaultQuotes, ...customQuotes];
}

function quoteText(quote, language = currentLanguage) {
  return quote.texts?.[language]
    || quote.texts?.en
    || quote.texts?.ku
    || "";
}

function quoteAuthor(quote, language = currentLanguage) {
  return quote.authors?.[language]
    || quote.authors?.en
    || quote.authors?.ku
    || "";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getElement(...selectors) {
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) return element;
  }
  return null;
}

function getElements(...selectors) {
  for (const selector of selectors) {
    const elements = document.querySelectorAll(selector);
    if (elements.length) return [...elements];
  }
  return [];
}

function showToast(message) {
  let toast = getElement("#toast", ".toast", ".toast-message");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function saveFavorites() {
  writeStorage(STORAGE_KEYS.favorites, favorites);
}

function saveCustomQuotes() {
  writeStorage(STORAGE_KEYS.customQuotes, customQuotes);
}

/* ---------- 5. LANGUAGE SWITCHING ---------- */

function setLanguage(language) {
  if (!LANGUAGES[language]) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = LANGUAGES[language].dir;

  writeStorage(STORAGE_KEYS.language, language);

  updateTranslations();
  renderDailyQuote();
  renderQuotes();
  renderFavorites();
  updateLanguageControls();
}

function updateLanguageControls() {
  const selectors = [
    "#language",
    "#languageSelect",
    "#language-selector",
    "[data-language-select]"
  ];

  const select = getElement(...selectors);

  if (select) select.value = currentLanguage;

  document.querySelectorAll("[data-lang]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.lang === currentLanguage
    );
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === currentLanguage)
    );
  });
}

function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage]?.[key]) {
      if (key === "heroTitle") {
        const parts = t(key).split(/(?<=[,،—])\s+/);
        element.textContent = "";
        element.append(parts[0] + " ");
        if (parts.length > 1) {
          const span = document.createElement("span");
          span.textContent = parts.slice(1).join(" ");
          element.append(span);
        }
      } else {
        element.textContent = t(key);
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-title]").forEach(element => {
    element.title = t(element.dataset.i18nTitle);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute(
      "aria-label",
      t(element.dataset.i18nAriaLabel)
    );
  });

  document.title = t("siteName");
}

/* ---------- 6. QUOTE CARD ---------- */

function createQuoteCard(quote) {
  const text = quoteText(quote);
  const author = quoteAuthor(quote);
  const isFavorite = favorites.includes(quote.id);

  return `
    <article class="quote-card" data-quote-id="${escapeHTML(quote.id)}">
      <div class="quote-card-top">
        <span class="quote-category">
          ${escapeHTML(t(quote.category))}
        </span>

        <button
          class="favorite-btn ${isFavorite ? "is-favorite" : ""}"
          type="button"
          data-action="favorite"
          data-id="${escapeHTML(quote.id)}"
          aria-label="${escapeHTML(isFavorite ? t("removeFavorite") : t("favorite"))}"
          aria-pressed="${isFavorite}"
          title="${escapeHTML(isFavorite ? t("removeFavorite") : t("favorite"))}"
        >${isFavorite ? "♥" : "♡"}</button>
      </div>

      <div class="quote-mark" aria-hidden="true">“</div>

      <p class="quote-text">${escapeHTML(text)}</p>

      <p class="quote-author">— ${escapeHTML(author)}</p>

      <div class="quote-actions">
        <button
          class="quote-action copy-btn"
          type="button"
          data-action="copy"
          data-id="${escapeHTML(quote.id)}"
        >📋 ${escapeHTML(t("copy"))}</button>

        <button
          class="quote-action share-btn"
          type="button"
          data-action="share"
          data-id="${escapeHTML(quote.id)}"
        >↗ ${escapeHTML(t("share"))}</button>
      </div>
    </article>
  `;
}

/* ---------- 7. RENDER QUOTES ---------- */

function getFilteredQuotes() {
  let quotes = allQuotes();

  if (activeView === "favorites") {
    quotes = quotes.filter(quote => favorites.includes(quote.id));
  }

  if (activeCategory !== "all") {
    quotes = quotes.filter(
      quote => quote.category === activeCategory
    );
  }

  if (searchTerm.trim()) {
    const term = searchTerm.toLocaleLowerCase();

    quotes = quotes.filter(quote => {
      const texts = Object.values(quote.texts || {}).join(" ");
      const authors = Object.values(quote.authors || {}).join(" ");
      const category = t(quote.category);

      return `${texts} ${authors} ${category}`
        .toLocaleLowerCase()
        .includes(term);
    });
  }

  return quotes;
}

function renderQuotes() {
  const container = getElement(
    "#quotesContainer",
    "#quotes-grid",
    "#quotesGrid",
    ".quotes-grid",
    ".quotes-container",
    "[data-quotes-container]"
  );

  if (!container) return;

  const quotes = getFilteredQuotes();

  if (!quotes.length) {
    container.innerHTML = "";
    updateResultsInfo(0);
    return;
  }

  container.innerHTML = quotes.map(createQuoteCard).join("");
  updateResultsInfo(quotes.length);
}

/* ---------- 8. DAILY QUOTE ---------- */

function getDailyQuote() {
  const quotes = allQuotes();
  if (!quotes.length) return null;

  const now = new Date();
  const dayNumber = Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
    / 86400000
  );

  return quotes[((dayNumber % quotes.length) + quotes.length) % quotes.length];
}

function renderDailyQuote() {
  const quote = getDailyQuote();
  if (!quote) return;

  const text = quoteText(quote);
  const author = quoteAuthor(quote);

  const textElement = getElement(
    "#dailyQuoteText",
    "#daily-quote-text",
    ".daily-quote-text",
    "[data-daily-quote-text]"
  );

  const authorElement = getElement(
    "#dailyQuoteAuthor",
    "#daily-quote-author",
    ".daily-quote-author",
    "[data-daily-quote-author]"
  );

  if (textElement) textElement.textContent = text;
  if (authorElement) authorElement.textContent = `— ${author}`;

  const dailyCard = getElement(
    "#dailyQuoteCard",
    "#dailyQuote",
    ".daily-quote",
    ".daily-quote-card"
  );

  if (dailyCard) {
    dailyCard.dataset.quoteId = quote.id;

    const dailyFavorite = dailyCard.querySelector(
      "[data-action='favorite']"
    );

    if (dailyFavorite) {
      const isFavorite = favorites.includes(quote.id);
      const favIcon = dailyFavorite.querySelector(".favorite-icon");
      if (favIcon) favIcon.textContent = isFavorite ? "♥" : "♡";
      dailyFavorite.setAttribute("aria-pressed", String(isFavorite));
      dailyFavorite.dataset.id = quote.id;
      dailyFavorite.classList.toggle("is-favorite", isFavorite);
    }

    const copyButton = dailyCard.querySelector("[data-action='copy']");
    if (copyButton) copyButton.dataset.id = quote.id;

    const shareButton = dailyCard.querySelector("[data-action='share']");
    if (shareButton) shareButton.dataset.id = quote.id;
  }
}

/* ---------- 9. FAVORITES ---------- */

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== id);
    showToast(t("removeFavorite"));
  } else {
    favorites.push(id);
    showToast(t("favorite"));
  }

  saveFavorites();
  renderQuotes();
  renderFavorites();
  renderDailyQuote();
}

function renderFavorites() {
  const container = getElement(
    "#favoritesContainer",
    "#favorites-grid",
    "#favoritesGrid",
    ".favorites-grid",
    "[data-favorites-container]"
  );

  if (!container) return;

  const favoriteQuotes = allQuotes().filter(
    quote => favorites.includes(quote.id)
  );

  container.innerHTML = favoriteQuotes.length
    ? favoriteQuotes.map(createQuoteCard).join("")
    : "";

  const favEmpty = document.getElementById("favoritesEmpty");
  if (favEmpty) favEmpty.hidden = favoriteQuotes.length > 0;
}

/* ---------- 10. COPY AND SHARE ---------- */

function legacyCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.cssText =
    "position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:0;opacity:0;font-size:16px;";
  document.body.appendChild(area);

  let ok = false;
  try {
    area.focus({ preventScroll: true });
    area.select();
    area.setSelectionRange(0, text.length);
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }

  area.remove();
  return ok;
}

async function copyQuote(id) {
  const quote = allQuotes().find(item => item.id === id);
  if (!quote) return;

  const text = `“${quoteText(quote)}” — ${quoteAuthor(quote)}`;

  // 1) Legacy method first: it runs inside the tap, which phones require.
  if (legacyCopy(text)) {
    showToast(t("copied"));
    return;
  }

  // 2) Modern clipboard API (needs https).
  try {
    await navigator.clipboard.writeText(text);
    showToast(t("copied"));
  } catch {
    showToast(text);
  }
}

async function shareQuote(id) {
  const quote = allQuotes().find(item => item.id === id);
  if (!quote) return;

  const text = `${t("shareMessage")}\n\n“${quoteText(quote)}” — ${quoteAuthor(quote)}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: t("siteName"),
        text
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        showToast(text);
      }
    }
  } else {
    await copyQuote(id);
  }
}

/* ---------- 11. ADD A NEW QUOTE ---------- */

/* ---------- 11. ADD A NEW QUOTE ---------- */

async function addNewQuote(form) {
  const formData = new FormData(form);
  const text = String(formData.get("quote") || "").trim();
  const author = String(formData.get("author") || "").trim();
  const category = String(formData.get("category") || "life");

  if (!text) {
    showToast(t("quoteRequired"));
    return;
  }

  if (QUOTE_SUBMISSION_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
    showToast(currentLanguage === "ku"
      ? "پێش ناردن، فۆڕمی ئیمەیڵ لە Formspree دروست بکە و لینکی خۆت لە script.js دابنێ."
      : "Email submissions are not configured yet. Follow README-KU.txt to connect Formspree.");
    return;
  }

  const submitButton = form.querySelector("button[type='submit']");
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
  }

  try {
    const response = await fetch(QUOTE_SUBMISSION_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        quote: text,
        author: author || "Anonymous",
        category,
        language: currentLanguage,
        submittedAt: new Date().toISOString(),
        _subject: "نوێ: وتەیەکی نوێ بۆ پەناگەی دڵ"
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) throw new Error("Submission failed: " + response.status);

    form.reset();
    const counter = document.getElementById("characterCount");
    if (counter) counter.textContent = "0 / 500";
    showToast(currentLanguage === "ku"
      ? "وتەکەت نێردرا! چاوەڕێی پشکنین و پەسەندکردن بە."
      : currentLanguage === "ar"
        ? "تم إرسال اقتباسك! انتظر مراجعته والموافقة عليه."
        : currentLanguage === "fa"
          ? "جمله‌ات ارسال شد! منتظر بررسی و تأیید بمان."
          : currentLanguage === "ru"
            ? "Цитата отправлена! Дождитесь проверки и одобрения."
            : "Your quote was submitted for review. Thank you!");
  } catch (error) {
    console.error(error);
    showToast(currentLanguage === "ku"
      ? "ناردن سەرکەوتوو نەبوو. پەیوەندی ئینتەرنێت و ڕێکخستنی Formspree بپشکنە."
      : "Submission failed. Check your connection and Formspree setup, then try again.");
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  }
}

/* ---------- 12. SEARCH AND CATEGORIES ---------- */

function setupSearch() {
  const searchInput = getElement(
    "#searchInput",
    "#search",
    ".search-input",
    "[data-search]"
  );

  if (!searchInput) return;

  searchInput.addEventListener("input", event => {
    searchTerm = event.target.value || "";
    renderQuotes();
  });
}

function setupCategories() {
  document.querySelectorAll(
    "[data-category], .category-btn, .filter-btn"
  ).forEach(button => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "all";

      document.querySelectorAll(
        "[data-category], .category-btn, .filter-btn"
      ).forEach(item => {
        item.classList.toggle("active", item === button);
      });

      renderQuotes();
    });
  });
}

/* ---------- 13. NAVIGATION ---------- */

function showView(view) {
  activeView = view;

  const quoteSection = getElement(
    "#quotesSection",
    "#quotes-section",
    ".quotes-section"
  );

  const favoriteSection = getElement(
    "#favoritesSection",
    "#favorites-section",
    ".favorites-section"
  );

  const addSection = getElement(
    "#addQuoteSection",
    "#add-quote-section",
    ".add-quote-section"
  );

  if (quoteSection) {
    quoteSection.hidden = view === "favorites" || view === "add";
  }

  if (favoriteSection) {
    favoriteSection.hidden = view !== "favorites";
  }

  if (addSection) {
    addSection.hidden = view !== "add";
  }

  document.querySelectorAll("[data-view]").forEach(link => {
    link.classList.toggle("active", link.dataset.view === view);
  });

  if (view === "favorites") renderFavorites();
  if (view === "all") renderQuotes();

  const target = view === "favorites"
    ? favoriteSection
    : view === "add"
      ? addSection
      : quoteSection;

  target?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function setupNavigation() {
  document.querySelectorAll("[data-view]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      showView(link.dataset.view);
    });
  });

  document.querySelectorAll(
    "[data-scroll-to], .nav-link[href^='#']"
  ).forEach(link => {
    link.addEventListener("click", event => {
      const targetSelector =
        link.dataset.scrollTo || link.getAttribute("href");

      const target = targetSelector
        ? document.querySelector(targetSelector)
        : null;

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

/* ---------- 14. THEME SWITCH ---------- */

function setupTheme() {
  const themeButton = getElement(
    "#themeToggle",
    "#theme-toggle",
    "[data-theme-toggle]"
  );

  const savedTheme = readStorage(STORAGE_KEYS.theme, "dark");
  document.documentElement.dataset.theme = savedTheme;

  if (!themeButton) return;

  themeButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    writeStorage(STORAGE_KEYS.theme, nextTheme);
  });
}

/* ---------- 15. EVENT DELEGATION ---------- */

document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const id = button.dataset.id
    || button.closest("[data-quote-id]")?.dataset.quoteId;

  if (!id) return;

  if (action === "favorite") toggleFavorite(id);
  if (action === "copy") copyQuote(id);
  if (action === "share") shareQuote(id);
});

/* ---------- 16. FORM AND LANGUAGE EVENTS ---------- */

function setupForms() {
  const form = getElement(
    "#addQuoteForm",
    "#add-quote-form",
    ".add-quote-form",
    "[data-add-quote-form]"
  );

  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    addNewQuote(form);
  });
}

function setupLanguage() {
  const languageSelect = getElement(
    "#language",
    "#languageSelect",
    "#language-selector",
    "[data-language-select]"
  );

  if (languageSelect) {
    languageSelect.addEventListener("change", event => {
      setLanguage(event.target.value);
    });
  }

  document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
}

/* ---------- EXTRAS: menu, counters, clear buttons, stars ---------- */

function updateResultsInfo(count) {
  const info = document.getElementById("resultsCount");
  if (info) info.textContent = `${count} ${t("quotes")}`;

  const empty = document.getElementById("emptyState");
  if (empty) empty.hidden = count > 0;

  const clear = document.getElementById("searchClear");
  if (clear) clear.hidden = !searchTerm;
}

function resetFilters() {
  searchTerm = "";
  activeCategory = "all";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  document.querySelectorAll("[data-category]").forEach(button => {
    button.classList.toggle("active", button.dataset.category === "all");
  });
  renderQuotes();
}

function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navigation");
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
}

function setupExtras() {
  document.getElementById("searchClear")?.addEventListener("click", resetFilters);
  document.getElementById("clearFilters")?.addEventListener("click", resetFilters);

  const textarea = document.getElementById("newQuote");
  const counter = document.getElementById("characterCount");
  if (textarea && counter) {
    const update = () => { counter.textContent = `${textarea.value.length} / 500`; };
    textarea.addEventListener("input", update);
    textarea.form?.addEventListener("reset", () => setTimeout(update, 0));
  }

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const stars = document.getElementById("stars");
  if (stars && !stars.children.length) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("span");
      star.className = "star-particle";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      stars.appendChild(star);
    }
  }
}

/* ---------- 17. INITIALIZE APP ---------- */

function initializeApp() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = LANGUAGES[currentLanguage].dir;

  updateTranslations();
  updateLanguageControls();

  setupLanguage();
  setupSearch();
  setupCategories();
  setupNavigation();
  setupForms();
  setupTheme();
  setupMenu();
  setupExtras();

  renderDailyQuote();
  renderQuotes();
  renderFavorites();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
