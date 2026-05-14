/* =========================================================
   KONEKTOPIA — vanilla JS
   - i18n (ES default, EN, PL)
   - Language switcher with sliding indicator
   - Mobile menu
   - Smooth scroll (with sticky header offset)
   - Scroll reveals
   - Header scroll state
   - Resources tabs
   - Active section highlight in nav
   - Lightweight contact form UX (no backend wired)
   ========================================================= */

/* ---------- Translations ---------- */
const TRANSLATIONS = {
  es: {
    meta: {
      title: "KONEKTOPIA | Psicoterapia y Terapia de Pareja en Barcelona",
      description: "KONEKTOPIA ofrece psicoterapia online individual y de pareja, terapia cognitivo-conductual, cursos prematrimoniales y talleres relacionales en español, inglés y polaco. Con base en Barcelona y sesiones online internacionales.",
      ogTitle: "KONEKTOPIA | Psicoterapia y Terapia de Pareja en Barcelona",
      ogDescription: "Psicoterapia online individual y de pareja, terapia cognitivo-conductual, cursos prematrimoniales y talleres relacionales. Barcelona + online internacional."
    },
    a11y: { skip: "Saltar al contenido principal" },
    nav: {
      help: "Cómo te ayudo", about: "Sobre mí", therapy: "Terapia",
      services: "Servicios", workshops: "Talleres", premarital: "Curso prematrimonial",
      singles: "Para singles", resources: "Recursos", contact: "Contacto",
      cta: "Contacta conmigo"
    },
    hero: {
      eyebrow: "Psicoterapia · Terapia de pareja · Online & Barcelona",
      welcome: "Bienvenidxs a",
      motto: "La calidad de tus relaciones define la calidad de tu vida.",
      description: "Psicoterapia. Terapia de pareja e individual online. Terapia Cognitivo-Conductual. Talleres y cursos pre compromiso. Con base en Barcelona y atención online internacional.",
      ctaPrimary: "Contacta conmigo",
      ctaSecondary: "Servicios",
      mottoHtml: "La calidad de tus relaciones define <mark>la calidad de tu vida</mark>.",
      features: [
        "Confidencial y profesional",
        "Flexible y online",
        "Integral y a tu medida"
      ],
      announce: "Consulta inicial gratuita · plazas limitadas",
      promptPlaceholder: "Cuéntame brevemente qué te trae aquí…",
      promptAria: "Cuéntame brevemente qué te trae aquí",
      promptSend: "Enviar",
      promptHint: "Al enviar abrirás WhatsApp con tu mensaje listo. Sin compromiso.",
      promptIntro: "Hola, me gustaría una consulta inicial.",
      suggestions: [
        "Tengo conflictos de pareja",
        "Quiero empezar terapia individual",
        "Pensamos en un curso prematrimonial",
        "Ansiedad o baja autoestima",
        "Soy expat / migrante"
      ],
      trust: ["Terapia online", "Terapia de pareja", "Terapia individual", "Talleres", "Barcelona", "Sesiones online internacionales"]
    },
    approach: {
      eyebrow: "Cómo trabajamos",
      title: "Comprender antes de cambiar",
      p1: "La psicoterapia empieza con curiosidad: por qué pensamos lo que pensamos, sentimos lo que sentimos y nos relacionamos como lo hacemos.",
      p2: "Juntos miramos esos patrones con calma y sin juicios — y desde esa comprensión construimos el cambio real.",
      cta: "Reservar consulta inicial"
    },
    help: {
      eyebrow: "Acompañamiento",
      title: "Puedo ayudarte si experimentas…",
      lead: "Un espacio seguro para explorar lo que está pasando, encontrar claridad y construir herramientas reales.",
      items: [
        "Conflictos de pareja",
        "Problemas de comunicación",
        "Distancia emocional",
        "Ansiedad",
        "Baja autoestima",
        "Dificultades en citas y relaciones modernas",
        "Miedo al compromiso",
        "Patrones relacionales negativos repetidos",
        "Prevención de ruptura o divorcio",
        "Dificultad de regulación emocional",
        "Trauma relacional pasado",
        "Dificultad para construir vínculos sanos",
        "Adaptación de expatriados y migrantes",
        "Retos en relaciones multiculturales"
      ]
    },
    about: {
      eyebrow: "Sobre KONEKTOPIA",
      title: "Me presento",
      tag: "Barcelona · Online",
      p1: "Psicoterapeuta con experiencia, formación en Psicología, Terapia de Pareja y Terapia Cognitivo-Conductual. Mi misión es aliviar el sufrimiento emocional que impide vivir una vida plena y satisfactoria.",
      p2: "Acompaño a personas en dificultades relacionales y de comunicación. Trabajo con problemas en el ámbito de las citas y relaciones modernas, conflictos de pareja y prevención de la ruptura o divorcio. También abordo ansiedad, baja autoestima, experiencias relacionales negativas, dificultades de regulación emocional y problemas para construir o mantener vínculos sanos.",
      p3: "Como persona emigrante, acompaño también a expatriados, migrantes y personas de diferentes culturas en procesos de adaptación, identidad, aceptación y equilibrio entre valores de origen y del país de acogida.",
      p4: "Mis clientes valoran mi experiencia, compasión, sentido del humor, pragmatismo y capacidad de inspirar cambios reales.",
      educationTitle: "Formación profesional",
      education: "Graduada en Psicología en Francia. Estudios de doctorado y máster de investigación en Psicología Clínica y de la Salud por la Universidad de Barcelona. Especialización en Terapia Cognitivo-Conductual por la School of Cognitive Behavioural Psychotherapy, Universidad SWPS de Varsovia. Curso de Método Gottman en terapia de pareja. Máster en Sexología Clínica y Terapia de Pareja por el Instituto de la Pareja.",
      signature: "— Sonia Foder, KONEKTOPIA"
    },
    therapy: {
      eyebrow: "Terapia",
      title: "Terapia de pareja & terapia individual",
      lead: "Dos caminos diferentes, una misma vocación: que la relación contigo y con quienes te rodean sea más sana, consciente y satisfactoria.",
      common: {
        whenTitle: "¿Cuándo empezar?",
        howTitle: "¿Cómo empieza el proceso?",
        expectTitle: "¿Qué puedes esperar?"
      },
      couples: {
        title: "Terapia de pareja",
        when: "Cuando la comunicación se ha vuelto difícil, cuando los conflictos se repiten o cuando estáis tomando decisiones importantes y queréis hacerlo con más claridad. No hace falta esperar a una crisis.",
        how: "Una primera sesión conjunta para entender vuestra historia, las dificultades actuales y los objetivos compartidos. A partir de ahí construimos un plan adaptado a vuestra pareja.",
        expect: "Un espacio seguro, sin juicios, en el que cada parte puede ser escuchada. Herramientas prácticas para comunicación, gestión del conflicto e intimidad.",
        goals: ["Comunicación", "Confianza", "Conflicto", "Intimidad", "Toma de decisiones", "Prevención de ruptura"]
      },
      individual: {
        title: "Terapia individual",
        when: "Cuando sientes que algo se repite, que la ansiedad o la autoexigencia te ocupan demasiado, o cuando quieres comprenderte mejor y vivir con más coherencia.",
        how: "Una primera consulta para explorar tu situación, tu historia y lo que te gustaría cambiar. Acordamos objetivos realistas y un ritmo que funcione para ti.",
        expect: "Acompañamiento profesional, herramientas prácticas y una mirada compasiva pero honesta. El cambio se construye paso a paso.",
        goals: ["Autoconocimiento", "Reducir la ansiedad", "Regulación emocional", "Autoestima", "Patrones relacionales"]
      }
    },
    sessions: {
      eyebrow: "Proceso",
      title: "Estructura de las sesiones",
      lead: "Un proceso claro, flexible y respetuoso con tu ritmo.",
      steps: [
        { t: "Consulta inicial", d: "Una primera conversación para conocernos, entender qué estás viviendo y decidir juntos si es un buen ajuste." },
        { t: "Comprender la situación", d: "Exploramos contexto, historia, momentos clave y lo que sostiene la dificultad hoy." },
        { t: "Definir objetivos", d: "Acordamos objetivos realistas y significativos para ti o para la pareja." },
        { t: "Explorar patrones", d: "Identificamos creencias, emociones y conductas que se repiten y bloquean el cambio." },
        { t: "Herramientas prácticas", d: "Aprendes recursos concretos basados en la psicología y la terapia cognitivo-conductual." },
        { t: "Revisar el progreso", d: "Revisamos avances, dudas y obstáculos con honestidad y sin prisas." },
        { t: "Ajustar el proceso", d: "Adaptamos el ritmo, los objetivos y el enfoque a tu momento vital." }
      ],
      expectTitle: "Qué puedes esperar",
      expect: [
        "Conversación segura y respetuosa",
        "Herramientas psicológicas prácticas",
        "Claridad emocional",
        "Mejor comunicación",
        "Sin juicios",
        "Confidencialidad",
        "Un proceso realista, no resultados inmediatos"
      ]
    },
    services: {
      eyebrow: "Servicios",
      title: "Servicios y precios",
      lead: "Sesiones individuales y de pareja, cursos y talleres. Adaptables a tu situación, online o presenciales.",
      priceTBA: "Precio disponible bajo consulta",
      cta: "Solicitar información",
      viewResources: "Ver recursos",
      recommended: "Recomendado para empezar",
      note: "Los precios se actualizarán pronto. Para información personalizada, contáctame directamente.",
      items: [
        { t: "Sesión individual online", d: "Espacio de terapia uno a uno desde cualquier lugar del mundo." },
        { t: "Sesión de pareja online", d: "Trabajo conjunto centrado en comunicación, conflictos e intimidad." },
        { t: "Consulta inicial", d: "Una conversación breve y sin compromiso para valorar cómo podría ayudarte." },
        { t: "Curso pre compromiso / prematrimonial", d: "Para parejas que valoran un paso importante: convivencia, matrimonio o decisiones a largo plazo." },
        { t: "Talleres para singles", d: "Grupos pequeños para entender patrones de citas y elegir con más conciencia." },
        { t: "Talleres de pareja", d: "Aprendizaje práctico para parejas que quieren mejorar conexión y comunicación." },
        { t: "Recursos · ebooks · cursos", d: "Materiales descargables y cursos auto-guiados (próximamente)." }
      ]
    },
    workshops: {
      eyebrow: "Talleres",
      title: "Talleres presenciales y online",
      lead: "Espacios de aprendizaje vivencial sobre relaciones, comunicación y compromiso consciente.",
      topics: ["Educación relacional", "Comunicación", "Prevención del conflicto", "Intimidad emocional", "Compromiso consciente", "Amor y citas modernas"],
      locationsTitle: "Disponibles en Catalunya y Andalucía",
      locationsDesc: "Talleres y cursos presenciales en ciudades seleccionadas. Calendario actualizado según la demanda.",
      cta: "Pregunta por el próximo taller"
    },
    premarital: {
      eyebrow: "Curso especial",
      title: "Curso pre compromiso / prematrimonial",
      p1: "Para parejas que están considerando un paso importante — convivir, casarse, formar una familia o tomar decisiones a largo plazo.",
      p2: "Trabajamos expectativas, valores, estilo de comunicación, patrones de conflicto, intimidad, planes familiares, dinero, estilo de vida y necesidades emocionales.",
      p3: "Es un proceso preventivo, práctico y profundamente centrado en la relación. Disponible en formato online o presencial.",
      cta: "Más información",
      cta2: "Ver formatos"
    },
    singles: {
      eyebrow: "Para singles",
      title: "Para singles",
      lead: "Acompañamiento relacional para quienes están solteros y quieren entenderse, sanar y elegir mejor.",
      items: [
        { t: "Patrones de citas", d: "Reconocer qué tipo de relaciones eliges y por qué." },
        { t: "Disponibilidad emocional", d: "Identificar si estás realmente disponible para una relación sana." },
        { t: "Autoestima en relaciones", d: "Construir un sentido de valor que no dependa del otro." },
        { t: "Elegir parejas más sanas", d: "Aprender a leer señales y filtrar desde el principio." },
        { t: "Romper patrones repetitivos", d: "Salir del bucle de las mismas historias con personas diferentes." },
        { t: "Apoyo en citas modernas", d: "Apps, ghosting, ambigüedad: navegar el panorama actual con criterio." }
      ]
    },
    resources: {
      eyebrow: "Recursos",
      title: "Recursos para tus relaciones",
      lead: "Artículos, ebooks, cursos y recomendaciones. Próximamente actualizaremos esta sección con contenido descargable.",
      tabs: ["Artículos", "Ebooks", "Cursos", "Libros, películas y series"],
      cat: { article: "Artículo", ebook: "Ebook", course: "Curso", book: "Libro recomendado", film: "Película / Serie" },
      soon: "Próximamente",
      articles: [
        "¿Cómo saber si necesitamos terapia de pareja?",
        "Cómo comunicarte mejor en pareja",
        "Miedo al compromiso",
        "Distancia emocional en la relación",
        "Cómo reconstruir la confianza",
        "Ansiedad en las relaciones",
        "Cómo dejar de repetir patrones tóxicos",
        "Preguntas prematrimoniales esenciales",
        "Volver a las citas después de una ruptura",
        "Límites saludables en las relaciones"
      ],
      ebooks: [
        "Guía para parejas que quieren crecer juntas",
        "Cuaderno de comunicación consciente",
        "Citas modernas: una guía honesta"
      ],
      courses: [
        "Mini-curso: bases de la comunicación en pareja",
        "Curso pre compromiso (auto-guiado)"
      ],
      media: [
        "Lecturas sobre apego y vínculos",
        "Historias para reflexionar sobre el amor",
        "Recursos sobre amor moderno"
      ]
    },
    reviews: {
      eyebrow: "Testimonios",
      title: "Voces de clientes",
      placeholder: "Los testimonios de clientes se añadirán aquí después de la oportuna aprobación y siempre respetando la confidencialidad.",
      q1: "— Espacio reservado para testimonio —",
      q2: "— Espacio reservado para testimonio —",
      q3: "— Espacio reservado para testimonio —"
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      intro: "Llámame o escríbeme por WhatsApp para una breve consulta inicial, sin compromiso. Podrás contarme brevemente tu situación, dificultad o el motivo por el que buscas ayuda. Hablaremos sobre lo que necesitas y cómo podría ayudarte. Si considero que otro tipo de apoyo o un profesional diferente podría ajustarse mejor a tu situación, te orientaré sobre los siguientes pasos o posibles recursos.",
      phone: "Teléfono",
      address: "Direcciones",
      callCta: "Llamar ahora",
      waCta: "Escribir por WhatsApp",
      formTitle: "Escríbeme un mensaje",
      formHelp: "Este formulario es una versión visual. Conéctalo a tu servicio preferido (Formspree, Netlify Forms, email, etc.) antes de publicar.",
      form: {
        name: "Nombre",
        email: "Email",
        topic: "Motivo",
        topics: ["Terapia individual", "Terapia de pareja", "Curso prematrimonial", "Taller / grupo", "Otro"],
        message: "Mensaje",
        privacy: "He leído y acepto la política de privacidad.",
        submit: "Enviar mensaje",
        status: ""
      },
      crisisTitle: "Nota importante:",
      crisis: "Esta web no ofrece atención de urgencia. Si tú o alguien cercano estáis en peligro inmediato, contactad con los servicios de emergencia locales (en España, 112) o con una línea de ayuda especializada."
    },
    footer: {
      servicesTitle: "Servicios",
      contactTitle: "Contacto",
      legalTitle: "Legal",
      privacy: "Política de privacidad",
      legal: "Aviso legal",
      cookies: "Política de cookies",
      legalNote: "Las páginas legales son provisionales y deben revisarse antes del lanzamiento.",
      byline: "Psicoterapia y acompañamiento relacional"
    },
    float: { wa: "WhatsApp" }
  },

  en: {
    meta: {
      title: "KONEKTOPIA | Psychotherapy, Couples Therapy & Relationship Counselling in Barcelona",
      description: "KONEKTOPIA offers online individual therapy, couples therapy, Cognitive Behavioural Therapy, premarital courses, and relationship workshops in Spanish, English, and Polish. Based in Barcelona, with international online sessions.",
      ogTitle: "KONEKTOPIA | Psychotherapy & Couples Therapy in Barcelona",
      ogDescription: "Online individual therapy, couples therapy, CBT, premarital courses and relationship workshops. Barcelona + international online sessions."
    },
    a11y: { skip: "Skip to main content" },
    nav: {
      help: "How I help", about: "About", therapy: "Therapy",
      services: "Services", workshops: "Workshops", premarital: "Premarital course",
      singles: "For singles", resources: "Resources", contact: "Contact",
      cta: "Contact me"
    },
    hero: {
      eyebrow: "Psychotherapy · Couples Therapy · Online & Barcelona",
      welcome: "Welcome to",
      motto: "The quality of your relationships defines the quality of your life.",
      description: "Psychotherapy. Individual and couples therapy online. Cognitive Behavioural Therapy. Pre-commitment workshops and courses. Based in Barcelona, with international online sessions.",
      ctaPrimary: "Contact me",
      ctaSecondary: "Services",
      mottoHtml: "The quality of your relationships defines <mark>the quality of your life</mark>.",
      features: [
        "Confidential & professional",
        "Flexible & online",
        "Holistic & tailored"
      ],
      announce: "Free initial consultation · limited slots",
      promptPlaceholder: "Briefly, what brings you here today?",
      promptAria: "Briefly, what brings you here today",
      promptSend: "Send",
      promptHint: "Sending opens WhatsApp with your message ready. No commitment.",
      promptIntro: "Hi, I'd like to book an initial consultation.",
      suggestions: [
        "We have relationship conflicts",
        "I want to start individual therapy",
        "We're considering a premarital course",
        "Anxiety or low self-esteem",
        "I'm an expat / migrant"
      ],
      trust: ["Online therapy", "Couples therapy", "Individual therapy", "Workshops", "Barcelona", "International online sessions"]
    },
    approach: {
      eyebrow: "How we work",
      title: "Understand before you change",
      p1: "Psychotherapy starts with curiosity: why we think what we think, feel what we feel, and relate the way we do.",
      p2: "Together we look at those patterns calmly and without judgement — and from that understanding, real change is built.",
      cta: "Book an initial consultation"
    },
    help: {
      eyebrow: "Support",
      title: "I can help you if you are experiencing…",
      lead: "A safe space to explore what is happening, find clarity and build real tools.",
      items: [
        "Relationship conflicts",
        "Communication problems",
        "Emotional distance",
        "Anxiety",
        "Low self-esteem",
        "Difficulties in dating and modern relationships",
        "Fear of commitment",
        "Repeating negative relationship patterns",
        "Separation or divorce prevention",
        "Emotional regulation difficulties",
        "Past relational trauma",
        "Difficulties building or maintaining healthy bonds",
        "Expat / migrant adaptation, identity and belonging",
        "Multicultural relationship challenges"
      ]
    },
    about: {
      eyebrow: "About KONEKTOPIA",
      title: "About me",
      tag: "Barcelona · Online",
      p1: "Experienced psychotherapist with training in Psychology, Couples Therapy, and Cognitive Behavioural Therapy. My mission is to reduce emotional suffering that prevents people from living a full and meaningful life.",
      p2: "I support individuals with relationship and communication difficulties, modern dating challenges, couple conflicts, and prevention of separation or divorce. I also work with anxiety, low self-esteem, past relational trauma, emotional regulation difficulties, and challenges in building or maintaining healthy connections.",
      p3: "As an immigrant myself, I also support expats, migrants, and multicultural individuals navigating adaptation, identity, acceptance, and balancing values of origin with those of the host country.",
      p4: "Clients value my experience, compassion, humour, pragmatism, and ability to inspire real change.",
      educationTitle: "Professional education",
      education: "Degree in Psychology in France. Doctoral-level studies and research master's training in Clinical and Health Psychology at the University of Barcelona. Specialisation in Cognitive Behavioural Therapy at the School of Cognitive Behavioural Psychotherapy, SWPS University, Warsaw. Gottman Method couple therapy course. Master's degree in Clinical Sexology and Couples Therapy from Instituto de la Pareja.",
      signature: "— Sonia Foder, KONEKTOPIA"
    },
    therapy: {
      eyebrow: "Therapy",
      title: "Couples therapy & individual therapy",
      lead: "Two different paths, the same purpose: making your relationship with yourself and with others healthier, more conscious and more fulfilling.",
      common: {
        whenTitle: "When is the right moment to start?",
        howTitle: "How does the process begin?",
        expectTitle: "What can you expect?"
      },
      couples: {
        title: "Couples therapy",
        when: "When communication has become hard, when conflicts keep repeating, or when you are making important decisions and want more clarity. You don't need to wait for a crisis.",
        how: "A first joint session to understand your story, current difficulties and shared goals. From there we build a plan adapted to your couple.",
        expect: "A safe, non-judgemental space where each side can be heard. Practical tools for communication, conflict and intimacy.",
        goals: ["Communication", "Trust", "Conflict", "Intimacy", "Decision-making", "Breakup prevention"]
      },
      individual: {
        title: "Individual therapy",
        when: "When something feels stuck or repeated, when anxiety or self-demand take up too much space, or when you want to understand yourself better and live with more coherence.",
        how: "A first consultation to explore your situation, your story and what you want to change. We agree on realistic goals and a pace that works for you.",
        expect: "Professional support, practical tools and a compassionate but honest perspective. Change is built step by step.",
        goals: ["Self-understanding", "Reduce anxiety", "Emotional regulation", "Self-esteem", "Relationship patterns"]
      }
    },
    sessions: {
      eyebrow: "Process",
      title: "Session structure",
      lead: "A clear, flexible process that respects your pace.",
      steps: [
        { t: "Initial consultation", d: "A first conversation to get to know each other, understand what you are going through and decide together if it's a good fit." },
        { t: "Understanding the situation", d: "We explore context, history, key moments and what holds the difficulty in place today." },
        { t: "Defining goals", d: "We agree on realistic and meaningful goals for you or for the couple." },
        { t: "Exploring patterns", d: "We identify beliefs, emotions and behaviours that repeat and block change." },
        { t: "Practical tools", d: "You learn concrete resources grounded in psychology and cognitive behavioural therapy." },
        { t: "Reviewing progress", d: "We honestly review progress, doubts and obstacles, without rushing." },
        { t: "Adjusting the process", d: "We adapt the pace, goals and approach to your current life stage." }
      ],
      expectTitle: "What to expect",
      expect: [
        "Safe, respectful conversation",
        "Practical psychological tools",
        "Emotional clarity",
        "Better communication",
        "No judgement",
        "Confidentiality",
        "A realistic process, not instant results"
      ]
    },
    services: {
      eyebrow: "Services",
      title: "Services and prices",
      lead: "Individual and couples sessions, courses and workshops. Adapted to your situation, online or in person.",
      priceTBA: "Price available on request",
      cta: "Request information",
      viewResources: "View resources",
      recommended: "Recommended start",
      note: "Prices will be updated soon. For personalised information, contact me directly.",
      items: [
        { t: "Individual online session", d: "One-to-one therapy from anywhere in the world." },
        { t: "Couples online session", d: "Joint work focused on communication, conflict and intimacy." },
        { t: "Initial consultation", d: "A short, no-commitment conversation to see how I might help." },
        { t: "Pre-commitment / premarital course", d: "For couples considering an important step: living together, marriage or long-term decisions." },
        { t: "Workshops for singles", d: "Small groups to understand dating patterns and choose more consciously." },
        { t: "Relationship workshops", d: "Practical learning for couples who want to improve connection and communication." },
        { t: "Resources · ebooks · courses", d: "Downloadable materials and self-paced courses (coming soon)." }
      ]
    },
    workshops: {
      eyebrow: "Workshops",
      title: "In-person and online workshops",
      lead: "Experiential learning spaces on relationships, communication and conscious commitment.",
      topics: ["Relationship education", "Communication", "Conflict prevention", "Emotional intimacy", "Conscious commitment", "Modern love and dating"],
      locationsTitle: "Available across Catalonia and Andalusia",
      locationsDesc: "In-person workshops and courses in selected cities. Calendar updated based on demand.",
      cta: "Ask about the next workshop"
    },
    premarital: {
      eyebrow: "Special course",
      title: "Pre-commitment / premarital course",
      p1: "For couples considering an important step — moving in together, marriage, family or long-term decisions.",
      p2: "We work on expectations, values, communication style, conflict patterns, intimacy, family plans, money, lifestyle and emotional needs.",
      p3: "A preventive, practical and deeply relationship-focused process. Available online or in workshop format.",
      cta: "More information",
      cta2: "See formats"
    },
    singles: {
      eyebrow: "For singles",
      title: "For singles",
      lead: "Relationship counselling for those who are single and want to understand themselves, heal and choose better.",
      items: [
        { t: "Dating patterns", d: "Recognise what kind of relationships you choose and why." },
        { t: "Emotional availability", d: "Identify whether you are truly available for a healthy relationship." },
        { t: "Self-worth in relationships", d: "Build a sense of value that doesn't depend on the other." },
        { t: "Choosing healthier partners", d: "Learn to read signals and filter from the start." },
        { t: "Breaking repetitive patterns", d: "Step out of the same loop with different people." },
        { t: "Modern dating support", d: "Apps, ghosting, ambiguity: navigate today's landscape with clarity." }
      ]
    },
    resources: {
      eyebrow: "Resources",
      title: "Resources for your relationships",
      lead: "Articles, ebooks, courses and recommendations. We will soon update this section with downloadable content.",
      tabs: ["Articles", "Ebooks", "Courses", "Books, films & series"],
      cat: { article: "Article", ebook: "Ebook", course: "Course", book: "Recommended book", film: "Film / Series" },
      soon: "Coming soon",
      articles: [
        "How to know if couples therapy is needed",
        "How to communicate better in a relationship",
        "Fear of commitment",
        "Emotional distance in a relationship",
        "How to rebuild trust",
        "Anxiety in relationships",
        "How to stop repeating toxic relationship patterns",
        "Premarital questions every couple should discuss",
        "Dating after a breakup",
        "Healthy boundaries in relationships"
      ],
      ebooks: [
        "A guide for couples who want to grow together",
        "Conscious communication workbook",
        "Modern dating: an honest guide"
      ],
      courses: [
        "Mini-course: communication basics for couples",
        "Pre-commitment course (self-paced)"
      ],
      media: [
        "Readings on attachment and bonds",
        "Stories to reflect on love",
        "Resources on modern love"
      ]
    },
    reviews: {
      eyebrow: "Testimonials",
      title: "Client voices",
      placeholder: "Client testimonials will be added here after proper approval and always respecting confidentiality.",
      q1: "— Reserved space for testimonial —",
      q2: "— Reserved space for testimonial —",
      q3: "— Reserved space for testimonial —"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      intro: "Call me or send me a WhatsApp message for a brief initial free consultation. You can briefly share your situation, challenge, or the reason why you are seeking support. We will talk about what you need and how I may be able to help you. If I believe that a different type of support or another professional may be better suited to your needs, I will guide you on possible next steps or alternative resources.",
      phone: "Phone",
      address: "Addresses",
      callCta: "Call now",
      waCta: "Message on WhatsApp",
      formTitle: "Send me a message",
      formHelp: "This form is a visual version. Connect it to your preferred service (Formspree, Netlify Forms, email, etc.) before publishing.",
      form: {
        name: "Name",
        email: "Email",
        topic: "Topic",
        topics: ["Individual therapy", "Couples therapy", "Premarital course", "Workshop / group", "Other"],
        message: "Message",
        privacy: "I have read and accept the privacy policy.",
        submit: "Send message",
        status: ""
      },
      crisisTitle: "Important note:",
      crisis: "This website does not offer emergency support. If you or someone close to you is in immediate danger, please contact your local emergency services (in Spain, dial 112) or a specialised helpline."
    },
    footer: {
      servicesTitle: "Services",
      contactTitle: "Contact",
      legalTitle: "Legal",
      privacy: "Privacy policy",
      legal: "Legal notice",
      cookies: "Cookies policy",
      legalNote: "Legal pages are provisional and must be reviewed before launch.",
      byline: "Psychotherapy and relationship support"
    },
    float: { wa: "WhatsApp" }
  },

  pl: {
    meta: {
      title: "KONEKTOPIA | Psychoterapia i terapia par w Barcelonie",
      description: "KONEKTOPIA oferuje psychoterapię online indywidualną i par, terapię poznawczo-behawioralną, kursy przedmałżeńskie i warsztaty relacyjne po hiszpańsku, angielsku i polsku. Siedziba w Barcelonie, sesje online międzynarodowo.",
      ogTitle: "KONEKTOPIA | Psychoterapia i terapia par w Barcelonie",
      ogDescription: "Psychoterapia online indywidualna i par, CBT, kursy przedmałżeńskie i warsztaty relacyjne. Barcelona + online międzynarodowo."
    },
    a11y: { skip: "Przejdź do treści głównej" },
    nav: {
      help: "Jak pomagam", about: "O mnie", therapy: "Terapia",
      services: "Usługi", workshops: "Warsztaty", premarital: "Kurs przedmałżeński",
      singles: "Dla singli", resources: "Zasoby", contact: "Kontakt",
      cta: "Skontaktuj się"
    },
    hero: {
      eyebrow: "Psychoterapia · Terapia par · Online & Barcelona",
      welcome: "Witaj w",
      motto: "Jakość Twoich relacji definiuje jakość Twojego życia.",
      description: "Psychoterapia. Terapia indywidualna i par online. Terapia poznawczo-behawioralna. Warsztaty i kursy przed zaangażowaniem. Siedziba w Barcelonie, sesje online międzynarodowo.",
      ctaPrimary: "Skontaktuj się",
      ctaSecondary: "Usługi",
      mottoHtml: "Jakość Twoich relacji definiuje <mark>jakość Twojego życia</mark>.",
      features: [
        "Poufnie i profesjonalnie",
        "Elastycznie i online",
        "Holistycznie i na Twoją miarę"
      ],
      announce: "Bezpłatna konsultacja wstępna · ograniczona liczba miejsc",
      promptPlaceholder: "Krótko: co Cię tu sprowadza?",
      promptAria: "Krótko: co Cię tu sprowadza",
      promptSend: "Wyślij",
      promptHint: "Po wysłaniu otworzy się WhatsApp z gotową wiadomością. Bez zobowiązań.",
      promptIntro: "Cześć, chciałbym/chciałabym umówić wstępną konsultację.",
      suggestions: [
        "Mamy konflikty w związku",
        "Chcę zacząć terapię indywidualną",
        "Myślimy o kursie przedmałżeńskim",
        "Lęk lub niska samoocena",
        "Jestem ekspatem / migrantem"
      ],
      trust: ["Terapia online", "Terapia par", "Terapia indywidualna", "Warsztaty", "Barcelona", "Sesje online międzynarodowo"]
    },
    approach: {
      eyebrow: "Jak pracujemy",
      title: "Najpierw zrozumieć — potem zmieniać",
      p1: "Psychoterapia zaczyna się od ciekawości: dlaczego myślimy to, co myślimy, czujemy to, co czujemy, i wchodzimy w relacje tak, jak to robimy.",
      p2: "Razem przyglądamy się tym wzorcom spokojnie i bez oceniania — i z tego zrozumienia rośnie prawdziwa zmiana.",
      cta: "Umów wstępną konsultację"
    },
    help: {
      eyebrow: "Wsparcie",
      title: "Mogę Ci pomóc, jeśli doświadczasz…",
      lead: "Bezpieczna przestrzeń, by zrozumieć, co się dzieje, znaleźć jasność i zbudować realne narzędzia.",
      items: [
        "Konfliktów w związku",
        "Problemów z komunikacją",
        "Emocjonalnego dystansu",
        "Lęku",
        "Niskiej samooceny",
        "Trudności w randkowaniu i współczesnych relacjach",
        "Lęku przed zaangażowaniem",
        "Powtarzających się negatywnych wzorców relacyjnych",
        "Profilaktyki rozstania lub rozwodu",
        "Trudności w regulacji emocji",
        "Przeszłej traumy relacyjnej",
        "Trudności w budowaniu zdrowych więzi",
        "Adaptacji ekspatów i migrantów",
        "Wyzwań w relacjach wielokulturowych"
      ]
    },
    about: {
      eyebrow: "O KONEKTOPIA",
      title: "O mnie",
      tag: "Barcelona · Online",
      p1: "Jestem doświadczoną psychoterapeutką z wykształceniem w obszarze psychologii, terapii par oraz terapii poznawczo-behawioralnej. Moją misją jest zmniejszanie cierpienia emocjonalnego, które utrudnia prowadzenie pełnego i satysfakcjonującego życia.",
      p2: "Wspieram osoby doświadczające trudności relacyjnych i komunikacyjnych. Pracuję z wyzwaniami związanymi ze współczesnym randkowaniem i relacjami, konfliktami w parze oraz profilaktyką rozstania lub rozwodu. Zajmuję się również lękiem, niską samooceną, negatywnymi doświadczeniami relacyjnymi, trudnościami w regulacji emocji oraz problemami z budowaniem lub utrzymywaniem zdrowych więzi.",
      p3: "Jako osoba z doświadczeniem emigracji wspieram także ekspatów, migrantów i osoby żyjące między kulturami w procesach adaptacji, budowania tożsamości, akceptacji oraz odnajdywania równowagi między wartościami kraju pochodzenia i kraju przyjmującego.",
      p4: "Klienci cenią moje doświadczenie, empatię, poczucie humoru, pragmatyzm oraz zdolność inspirowania realnych zmian.",
      educationTitle: "Wykształcenie zawodowe",
      education: "Dyplom z psychologii we Francji. Studia doktoranckie oraz magisterskie studia badawcze z zakresu psychologii klinicznej i zdrowia na Uniwersytecie w Barcelonie. Specjalizacja w terapii poznawczo-behawioralnej w School of Cognitive Behavioural Psychotherapy, Uniwersytet SWPS w Warszawie. Kurs terapii par Metodą Gottmana. Magisterium z seksuologii klinicznej i terapii par w Instituto de la Pareja.",
      signature: "— Sonia Foder, KONEKTOPIA"
    },
    therapy: {
      eyebrow: "Terapia",
      title: "Terapia par i terapia indywidualna",
      lead: "Dwie różne ścieżki, jeden cel: by Twoja relacja ze sobą i z innymi była zdrowsza, bardziej świadoma i satysfakcjonująca.",
      common: {
        whenTitle: "Kiedy zacząć?",
        howTitle: "Jak zaczyna się proces?",
        expectTitle: "Czego możesz się spodziewać?"
      },
      couples: {
        title: "Terapia par",
        when: "Kiedy komunikacja stała się trudna, konflikty się powtarzają lub gdy podejmujecie ważne decyzje i chcecie zrobić to z większą jasnością. Nie trzeba czekać na kryzys.",
        how: "Pierwsze wspólne spotkanie, by zrozumieć Waszą historię, obecne trudności i wspólne cele. Następnie budujemy plan dopasowany do Waszej pary.",
        expect: "Bezpieczna przestrzeń bez oceniania, w której każda strona zostaje wysłuchana. Praktyczne narzędzia dotyczące komunikacji, konfliktu i bliskości.",
        goals: ["Komunikacja", "Zaufanie", "Konflikt", "Bliskość", "Podejmowanie decyzji", "Profilaktyka rozstania"]
      },
      individual: {
        title: "Terapia indywidualna",
        when: "Kiedy czujesz, że coś się powtarza, że lęk lub presja zajmują zbyt dużo miejsca, lub chcesz lepiej siebie zrozumieć i żyć bardziej spójnie.",
        how: "Pierwsza konsultacja, by zbadać Twoją sytuację, historię i to, co chciałbyś zmienić. Ustalamy realistyczne cele i tempo dopasowane do Ciebie.",
        expect: "Profesjonalne wsparcie, praktyczne narzędzia oraz spojrzenie współczujące, ale uczciwe. Zmiana powstaje krok po kroku.",
        goals: ["Samopoznanie", "Redukcja lęku", "Regulacja emocji", "Samoocena", "Wzorce relacyjne"]
      }
    },
    sessions: {
      eyebrow: "Proces",
      title: "Struktura sesji",
      lead: "Jasny, elastyczny proces dopasowany do Twojego tempa.",
      steps: [
        { t: "Konsultacja wstępna", d: "Pierwsza rozmowa, by się poznać, zrozumieć, czego doświadczasz, i wspólnie zdecydować, czy to dobre dopasowanie." },
        { t: "Zrozumienie sytuacji", d: "Badamy kontekst, historię, kluczowe momenty i to, co podtrzymuje dziś trudność." },
        { t: "Określenie celów", d: "Ustalamy realistyczne i znaczące cele dla Ciebie lub dla pary." },
        { t: "Badanie wzorców", d: "Identyfikujemy przekonania, emocje i zachowania, które się powtarzają i blokują zmianę." },
        { t: "Praktyczne narzędzia", d: "Uczysz się konkretnych narzędzi opartych na psychologii i terapii poznawczo-behawioralnej." },
        { t: "Przegląd postępów", d: "Szczerze omawiamy postępy, wątpliwości i przeszkody, bez pośpiechu." },
        { t: "Dostosowanie procesu", d: "Dopasowujemy tempo, cele i podejście do Twojego etapu życia." }
      ],
      expectTitle: "Czego możesz oczekiwać",
      expect: [
        "Bezpieczna, pełna szacunku rozmowa",
        "Praktyczne narzędzia psychologiczne",
        "Klarowność emocjonalna",
        "Lepsza komunikacja",
        "Bez oceniania",
        "Poufność",
        "Realistyczny proces, nie natychmiastowe rezultaty"
      ]
    },
    services: {
      eyebrow: "Usługi",
      title: "Usługi i ceny",
      lead: "Sesje indywidualne i par, kursy i warsztaty. Dopasowane do Twojej sytuacji, online lub stacjonarnie.",
      priceTBA: "Cena dostępna na zapytanie",
      cta: "Zapytaj o szczegóły",
      viewResources: "Zobacz zasoby",
      recommended: "Polecane na początek",
      note: "Ceny zostaną wkrótce zaktualizowane. Po szczegółowe informacje skontaktuj się bezpośrednio.",
      items: [
        { t: "Sesja indywidualna online", d: "Terapia jeden na jeden z dowolnego miejsca na świecie." },
        { t: "Sesja dla par online", d: "Wspólna praca skupiona na komunikacji, konflikcie i bliskości." },
        { t: "Konsultacja wstępna", d: "Krótka rozmowa bez zobowiązań, by ocenić, jak mogę pomóc." },
        { t: "Kurs przed zaangażowaniem / przedmałżeński", d: "Dla par rozważających ważny krok: wspólne życie, ślub lub długoterminowe decyzje." },
        { t: "Warsztaty dla singli", d: "Małe grupy, by zrozumieć wzorce randkowania i wybierać bardziej świadomie." },
        { t: "Warsztaty dla par", d: "Praktyczna nauka dla par, które chcą poprawić więź i komunikację." },
        { t: "Zasoby · ebooki · kursy", d: "Materiały do pobrania i kursy w trybie samodzielnym (wkrótce)." }
      ]
    },
    workshops: {
      eyebrow: "Warsztaty",
      title: "Warsztaty stacjonarne i online",
      lead: "Doświadczalne przestrzenie nauki o relacjach, komunikacji i świadomym zaangażowaniu.",
      topics: ["Edukacja relacyjna", "Komunikacja", "Profilaktyka konfliktu", "Bliskość emocjonalna", "Świadome zaangażowanie", "Współczesna miłość i randki"],
      locationsTitle: "Dostępne w Katalonii i Andaluzji",
      locationsDesc: "Warsztaty i kursy stacjonarne w wybranych miastach. Kalendarz aktualizowany w zależności od zainteresowania.",
      cta: "Zapytaj o najbliższy warsztat"
    },
    premarital: {
      eyebrow: "Kurs specjalny",
      title: "Kurs przed zaangażowaniem / przedmałżeński",
      p1: "Dla par rozważających ważny krok — wspólne zamieszkanie, ślub, rodzinę lub długoterminowe decyzje.",
      p2: "Pracujemy nad oczekiwaniami, wartościami, stylem komunikacji, wzorcami konfliktu, bliskością, planami rodzinnymi, finansami, stylem życia i potrzebami emocjonalnymi.",
      p3: "To proces profilaktyczny, praktyczny i głęboko skoncentrowany na relacji. Dostępny online lub w formie warsztatu.",
      cta: "Więcej informacji",
      cta2: "Zobacz formaty"
    },
    singles: {
      eyebrow: "Dla singli",
      title: "Dla singli",
      lead: "Wsparcie relacyjne dla osób samotnych, które chcą lepiej siebie zrozumieć, uleczyć się i wybierać świadomiej.",
      items: [
        { t: "Wzorce randkowania", d: "Rozpoznaj, jakie relacje wybierasz i dlaczego." },
        { t: "Dostępność emocjonalna", d: "Sprawdź, czy jesteś naprawdę gotowy(a) na zdrową relację." },
        { t: "Samoocena w relacjach", d: "Buduj poczucie wartości, które nie zależy od drugiej osoby." },
        { t: "Wybór zdrowszych partnerów", d: "Naucz się czytać sygnały i filtrować od początku." },
        { t: "Przerywanie wzorców", d: "Wyjdź z pętli tej samej historii z różnymi osobami." },
        { t: "Wsparcie w nowoczesnym randkowaniu", d: "Apki, ghosting, niejasność: poruszaj się po dzisiejszym krajobrazie z klarownością." }
      ]
    },
    resources: {
      eyebrow: "Zasoby",
      title: "Zasoby dla Twoich relacji",
      lead: "Artykuły, ebooki, kursy i rekomendacje. Wkrótce uzupełnimy tę sekcję treściami do pobrania.",
      tabs: ["Artykuły", "Ebooki", "Kursy", "Książki, filmy i seriale"],
      cat: { article: "Artykuł", ebook: "Ebook", course: "Kurs", book: "Polecana książka", film: "Film / serial" },
      soon: "Wkrótce",
      articles: [
        "Jak rozpoznać, że potrzebna jest terapia par?",
        "Jak lepiej komunikować się w związku",
        "Lęk przed zaangażowaniem",
        "Emocjonalny dystans w związku",
        "Jak odbudować zaufanie",
        "Lęk w relacjach",
        "Jak przestać powtarzać toksyczne wzorce",
        "Pytania przedmałżeńskie, o które warto zapytać",
        "Powrót do randkowania po rozstaniu",
        "Zdrowe granice w relacjach"
      ],
      ebooks: [
        "Przewodnik dla par, które chcą rozwijać się razem",
        "Zeszyt świadomej komunikacji",
        "Współczesne randkowanie: szczery przewodnik"
      ],
      courses: [
        "Mini-kurs: podstawy komunikacji w parze",
        "Kurs przed zaangażowaniem (samodzielny)"
      ],
      media: [
        "Lektury o przywiązaniu i więziach",
        "Historie do refleksji o miłości",
        "Zasoby o nowoczesnej miłości"
      ]
    },
    reviews: {
      eyebrow: "Opinie",
      title: "Głosy klientów",
      placeholder: "Opinie klientów zostaną dodane po uzyskaniu odpowiedniej zgody i z poszanowaniem poufności.",
      q1: "— Miejsce na opinię —",
      q2: "— Miejsce na opinię —",
      q3: "— Miejsce na opinię —"
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Porozmawiajmy",
      intro: "Zadzwoń lub napisz do mnie na WhatsApp, aby umówić krótką, wstępną konsultację bez zobowiązań. Możesz krótko opowiedzieć o swojej sytuacji, trudnościach lub powodzie, dla którego szukasz wsparcia. Porozmawiamy o tym, czego potrzebujesz i w jaki sposób mogę Ci pomóc. Jeśli uznam, że inny rodzaj wsparcia lub inny specjalista będzie lepiej dopasowany do Twojej sytuacji, wskażę możliwe kolejne kroki lub alternatywne zasoby.",
      phone: "Telefon",
      address: "Adresy",
      callCta: "Zadzwoń",
      waCta: "Napisz na WhatsApp",
      formTitle: "Napisz do mnie",
      formHelp: "Ten formularz to wersja wizualna. Podłącz go do wybranej usługi (Formspree, Netlify Forms, e-mail itp.) przed publikacją.",
      form: {
        name: "Imię",
        email: "Email",
        topic: "Temat",
        topics: ["Terapia indywidualna", "Terapia par", "Kurs przedmałżeński", "Warsztat / grupa", "Inne"],
        message: "Wiadomość",
        privacy: "Zapoznałem/am się i akceptuję politykę prywatności.",
        submit: "Wyślij wiadomość",
        status: ""
      },
      crisisTitle: "Ważna informacja:",
      crisis: "Ta strona nie świadczy pomocy w sytuacjach kryzysowych. Jeśli Ty lub osoba bliska jesteście w bezpośrednim zagrożeniu, skontaktujcie się z lokalnymi służbami ratunkowymi (w Hiszpanii numer 112) lub z wyspecjalizowaną linią pomocową."
    },
    footer: {
      servicesTitle: "Usługi",
      contactTitle: "Kontakt",
      legalTitle: "Informacje prawne",
      privacy: "Polityka prywatności",
      legal: "Nota prawna",
      cookies: "Polityka cookies",
      legalNote: "Strony prawne są wersją roboczą i muszą zostać zweryfikowane przed publikacją.",
      byline: "Psychoterapia i wsparcie relacyjne"
    },
    float: { wa: "WhatsApp" }
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

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getPath(dict, el.getAttribute("data-i18n"));
    if (typeof value === "string") el.textContent = value;
  });

  // HTML nodes — translations may contain markup like <mark> for highlight blocks
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = getPath(dict, el.getAttribute("data-i18n-html"));
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
    ogLocale.setAttribute("content", { es: "es_ES", en: "en_GB", pl: "pl_PL" }[lang] || "es_ES");
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
    if (!fromInit) {
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
  let initial = "es";
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

/* ---------- Resources tabs ---------- */
function initResourceTabs() {
  const tabs = document.querySelectorAll(".res-tab");
  const panels = document.querySelectorAll(".res-panel");
  if (!tabs.length) return;
  tabs.forEach(t => {
    t.addEventListener("click", () => {
      const key = t.dataset.tab;
      tabs.forEach(x => {
        const active = x === t;
        x.classList.toggle("is-active", active);
        x.setAttribute("aria-selected", active ? "true" : "false");
      });
      panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === key));
    });
  });
}

