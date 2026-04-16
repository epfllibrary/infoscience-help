/*
 * Infoscience Help — search-language-filter.js
 * Filtre les résultats de recherche selon la langue active.
 * Détecte /fr/ dans l'URL pour restreindre aux pages .fr.html
 * Sinon, exclut les pages .fr.html (version EN).
 */

document$.subscribe(function () {
  const isFrench =
    window.location.pathname.startsWith("/fr/") ||
    window.location.pathname.includes("/fr/");

  /* Attendre que Material ait injecté les résultats dans le DOM */
  const observer = new MutationObserver(function () {
    const results = document.querySelectorAll(".md-search-result__item");
    if (!results.length) return;

    results.forEach(function (item) {
      const link = item.querySelector("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (isFrench) {
        /* Mode FR : masquer les résultats sans /fr/ dans l'URL */
        if (!href.includes("/fr/") && !href.includes(".fr.")) {
          item.style.display = "none";
        }
      } else {
        /* Mode EN : masquer les résultats contenant /fr/ ou .fr. */
        if (href.includes("/fr/") || href.includes(".fr.")) {
          item.style.display = "none";
        }
      }
    });
  });

  /* Observer le conteneur de résultats */
  const target =
    document.querySelector(".md-search-result__list") ||
    document.querySelector(".md-search__output");

  if (target) {
    observer.observe(target, { childList: true, subtree: true });
  }
});
