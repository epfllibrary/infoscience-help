---
description: >-
  Best practices for file naming and format selection when depositing in Infoscience: durable formats, versioning, and naming conventions.
---

# File naming and formats best practices

It is essential for file submitters to prioritize durable formats to avoid loss of readability. They are also encouraged to carefully **name and version their files**, as this affects their identification and reuse.

---

## File formats

Prioritize file formats that:

- Are **commonly used** and **high quality**;
- **Can be read by multiple software applications**;
- Are **not proprietary** (free and open-source software);
- Are **open and well-documented**;
- Are **uncompressed and unencrypted**.

| **File type** | **High level of confidence** | **Medium level of confidence** | **Low level of confidence** |
|---|---|---|---|
| **Text document** | PDF/A-1 – ISO 19005-1 (.pdf)<br>Plain Text UTF-8 (.txt)<br>XML with included schema (.xml) | HTML (.htm, .html)<br>LaTeX (.latex, .tex, .ltx)<br>Word 2007+ (.docx)<br>PDF with embedded fonts (.pdf)<br>Rich Text Format 1.x (.rtf)<br>SGML (.sgml) | Word 2003 or older (.doc)<br>PDF encrypted (.pdf)<br>WordPerfect (.wpd) |
| **Spreadsheet** | CSV / TSV (.csv, .tsv, .txt)<br>SIARD (.siard) | Excel 2007+ (.xlsx)<br>OpenDocument (.ods)<br>XML (.xml) | Excel 2003 or older (.xls) |
| **Presentation** | PDF/A-1 (.pdf) | PowerPoint 2007+ (.ppt, .pptx)<br>OpenDocument Presentation (.odp) | PDF generic (.pdf)<br>PowerPoint (.ppt)<br>Keynote (.key) |
| **Image** | PNG 24bit (.png)<br>TIFF uncompressed (.tif, .tiff) | DNG (.dng)<br>GIF (.gif)<br>JPEG2000 lossless (.jp2)<br>JPEG/JFIF (.jpg)<br>PNG 8bit (.png)<br>TIFF compressed (.tif, .tiff) | JPEG2000 lossy (.jp2)<br>Photoshop (.psd)<br>RAW formats (.raw, etc) |
| **Audio** | AIFF uncompressed (.aif, .aiff)<br>FLAC (.flac)<br>WAV uncompressed (.wav) | AAC (.mp4)<br>ALAC (.m4a)<br>MP3 (.mp3)<br>SUN audio uncompressed (.au, .snd) | AIFC compressed (.aifc)<br>RealAudio (.ra, .rm)<br>WAV compressed (.wav)<br>WMA (.wma) |
| **Video** | AVI uncompressed (.avi)<br>QuickTime uncompressed (.mov) | MXF uncompressed (.mxf)<br>Motion JPEG2000 (.jp2)<br>MPEG-1, MPEG-2 (.mp1, .mp2)<br>MPEG-4 H.264 (.mp4) | RealVideo (.rv, .rm)<br>QuickTime compressed (.mov)<br>WMV (.wmv) |
| **CAD** | PDF/E – ISO 24517-1:2008 (.pdf) | AutoCAD (.dwg)<br>DXF (.dxf) | N/A |
| **Archives** | ZIP (.zip)<br>TAR (.tar)<br>GZIP (.gz)<br>RAR (.rar) | N/A | N/A |
| **Data** | JSON (.json)<br>XML (.xml)<br>SQL (.sql) | N/A | N/A |
| **Source code** | Code files (.py, .java, .cpp, .html, .css, .js, etc.) | N/A | N/A |

---

## File naming

**Please follow these rules for naming the files** you upload to Infoscience:

- **Choose a meaningful name** for your file.
- **Avoid overly long names** (max. 32 characters, including the extension).
- **Do not use accented characters or special characters** (such as space, #, @, &, €, +, etc.).
- **Use an underscore** `_` **between terms if needed**.
- **Avoid conjunctions** (and, on, of, about, etc.) **and unnecessary articles** (the, a, an, etc.).
- **Avoid abbreviations** unless they are well-known at EPFL.
- **Do not include the author's name in the title**. This information is already present in the metadata of the record.

**Examples:**

![File naming examples — good and bad practice](assets/images/file-naming-formats/Capture-decran-2024-07-08-143831.png)

---

## Files versions

**Infoscience allows you to upload multiple editorial versions of the same document to a single record** using the "create a new version" option (see [Submit a publication](submit-a-publication.md#update-a-published-record-create-a-new-version)).

**The version indicates the status of the document** based on its progress in the publication cycle.

| **Version** | **Definition** |
|---|---|
| **Preprint or submitted version** | The version submitted before peer review, not yet accepted. |
| **Postprint or accepted version** | The version accepted after peer review but before publisher formatting. |
| **Published version** | The final version accepted by a journal, peer-reviewed, corrected by the author, and formatted by the journal's editor for publication. |

!!! tip
    **If the publisher's policy allows, upload the published version**, with any embargo that may be imposed. **It is always permissible to upload preprints and postprints**.

---

[Back to Help home](index.md)
