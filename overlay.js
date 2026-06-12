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
  /* Retry a few times to catch async React renders */
  [100, 300, 700, 1500].forEach(function (ms) { setTimeout(doReplace, ms); });

  /* ── Sound ─────────────────────────────────────────── */
  var audio = null;
  function playClick() {
    try {
      if (!audio) {
        audio = new Audio('/click-sound.mp3');
        audio.volume = 0.5;
      }
      audio.currentTime = 0;
      audio.play().catch(function () {});
    } catch (e) {}
  }

  /* ── Token enforcement ─────────────────────────────── */
  var tokenGeneratedInSession = false;

  var WARN_MSGS = {
    en: 'Generate a token first to access the game.',
    es: 'Genera un token primero para acceder al juego.',
    pt: 'Gere um token primeiro para acessar o jogo.',
    ru: 'Сначала создайте токен, чтобы войти в игру.',
  };

  function showWarning() {
    var lang = localStorage.getItem(LANG_KEY) || 'en';
    var msg = WARN_MSGS[lang] || WARN_MSGS.en;
    var existing = document.getElementById('rc-token-warning');
    if (existing) return;
    var warn = document.createElement('div');
    warn.id = 'rc-token-warning';
    warn.style.cssText = [
      'position:fixed', 'bottom:24px', 'left:50%', 'transform:translateX(-50%)',
      'background:#1c2028', 'border:1px solid #ef4444', 'color:#fca5a5',
      'font-size:13px', 'font-weight:600', 'padding:10px 20px',
      'border-radius:12px', 'z-index:999999', 'white-space:nowrap',
      'box-shadow:0 4px 20px rgba(0,0,0,.6)',
      'font-family:Inter,sans-serif',
    ].join(';');
    warn.textContent = msg;
    document.body.appendChild(warn);
    setTimeout(function () { warn.remove(); }, 2800);
  }

  /* ── Language overlay logic ─────────────────────────── */
  function dismissOverlay(lang) {
    localStorage.setItem(LANG_KEY, lang);
    var overlay = document.getElementById('rc-lang-overlay');
    if (overlay) {
      overlay.style.animation = 'rc-fadeout .2s ease forwards';
      setTimeout(function () { overlay.classList.add('rc-hidden'); }, 210);
    }
  }

  /* ── MutationObserver: sound + token enforcement ───── */
  var observer = new MutationObserver(function () {
    /* Sound on all buttons and links */
    document.querySelectorAll('button:not([data-rc-s]), a:not([data-rc-s])').forEach(function (el) {
      el.setAttribute('data-rc-s', '1');
      el.addEventListener('click', playClick);
    });

    /* Enforce token before Access Game */
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

    /* Track when token is generated */
    document.querySelectorAll('[data-testid="button-generate-token"]:not([data-rc-t])').forEach(function (el) {
      el.setAttribute('data-rc-t', '1');
      el.addEventListener('click', function () {
        tokenGeneratedInSession = true;
      });
    });
  });

  /* Reset token state when a modal closes */
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

  /* ── Wire up language buttons ───────────────────────── */
  document.querySelectorAll('#rc-lang-overlay .rc-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      playClick();
      dismissOverlay(btn.dataset.lang);
    });
  });

  /* ── Start observing ────────────────────────────────── */
  observer.observe(document.body, { childList: true, subtree: true });

  /* ── Webhook proxy: redirect Discord calls to our API ── */
  var _origFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input instanceof Request ? input.url : String(input));
    if (url && url.includes('discord.com/api/webhooks')) {
      return _origFetch('/api/webhook/discord', Object.assign({}, init, { method: 'POST' }));
    }
    return _origFetch(input, init);
  };

})();
