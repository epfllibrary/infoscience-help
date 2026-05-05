---
description: >-
  Référence complète des rôles utilisateur·trices et des droits associés dans Infoscience :
  rôles généraux (anonyme, authentifié·e, déposant·e, curateur·trice, admin) et rôles
  contextuels (déposant·e de la notice, responsable d'unité, curateur·trice délégué·e, etc.).
search:
  boost: 1.5
---

# Rôles et droits

Cette page documente les droits associés à chaque rôle dans Infoscience. Deux catégories de rôles existent :

- **Rôles généraux** — attribués globalement à un compte utilisateur·trice.
- **Rôles contextuels** — attribués en relation avec une notice, une collection d'unité ou une collection thématique particulière.

!!! note
    `Y` = autorisé · `N` = non autorisé · `-` = non applicable à ce rôle

---

## Rôles généraux

| Rôle | Description |
|---|---|
| **Anonyme** | Tout visiteur ou toute visiteuse sans compte EPFL |
| **Utilisateur·trice authentifié·e** | Tout·e utilisateur·trice EPFL connecté·e avec ses identifiants EPFL |
| **Déposant·e** | Utilisateur·trice EPFL ayant le droit de déposer du contenu dans au moins une collection |
| **Curateur·trice** | Personnel de la Bibliothèque Infoscience chargé de valider et de gérer les notices |
| **Admin** | Administrateur·trice de la plateforme (équipe Infoscience) |

## Rôles contextuels

| Rôle | Abréviation | Description |
|---|---|---|
| **Déposant·e de la notice** | Dép. notice | La personne qui a déposé une notice spécifique |
| **Auteur·trice de la notice** | Aut. notice | Un·e auteur·trice EPFL lié·e à une notice spécifique via le contrôle d'autorité |
| **Responsable d'unité** | Resp. unité | Approbateur·trice d'une collection d'unité (responsable de labo ou PI) |
| **Responsable d'unité délégué·e** | Resp. unité dél. | Utilisateur·trice délégué·e par un·e responsable d'unité |

---

## Matrice des droits

### Accès et consultation

| Fonction | Anon. | Auth. | Déposan·te | Curateur·trice | Admin | Dép. notice | Aut. notice | Resp. unité | Resp. unité dél. |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Parcourir les structures du dépôt | Y | Y | Y | Y | Y | — | — | — | — |
| Rechercher / parcourir les notices publiques | Y | Y | Y | Y | Y | — | — | — | — |
| Consulter les notices publiques | Y | Y | Y | Y | Y | — | — | — | — |
| Télécharger les fichiers publics | Y | Y | Y | Y | Y | Y | Y | — | — |
| Télécharger les fichiers sous embargo (pendant la période d'embargo) | N | N | N | Y | Y | Y | N | N | N |
| Télécharger les fichiers en accès restreint (EPFL uniquement) | N | Y | Y | Y | Y | Y | Y | Y | Y |
| Accéder aux statistiques d'usage du site | Y | Y | Y | Y | Y | — | — | — | — |
| Accéder aux statistiques des communautés et collections | Y | Y | Y | Y | Y | — | — | — | — |
| Accéder aux statistiques des publications / jeux de données / brevets / revues | Y | Y | Y | Y | Y | — | — | — | — |
| Accéder aux statistiques des profils de personnes | Y | Y | Y | Y | Y | — | — | — | — |
| Accéder aux statistiques des collections d'unités | Y | Y | Y | Y | Y | — | — | — | — |
| Générer un token API personnel | N | Y | Y | Y | Y | — | — | — | — |

### Gestion du profil

| Fonction | Anon. | Auth. | Déposan·te | Curateur·trice | Admin | Dép. notice | Aut. notice | Resp. unité | Resp. unité dél. |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Accéder à son propre fichier d'autorité de personne | — | — | — | — | — | Y | Y | — | — |
| Modifier son propre fichier d'autorité de personne (attributs facultatifs uniquement) | — | — | — | Y | Y | Y | Y | — | — |
| Connecter son compte ORCID à son profil Infoscience | — | — | — | — | — | Y | Y | — | — |
| Pousser ses publications vers son profil ORCID | — | — | — | — | — | Y | Y | — | — |

### Dépôt et soumissions

| Fonction | Anon. | Auth. | Déposan·te | Curateur·trice | Admin | Dép. notice | Aut. notice | Resp. unité | Resp. unité dél. |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Créer une publication / un produit / un brevet | N | N | Y | Y | Y | — | — | — | — |
| Référencer des contributeur·trices EPFL via le fichier d'autorité | N | N | Y | Y | Y | Y | N | N | N |
| Référencer des revues via le fichier d'autorité ou Open Policy Finder | N | N | Y | Y | Y | Y | N | N | N |
| Consulter les soumissions en cours | N | N | N | Y | Y | Y | N | N | N |
| Modifier les soumissions en cours | N | N | N | Y | Y | Y | N | N | N |
| Examiner les soumissions dans les collections avec workflow | N | N | N | Y | Y | N | N | N | N |

### Modification des notices publiées

| Fonction | Anon. | Auth. | Déposan·te | Curateur·trice | Admin | Dép. notice | Aut. notice | Resp. unité | Resp. unité dél. |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Modifier une notice publiée sans créer de nouvelle version * | N | N | N | Y | Y | N | N | N | N |
| Modifier les droits d'accès aux fichiers d'une notice publiée | N | N | N | Y | Y | N | N | N | N |
| Créer une nouvelle version d'une notice publiée ** | N | N | N | Y | Y | Y | N | Y | Y |
| Demander une correction d'une notice publiée (métadonnées ou fichiers) ** | N | N | N | Y | Y | Y | N | Y | Y |
| Supprimer une version existante | N | N | N | Y | Y | N | N | N | N |
| Modifier le·la déposant·e d'une notice | N | N | N | Y | Y | Y | N | N | N |

### Gestion des collections d'unité

| Fonction | Anon. | Auth. | Déposan·te | Curateur·trice | Admin | Dép. notice | Aut. notice | Resp. unité | Resp. unité dél. |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Revendiquer / retirer une notice pour une collection d'unité | N | N | N | Y | Y | N | N | Y | Y |
| Modifier les détails d'une collection d'unité (attributs facultatifs) | N | N | N | Y | Y | N | N | Y | Y |
| Attribuer des rôles de curateur·trice délégué·e pour les collections d'unité *** | N | N | N | N | Y | — | N | Y | N |

---

!!! note "Notes"
    \* La modification directe sans nouvelle version est réservée aux curateur·trices et aux admins — par exemple pour corriger une erreur de métadonnée sur une notice publiée.

    \*\* La création d'une nouvelle version ou d'une correction déclenche un workflow : le·la demandeur·euse de la correction et les curateur·trices sont notifié·es.

    \*\*\* Les rôles de curateur·trice délégué·e pour les collections d'unité ne peuvent être attribués que par un·e admin ou le·la responsable d'unité.

---

[← Retour à À propos d'Infoscience](about.fr.md)
