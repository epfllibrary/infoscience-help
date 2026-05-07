---
description: >-
  Complete reference of Infoscience user roles and associated rights: general roles
  (anonymous, authenticated, submitter, curator, admin) and context-specific roles
  (record submitter, unit head, delegated curator, etc.).
search:
  boost: 1.5
---

# Roles and rights

This page documents the rights associated with each role in Infoscience. Two categories of roles exist:

- **General roles** — assigned globally to a user account.
- **Context-specific roles** — assigned in relation to a particular record, unit collection, or thematic collection.

!!! note
    `Y` = allowed · `N` = not allowed · `-` = not applicable to this role

---

## General roles

| Role | Description |
|---|---|
| **Anonymous** | Any visitor without an EPFL account |
| **Authenticated user** | Any EPFL user logged in with their EPFL credentials |
| **Submitter** | EPFL user with the right to deposit content in at least one collection |
| **Curator** | Infoscience Library staff responsible for validating and managing records |
| **Admin** | Platform administrator (Infoscience team) |

## Context-specific roles

| Role | Abbreviation | Description |
|---|---|---|
| **Submitter of the record** | Rec. submitter | The person who deposited a specific record |
| **Author of the record** | Rec. author | An EPFL author linked to a specific record via authority control |
| **Head of unit** | Unit head | Manager for a unit collection (lab head or PI) |
| **Delegated head of unit** | Del. unit head | User delegated by a head of unit |

---

## Rights matrix

### Access and reading

| Function | Anon. | Auth. | Submitter | Curator | Admin | Rec. submitter | Rec. author | Unit head | Del. unit head |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Browse repository structures | Y | Y | Y | Y | Y | — | — | — | — |
| Search / browse public records | Y | Y | Y | Y | Y | — | — | — | — |
| See public records | Y | Y | Y | Y | Y | — | — | — | — |
| Download public files | Y | Y | Y | Y | Y | Y | Y | — | — |
| Download embargoed files (during embargo period) | N | N | N | Y | Y | Y | N | N | N |
| Download restricted files (EPFL-only) | N | Y | Y | Y | Y | Y | Y | Y | Y |
| Access site usage statistics | Y | Y | Y | Y | Y | — | — | — | — |
| Access communities and collections usage statistics | Y | Y | Y | Y | Y | — | — | — | — |
| Access publication / dataset / patent / journal statistics | Y | Y | Y | Y | Y | — | — | — | — |
| Access person usage statistics | Y | Y | Y | Y | Y | — | — | — | — |
| Access unit collection usage statistics | Y | Y | Y | Y | Y | — | — | — | — |
| Generate a personal API token | N | Y | Y | Y | Y | — | — | — | — |

### Profile management

| Function | Anon. | Auth. | Submitter | Curator | Admin | Rec. submitter | Rec. author | Unit head | Del. unit head |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Access own person authority file | — | — | — | — | — | Y | Y | — | — |
| Edit own person authority file (optional attributes only) | — | — | — | Y | Y | Y | Y | — | — |
| Connect own ORCID account to Infoscience profile | — | — | — | — | — | Y | Y | — | — |
| Push publications to own ORCID record | — | — | — | — | — | Y | Y | — | — |

### Depositing and submissions

| Function | Anon. | Auth. | Submitter | Curator | Admin | Rec. submitter | Rec. author | Unit head | Del. unit head |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Create a publication / product / patent | N | N | Y | Y | Y | — | — | — | — |
| Reference EPFL contributors via authority file | N | N | Y | Y | Y | Y | N | N | N |
| Reference journals via authority file or Open Policy Finder | N | N | Y | Y | Y | Y | N | N | N |
| View ongoing submissions | N | N | N | Y | Y | Y | N | N | N |
| Edit ongoing submissions | N | N | N | Y | Y | Y | N | N | N |
| Review submissions in collections with workflow | N | N | N | Y | Y | N | N | N | N |

### Editing published records

| Function | Anon. | Auth. | Submitter | Curator | Admin | Rec. submitter | Rec. author | Unit head | Del. unit head |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Edit a published record without creating a new version * | N | N | N | Y | Y | N | N | N | N |
| Change file permissions for published records | N | N | N | Y | Y | N | N | N | N |
| Create a new version of a record ** | N | N | N | Y | Y | Y | N | Y | Y |
| Request a correction to a published record (metadata or files) ** | N | N | N | Y | Y | Y | N | Y | Y |
| Delete an existing version | N | N | N | Y | Y | N | N | N | N |
| Change the submitter of a record | N | N | N | Y | Y | Y | N | N | N |

### Unit collection management

| Function | Anon. | Auth. | Submitter | Curator | Admin | Rec. submitter | Rec. author | Unit head | Del. unit head |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Claim / unclaim a record for a unit collection | N | N | N | Y | Y | N | N | Y | Y |
| Edit unit collection details (optional attributes) | N | N | N | Y | Y | N | N | Y | Y |
| Assign delegated curator roles for unit collections *** | N | N | N | N | Y | — | N | Y | N |

---

!!! note "Notes"
    \* Direct editing without a new version is reserved for curators and admins — for example, to fix a metadata error on a published record.

    \*\* Creating a new version or a correction request triggers a workflow: the correction requester and the curators are notified.

    \*\*\* Delegated curator roles for unit collections can only be assigned by an admin or the unit head.

---

[← Back to About Infoscience](about.md)
