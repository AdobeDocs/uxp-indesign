# PDFExportPreset
PDF export settings for the document object.

## Instance
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the PDFExportPreset, including the name of the PDFExportPreset.
*** 
> *Read Only* 
> 
> Mixed **effectivePDFDestinationProfile** 
>
> Effective destination color profile. Can return: PDFProfileSelector enumerator or String.
*** 
> *Read Only* 
> 
> String **effectiveOCRegistry** 
>
> Effective PDF/X OC Registry.
*** 
> *Read Only* 
> 
> String **effectiveOutputCondition** 
>
> Effective PDF/X output condition.
*** 
> *Read Only* 
> 
> Mixed **effectivePDFXProfile** 
>
> Effective PDF X color profile. Can return: PDFProfileSelector enumerator or String.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the PDFExportPreset (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the PDFExportPreset within its containing object.
*** 
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
*** 
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> PdfMagnificationOptions **pdfMagnification** 
>
> The export PDF magnification options.
*** 
> PageLayoutOptions **pdfPageLayout** 
>
> The export PDF page layout.
*** 
> Boolean **openInFullScreen** 
>
> Open PDF in full screen mode.
*** 
> PdfDisplayTitleOptions **pdfDisplayTitle** 
>
> The export PDF display title.
*** 
> String **defaultDocumentLanguage** 
>
> Sets the default document language in the exported PDF. The correct ISO code of the language must be provided.
*** 
> Boolean **exportAsSinglePages** 
>
> Export each page or spread as a separate PDF file.
*** 
> String **singlePagesPDFSuffix** 
>
> Suffix to be used at the end of each file when pages are exported as separate PDF files.
*** 
> String **name** 
>
> The name of the PDFExportPreset.
*** 
> Number **subsetFontsBelow** 
>
> Sets the threshold for embedding complete fonts based on how many of the fonts' characters are used in the document. If the percentage of characters used in the document for any given font exceeds the specified value, the font is completely embedded; otherwise, the font is subsetted. (Range: 0 to 100) Notes: Embedding complete fonts increases file size. To completely embed all fonts, use 0 (zero).
*** 
> PDFColorSpace **pdfColorSpace** 
>
> The color space to use to represent color information in the exported PDF document.
*** 
> ICCProfiles **includeICCProfiles** 
>
> The ICC Profiles to include in the exported PDF document. Can also accept: Boolean.
*** 
> Boolean **omitEPS** 
>
> If true, replaces EPS images with OPI links.
*** 
> Boolean **omitPDF** 
>
> If true, replaces PDF images with OPI links.
*** 
> Boolean **omitBitmaps** 
>
> If true, replaces bitmap images with OPI links.
*** 
> Boolean **cropImagesToFrames** 
>
> If true, image data that falls outside the visible portion of an image's frame is not exported to the PDF document.
*** 
> Boolean **generateThumbnails** 
>
> If true, generates thumbnail images for each page or spread.
*** 
> Boolean **optimizePDF** 
>
> If true, optimizes the exported PDF document for faster viewing in a web browser. Note: Compresses text and line art, regardless of specified compression settings.
*** 
> Boolean **includeStructure** 
>
> If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher.
*** 
> AcrobatCompatibility **acrobatCompatibility** 
>
> The exported PDF document's Acrobat compatibility.
*** 
> Boolean **simulateOverprint** 
>
> If true, simulates the effects of overprinting spot inks with different neutral density values by converting spot colors to process colors for printing. Note: Not valid when the color output mode is defined to leave color profiles unchanged.
*** 
> Mixed **pdfDestinationProfile** 
>
> The gamut of the final RGB or CMYK device. Can return: PDFProfileSelector enumerator or String.
*** 
> Mixed **pdfXProfile** 
>
> The PDF X color profile to use for the PDF document. . Can return: PDFProfileSelector enumerator or String.
*** 
> Boolean **includeHyperlinks** 
>
> If true, includes hyperlinks when exporting the document.
*** 
> Boolean **includeBookmarks** 
>
> If true, displays bookmarks and table of contents entries as links in the bookmarks pane in the PDF document. If false, no bookmarks are exported.
*** 
> Boolean **exportNonprintingObjects** 
>
> If true, makes non-printing objects visible in the PDF document.
*** 
> Boolean **exportGuidesAndGrids** 
>
> If true, includes visible guides and baseline grids in the PDF document.
*** 
> Boolean **exportLayers** 
>
> If true, saves each layer as an Acrobat layer within the PDF document.
*** 
> PDFXStandards **standardsCompliance** 
>
> The PDF/X standards compliance to test against.
*** 
> String **outputCondition** 
>
> The name of the intended printing condition. Valid only when a PDF/X compliance standard has been defined for the document. Not valid when PDF/X-3 is the compliance standard or PDF export preset. For information on compliance standards, see standards compliance and PDF X standards.
*** 
> Sampling **colorBitmapSampling** 
>
> The sampling option to apply to color bitmap images in the PDF document.
*** 
> Number **colorBitmapSamplingDPI** 
>
> The ppi of the resampled image. (Range: 9 to 2400)
*** 
> BitmapCompression **colorBitmapCompression** 
>
> The amount of bitmap compression to use.
*** 
> CompressionQuality **colorBitmapQuality** 
>
> The compression option to apply to color images.
*** 
> Sampling **grayscaleBitmapSampling** 
>
> The sampling option to apply to grayscale bitmap images.
*** 
> Number **grayscaleBitmapSamplingDPI** 
>
> The ppi of the resampled image. (Range: 9 to 2400)
*** 
> BitmapCompression **grayscaleBitmapCompression** 
>
> The bitmap compression option to apply to grayscale bitmap images.
*** 
> CompressionQuality **grayscaleBitmapQuality** 
>
> The compression option to apply to grayscale bitmap images.
*** 
> Sampling **monochromeBitmapSampling** 
>
> The sampling option to apply to monochrome bitmap images.
*** 
> Number **monochromeBitmapSamplingDPI** 
>
> The ppi of the resampled image. (Range: 9 to 2400)
*** 
> MonoBitmapCompression **monochromeBitmapCompression** 
>
> The bitmap compression option to apply to monochrome bitmap images.
*** 
> Boolean **compressTextAndLineArt** 
>
> If true, compresses text and line art using ZIP compression.
*** 
> Number **thresholdToCompressColor** 
>
> The minimum dpi at which color compression is applied. (Range: 1 to 10 times the value specified for color bitmap sampling DPI.)
*** 
> Number **thresholdToCompressGray** 
>
> The minimum dpi at which grayscale compression is applied. (Range: 1 to 10 times the value specified for grayscale bitmap sampling DPI.)
*** 
> Number **thresholdToCompressMonochrome** 
>
> The minimum dpi at which monochrome compression is applied. (Range: 1 to 10 times the value specified for monochrome bitmap sampling DPI.)
*** 
> Number **colorTileSize** 
>
> The tile size for color images. Valid only when color bitmap compression is JPEG 2000. (Range: 128 to 2048)
*** 
> Number **grayTileSize** 
>
> The tile size for grayscale images. Valid only when grayscale bitmap compression is JPEG 2000. (Range: 128 to 2048)
*** 
> PDFCompressionType **compressionType** 
>
> The objects to compress in the PDF document.
*** 
> Boolean **exportReaderSpreads** 
>
> If true, each spread in the exported document is combined into a single page that has spread's original width.
*** 
> Measurement Unit (Number or String)=any **pageMarksOffset** 
>
> The offset from the edge of the page for page marks.
*** 
> Boolean **cropMarks** 
>
> Prints crop marks that define where the page should be trimmed.
*** 
> Boolean **pageInformationMarks** 
>
> If true, prints the filename, page number, current date and time, and color separation name.
*** 
> Boolean **bleedMarks** 
>
> If true, print bleed marks.
*** 
> Boolean **colorBars** 
>
> If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments.
*** 
> Boolean **registrationMarks** 
>
> If true, prints small targets outside the page area for aligning color separations.
*** 
> PDFMarkWeight **printerMarkWeight** 
>
> The stroke weight for printer's marks.
*** 
> Measurement Unit (Number or String)=any **bleedTop** 
>
> The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedInside** 
>
> The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedBottom** 
>
> The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
*** 
> Measurement Unit (Number or String)=any **bleedOutside** 
>
> The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
*** 
> Mixed **pdfMarkType** 
>
> The type of printer marks, either an enum value or the name of a custom marks file. Can return: MarkTypes enumerator or String.
*** 
> Boolean **useDocumentBleedWithPDF** 
>
> If true, uses the document's bleed settings in the PDF document.
*** 
> Boolean **includeSlugWithPDF** 
>
> If true, includes the document's slug area in the PDF document.
*** 
> Boolean **ignoreSpreadOverrides** 
>
> If true, ignores flattener spread overrides.
*** 
> FlattenerPreset **appliedFlattenerPreset** 
>
> The transparency flattener preset to use.
*** 
> String **outputConditionName** 
>
> The name of the output condition. Valid only when a PDF/X standard has been defined for the document.
*** 
> String **ocRegistry** 
>
> The web address for the output condition registry. Not valid when PDF/X-3 is the compliance standard or PDF export preset.
*** 
> InteractiveElementsOptions **interactiveElementsOption** 
>
> How to draw interactive elements.
*** 
> ExportLayerOptions **exportWhichLayers** 
>
> Which layers to export.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PDFExportPreset.
*** 
> PDFExportPreset **duplicate**()
> 
> Duplicates the PDFExportPreset.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PDFExportPreset.
*** 
> PDFExportPreset **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.
*** 
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

*** 
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


