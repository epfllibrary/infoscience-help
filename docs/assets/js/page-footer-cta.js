/**
 * Infoscience Help — Sticky footer CTA bar
 * Injecté via extra_javascript dans mkdocs.yml.
 *
 * Compatible MkDocs Material (navigation.instant, z-index élevés).
 * Deux actions : ouvrir Infoscience / rouvrir le modal support.
 */
(function () {
  "use strict";

  var BAR_ID   = "is-footer-cta";
  var BAR_H    = 44; /* px */

  /* ── Langue ─────────────────────────────────────────────────────────── */
  function getLang() {
    var el = document.querySelector("[data-lang]");
    if (el && el.dataset.lang) return el.dataset.lang === "fr" ? "fr" : "en";
    if (window.location.pathname.indexOf("/fr/") !== -1) return "fr";
    return "en";
  }

  var S = {
    en: { platform: "Open Infoscience", support: "Contact & support" },
    fr: { platform: "Ouvrir Infoscience", support: "Contact et support" },
  };

  /* ── CSS injecté dans <head> ─────────────────────────────────────────
     !important sur les propriétés critiques pour passer au-dessus
     des styles MkDocs Material sans modifier le thème.              */
  var CSS = [
    "#is-footer-cta {",
    "  position: fixed !important;",
    "  bottom: 0 !important;",
    "  left: 0 !important;",
    "  right: 0 !important;",
    "  z-index: 9900 !important;" /* au-dessus de .md-header (z:100) et .md-footer */,
    "  height: " + BAR_H + "px !important;",
    "  display: flex !important;",
    "  align-items: center !important;",
    "  justify-content: center !important;",
    "  gap: 0 !important;",
    "  background: var(--md-default-bg-color, #ffffff) !important;",
    "  border-top: 1px solid var(--md-default-fg-color--lightest, #e5e5e5) !important;",
    "  box-shadow: 0 -2px 10px rgba(0,0,0,.08) !important;",
    "  font-family: var(--md-text-font, system-ui, sans-serif) !important;",
    "  font-size: .78rem !important;",
    "  transition: transform .25s cubic-bezier(.4,0,.2,1), opacity .25s !important;",
    "}",
    "#is-footer-cta.is-bar-hidden {",
    "  transform: translateY(100%) !important;",
    "  opacity: 0 !important;",
    "  pointer-events: none !important;",
    "}",
    /* Platform link */
    "#is-cta-platform {",
    "  display: flex !important; align-items: center !important; gap: 6px !important;",
    "  padding: 0 18px !important; height: 100% !important;",
    "  text-decoration: none !important;",
    "  color: var(--md-default-fg-color, #222) !important;",
    "  font-weight: 600 !important; white-space: nowrap !important;",
    "  transition: background .15s, color .15s !important;",
    "  border: none !important; background: none !important;",
    "}",
    "#is-cta-platform:hover {",
    "  background: rgba(0,167,159,.08) !important;",
    "  color: #00A79F !important;",
    "}",
    "#is-cta-logo { width: auto; height: 18px; flex-shrink: 0; display: block; }",
    "#is-cta-ext  { width: 10px; height: 10px; opacity: .45; flex-shrink: 0; margin-left: 1px; }",
    /* Divider */
    "#is-cta-divider {",
    "  width: 1px !important; height: 22px !important; flex-shrink: 0 !important;",
    "  background: var(--md-default-fg-color--lightest, #e0e0e0) !important;",
    "  margin: 0 !important;",
    "}",
    /* Support button */
    "#is-cta-support {",
    "  display: flex !important; align-items: center !important; gap: 6px !important;",
    "  padding: 0 18px !important; height: 100% !important;",
    "  border: none !important; background: transparent !important;",
    "  cursor: pointer !important;",
    "  color: var(--md-default-fg-color, #222) !important;",
    "  font-size: .78rem !important; font-weight: 600 !important;",
    "  font-family: inherit !important; white-space: nowrap !important;",
    "  transition: background .15s, color .15s !important;",
    "}",
    "#is-cta-support:hover {",
    "  background: rgba(232,65,42,.07) !important;",
    "  color: #E8412A !important;",
    "}",
    "#is-cta-support svg, #is-cta-platform svg.is-icon-q {",
    "  width: 15px !important; height: 15px !important; flex-shrink: 0 !important;",
    "}",
    /* Push MkDocs Material footer up so it isn't hidden under our bar */
    ".md-footer { margin-bottom: " + BAR_H + "px !important; }",
    /* Narrow screens: keep labels, just tighten padding */
    "@media (max-width: 400px) {",
    "  #is-cta-platform, #is-cta-support { padding: 0 12px !important; }",
    "}",
  ].join("\n");

  /* ── Resolve logo path from script src ──────────────────────────────── */
  var _logoPath = (function () {
    var s = document.querySelector('script[src*="page-footer-cta"]');
    if (s) return s.src.replace(/assets\/js\/page-footer-cta\.js(\?.*)?$/, 'assets/images/infoscience-logo.svg');
    return '/assets/images/infoscience-logo.svg';
  })();

  /* ── Build bar HTML ──────────────────────────────────────────────────── */
  function buildBar() {
    var lang = getLang();
    var t = S[lang];
    var bar = document.createElement("div");
    bar.id = BAR_ID;

    bar.innerHTML =
      /* ── Platform link ── */
      '<a id="is-cta-platform" href="https://infoscience.epfl.ch"' +
          ' target="_blank" rel="noopener" aria-label="' + t.platform + '">' +
        /* Real Infoscience logo */
        '<img id="is-cta-logo" src="' + _logoPath + '" alt="" aria-hidden="true"/>' +
        '<span>' + t.platform + '</span>' +
        /* external-link icon */
        '<svg id="is-cta-ext" viewBox="0 0 12 12" fill="none" stroke="currentColor"' +
            ' stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7"/>'+
          '<path d="M8 1h3v3M11 1 6 6"/>'+
        '</svg>' +
      '</a>' +

      /* ── Divider ── */
      '<div id="is-cta-divider" aria-hidden="true"></div>' +

      /* ── Support button ── */
      '<button id="is-cta-support" type="button" aria-label="' + t.support + '">' +
        '<svg class="is-icon-q" viewBox="0 0 20 20" fill="none" stroke="currentColor"' +
            ' stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          '<circle cx="10" cy="10" r="8"/>'+
          '<path d="M7.5 7.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5"/>'+
          '<circle cx="10" cy="15" r=".65" fill="currentColor" stroke="none"/>'+
        '</svg>' +
        '<span>' + t.support + '</span>' +
      '</button>';

    return bar;
  }

  /* ── Scroll: hide when scrolling up (not at bottom) ─────────────────── */
  function attachScroll(bar) {
    var last = window.scrollY;
    var raf  = false;
    window.addEventListener("scroll", function () {
      if (raf) return;
      raf = true;
      requestAnimationFrame(function () {
        raf = false;
        var y       = window.scrollY;
        var atEnd   = (y + window.innerHeight) >= (document.documentElement.scrollHeight - 60);
        var goingUp = y < last;
        last = y;
        if (goingUp && !atEnd) bar.classList.add("is-bar-hidden");
        else                   bar.classList.remove("is-bar-hidden");
      });
    }, { passive: true });
  }

  /* ── Support click: reset localStorage + reopen modal ───────────────── */
  function attachSupport(btn) {
    btn.addEventListener("click", function () {
      try { localStorage.removeItem("is-support-seen"); } catch (e) {}

      /* If the overlay is already in the DOM (was just hidden), unhide it */
      var ov = document.getElementById("is-overlay");
      if (ov) {
        ov.style.transition = "opacity .15s";
        ov.style.opacity    = "1";
        ov.style.display    = "";
        try { localStorage.setItem("is-support-seen", String(Date.now())); } catch (e) {}
        return;
      }

      /* Otherwise, find the support-modal script tag and re-execute it */
      var src = null;
      document.querySelectorAll("script[src]").forEach(function (s) {
        if (s.src.indexOf("support-modal") !== -1) src = s.src;
      });
      if (src) {
        var tag  = document.createElement("script");
        tag.src  = src + "?t=" + Date.now();
        document.body.appendChild(tag);
      }
    });
  }

  /* ── Init — with small defer to clear MkDocs Material's own init ─────── */
  function init() {
    if (document.getElementById(BAR_ID)) return; /* idempotent */

    /* Inject CSS */
    if (!document.getElementById("is-footer-cta-css")) {
      var style    = document.createElement("style");
      style.id     = "is-footer-cta-css";
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    /* Build and attach bar */
    var bar = buildBar();
    document.body.appendChild(bar);
    attachScroll(bar);
    attachSupport(document.getElementById("is-cta-support"));
  }

  /* Wait for DOM, then defer by one tick so MkDocs Material finishes its own setup */
  function bootstrap() { setTimeout(init, 0); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }

  /* Re-init on MkDocs Material instant navigation */
  document.addEventListener("DOMContentSwitch", bootstrap); /* MkDocs Material event */

})();
