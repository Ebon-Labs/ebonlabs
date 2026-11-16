const I18N_STORAGE_KEY = `${typeof SITE !== 'undefined' && SITE.slug ? SITE.slug : 'ebonlabs'}-lang`;
const DEFAULT_LANG = 'pt';

const translations = {
  pt: {
    meta: {
      title: 'Ebon Labs — tecnologia, inovação e educação',
      description: 'A Ebon Labs, estúdio de Ive Tourinho, publica sites e produtos digitais para negócios locais e para causas públicas.',
    },
    skip: 'Ir para o conteúdo',
    nav: {
      label: 'Principal',
      about: 'Sobre',
      projects: 'Projetos',
      creator: 'Criador',
      contact: 'Contato',
      whatsapp: 'WhatsApp',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      language: 'Idioma',
    },
    wa: {
      project: 'Olá! Quero conversar sobre um projeto com a Ebon Labs.',
      creator: 'Olá, Ive! Vi o site da Ebon Labs.',
    },
    hero: {
      eyebrow: 'Tecnologia, inovação e educação',
      lead: 'Estúdio de Ive Tourinho que publica sites e produtos digitais para quem vive de um ofício e para causas públicas. O mesmo cuidado vai da agenda de uma terapeuta à cédula eleitoral e à sala de aula em realidade virtual.',
      projects: 'Ver projetos',
      whatsapp: 'Chamar no WhatsApp',
    },
    about: {
      eyebrow: 'A casa',
      title: 'Dois tipos de produto, o mesmo ofício',
      commercial: 'Na frente comercial, a Ebon Labs coloca o negócio na internet do jeito que a pessoa já compra e marca horário: uma página clara e um WhatsApp. Assim nasceram o site da Toque e Corpo, o cardápio da Croc Croc e o portfólio de Inah Irenam.',
      social: 'Na frente social, o estúdio organiza informação pública e experimenta aprendizagem. O Escolha Consciente reúne dados oficiais do TSE, da Câmara e do Senado para as Eleições 2026. O Educaverso é um protótipo de sala de aula em realidade virtual, em que a turma explora o sistema solar pelo olhar.',
      place: 'O estúdio responde por <a href="mailto:ebonlabs@gmail.com">ebonlabs@gmail.com</a>.',
      logoAlt: 'Marca Ebon Labs: Ebon em azul-marinho e Labs em azul.',
    },
    projects: {
      eyebrow: 'Portfólio',
      title: 'Projetos',
      desc: 'Cada trabalho junta fotos do próprio projeto e, quando existe, uma captura do site publicado.',
      commercial: 'Comerciais',
      social: 'De cunho social',
      viewSite: 'Ver o site',
      toque: {
        kicker: 'Terapias integrativas',
        text: 'Site de Gabriela Ferreira para apresentar massagem terapêutica, acupuntura, reiki, shiatsu, drenagem linfática e outras práticas. O texto explica o cuidado, o catálogo lista os serviços e o agendamento sai pelo WhatsApp.',
        prev: 'Imagem anterior de Toque e Corpo',
        next: 'Próxima imagem de Toque e Corpo',
        alt: {
          home: 'Seção inicial do site Toque e Corpo, com a frase sobre o toque no corpo.',
          space: 'Seção de boas-vindas do site Toque e Corpo, com o retrato, a marca e o convite ao espaço de cura.',
          services: 'Seção de serviços do site Toque e Corpo, com massagem terapêutica, Tui Na, ventosaterapia e barras de Access.',
          about: 'Seção sobre Gabriela Ferreira no site Toque e Corpo, com a formação e o método.',
          promo: 'Seção de promoção do site Toque e Corpo, com o formulário e os preços reduzidos.',
        },
        cap: {
          home: 'Início',
          space: 'Espaço',
          services: 'Serviços',
          about: 'Sobre',
          promo: 'Promoção',
        },
      },
      croc: {
        kicker: 'Pipocas artesanais',
        text: 'Site da casa de pipocas. Doces, salgadas, trufas, barrinha e pirulito aparecem em foto e no cardápio, com varejo, atacado e encomendas. O pedido segue pelo WhatsApp.',
        prev: 'Imagem anterior de Croc Croc',
        next: 'Próxima imagem de Croc Croc',
        alt: {
          home: 'Seção inicial do site Croc Croc, com a marca, as listras e o convite ao cardápio.',
          gallery: 'Galeria de presentes do site Croc Croc, com embalagens personalizadas.',
          menu: 'Cardápio do site Croc Croc, com filtros e os preços de varejo.',
          calc: 'Calculadora do site Croc Croc, com o sabor, os gramas e o preço.',
        },
        cap: {
          home: 'Início',
          gallery: 'Galeria',
          menu: 'Cardápio',
          calc: 'Calculadora',
        },
      },
      inah: {
        kicker: 'Dança e produção cultural',
        text: 'Portfólio de Inah Irenam Oliveira da Silva, intérprete-criadora, pesquisadora, curadora e produtora cultural. O site reúne atuação, trajetória, destaques e acervo, em mais de um idioma, e abre conversa para quem quer contratar criação, produção ou formação.',
        prev: 'Imagem anterior de Inah Irenam',
        next: 'Próxima imagem de Inah Irenam',
        alt: {
          home: 'Seção inicial do portfólio de Inah Irenam, com o título Dança, memória e política cultural.',
          path: 'Seção Corpo, território e arquivo do site de Inah Irenam, com a foto na água e os trabalhos para assistir.',
          work: 'Seção de atuação do site de Inah Irenam, com o catálogo de criação, produção, pesquisa e formação.',
          about: 'Seção sobre Inah Irenam, com o retrato em cena e a trajetória.',
          portfolio: 'Seção de portfólio do site de Inah Irenam, com cartazes e publicações.',
          highlights: 'Seção de destaques do site de Inah Irenam, com os formatos de trabalho e o convite para conversar.',
          archive: 'Seção de acervo do site de Inah Irenam, com a busca, os filtros e os registros.',
        },
        cap: {
          home: 'Início',
          path: 'Trajetória',
          work: 'Atuação',
          about: 'Sobre',
          portfolio: 'Portfólio',
          highlights: 'Destaques',
          archive: 'Acervo',
        },
      },
      escolha: {
        kicker: 'Eleições 2026 · informação pública',
        text: 'Aplicativo cívico e independente. A pessoa pesquisa candidaturas e mandatos em exercício, lê registros públicos do TSE, da Câmara e do Senado e organiza a própria cédula. Não representa órgão governamental, partido ou candidatura. O aplicativo está na <a href="https://play.google.com/store/apps/details?id=br.com.escolhaconsciente.app" target="_blank" rel="noopener noreferrer">Google Play</a> e na <a href="https://apps.apple.com/br/app/escolha-consciente/id6809827176" target="_blank" rel="noopener noreferrer">App Store</a>.',
        prev: 'Imagem anterior de Escolha Consciente',
        next: 'Próxima imagem de Escolha Consciente',
        alt: {
          login: 'Tela de entrada do aplicativo Escolha Consciente, com e-mail, senha e acesso sem conta.',
          elections: 'Tela Eleições 2026, com a ordem dos seis votos na urna.',
          search: 'Tela de busca de candidaturas por nome, com filtros de UF, cargo e situação.',
          votes: 'Tela de votações de uma candidatura, com o voto registrado e o link da fonte.',
          ballot: 'Tela de resultados em que as candidaturas já estão marcadas como na cédula.',
          home: 'Tela inicial com perfis de partida por cargo: presidente, governador e senador.',
        },
        cap: {
          login: 'Entrar',
          elections: 'Eleições 2026',
          search: 'Busca',
          votes: 'Votações',
          ballot: 'Na cédula',
          home: 'Início',
        },
      },
      educa: {
        kicker: 'Educação · realidade virtual',
        text: 'Protótipo de sala de aula em realidade virtual para celular, no formato Google Cardboard. A turma entra numa sala com o sistema solar, observa os planetas, viaja até um corpo celeste, teleporta para a superfície e conversa por voz com as outras pessoas. A interação é pelo olhar, sem controle nas mãos. Feito em Unity como prova de conceito. Ainda não há um site público.',
        prev: 'Imagem anterior de Educaverso',
        next: 'Próxima imagem de Educaverso',
        alt: {
          home: 'Tela inicial do Educaverso, com nome, criar sala, buscar sala e treinamento.',
          headset: 'Instruções para colocar o celular no óculos de realidade virtual e vestir o óculos.',
          training: 'Tela de treinamento do olhar, com alvos e o botão de iniciar.',
          solar: 'Cena do sistema solar com Terra, Vênus e Mercúrio.',
        },
        cap: {
          home: 'Início',
          headset: 'Óculos',
          training: 'Treinamento',
          solar: 'Sistema solar',
        },
      },
    },
    creator: {
      eyebrow: 'Quem faz',
      photoAlt: 'Ive Tourinho',
      p1: 'Engenheiro de software, com mais de dez anos em aplicações web de produção. O trabalho público dele está em arquitetura de front-end, React, Next.js e TypeScript, com atenção a desempenho e acessibilidade.',
      p2: 'Na Thoughtworks, de junho de 2024 a agosto de 2026, liderou a entrega técnica de sistemas web. É graduado e mestre em Ciência da Computação pela Universidade Federal da Bahia. O mestrado, entre 2016 e 2018, é uma pesquisa na área de Machine Learning: agrupamento flexível para recomendação de pontos de interesse. Cursa pós-graduação em Engenharia de Software de IA Aplicada.',
      p3: 'No começo da carreira, na MDS Tecnologia da Informação, conduziu o Acesso Brasil: um jogo sério e um tradutor interativo de português para Libras, premiado em projetos de aplicativo e jogos sérios de interesse público.',
      whatsapp: 'WhatsApp (71) 98685-8520',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Fale com a Ebon Labs',
      desc: 'Projeto novo, parceria ou uma conversa sobre o que já está no ar. O estúdio responde pelo e-mail. O criador, pelo WhatsApp, pelo LinkedIn e pelo blog no Medium.',
      whatsapp: 'WhatsApp (71) 98685-8520',
    },
    footer: {
      credit: 'Site por',
    },
    float: 'Chamar no WhatsApp',
  },
  en: {
    meta: {
      title: 'Ebon Labs — technology, innovation and education',
      description: 'Ebon Labs, Ive Tourinho’s studio, publishes websites and digital products for local businesses and public causes.',
    },
    skip: 'Skip to content',
    nav: {
      label: 'Main',
      about: 'About',
      projects: 'Projects',
      creator: 'Creator',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    wa: {
      project: 'Hello! I would like to talk about a project with Ebon Labs.',
      creator: 'Hello, Ive! I saw the Ebon Labs website.',
    },
    hero: {
      eyebrow: 'Technology, innovation and education',
      lead: 'Ive Tourinho’s studio publishes websites and digital products for people who live from a craft and for public causes. The same care runs from a therapist’s schedule to the ballot and a virtual-reality classroom.',
      projects: 'View projects',
      whatsapp: 'Message on WhatsApp',
      imageAlt: 'A phone, a site window, a card, a sphere and a ring in the Ebon Labs colors.',
    },
    about: {
      eyebrow: 'The studio',
      title: 'Two kinds of product, the same craft',
      commercial: 'On the commercial side, Ebon Labs puts the business on the internet the way the person already buys and books: a clear page and a WhatsApp chat. That is how the Toque e Corpo site, the Croc Croc menu and the Inah Irenam portfolio came to be.',
      social: 'On the social side, the studio organizes public information and experiments with learning. Escolha Consciente gathers official records from Brazil’s electoral court, the Chamber of Deputies and the Senate for the 2026 elections. Educaverso is a virtual-reality classroom prototype in which the class explores the solar system by looking.',
      place: 'The studio replies at <a href="mailto:ebonlabs@gmail.com">ebonlabs@gmail.com</a>.',
      logoAlt: 'Ebon Labs mark: Ebon in navy and Labs in blue.',
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Projects',
      desc: 'Each piece brings photos from the project itself and, when one exists, a capture of the published site.',
      commercial: 'Commercial',
      social: 'Social',
      viewSite: 'View the site',
      toque: {
        kicker: 'Integrative therapies',
        text: 'Site for Gabriela Ferreira to present therapeutic massage, acupuncture, reiki, shiatsu, lymphatic drainage and other practices. The text explains the care, the catalog lists the services and booking goes through WhatsApp.',
        prev: 'Previous image of Toque e Corpo',
        next: 'Next image of Toque e Corpo',
        alt: {
          home: 'Opening section of the Toque e Corpo site, with the line about touch and the buttons for services and WhatsApp.',
          space: 'Welcome section of the Toque e Corpo site, with the portrait, the mark and the invitation into the space of care.',
          services: 'Services section of the Toque e Corpo site, with therapeutic massage, Tui Na, cupping and Access Bars.',
          about: 'About section of the Toque e Corpo site, on Gabriela Ferreira, her training and her method.',
          promo: 'Promotion section of the Toque e Corpo site, with the form and the reduced prices.',
        },
        cap: {
          home: 'Home',
          space: 'Space',
          services: 'Services',
          about: 'About',
          promo: 'Promotion',
        },
      },
      croc: {
        kicker: 'Artisanal popcorn',
        text: 'Site for the house that makes popcorn. Sweet, savory, truffles, bars and lollipops appear in photos and on the menu, with retail, wholesale and orders. The order goes through WhatsApp.',
        prev: 'Previous image of Croc Croc',
        next: 'Next image of Croc Croc',
        alt: {
          home: 'Opening section of the Croc Croc site, with the mark, the stripes and the invitation to the menu.',
          gallery: 'Gift gallery on the Croc Croc site, with custom packaging.',
          menu: 'Menu on the Croc Croc site, with filters and retail prices.',
          calc: 'Calculator on the Croc Croc site, with the flavor, the grams and the price.',
        },
        cap: {
          home: 'Home',
          gallery: 'Gallery',
          menu: 'Menu',
          calc: 'Calculator',
        },
      },
      inah: {
        kicker: 'Dance and cultural production',
        text: 'Portfolio of Inah Irenam Oliveira da Silva, performer-creator, researcher, curator and cultural producer. The site gathers her work, path, highlights and archive, in more than one language, and opens a conversation for anyone who wants to hire creation, production or training.',
        prev: 'Previous image of Inah Irenam',
        next: 'Next image of Inah Irenam',
        alt: {
          home: 'Opening section of Inah Irenam’s portfolio, titled Dance, memory and cultural policy.',
          path: 'Body, territory and archive section of Inah Irenam’s site, with the photograph in the water and works to watch.',
          work: 'Work section of Inah Irenam’s site, with the catalog of creation, production, research and training.',
          about: 'About section of Inah Irenam’s site, with the portrait on stage and her path.',
          portfolio: 'Portfolio section of Inah Irenam’s site, with posters and publications.',
          highlights: 'Highlights section of Inah Irenam’s site, with the formats of the work and the invitation to talk.',
          archive: 'Archive section of Inah Irenam’s site, with search, filters and records.',
        },
        cap: {
          home: 'Home',
          path: 'Path',
          work: 'Work',
          about: 'About',
          portfolio: 'Portfolio',
          highlights: 'Highlights',
          archive: 'Archive',
        },
      },
      escolha: {
        kicker: '2026 elections · public information',
        text: 'An independent civic app. A person searches candidacies and sitting terms, reads public records from Brazil’s electoral court, the Chamber of Deputies and the Senate, and organizes their own ballot. It does not represent a government body, a party or a candidacy. The app is on the <a href="https://play.google.com/store/apps/details?id=br.com.escolhaconsciente.app" target="_blank" rel="noopener noreferrer">Google Play</a> and the <a href="https://apps.apple.com/br/app/escolha-consciente/id6809827176" target="_blank" rel="noopener noreferrer">App Store</a>.',
        prev: 'Previous image of Escolha Consciente',
        next: 'Next image of Escolha Consciente',
        alt: {
          login: 'Sign-in screen of the Escolha Consciente app, with email, password and access without an account.',
          elections: '2026 elections screen, with the order of the six votes on the ballot machine.',
          search: 'Search screen for candidacies by name, with filters for state, office and status.',
          votes: 'Voting record screen for a candidacy, with the recorded vote and the source link.',
          ballot: 'Results screen where candidacies are already marked as on the ballot.',
          home: 'Home screen with starting profiles by office: president, governor and senator.',
        },
        cap: {
          login: 'Sign in',
          elections: '2026 elections',
          search: 'Search',
          votes: 'Votes',
          ballot: 'On the ballot',
          home: 'Home',
        },
      },
      educa: {
        kicker: 'Education · virtual reality',
        text: 'A virtual-reality classroom prototype for phones, in the Google Cardboard format. The class enters a room with the solar system, watches the planets, travels to a celestial body, teleports to the surface and talks by voice with the other people. Interaction is by gaze, with nothing in the hands. Built in Unity as a proof of concept. There is no public site yet.',
        prev: 'Previous image of Educaverso',
        next: 'Next image of Educaverso',
        alt: {
          home: 'Educaverso home screen, with name, create room, find room and training.',
          headset: 'Instructions for placing the phone in the virtual-reality headset and putting the headset on.',
          training: 'Gaze-training screen, with targets and the start button.',
          solar: 'Solar system scene with Earth, Venus and Mercury.',
        },
        cap: {
          home: 'Home',
          headset: 'Headset',
          training: 'Training',
          solar: 'Solar system',
        },
      },
    },
    creator: {
      eyebrow: 'Who makes it',
      photoAlt: 'Ive Tourinho',
      p1: 'Software engineer with more than ten years in production web applications. His public work is in front-end architecture, React, Next.js and TypeScript, with attention to performance and accessibility.',
      p2: 'At Thoughtworks, from June 2024 to August 2026, he led the technical delivery of web systems. He holds a bachelor’s and a master’s degree in Computer Science from the Federal University of Bahia. The master’s, between 2016 and 2018, is research in machine learning: flexible clustering for point-of-interest recommendation. He is taking a postgraduate degree in Applied AI Software Engineering.',
      p3: 'Early in his career, at MDS Tecnologia da Informação, he led Acesso Brasil: a serious game and an interactive translator from Portuguese to Libras, awarded in application and public-interest serious-game projects.',
      whatsapp: 'WhatsApp (71) 98685-8520',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Talk to Ebon Labs',
      desc: 'A new project, a partnership or a conversation about what is already live. The studio replies by email. The creator, by WhatsApp, LinkedIn and the Medium blog.',
      whatsapp: 'WhatsApp (71) 98685-8520',
    },
    footer: {
      credit: 'Site by',
    },
    float: 'Message on WhatsApp',
  },
  es: {
    meta: {
      title: 'Ebon Labs — tecnología, innovación y educación',
      description: 'Ebon Labs, el estudio de Ive Tourinho, publica sitios y productos digitales para negocios locales y causas públicas.',
    },
    skip: 'Ir al contenido',
    nav: {
      label: 'Principal',
      about: 'Acerca',
      projects: 'Proyectos',
      creator: 'Creador',
      contact: 'Contacto',
      whatsapp: 'WhatsApp',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      language: 'Idioma',
    },
    wa: {
      project: 'Hola. Quiero conversar sobre un proyecto con Ebon Labs.',
      creator: 'Hola, Ive. Vi el sitio de Ebon Labs.',
    },
    hero: {
      eyebrow: 'Tecnología, innovación y educación',
      lead: 'El estudio de Ive Tourinho publica sitios y productos digitales para quien vive de un oficio y para causas públicas. El mismo cuidado va de la agenda de una terapeuta a la cédula electoral y al aula en realidad virtual.',
      projects: 'Ver proyectos',
      whatsapp: 'Escribir por WhatsApp',
      imageAlt: 'Un celular, una ventana de sitio, una tarjeta, una esfera y un anillo en los colores de Ebon Labs.',
    },
    about: {
      eyebrow: 'La casa',
      title: 'Dos tipos de producto, el mismo oficio',
      commercial: 'En la frente comercial, Ebon Labs pone el negocio en internet del modo en que la persona ya compra y reserva: una página clara y un WhatsApp. Así nacieron el sitio de Toque e Corpo, el menú de Croc Croc y el portafolio de Inah Irenam.',
      social: 'En la frente social, el estudio organiza información pública y experimenta con el aprendizaje. Escolha Consciente reúne datos oficiales del TSE, de la Cámara y del Senado para las Elecciones 2026. Educaverso es un prototipo de aula en realidad virtual, en el que el grupo explora el sistema solar con la mirada.',
      place: 'El estudio responde en <a href="mailto:ebonlabs@gmail.com">ebonlabs@gmail.com</a>.',
      logoAlt: 'Marca Ebon Labs: Ebon en azul marino y Labs en azul.',
    },
    projects: {
      eyebrow: 'Portafolio',
      title: 'Proyectos',
      desc: 'Cada trabajo reúne fotos del propio proyecto y, cuando existe, una captura del sitio publicado.',
      commercial: 'Comerciales',
      social: 'De carácter social',
      viewSite: 'Ver el sitio',
      toque: {
        kicker: 'Terapias integrativas',
        text: 'Sitio de Gabriela Ferreira para presentar masaje terapéutico, acupuntura, reiki, shiatsu, drenaje linfático y otras prácticas. El texto explica el cuidado, el catálogo lista los servicios y la reserva sale por WhatsApp.',
        prev: 'Imagen anterior de Toque e Corpo',
        next: 'Siguiente imagen de Toque e Corpo',
        alt: {
          home: 'Sección inicial del sitio Toque e Corpo, con la frase sobre el toque en el cuerpo.',
          space: 'Sección de bienvenida del sitio Toque e Corpo, con el retrato, la marca y la invitación al espacio de cura.',
          services: 'Sección de servicios del sitio Toque e Corpo, con masaje terapéutico, Tui Na, ventosas y barras de Access.',
          about: 'Sección sobre Gabriela Ferreira en el sitio Toque e Corpo, con la formación y el método.',
          promo: 'Sección de promoción del sitio Toque e Corpo, con el formulario y los precios reducidos.',
        },
        cap: {
          home: 'Inicio',
          space: 'Espacio',
          services: 'Servicios',
          about: 'Sobre',
          promo: 'Promoción',
        },
      },
      croc: {
        kicker: 'Palomitas artesanales',
        text: 'Sitio de la casa de palomitas. Dulces, saladas, trufas, barrita y piruleta aparecen en foto y en el menú, con venta al detalle, al por mayor y encargos. El pedido sigue por WhatsApp.',
        prev: 'Imagen anterior de Croc Croc',
        next: 'Siguiente imagen de Croc Croc',
        alt: {
          home: 'Sección inicial del sitio Croc Croc, con la marca, las rayas y la invitación al menú.',
          gallery: 'Galería de regalos del sitio Croc Croc, con empaques personalizados.',
          menu: 'Menú del sitio Croc Croc, con filtros y los precios al detalle.',
          calc: 'Calculadora del sitio Croc Croc, con el sabor, los gramos y el precio.',
        },
        cap: {
          home: 'Inicio',
          gallery: 'Galería',
          menu: 'Menú',
          calc: 'Calculadora',
        },
      },
      inah: {
        kicker: 'Danza y producción cultural',
        text: 'Portafolio de Inah Irenam Oliveira da Silva, intérprete-creadora, investigadora, curadora y productora cultural. El sitio reúne actuación, trayectoria, destacados y archivo, en más de un idioma, y abre conversación para quien quiere contratar creación, producción o formación.',
        prev: 'Imagen anterior de Inah Irenam',
        next: 'Siguiente imagen de Inah Irenam',
        alt: {
          home: 'Sección inicial del portafolio de Inah Irenam, con el título Danza, memoria y política cultural.',
          path: 'Sección Cuerpo, territorio y archivo del sitio de Inah Irenam, con la foto en el agua y los trabajos para ver.',
          work: 'Sección de actuación del sitio de Inah Irenam, con el catálogo de creación, producción, investigación y formación.',
          about: 'Sección sobre Inah Irenam, con el retrato en escena y la trayectoria.',
          portfolio: 'Sección de portafolio del sitio de Inah Irenam, con carteles y publicaciones.',
          highlights: 'Sección de destacados del sitio de Inah Irenam, con los formatos de trabajo y la invitación a conversar.',
          archive: 'Sección de archivo del sitio de Inah Irenam, con la búsqueda, los filtros y los registros.',
        },
        cap: {
          home: 'Inicio',
          path: 'Trayectoria',
          work: 'Actuación',
          about: 'Sobre',
          portfolio: 'Portafolio',
          highlights: 'Destacados',
          archive: 'Archivo',
        },
      },
      escolha: {
        kicker: 'Elecciones 2026 · información pública',
        text: 'Aplicación cívica e independiente. La persona busca candidaturas y mandatos en ejercicio, lee registros públicos del TSE, de la Cámara y del Senado y organiza su propia cédula. No representa a un órgano de gobierno, a un partido ni a una candidatura. La aplicación está en <a href="https://play.google.com/store/apps/details?id=br.com.escolhaconsciente.app" target="_blank" rel="noopener noreferrer">Google Play</a> y en la <a href="https://apps.apple.com/br/app/escolha-consciente/id6809827176" target="_blank" rel="noopener noreferrer">App Store</a>.',
        prev: 'Imagen anterior de Escolha Consciente',
        next: 'Siguiente imagen de Escolha Consciente',
        alt: {
          login: 'Pantalla de entrada de la aplicación Escolha Consciente, con correo, contraseña y acceso sin cuenta.',
          elections: 'Pantalla Elecciones 2026, con el orden de los seis votos en la urna.',
          search: 'Pantalla de búsqueda de candidaturas por nombre, con filtros de estado, cargo y situación.',
          votes: 'Pantalla de votaciones de una candidatura, con el voto registrado y el enlace de la fuente.',
          ballot: 'Pantalla de resultados en la que las candidaturas ya están marcadas como en la cédula.',
          home: 'Pantalla inicial con perfiles de partida por cargo: presidente, gobernador y senador.',
        },
        cap: {
          login: 'Entrar',
          elections: 'Elecciones 2026',
          search: 'Búsqueda',
          votes: 'Votaciones',
          ballot: 'En la cédula',
          home: 'Inicio',
        },
      },
      educa: {
        kicker: 'Educación · realidad virtual',
        text: 'Prototipo de aula en realidad virtual para el celular, en el formato Google Cardboard. El grupo entra en una sala con el sistema solar, observa los planetas, viaja hasta un cuerpo celeste, se teletransporta a la superficie y conversa por voz con las demás personas. La interacción es con la mirada, sin control en las manos. Hecho en Unity como prueba de concepto. Todavía no hay un sitio público.',
        prev: 'Imagen anterior de Educaverso',
        next: 'Siguiente imagen de Educaverso',
        alt: {
          home: 'Pantalla inicial de Educaverso, con nombre, crear sala, buscar sala y entrenamiento.',
          headset: 'Instrucciones para poner el celular en las gafas de realidad virtual y colocarse las gafas.',
          training: 'Pantalla de entrenamiento de la mirada, con objetivos y el botón de inicio.',
          solar: 'Escena del sistema solar con la Tierra, Venus y Mercurio.',
        },
        cap: {
          home: 'Inicio',
          headset: 'Gafas',
          training: 'Entrenamiento',
          solar: 'Sistema solar',
        },
      },
    },
    creator: {
      eyebrow: 'Quién lo hace',
      photoAlt: 'Ive Tourinho',
      p1: 'Ingeniero de software, con más de diez años en aplicaciones web de producción. Su trabajo público está en arquitectura de front-end, React, Next.js y TypeScript, con atención al rendimiento y a la accesibilidad.',
      p2: 'En Thoughtworks, de junio de 2024 a agosto de 2026, lideró la entrega técnica de sistemas web. Es licenciado y máster en Ciencia de la Computación por la Universidad Federal de Bahía. El máster, entre 2016 y 2018, es una investigación en el área de machine learning: agrupamiento flexible para la recomendación de puntos de interés. Cursa un posgrado en Ingeniería de Software de IA Aplicada.',
      p3: 'Al comienzo de la carrera, en MDS Tecnologia da Informação, condujo Acesso Brasil: un juego serio y un traductor interactivo de portugués a Libras, premiado en proyectos de aplicación y juegos serios de interés público.',
      whatsapp: 'WhatsApp (71) 98685-8520',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Habla con Ebon Labs',
      desc: 'Un proyecto nuevo, una alianza o una conversación sobre lo que ya está en el aire. El estudio responde por el correo. El creador, por WhatsApp, por LinkedIn y por el blog en Medium.',
      whatsapp: 'WhatsApp (71) 98685-8520',
    },
    footer: {
      credit: 'Sitio por',
    },
    float: 'Escribir por WhatsApp',
  },
};

let currentLang = DEFAULT_LANG;

function getStoredLang() {
  const stored = localStorage.getItem(I18N_STORAGE_KEY);
  return translations[stored] ? stored : DEFAULT_LANG;
}

function getLang() {
  return currentLang;
}

function t(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], translations[currentLang]) ?? '';
}

