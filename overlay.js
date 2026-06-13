(function () {
  'use strict';

  var LANG_KEY = 'rc2_lang';

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

  var brandObserver = new MutationObserver(function () { doReplace(); });
  brandObserver.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', doReplace);
  [100, 300, 700, 1500].forEach(function (ms) { setTimeout(doReplace, ms); });

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

    /* Inject styles */
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
        'color:#fff;transform:translateY(-2px);',
        'box-shadow:0 4px 20px rgba(34,197,94,0.15);}',
      '.rc-lang-btn:active{transform:translateY(0);}',
      '.rc-lang-flag{font-size:22px;line-height:1;}',
      '.rc-lang-name{display:flex;flex-direction:column;gap:1px;}',
      '.rc-lang-native{font-size:14px;font-weight:700;}',
      '.rc-lang-en{font-size:11px;color:rgba(134,239,172,0.55);font-weight:500;}',
    ].join('');
    document.head.appendChild(style);

    /* Inject HTML */
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

    /* Wire buttons */
    overlay.querySelectorAll('.rc-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        playClick();
        dismissOverlay(btn.dataset.lang);
      });
    });
  }

  /* Inject as soon as body is available */
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
