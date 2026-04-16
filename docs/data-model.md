# Data model Infoscience

The Infoscience data model describes all entities, metadata fields, and their relationships in the repository.

Full interactive documentation is available at:

[epfllibrary.github.io/infoscience-map](https://epfllibrary.github.io/infoscience-map/){ .md-button .md-button--primary }

---

## Overview

Infoscience is built on **DSpace-CRIS**, combining the DSpace institutional repository with CRIS (Current Research Information System) capabilities. The data model covers:

- **Scholarly works**: publications, datasets, patents
- **People**: researcher profiles, ORCID links, name variations
- **Units**: laboratories, research centers, administrative units
- **Journals**: journal metadata and ISSN identifiers
- **Events**: conferences, workshops, symposiums

---

## Metadata standards

Infoscience metadata aligns with:

- **Dublin Core** and **Qualified DC** for basic bibliographic description
- **DataCite** schema for datasets and DOI registration
- **OpenAIRE Guidelines** for interoperability with European research infrastructure
- **COAR Resource Types vocabulary** for document type classification
- **MARC** for library catalog interoperability

---

## Metadata license

All Infoscience metadata are licensed under **[Creative Commons CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)** — freely usable, modifiable, and redistributable without prior consent.

---

## Search indexes

A full list of search indexes (fields usable in queries) is documented in the interactive data model map at [epfllibrary.github.io/infoscience-map](https://epfllibrary.github.io/infoscience-map/).

### Identifiers

| Index | Description | Example |
|---|---|---|
| `search.resourceid` | Search by record UUID | `search.resourceid:a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
| `cris.legacyId` | Search by former Infoscience identifier | `cris.legacyId:175201` |
| `itemidentifier` | Search by identifier: DOI, arXiv, WoS, Scopus… | `itemidentifier:(*arXiv.2306.09281)` |
| `doi` | Search by DOI only | `doi:(10.1002/anie.202414612)` |
| `orcid` | Search by ORCID identifier | `orcid:0000-0001-2345-6789` |

### Authors and people

| Index | Description | Example |
|---|---|---|
| `author` | Search by author name | `author:(Martin, Sophie)` or `author:(Martin, S*)` |
| `author_authority` | Search by author using profile UUID | `author_authority:f9e8d7c6-b5a4-3210-fedc-ba9876543210` |
| `author_editor` | Search by author or scientific editor | `author_editor:(Martin, Sophie)` |
| `author_editor_authority` | Search by author or scientific editor using profile UUID | `author_editor_authority:f9e8d7c6-b5a4-3210-fedc-ba9876543210` |
| `submitter_keyword` | Search by submitter | `submitter_keyword:(*dupont*)` |

### Document types

| Index | Description | Example |
|---|---|---|
| `types` | Search by document type using the display value | `types:(conference paper)` |
| `types_authority` | Search by document type using the COAR authority identifier | `types_authority:("article-coar-types:c_2df8fbb1")` or `types_authority:(*c_2df8fbb1)` |

### Dates

| Index | Description | Example |
|---|---|---|
| `dateIssued` | Search by publication date (format YYYY-MM-DD) | `dateIssued:(2024-06-12)` or `dateIssued:(2024-06-*)` |
| `dateIssued.year` | Search by publication year | `dateIssued.year:(2009)` |

### Units and affiliations

| Index | Description | Example |
|---|---|---|
| `unitOrLab` | Search by unit or laboratory acronym | `unitOrLab:("TRANSP-OR")` |
| `organizationHierarchy` | Search by affiliation — includes full hierarchy: faculty > institute > lab | `organizationHierarchy:("SPC")` |
| `epfl.writtenAt` | Filter by publications produced at EPFL or not | `epfl.writtenAt:EPFL` or `epfl.writtenAt:OTHER` |

### Titles, content and subjects

| Index | Description | Example |
|---|---|---|
| `title` | Search in title | `title:(artificial intelligence)` |
| `abstract` | Search in abstract | `abstract:(artificial intelligence)` |
| `subject` | Search by subject or author keyword | `subject:(LLM)` |
| `container` | Search by book, proceedings or journal title in which the paper appears | `container:(*IEEE proceedings*)` |
| `journal` | Search by journal title | `journal:(Physical Review B)` |
| `journal_authority` | Search by journal using its Infoscience UUID | `journal_authority:c3d4e5f6-a7b8-9012-3456-789abcdef012` |
| `publisher` | Search by publisher | `publisher:(*springer*)` |

### Access, version and rights

| Index | Description | Example |
|---|---|---|
| `oaire.version` | Filter by publication version | `oaire.version(*c_970fb48d4fbd8a85)` = Publisher version<br>`oaire.version(*c_ab4af688f83e57aa)` = Accepted Manuscript<br>`oaire.version(*c_71e4c1898caa6e32)` = Submitted version |
| `datacite.rights` | Filter by access type | `datacite.rights:(openaccess)` or `datacite.rights:(restricted)` or `datacite.rights:(metadata only)` |
| `epfl.peerreviewed` | Filter by peer-reviewed publications | `epfl.peerreviewed:REVIEWED` |

### Funding

| Index | Description | Example |
|---|---|---|
| `fundername` | Search by funder | `fundername:(SNSF)` |

### URL parameters

| Parameter | Description | Example |
|---|---|---|
| `query` | Main search parameter | `&query=title:(artificial intelligence)` |
| `configuration` | Scope the search to a specific configuration | `&configuration=researchoutputs` (publications, patents, products) |
| `scope` | Scope the search to a specific collection, person or unit | `&scope=1a71fba2-2fc5-4c02-9447-f292e25ce6c1` |
| `f.{index}` | Additional filters on results | `&f.unitOrLab=crpp,equals` |
| `spc.rpp` | Number of results per page | `&spc.rpp=10`, `&spc.rpp=60`, `&spc.rpp=100` |
| `spc.sf` and `spc.sd` | Sort field and sort direction | `spc.sf=dc.date.issued&spc.sd=DESC` (by date)<br>`spc.sf=metric.scopusCitation&spc.sd=DESC` (by citations)<br>`spc.sf=score&spc.sd=DESC` (by relevance) |
| `spc.page` | Pagination | `&spc.page=1` |

### Boolean operators and syntax

| Operator | Description | Example |
|---|---|---|
| `AND` | Combine multiple criteria (strict) | `author:(bernard) AND dateIssued.year:[2008 TO 2010]` |
| `OR` | Extend search with alternatives | `(author:(bernard) OR author:(Martin))` |
| `NOT` or `-` | Exclude results | `-types:(conference poster)` |
| `" "` (quotes) | Exact phrase search | `"Durand, Claire"`, `"Leclerc, Marc"` |
| `[X TO Y]` | Range search | `dateIssued.year:[2020 TO 2024]` |
| `*` (wildcard) | Partial match | `author:(Martin, S*)` |

---

[Back to Help home](index.md)
