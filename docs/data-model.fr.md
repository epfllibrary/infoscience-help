# Modèle de données Infoscience

Le modèle de données Infoscience décrit toutes les entités, champs de métadonnées et leurs relations dans le dépôt.

La documentation interactive complète est disponible sur :

[epfllibrary.github.io/infoscience-map](https://epfllibrary.github.io/infoscience-map/){ .md-button .md-button--primary }

---

## Vue d'ensemble

Infoscience est construit sur **DSpace-CRIS**, combinant le dépôt institutionnel DSpace avec les capacités CRIS (Current Research Information System). Le modèle de données couvre :

- **Travaux académiques** : publications, datasets, brevets
- **Personnes** : profils de chercheurs, liens ORCID, variantes de noms
- **Unités** : laboratoires, centres de recherche, unités administratives
- **Revues** : métadonnées de revues et identifiants ISSN
- **Événements** : conférences, ateliers, symposiums

---

## Standards de métadonnées

Les métadonnées Infoscience sont alignées sur :

- **Dublin Core** et **Qualified DC** pour la description bibliographique de base
- **DataCite** pour les datasets et l'enregistrement des DOI
- **OpenAIRE Guidelines** pour l'interopérabilité avec l'infrastructure européenne de recherche
- **Vocabulaire COAR Resource Types** pour la classification des types de documents
- **MARC** pour l'interopérabilité avec les catalogues de bibliothèques

---

## Licence des métadonnées

Toutes les métadonnées Infoscience sont placées sous licence **[Creative Commons CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr)** — librement utilisables, modifiables et redistribuables sans consentement préalable.

---

## Index de recherche

La liste complète des index de recherche est documentée dans la carte interactive du modèle de données sur [epfllibrary.github.io/infoscience-map](https://epfllibrary.github.io/infoscience-map/).

### Identifiants

| Index | Description | Exemple |
|---|---|---|
| `search.resourceid` | Recherche par UUID de la notice | `search.resourceid:a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
| `cris.legacyId` | Recherche par ancien identifiant Infoscience | `cris.legacyId:175201` |
| `itemidentifier` | Recherche par identifiant : DOI, arXiv, WoS, Scopus… | `itemidentifier:(*arXiv.2306.09281)` |
| `doi` | Recherche par DOI uniquement | `doi:(10.1002/anie.202414612)` |
| `orcid` | Recherche par identifiant ORCID | `orcid:0000-0001-2345-6789` |

### Auteurs et personnes

| Index | Description | Exemple |
|---|---|---|
| `author` | Recherche par nom d'auteur | `author:(Martin, Sophie)` ou `author:(Martin, S*)` |
| `author_authority` | Recherche par auteur en utilisant l'UUID du profil | `author_authority:f9e8d7c6-b5a4-3210-fedc-ba9876543210` |
| `author_editor` | Recherche par auteur ou éditeur scientifique | `author_editor:(Martin, Sophie)` |
| `author_editor_authority` | Recherche par auteur ou éditeur scientifique en utilisant l'UUID du profil | `author_editor_authority:f9e8d7c6-b5a4-3210-fedc-ba9876543210` |
| `submitter_keyword` | Recherche par déposant | `submitter_keyword:(*dupont*)` |

### Types de documents

| Index | Description | Exemple |
|---|---|---|
| `types` | Recherche par type de document en utilisant la valeur display | `types:(conference paper)` |
| `types_authority` | Recherche par type de document en utilisant l'identifiant d'autorité COAR | `types_authority:("article-coar-types:c_2df8fbb1")` ou `types_authority:(*c_2df8fbb1)` |

### Dates

| Index | Description | Exemple |
|---|---|---|
| `dateIssued` | Recherche par date de publication (format YYYY-MM-DD) | `dateIssued:(2024-06-12)` ou `dateIssued:(2024-06-*)` |
| `dateIssued.year` | Recherche par année de publication | `dateIssued.year:(2009)` |

### Unités et affiliations

| Index | Description | Exemple |
|---|---|---|
| `unitOrLab` | Recherche par unité ou laboratoire en utilisant l'acronyme | `unitOrLab:("TRANSP-OR")` |
| `organizationHierarchy` | Recherche par affiliation — inclut toute la hiérarchie : faculté > institut > laboratoire | `organizationHierarchy:("SPC")` |
| `epfl.writtenAt` | Filtrer par publications produites ou non à l'EPFL | `epfl.writtenAt:EPFL` ou `epfl.writtenAt:OTHER` |

### Titres, contenu et sujets

| Index | Description | Exemple |
|---|---|---|
| `title` | Recherche dans le titre | `title:(artificial intelligence)` |
| `abstract` | Recherche dans le résumé | `abstract:(artificial intelligence)` |
| `subject` | Recherche par sujet ou mot-clé auteur | `subject:(LLM)` |
| `container` | Recherche selon le titre de l'ouvrage, du proceedings ou de la revue dans lequel le papier apparaît | `container:(*IEEE proceedings*)` |
| `journal` | Recherche selon le titre de la revue dans lequel l'article est publié | `journal:(Physical Review B)` |
| `journal_authority` | Recherche selon le titre de la revue en utilisant l'UUID de la revue dans Infoscience | `journal_authority:c3d4e5f6-a7b8-9012-3456-789abcdef012` |
| `publisher` | Recherche par éditeur | `publisher:(*springer*)` |

### Accès, version et droits

| Index | Description | Exemple |
|---|---|---|
| `oaire.version` | Filtrer selon la version de la publication | `oaire.version(*c_970fb48d4fbd8a85)` = Version éditeur<br>`oaire.version(*c_ab4af688f83e57aa)` = Manuscrit accepté<br>`oaire.version(*c_71e4c1898caa6e32)` = Version soumise |
| `datacite.rights` | Filtrer selon le mode d'accès | `datacite.rights:(openaccess)` ou `datacite.rights:(restricted)` ou `datacite.rights:(metadata only)` |
| `epfl.peerreviewed` | Filtrer par publications révisées par les pairs | `epfl.peerreviewed:REVIEWED` |

### Financement

| Index | Description | Exemple |
|---|---|---|
| `fundername` | Recherche par financeur | `fundername:(SNSF)` |

### Paramètres d'URL

| Paramètre | Description | Exemple |
|---|---|---|
| `query` | Paramètre de recherche principal | `&query=title:(artificial intelligence)` |
| `configuration` | Porte la recherche sur une configuration spécifique | `&configuration=researchoutputs` (publications, brevets, produits) |
| `scope` | Porte la recherche sur une collection, une personne ou une unité particulière | `&scope=1a71fba2-2fc5-4c02-9447-f292e25ce6c1` |
| `f.{index}` | Filtres supplémentaires sur les résultats | `&f.unitOrLab=crpp,equals` |
| `spc.rpp` | Nombre de résultats affichés par page | `&spc.rpp=10`, `&spc.rpp=60`, `&spc.rpp=100` |
| `spc.sf` et `spc.sd` | Champ et direction de tri | `spc.sf=dc.date.issued&spc.sd=DESC` (par date)<br>`spc.sf=metric.scopusCitation&spc.sd=DESC` (par citations)<br>`spc.sf=score&spc.sd=DESC` (par pertinence) |
| `spc.page` | Pagination des résultats | `&spc.page=1` |

### Opérateurs booléens et syntaxe

| Opérateur | Description | Exemple |
|---|---|---|
| `AND` | Combine plusieurs critères de manière stricte | `author:(bernard) AND dateIssued.year:[2008 TO 2010]` |
| `OR` | Étend la recherche avec des choix alternatifs | `(author:(bernard) OR author:(Martin))` |
| `NOT` ou `-` | Exclut certains résultats | `-types:(conference poster)` |
| `" "` (guillemets) | Recherche d'une expression exacte | `"Durand, Claire"`, `"Leclerc, Marc"` |
| `[X TO Y]` | Recherche par plage | `dateIssued.year:[2020 TO 2024]` |
| `*` (joker) | Correspondance partielle | `author:(Martin, S*)` |

---

[Retour à l'accueil de l'Aide](index.fr.md)
