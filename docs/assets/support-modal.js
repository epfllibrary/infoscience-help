/**
 * Infoscience Help — Support modal
 * Affiché une fois par session (sessionStorage).
 * MkDocs injecte ce script en fin de <body> sur chaque page.
 *
 * L'image assets/images/infoscience-support.png doit être présente dans docs/assets/images/.
 * Le chemin est résolu dynamiquement à partir de l'URL de la page courante.
 */
(function () {
  "use strict";

  /* ── 1. Une seule fois par session ─────────────────────────────────────── */
  try {
    if (sessionStorage.getItem("is-support-seen")) return;
  } catch (e) {
    /* sessionStorage indisponible → on affiche quand même */
  }

  /* ── 2. Résoudre le chemin de base du site ──────────────────────────────
     MkDocs génère des URLs comme /en/ ou /fr/ selon la langue.
     On remonte à la racine du site pour trouver assets/.              */
  var base = document.querySelector('link[rel="canonical"]');
  var imgPath = base
    ? new URL(
        "infoscience-help/assets/images/infoscience-support.png",
        new URL(base.href).origin,
      ).href
    : "infoscience-help/assets/images/infoscience-support.png";

  /* ── 3. HTML du modal ───────────────────────────────────────────────────── */
  var html =
    '<div id="is-overlay" role="dialog" aria-modal="true" aria-labelledby="is-modal-title">' +
    '<div id="is-modal">' +
    /* Bouton fermer */
    '<button id="is-close" aria-label="Fermer">' +
    '<svg viewBox="0 0 14 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none">' +
    '<line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/>' +
    "</svg>" +
    "</button>" +
    /* Photo hero */
    '<div class="is-hero">' +
    '<img src="' +
    imgPath +
    '" alt="Deux personnes utilisant Infoscience" />' +
    '<div class="is-hero-overlay"></div>' +
    '<div class="is-hero-badge">' +
    '<div class="is-hero-badge-dot"></div>' +
    '<span class="is-hero-badge-text">Support disponible · Support available</span>' +
    "</div>" +
    "</div>" +
    /* Corps */
    '<div class="is-body">' +
    '<p class="is-title" id="is-modal-title">Besoin d\'aide ? / Need help?</p>' +
    '<p class="is-subtitle">' +
    "Notre équipe est disponible pour vous accompagner.<br>" +
    "<em>Our team is available to assist you.</em>" +
    "</p>" +
    '<div class="is-actions">' +
    /* Réserver */
    '<a class="is-action" href="https://go.epfl.ch/book-an-infoscience-expert" target="_blank" rel="noopener">' +
    '<div class="is-action-icon is-action-icon--book">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="#00A79F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="4" width="18" height="18" rx="2"/>' +
    '<line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>' +
    '<line x1="3" y1="10" x2="21" y2="10"/>' +
    '<circle cx="12" cy="15" r="2"/>' +
    "</svg>" +
    "</div>" +
    '<div class="is-action-content">' +
    '<strong class="is-action-title">Réserver une session / Book an expert</strong>' +
    '<span class="is-action-desc">Dépôt, profil, labo, listes, DOI, API… · Submission, profile, lab, lists, DOI, API…</span>' +
    "</div>" +
    '<svg class="is-action-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M3 8h10M9 4l4 4-4 4"/>' +
    "</svg>" +
    "</a>" +
    /* Email */
    '<a class="is-action" href="mailto:infoscience@epfl.ch">' +
    '<div class="is-action-icon is-action-icon--mail">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="#1a73e8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="2" y="4" width="20" height="16" rx="2"/>' +
    '<path d="M2 7l10 7 10-7"/>' +
    "</svg>" +
    "</div>" +
    '<div class="is-action-content">' +
    '<strong class="is-action-title">Écrire à l\'équipe / Send an email</strong>' +
    '<span class="is-action-desc">infoscience@epfl.ch · réponse sous 2 jours ouvrables  / reply within 2 working days</span>' +
    "</div>" +
    '<svg class="is-action-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M3 8h10M9 4l4 4-4 4"/>' +
    "</svg>" +
    "</a>" +
    "</div>" +
    "</div>" +
    /* Pied */
    '<div class="is-footer">' +
    '<span class="is-footer-text">EPFL Library · Infoscience Team</span>' +
    '<button class="is-footer-dismiss" id="is-dismiss">Continuer vers l\'aide / Go to help →</button>' +
    "</div>" +
    "</div>" +
    "</div>";

  /* ── 4. Injection dans le DOM ───────────────────────────────────────────── */
  var wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper.firstChild);

  /* ── 5. Fermeture ────────────────────────────────────────────────────────── */
  function closeModal() {
    var overlay = document.getElementById("is-overlay");
    if (!overlay) return;
    overlay.style.transition = "opacity .2s ease";
    overlay.style.opacity = "0";
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 220);
    try {
      sessionStorage.setItem("is-support-seen", "1");
    } catch (e) {}
  }

  /* Clic sur l'overlay (hors modal) */
  document.getElementById("is-overlay").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });
  /* Bouton × */
  document.getElementById("is-close").addEventListener("click", closeModal);
  /* Bouton "Continuer" */
  document.getElementById("is-dismiss").addEventListener("click", closeModal);
  /* Touche Escape */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
})();
