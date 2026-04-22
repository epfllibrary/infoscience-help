# Infoscience Help — Documentation site

Documentation site for [Infoscience](https://infoscience.epfl.ch), the EPFL institutional repository.

Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and the [mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n) plugin for bilingual EN/FR support. Published via GitHub Actions to GitHub Pages.

---

## Repository structure

```
infoscience-help/
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions — build & deploy
├── docs/
│   ├── index.md                     # Home page (EN)
│   ├── index.fr.md                  # Home page (FR)
│   ├── aar.md                       # Annual Academic Report — EN
│   ├── aar.fr.md                    # Annual Academic Report — FR
│   ├── search-and-consult.md        # Search and consult — EN
│   ├── search-and-consult.fr.md     # Search and consult — FR
│   ├── submit-a-publication.md      # Submit a publication — EN
│   ├── submit-a-publication.fr.md   # Submit a publication — FR
│   ├── use-submission-form.md       # Submission form — EN
│   ├── use-submission-form.fr.md    # Submission form — FR
│   ├── file-naming-formats.md       # File naming and formats — EN
│   ├── file-naming-formats.fr.md    # File naming and formats — FR
│   ├── document-types.md            # Document types — EN
│   ├── document-types.fr.md         # Document types — FR
│   ├── manage-publications.md       # Manage publications — EN
│   ├── manage-publications.fr.md    # Manage publications — FR
│   ├── manage-profile.md            # Manage profile — EN
│   ├── manage-profile.fr.md         # Manage profile — FR
│   ├── manage-lab-unit.md           # Manage lab/unit page — EN
│   ├── manage-lab-unit.fr.md        # Manage lab/unit page — FR
│   ├── publication-lists.md         # Publication lists — EN
│   ├── publication-lists.fr.md      # Publication lists — FR
│   ├── identifiers.md               # Identifiers (DOI, Handle, ISBN) — EN
│   ├── identifiers.fr.md            # Identifiers — FR
│   ├── export-reuse.md              # Export and reuse data (API, OAI) — EN
│   ├── export-reuse.fr.md           # Export and reuse data — FR
│   ├── data-model.md                # Data model and search indexes — EN
│   ├── data-model.fr.md             # Data model and search indexes — FR
│   ├── faq.md                       # FAQ — EN
│   ├── faq.fr.md                    # FAQ — FR
│   └── assets/
│       ├── infoscience-logo.svg     # Site logo
│       ├── infoscience-theme.css    # Custom EPFL theme (red palette)
│       └── images/                  # Page screenshots, organised per page
│           ├── aar/
│           ├── search-and-consult/
│           ├── submit-a-publication/
│           └── ...
├── mkdocs.yml                       # MkDocs configuration
├── requirements.txt                 # Python dependencies
└── README.md
```

Each content page follows the `.md` (English) / `.fr.md` (French) suffix convention required by `mkdocs-static-i18n`.

---

## Local development

**Prerequisites:** Python 3.10+

```bash
# Clone the repository
git clone https://github.com/epfllibrary/infoscience-help.git
cd infoscience-help

# Install dependencies
pip install -r requirements.txt

# Start the local server with live reload
mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser. The site reloads automatically on every file save.

---

## Deployment

The site is built and published automatically on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

**First-time setup** — enable GitHub Pages in your repository:

1. Go to **Settings → Pages**
2. Under *Source*, select **GitHub Actions**
3. Push to `main` — the workflow runs and publishes the site

The published URL will be `https://epfllibrary.github.io/infoscience-help/` (or your custom domain if configured).

### Custom domain (optional)

To use `https://help.infoscience.epfl.ch`:

1. Add a `docs/CNAME` file containing `help-infoscience.epfl.ch`
2. In **Settings → Pages → Custom domain**, enter the domain
3. Ask your IT team to create a CNAME DNS record pointing to `epfllibrary.github.io`
4. GitHub handles TLS automatically

---

## Editing content

### Quick edits via GitHub web interface

Suitable for typo fixes, small text updates, and adding a FAQ entry.

1. Navigate to `docs/` in the repository
2. Open the file to edit (e.g. `faq.md` for English, `faq.fr.md` for French)
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Click **Commit changes** with a short description — the site rebuilds within a few minutes

### Significant changes via Pull Request

Recommended for new pages, structural changes, or content that needs review.

1. Create a branch from `main`
2. Edit or add files locally (or via the GitHub web editor)
3. Open a Pull Request with a description of changes
4. Assign a reviewer
5. Merge after approval — the site rebuilds automatically

---

## Adding a new page

1. Create `docs/my-page.md` (English content)
2. Create `docs/my-page.fr.md` (French content)
3. Add the page to `nav:` in `mkdocs.yml`:
   ```yaml
   nav:
     - Section:
         - My page: my-page.md
   ```
4. Add the French nav label to `nav_translations:` in `mkdocs.yml`:
   ```yaml
   nav_translations:
     My page: Ma page
   ```
5. Add images (if any) in `docs/assets/images/my-page/`

---

## Adding images

Images are stored per page in `docs/assets/images/{page-name}/` and referenced in Markdown as:

```markdown
![Alt text](assets/images/page-name/filename.png)
```

Supported formats: PNG, JPG, SVG. Screenshots should be captured at a consistent width (recommended: 1200px).

---

## Embedding a YouTube video

```markdown
<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video title"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
```

The `.video-wrapper` class (defined in `assets/infoscience-theme.css`) makes the player responsive (16:9).

---

## Markdown reference

### Text formatting

```markdown
**bold**   *italic*   `inline code`

[Link text](https://example.com)
[Internal link](other-page.md)
[Internal link with anchor](other-page.md#section-title)
```

### Headings

```markdown
# Page title (H1 — one per page)
## Section (H2 — appears in table of contents)
### Subsection (H3 — appears in table of contents)
#### Sub-subsection (H4 — not in ToC by default)
```

### Lists

```markdown
- Bullet item
- Another item
    - Nested item

1. Numbered item
2. Another item
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|---|---|---|
| Value    | Value    | Value    |
```

### Admonitions

```markdown
!!! note "Optional title"
    Content of the note.

!!! tip
    A helpful tip.

!!! warning
    Something to watch out for.

!!! info
    Informational content.
```

Collapsible variant (closed by default):

```markdown
??? question "Q1 — Question text"
    Answer content here.
```

### Code blocks

````markdown
```bash
mkdocs serve
```

```python
print("hello")
```
````

---

## i18n conventions

| Rule | Detail |
|---|---|
| File suffix | `.md` = English, `.fr.md` = French |
| Nav labels | Defined once in `nav:` (EN), translated via `nav_translations:` in `mkdocs.yml` |
| Internal links | Use `.md` in EN pages, `.fr.md` in FR pages |
| Images | Shared between EN and FR when identical; separate files in `assets/images/` when screenshots differ by language |

---

## Contact

[infoscience@epfl.ch](mailto:infoscience@epfl.ch)  
EPFL Library — Infoscience Team
