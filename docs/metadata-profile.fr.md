---
search:
  boost: 0.5
social:
  cards: false
description: >-
  Référence interactive de tous les champs de métadonnées Infoscience : entité, label, type de saisie, contrôle d'autorité, vocabulaires contrôlés et métadonnées virtuelles.
---

# Profil d'application des métadonnées

Le profil d'application des métadonnées (MAP) d'Infoscience est un référentiel exhaustif et filtrable de tous les champs de métadonnées définis dans la configuration d'Infoscience. Il couvre deux niveaux :

- **Niveau notice** — champs collectés dans les formulaires de soumission, appliqués à la notice elle-même.
- **Niveau fichier** — champs collectés au moment du dépôt de fichier, appliqués à chaque fichier déposé (bitstream).

Les champs de métadonnées virtuelles (`cris.virtual.*`), calculés à l'exécution depuis les entités CRIS liées, sont listés dans un tableau dédié en bas de cette page.

## Comment utiliser cet explorateur

Sélectionnez une entité via les boutons colorés, puis utilisez les filtres pour affiner par collection, propriétés du champ (obligatoire / optionnel / type-bind) ou niveau de métadonnée. Cliquez sur **▼** d'un champ `group` ou `qualified value` pour développer ses sous-champs. Survolez une clé de métadonnée pour lire sa description. Cliquez sur un badge vocabulaire pour afficher la liste complète des valeurs contrôlées.

## Espaces de noms des métadonnées

| Préfixe | Standard | Portée |
|---|---|---|
| `dc.*` | Dublin Core | Champs bibliographiques de base |
| `dcterms.*` | Dublin Core Terms | Termes DC étendus |
| `oaire.*` | OpenAIRE | Métadonnées de citation et de version |
| `oairecerif.*` | OpenAIRE CERIF | Relations entre entités CRIS |
| `datacite.*` | DataCite | Identifiants et droits pour données de recherche |
| `person.*` | schema.org/Person | Champs de profil de personne |
| `organization.*` | schema.org/Organization | Champs d'unité organisationnelle |
| `cris.*` / `crisou.*` / `crispj.*` / `crisfund.*` / `crisevent.*` | DSpace-CRIS | Champs CRIS spécifiques par type d'entité |
| `epfl.*` | EPFL | Extensions spécifiques à l'institution |
| `ctb.*` | EPFL/CTB | Champs de bitstream et de contribution |
| `cris.virtual.*` | DSpace-CRIS | Métadonnées virtuelles calculées (non stockées) |

!!! info "Propriétés"
    **Obligatoire** — le champ doit être rempli pour soumettre le formulaire. **Répétable** — plusieurs valeurs sont acceptées. **Type-bind** — le champ n'est affiché que pour certains sous-types de documents ; un champ sans type-bind s'applique à tous les sous-types de l'entité.

!!! info "Autorité"
    Les champs contrôlés par autorité stockent un UUID (entité CRIS interne) ou un identifiant persistant (ORCID, ROR, OpenAIRE, Sherpa) plutôt qu'un texte libre. Cliquez sur ▼ d'un champ `group` pour afficher les sous-champs individuels et leurs propres bindings d'autorité.

!!! info "Métadonnées virtuelles"
    Les champs préfixés `cris.virtual.*` sont renseignés automatiquement à partir des profils des chercheurs ou unités liés. Ils ne peuvent pas être modifiés directement et figurent dans un tableau séparé en bas de cette page.

## Liste des métadonnées

<div id="infoscience-map" data-lang="fr"></div>