/* ---------- Contact form (visual UX only) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const status = form.querySelector(".form-status");
    const lang = document.documentElement.lang || "es";
    const messages = {
      es: "Gracias. Este formulario es solo visual — conéctalo a tu servicio (Formspree, Netlify Forms, etc.) para recibir mensajes.",
      en: "Thanks. This form is visual only — connect it to your service (Formspree, Netlify Forms, etc.) to receive messages.",
      pl: "Dziękuję. Ten formularz jest tylko wizualny — podłącz go do swojej usługi (Formspree, Netlify Forms itp.), aby otrzymywać wiadomości."
    };
    if (status) status.textContent = messages[lang] || messages.es;
  });
}

/* ---------- Help cards: float + mouse repulsion ---------- */
function initHelpCards() {
  const cards = Array.from(document.querySelectorAll('#help .help-card'));
  if (!cards.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!window.matchMedia('(hover: hover)').matches) return;

  const THRESHOLD = 100;   // px — how close the mouse must get
  const STRENGTH  = 18;    // px — max escape displacement
  const LERP_OUT  = 0.16;  // escape speed (snappy)
  const LERP_IN   = 0.065; // return speed (floaty)

  // Deterministic per-card float params — no randomness so result is consistent
  const state = cards.map((_, i) => ({
    amplitude: 3 + (i % 3) * 1.5,           // 3 / 4.5 / 6 px cycling
    period:    3000 + (i % 5) * 700,         // 3.0 – 5.8 s cycling
    phase:     (i / cards.length) * Math.PI * 2,
    rx: 0, ry: 0,   // current displacement
    tx: 0, ty: 0,   // target displacement
  }));

  let mouseX = -9999, mouseY = -9999;
  let running = false;
  let raf;

  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  document.addEventListener('mouseleave', () => { mouseX = -9999; mouseY = -9999; });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function tick(t) {
    cards.forEach((card, i) => {
      // Let reveal animation finish before JS takes over
      if (!card.classList.contains('is-visible')) {
        card.style.transform = '';
        return;
      }
      const s = state[i];

      // Gentle float oscillation
      const fy = Math.sin(t / s.period * Math.PI * 2 + s.phase) * s.amplitude;

      // Repulsion from mouse
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = cx - mouseX;
      const dy = cy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < THRESHOLD && dist > 1) {
        const force = (1 - dist / THRESHOLD) * STRENGTH;
        s.tx = (dx / dist) * force;
        s.ty = (dy / dist) * force;
      } else {
        s.tx = 0;
        s.ty = 0;
      }

      // Snap toward target (fast escape, slow return)
      const lf = (s.tx !== 0 || s.ty !== 0) ? LERP_OUT : LERP_IN;
      s.rx = lerp(s.rx, s.tx, lf);
      s.ry = lerp(s.ry, s.ty, lf);

      card.style.transform = `translate(${s.rx.toFixed(2)}px,${(s.ry + fy).toFixed(2)}px)`;
    });

    if (running) raf = requestAnimationFrame(tick);
  }

  // Pause rAF while section is off-screen
  const section = document.getElementById('help');
  if (section && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !raf) raf = requestAnimationFrame(tick);
      else if (!running && raf) { cancelAnimationFrame(raf); raf = null; }
    }, { threshold: 0.05 }).observe(section);
  } else {
    running = true;
    raf = requestAnimationFrame(tick);
  }
}

/* ---------- Hero prompt → WhatsApp ---------- */
const WA_NUMBER = "34684003237";

function currentLang() {
  return document.documentElement.lang || "es";
}

function openWhatsAppWith(message) {
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function initHeroPrompt() {
  const form  = document.getElementById("heroPrompt");
  const input = document.getElementById("heroPromptInput");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = currentLang();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;
    const intro = dict.hero?.promptIntro || "";
    const text  = input.value.trim();
    const body  = text ? `${intro}\n\n${text}` : intro;
    openWhatsAppWith(body);
  });

  // Suggestion pills → prefill + submit (one-tap CTA)
  document.querySelectorAll(".suggestion-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const idx = Number(pill.dataset.suggestion);
      const lang = currentLang();
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;
      const label = dict.hero?.suggestions?.[idx] || pill.textContent.trim();
      input.value = label;
      form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit", { cancelable: true }));
    });
  });
}

/* ---------- Year in footer ---------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitch();
  initMobileMenu();
  initSmoothScroll();
  initReveals();
  initHeaderScroll();
  initActiveNav();
  initResourceTabs();
  initContactForm();
  initHeroPrompt();
  initHelpCards();
  initYear();
});