function getHtmlLang(lang) {
  return { pt: 'pt-BR', en: 'en', es: 'es' }[lang] || 'pt-BR';
}

function applyWhatsapp() {
  if (typeof whatsappUrl !== 'function') return;
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = whatsappUrl(link.getAttribute('data-whatsapp'));
  });
}

function syncMenuToggle() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (!toggle || !links) return;
  const open = links.classList.contains('open');
  toggle.setAttribute('aria-label', open ? t('nav.closeMenu') : t('nav.openMenu'));
}

function applyStaticTranslations() {
  document.documentElement.lang = getHtmlLang(currentLang);
  document.title = t('meta.title');

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t('meta.description');

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = t('meta.title');

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = t('meta.description');

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.content = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' }[currentLang] || 'pt_BR';

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.content = t('meta.title');

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.content = t('meta.description');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':').map((part) => part.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  syncMenuToggle();
}

function updateLanguageButtons() {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

function initLanguageSwitcher(onChange) {
  const switcher = document.getElementById('lang-switcher');
  if (!switcher) return;

  switcher.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!translations[lang] || lang === currentLang) return;
      setLanguage(lang, onChange);
    });
  });
}

function setLanguage(lang, onChange) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(I18N_STORAGE_KEY, lang);
  applyStaticTranslations();
  applyWhatsapp();
  updateLanguageButtons();
  onChange?.();
}

function initI18n(onChange) {
  currentLang = getStoredLang();
  applyStaticTranslations();
  applyWhatsapp();
  initLanguageSwitcher(onChange);
  updateLanguageButtons();
  onChange?.();
}
