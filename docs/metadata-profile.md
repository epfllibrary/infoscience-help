---
search:
  boost: 0.5
social:
  cards: false
description: >-
  Interactive reference of all Infoscience metadata fields: entity, label, input type, authority control, controlled vocabularies, and virtual metadata.
---

# Metadata Application Profile

The Infoscience Metadata Application Profile (MAP) is an exhaustive, filterable reference of all metadata fields defined in the Infoscience configuration. It covers two levels:

- **Item level** — fields collected in submission forms, applied to the record itself.
- **File level** — fields collected at upload time, applied to each deposited file (bitstream).

Virtual metadata fields (`cris.virtual.*`), computed at runtime from linked CRIS entities, are listed in a dedicated table at the bottom of this page.

## How to use this explorer

Select an entity using the coloured buttons, then use the filters to narrow by collection, field properties (required / optional / type-bound), or metadata level. Click **▼** on any `group` or `qualified value` field to expand its sub-fields inline. Hover over a metadata key to read its description. Click a vocabulary badge to view the full list of controlled values.

## Metadata namespaces

| Prefix | Standard | Scope |
|---|---|---|
| `dc.*` | Dublin Core | Core bibliographic fields |
| `dcterms.*` | Dublin Core Terms | Extended DC terms |
| `oaire.*` | OpenAIRE | Citation and version metadata |
| `oairecerif.*` | OpenAIRE CERIF | CRIS entity relationships |
| `datacite.*` | DataCite | Research data identifiers and rights |
| `person.*` | schema.org/Person | Person profile fields |
| `organization.*` | schema.org/Organization | Organisational unit fields |
| `cris.*` / `crisou.*` / `crispj.*` / `crisfund.*` / `crisevent.*` | DSpace-CRIS | CRIS-specific fields per entity type |
| `epfl.*` | EPFL | Institution-specific extensions |
| `ctb.*` | EPFL/CTB | Bitstream and contribution fields |
| `cris.virtual.*` | DSpace-CRIS | Computed virtual metadata (not stored) |

!!! info "Properties"
    **Required** — the field must be filled to submit the form. **Repeatable** — multiple values are accepted. **Type-bound** — the field is only shown for specific document sub-types; a field with no type-bind applies to all sub-types of the entity.

!!! info "Authority"
    Authority-controlled fields store a UUID (internal CRIS entity) or a persistent identifier (ORCID, ROR, OpenAIRE, Sherpa) rather than free text. Click ▼ on a `group` field to see the individual sub-fields and their own authority bindings.

!!! info "Virtual metadata"
    Fields prefixed `cris.virtual.*` are filled in automatically based on information already recorded in linked researcher or unit profiles. They cannot be edited directly and appear in a separate table at the bottom of this page.

## Metadata List

<div id="infoscience-map" data-lang="en"></div>
