/* =========================================================
   KONEKTOPIA — vanilla JS
   - i18n (EN default, ES, PL) with English fallback
   - Language switcher, mobile menu, smooth scroll
   - Scroll reveals, header scroll state, logo draw
   ========================================================= */

/* ---------- Translations ---------- */
const TRANSLATIONS = {
  "en": {
    "meta": {
      "title": "KONEKTOPIA · Sonia Foder · Online psychotherapy",
      "description": "Online psychotherapy with Sonia Foder: individual therapy, couples therapy and life across cultures. In English, Spanish and Polish."
    },
    "a11y": {
      "skip": "Skip to main content"
    },
    "nav": {
      "home": "Home",
      "therapy": "Therapy",
      "onlyYou": "Only you",
      "forBoth": "For both",
      "about": "About",
      "contact": "Contact"
    },
    "cta": {
      "touch": "Get in touch",
      "whatsapp": "WhatsApp",
      "call": "Call",
      "more": "Learn more",
      "back": "All therapy options"
    },
    "home": {
      "subtitle": "Psychotherapist specialising in relationships and the pressures of modern life",
      "tagline": "Understand. Change. Feel better.",
      "intro": "Therapy helps you make sense of what you're experiencing, make meaningful changes and build a more satisfying life.",
      "ctaText": "Not sure whether therapy is right for you? Taking the first step can be difficult. Sometimes, one conversation is enough to help you see things more clearly."
    },
    "card": {
      "individual": {
        "title": "Individual therapy",
        "text": "Understand recurring patterns, work through emotional difficulties and develop new ways forward."
      },
      "couples": {
        "title": "Couples therapy",
        "text": "Improve communication, work through conflicts and relationship crises. Rebuild connection and intimacy."
      },
      "cultures": {
        "title": "Life across cultures",
        "text": "Navigate cultural differences, adapt to life between countries and build fulfilling relationships."
      }
    },
    "tags": [
      "Solution-oriented",
      "Tailored to you",
      "Online",
      "In Spanish · English · Polish"
    ],
    "therapy": {
      "title": "Therapy",
      "intro": "[Your text: a short introduction to how you work]",
      "sessionTitle": "How an online session works",
      "sessionText": "[Your text: length, frequency, platform and how to book]"
    },
    "page": {
      "p1": "[Your text: who this therapy is for]",
      "p2": "[Your text: how we work together]"
    },
    "about": {
      "title": "About",
      "p1": "[Your text: who you are and your story]",
      "p2": "[Your text: training and qualifications]"
    },
    "contact": {
      "title": "Contact",
      "text": "Write to me on WhatsApp or give me a call, whichever feels easier."
    },
    "footer": {
      "tagline": "Online psychotherapy in English, Spanish and Polish.",
      "exploreTitle": "Explore",
      "contactTitle": "Contact",
      "crisis": "This website does not offer emergency support. If you are in immediate danger, please contact your local emergency services (in Spain, dial 112).",
      "privacy": "Privacy policy",
      "legal": "Legal notice",
      "cookies": "Cookies policy",
      "legalTitle": "Legal"
    },
    "legal": {
      "title": "Legal information",
      "lead": "This page contains the privacy policy, legal notice and cookies policy of KONEKTOPIA. The content published here is provisional and will be reviewed by a legal advisor before the official launch of the site.",
      "provisional": "Draft — pending legal review",
      "privacy": {
        "p1": "KONEKTOPIA respects your privacy. The personal data you provide (name, email, phone, message) is used exclusively to respond to your enquiry and, where applicable, to manage the service you request.",
        "p2": "We do not share your data with third parties unless legally obliged. You may exercise your rights of access, rectification, deletion, objection, limitation and portability by sending a message through the contact page.",
        "p3": "The legal basis for processing is your consent when contacting us. We retain data for the time necessary to manage the professional relationship and fulfil applicable legal obligations.",
        "note": "This text is provisional. It will be replaced by a complete privacy policy, reviewed by a legal professional, before launch."
      },
      "legal": {
        "p1": "Site owner: Sonia Foder · KONEKTOPIA, online psychotherapy. Website: konektopia.com. Contact: +34 684 00 32 37 · konektopia@gmail.com.",
        "p2": "Access to this site is free and use implies acceptance of these conditions. KONEKTOPIA reserves the right to modify the site content without prior notice.",
        "p3": "Professional services are governed by the therapeutic contract signed separately. This site does not constitute an emergency service and does not replace emergency medical or psychological care.",
        "note": "This text is provisional. It will be replaced by a complete legal notice, reviewed by a legal professional, before launch."
      },
      "cookies": {
        "p1": "This site only uses strictly necessary technical cookies for the operation of the web (for example, to remember your preferred language). We do not use tracking or advertising cookies without your consent.",
        "p2": "If in the future we incorporate analytics tools, we will inform you in advance and request your explicit consent via a cookie banner in accordance with current regulations.",
        "p3": "You can configure your browser to reject or delete cookies at any time. Language preference is stored on your device via browser localStorage.",
        "note": "This text is provisional. It will be replaced by a complete cookies policy, reviewed by a legal professional, before launch."
      }
    }
  },
  "es": {
    "meta": {
      "title": "KONEKTOPIA · Sonia Foder · Psicoterapia online",
      "description": "Psicoterapia online con Sonia Foder: terapia individual, terapia de pareja y vivir entre culturas. En español, inglés y polaco."
    },
    "a11y": {
      "skip": "Saltar al contenido principal"
    },
    "nav": {
      "home": "Inicio",
      "therapy": "Terapia",
      "onlyYou": "Solo tú",
      "forBoth": "Para los dos",
      "about": "Sobre mí",
      "contact": "Contacto"
    },
    "cta": {
      "touch": "Escríbeme",
      "whatsapp": "WhatsApp",
      "call": "Llamar",
      "more": "Saber más",
      "back": "Todas las opciones"
    },
    "home": {
      "subtitle": "Psicoterapeuta especializada en relaciones y en las presiones de la vida moderna",
      "tagline": "Comprender. Cambiar. Sentirte mejor.",
      "intro": "La terapia te ayuda a dar sentido a lo que estás viviendo, a hacer cambios significativos y a construir una vida más satisfactoria.",
      "ctaText": "¿No sabes si la terapia es para ti? Dar el primer paso puede ser difícil. A veces, una sola conversación basta para ver las cosas con más claridad."
    },
    "card": {
      "individual": {
        "title": "Terapia individual",
        "text": "Comprende los patrones que se repiten, trabaja las dificultades emocionales y encuentra nuevos caminos."
      },
      "couples": {
        "title": "Terapia de pareja",
        "text": "Mejora la comunicación, trabaja los conflictos y las crisis de pareja. Recupera la conexión y la intimidad."
      },
      "cultures": {
        "title": "Vivir entre culturas",
        "text": "Gestiona las diferencias culturales, adáptate a la vida entre países y construye relaciones plenas."
      }
    },
    "tags": [
      "Orientada a soluciones",
      "Adaptada a ti",
      "Online",
      "En español · inglés · polaco"
    ],
    "therapy": {
      "title": "Terapia",
      "intro": "[Tu texto: una breve introducción a tu forma de trabajar]",
      "sessionTitle": "Cómo es una sesión online",
      "sessionText": "[Tu texto: duración, frecuencia, plataforma y cómo reservar]"
    },
    "page": {
      "p1": "[Tu texto: para quién es esta terapia]",
      "p2": "[Tu texto: cómo trabajamos juntos]"
    },
    "about": {
      "title": "Sobre mí",
      "p1": "[Tu texto: quién eres y tu historia]",
      "p2": "[Tu texto: formación y titulaciones]"
    },
    "contact": {
      "title": "Contacto",
      "text": "Escríbeme por WhatsApp o llámame, como te resulte más fácil."
    },
    "footer": {
      "tagline": "Psicoterapia online en español, inglés y polaco.",
      "exploreTitle": "Explorar",
      "contactTitle": "Contacto",
      "crisis": "Esta web no ofrece atención de urgencia. Si estás en peligro inmediato, contacta con los servicios de emergencia locales (en España, 112).",
      "privacy": "Política de privacidad",
      "legal": "Aviso legal",
      "cookies": "Política de cookies",
      "legalTitle": "Legal"
    },
    "legal": {
      "title": "Información legal",
      "lead": "Esta página recoge la política de privacidad, el aviso legal y la política de cookies de KONEKTOPIA. El contenido aquí publicado es provisional y será revisado por un asesor legal antes del lanzamiento oficial del sitio.",
      "provisional": "Borrador — pendiente de revisión legal",
      "privacy": {
        "p1": "KONEKTOPIA respeta tu privacidad. Los datos personales que nos facilites (nombre, email, teléfono, mensaje) se utilizan exclusivamente para responder a tu consulta y, en su caso, gestionar el servicio que solicites.",
        "p2": "No compartimos tus datos con terceros, salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un mensaje a través de la página de contacto.",
        "p3": "La base legal del tratamiento es tu consentimiento al contactar con nosotros. Conservamos los datos durante el tiempo necesario para gestionar la relación profesional y cumplir con las obligaciones legales aplicables.",
        "note": "Este texto es provisional. Será sustituido por una política de privacidad completa, revisada por un profesional legal, antes del lanzamiento."
      },
      "legal": {
        "p1": "Titular del sitio: Sonia Foder · KONEKTOPIA, psicoterapia online. Sitio web: konektopia.com. Contacto: +34 684 00 32 37 · konektopia@gmail.com.",
        "p2": "El acceso a esta web es gratuito y su uso implica la aceptación de las presentes condiciones. KONEKTOPIA se reserva el derecho a modificar el contenido del sitio sin previo aviso.",
        "p3": "Los servicios profesionales se rigen por el contrato terapéutico que se firma de forma independiente. Esta web no constituye un servicio de urgencia ni sustituye atención médica o psicológica de emergencia.",
        "note": "Este texto es provisional. Será sustituido por un aviso legal completo, revisado por un profesional legal, antes del lanzamiento."
      },
      "cookies": {
        "p1": "Este sitio utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento de la web (por ejemplo, recordar tu idioma preferido). No utilizamos cookies de seguimiento ni de publicidad sin tu consentimiento.",
        "p2": "Si en el futuro incorporamos herramientas de analítica, te informaremos previamente y solicitaremos tu consentimiento explícito mediante un banner de cookies conforme a la normativa vigente.",
        "p3": "Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. La preferencia de idioma se guarda en tu dispositivo mediante localStorage del navegador.",
        "note": "Este texto es provisional. Será sustituido por una política de cookies completa, revisada por un profesional legal, antes del lanzamiento."
      }
    }
  },
  "pl": {
    "meta": {
      "title": "KONEKTOPIA · Sonia Foder · Psychoterapia online",
      "description": "Psychoterapia online z Sonią Foder: terapia indywidualna, terapia par i życie między kulturami. Po polsku, hiszpańsku i angielsku."
    },
    "a11y": {
      "skip": "Przejdź do treści"
    },
    "nav": {
      "home": "Start",
      "therapy": "Terapia",
      "onlyYou": "Tylko ty",
      "forBoth": "Dla dwojga",
      "about": "O mnie",
      "contact": "Kontakt"
    },
    "cta": {
      "touch": "Napisz do mnie",
      "whatsapp": "WhatsApp",
      "call": "Zadzwoń",
      "more": "Dowiedz się więcej",
      "back": "Wszystkie formy terapii"
    },
    "home": {
      "subtitle": "Psychoterapeutka specjalizująca się w relacjach i presji współczesnego życia",
      "tagline": "Zrozumieć. Zmienić. Poczuć się lepiej.",
      "intro": "Terapia pomaga zrozumieć to, czego doświadczasz, wprowadzić ważne zmiany i zbudować bardziej satysfakcjonujące życie.",
      "ctaText": "Nie wiesz, czy terapia jest dla ciebie? Pierwszy krok bywa trudny. Czasem jedna rozmowa wystarczy, by zobaczyć wszystko wyraźniej."
    },
    "card": {
      "individual": {
        "title": "Terapia indywidualna",
        "text": "Zrozum powtarzające się wzorce, przepracuj trudności emocjonalne i znajdź nowe drogi."
      },
      "couples": {
        "title": "Terapia par",
        "text": "Popraw komunikację, przepracuj konflikty i kryzysy w związku. Odbuduj bliskość i intymność."
      },
      "cultures": {
        "title": "Życie między kulturami",
        "text": "Odnajdź się w różnicach kulturowych i w życiu między krajami, buduj satysfakcjonujące relacje."
      }
    },
    "tags": [
      "Nastawiona na rozwiązania",
      "Dopasowana do ciebie",
      "Online",
      "Po hiszpańsku · angielsku · polsku"
    ],
    "therapy": {
      "title": "Terapia",
      "intro": "[Twój tekst: krótkie wprowadzenie do tego, jak pracujesz]",
      "sessionTitle": "Jak wygląda sesja online",
      "sessionText": "[Twój tekst: długość, częstotliwość, platforma i jak się umówić]"
    },
    "page": {
      "p1": "[Twój tekst: dla kogo jest ta terapia]",
      "p2": "[Twój tekst: jak razem pracujemy]"
    },
    "about": {
      "title": "O mnie",
      "p1": "[Twój tekst: kim jesteś i twoja historia]",
      "p2": "[Twój tekst: wykształcenie i kwalifikacje]"
    },
    "contact": {
      "title": "Kontakt",
      "text": "Napisz do mnie na WhatsAppie albo zadzwoń, jak ci wygodniej."
    },
    "footer": {
      "tagline": "Psychoterapia online po polsku, hiszpańsku i angielsku.",
      "exploreTitle": "Odkryj",
      "contactTitle": "Kontakt",
      "crisis": "Ta strona nie świadczy pomocy w sytuacjach kryzysowych. W razie bezpośredniego zagrożenia skontaktuj się z lokalnymi służbami ratunkowymi (w Hiszpanii 112).",
      "privacy": "Polityka prywatności",
      "legal": "Nota prawna",
      "cookies": "Polityka cookies",
      "legalTitle": "Informacje prawne"
    },
    "legal": {
      "title": "Informacje prawne",
      "lead": "Ta strona zawiera politykę prywatności, notę prawną i politykę cookies KONEKTOPIA. Publikowane tu treści są wersją roboczą i zostaną zweryfikowane przez doradcę prawnego przed oficjalnym uruchomieniem strony.",
      "provisional": "Wersja robocza — wymaga weryfikacji prawnej",
      "privacy": {
        "p1": "KONEKTOPIA szanuje Twoją prywatność. Dane osobowe, które nam przekazujesz (imię, e-mail, telefon, wiadomość), są wykorzystywane wyłącznie w celu odpowiedzi na Twoje zapytanie i — w stosownych przypadkach — realizacji usługi, o którą prosisz.",
        "p2": "Nie udostępniamy Twoich danych osobom trzecim, chyba że wymagają tego przepisy prawa. Możesz w każdej chwili skorzystać z prawa dostępu, sprostowania, usunięcia, sprzeciwu, ograniczenia i przenoszenia, wysyłając wiadomość przez stronę kontaktową.",
        "p3": "Podstawą prawną przetwarzania jest Twoja zgoda wyrażona przy kontakcie. Dane przechowujemy przez czas niezbędny do obsługi relacji zawodowej i wypełnienia obowiązków prawnych.",
        "note": "Ten tekst jest wersją roboczą. Zostanie zastąpiony pełną polityką prywatności, zweryfikowaną przez prawnika, przed publikacją."
      },
      "legal": {
        "p1": "Właściciel serwisu: Sonia Foder · KONEKTOPIA, psychoterapia online. Strona: konektopia.com. Kontakt: +34 684 00 32 37 · konektopia@gmail.com.",
        "p2": "Dostęp do strony jest bezpłatny, a korzystanie z niej oznacza akceptację niniejszych warunków. KONEKTOPIA zastrzega sobie prawo do modyfikowania treści serwisu bez uprzedniego powiadomienia.",
        "p3": "Usługi profesjonalne są regulowane przez odrębnie podpisywaną umowę terapeutyczną. Ta strona nie stanowi usługi ratunkowej i nie zastępuje pomocy medycznej ani psychologicznej w sytuacji nagłej.",
        "note": "Ten tekst jest wersją roboczą. Zostanie zastąpiony pełną notą prawną, zweryfikowaną przez prawnika, przed publikacją."
      },
      "cookies": {
        "p1": "Strona używa wyłącznie technicznych plików cookies, ściśle niezbędnych do działania serwisu (np. zapamiętanie preferowanego języka). Nie używamy cookies śledzących ani reklamowych bez Twojej zgody.",
        "p2": "Jeśli w przyszłości wprowadzimy narzędzia analityczne, poinformujemy Cię z wyprzedzeniem i poprosimy o wyraźną zgodę poprzez baner cookies zgodnie z obowiązującymi przepisami.",
        "p3": "Możesz w dowolnym momencie skonfigurować swoją przeglądarkę, aby odrzucała lub usuwała cookies. Preferencja językowa jest zapisywana na Twoim urządzeniu za pomocą localStorage przeglądarki.",
        "note": "Ten tekst jest wersją roboczą. Zostanie zastąpiony pełną polityką cookies, zweryfikowaną przez prawnika, przed publikacją."
      }
    }
  }
};

/* ---------- Helpers ---------- */

// Resolve "a.b.c.0" path on an object, returning undefined if missing
function getPath(obj, path) {
  return path.split(".").reduce((acc, k) => {
    if (acc == null) return undefined;
    const key = /^\d+$/.test(k) ? Number(k) : k;
    return acc[key];
  }, obj);
}

// Missing key in es/pl falls back to the English text
function tr(dict, path) {
  const v = getPath(dict, path);
  return typeof v === "string" ? v : getPath(TRANSLATIONS.en, path);
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = tr(dict, el.getAttribute("data-i18n"));
    if (typeof value === "string") el.textContent = value;
  });

  // HTML nodes — translations may contain markup like <mark> for highlight blocks
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = tr(dict, el.getAttribute("data-i18n-html"));
    if (typeof value === "string") el.innerHTML = value;
  });

  // Element attributes — usage: data-i18n-attr="placeholder:hero.x,aria-label:hero.y"
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const spec = el.getAttribute("data-i18n-attr");
    spec.split(",").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s && s.trim());
      if (!attr || !key) return;
      const v = getPath(dict, key);
      if (typeof v === "string") el.setAttribute(attr, v);
    });
  });

  // Meta tags (title, description, og:*)
  document.querySelectorAll("[data-i18n-meta]").forEach(el => {
    const key = el.getAttribute("data-i18n-meta");
    const value = getPath(dict.meta || {}, key);
    if (typeof value !== "string") return;
    if (el.tagName === "TITLE") el.textContent = value;
    else if (el.hasAttribute("content")) el.setAttribute("content", value);
  });

  // <html lang>
  document.documentElement.setAttribute("lang", lang);

  // og:locale
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute("content", { es: "es_ES", en: "en_GB", pl: "pl_PL" }[lang] || "en_GB");
  }
}

/* ---------- Language switcher ---------- */
function initLanguageSwitch() {
  const switchEl = document.querySelector(".lang-switch");
  if (!switchEl) return;
  const indicator = switchEl.querySelector(".lang-indicator");
  const buttons = Array.from(switchEl.querySelectorAll(".lang-btn"));

  function moveIndicator(activeBtn) {
    if (!indicator) return;   // indicator is hidden in new design — skip gracefully
    const r = activeBtn.getBoundingClientRect();
    const parent = switchEl.getBoundingClientRect();
    indicator.style.width = r.width + "px";
    indicator.style.transform = `translateX(${r.left - parent.left - 4}px)`;
  }

  function setLang(lang, { save = true, fromInit = false } = {}) {
    // Sync ALL lang buttons on the page (header + mobile footer)
    document.querySelectorAll(".lang-btn").forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
      if (active && b.closest(".lang-switch") === switchEl) moveIndicator(b);
    });
    applyTranslations(lang);
    if (save) {
      try { localStorage.setItem("konektopia.lang", lang); } catch (e) {}
    }
    // Keep position in section: do nothing — only text changes, scroll stays
    if (!fromInit && indicator) {
      // Tiny pulse on indicator for feedback
      indicator.animate(
        [{ transform: indicator.style.transform + " scale(1)" },
         { transform: indicator.style.transform + " scale(1.06)" },
         { transform: indicator.style.transform + " scale(1)" }],
        { duration: 280, easing: "cubic-bezier(.2,.65,.25,1)" }
      );
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // Choose initial language
  let initial = "en";
  try {
    const saved = localStorage.getItem("konektopia.lang");
    if (saved && TRANSLATIONS[saved]) initial = saved;
  } catch (e) {}
  // URL ?lang=xx wins
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (urlLang && TRANSLATIONS[urlLang]) initial = urlLang;

  setLang(initial, { save: false, fromInit: true });

  // Reposition indicator on resize
  let raf;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const active = switchEl.querySelector(".lang-btn.is-active");
      if (active) moveIndicator(active);
    });
  });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  function close() {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function open() {
    toggle.setAttribute("aria-expanded", "true");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? close() : open();
  });

  menu.addEventListener("click", e => {
    if (e.target.closest("a")) close();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });
}

/* ---------- Smooth scroll with header offset ---------- */
function initSmoothScroll() {
  const header = document.getElementById("siteHeader");
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = (header?.offsetHeight || 0) + 8;
    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", id);
  });
}

/* ---------- Scroll reveals ---------- */
function initReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ---------- Header: transparent→white + hide-on-scroll-down ---------- */
function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  let lastY   = 0;
  let ticking = false;

  function update() {
    const y = window.scrollY;

    // Switch between transparent and opaque
    header.classList.toggle("is-scrolled", y > 12);

    // Hide on scroll-down past threshold, reveal on scroll-up
    if (y < 80) {
      header.classList.remove("is-hidden");
    } else if (y > lastY + 4) {   // small dead-zone prevents jitter
      header.classList.add("is-hidden");
      // Close mobile menu if open when nav hides
      const menu = document.getElementById("mobileMenu");
      if (menu?.classList.contains("is-open")) {
        document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
        menu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    } else if (lastY > y + 4) {
      header.classList.remove("is-hidden");
    }

    lastY   = y;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  update();
}

/* ---------- Active section in nav ---------- */
function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".primary-nav a[href^='#']"));
  if (!links.length) return;
  const map = new Map();
  links.forEach(a => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (sec) map.set(sec, a);
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(en => {
        const link = map.get(en.target);
        if (!link) return;
        if (en.isIntersecting) {
          links.forEach(l => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  );
  map.forEach((_, sec) => io.observe(sec));
}

/* ---------- Footer year ---------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Hero heart: hover → it jumps onto the cursor and follows; click or leaving the window sends it home ---------- */
function initHeartCursor() {
  const dot = document.querySelector(".heart-dot");
  if (!dot) return;
  const canFollow = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
                    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canFollow) {
    // Touch / reduced motion: a small hop instead
    dot.addEventListener("click", () => {
      dot.classList.remove("is-hopping");
      void dot.offsetWidth;
      dot.classList.add("is-hopping");
    });
    return;
  }

  const OFFSET = 14;        // keep the heart beside the pointer so it never covers what you click
  const EASE = 0.18;        // follow lag
  let follower = null, state = "home", x = 0, y = 0, tx = 0, ty = 0;

  const home = () => dot.getBoundingClientRect();

  function tick() {
    if (state === "returning") {
      const h = home();
      tx = h.left; ty = h.top;
      if (Math.abs(tx - x) < 0.5 && Math.abs(ty - y) < 0.5) {
        follower.remove();
        follower = null;
        dot.classList.remove("is-away");
        state = "home";
        return;
      }
    }
    x += (tx - x) * EASE;
    y += (ty - y) * EASE;
    follower.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(tick);
  }

  dot.addEventListener("mouseenter", e => {
    if (state !== "home") return;
    const h = home();
    follower = dot.cloneNode(true);
    follower.className = "heart-follower";
    follower.style.width = h.width + "px";
    document.body.appendChild(follower);
    x = h.left; y = h.top;
    tx = e.clientX + OFFSET; ty = e.clientY + OFFSET;
    dot.classList.add("is-away");
    state = "follow";
    requestAnimationFrame(tick);
  });

  document.addEventListener("mousemove", e => {
    if (state !== "follow") return;
    tx = e.clientX + OFFSET;
    ty = e.clientY + OFFSET;
  });

  const release = () => { if (state === "follow") state = "returning"; };
  document.addEventListener("click", release);
  document.documentElement.addEventListener("mouseleave", release);
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitch();
  initMobileMenu();
  initSmoothScroll();
  initReveals();
  initHeaderScroll();
  initYear();
  initHeartCursor();
});
