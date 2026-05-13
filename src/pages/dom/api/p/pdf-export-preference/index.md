# PDFExportPreference
PDF export settings for the application object.

## Instance
> *Read Only* 
> 
> Mixed **effectivePDFDestinationProfile** 
>
> Effective destination color profile. Can return: PDFProfileSelector enumerator or String.
<HorizontalLine />
> *Read Only* 
> 
> String **effectiveOCRegistry** 
>
> Effective PDF/X OC Registry.
<HorizontalLine />
> *Read Only* 
> 
> String **effectiveOutputCondition** 
>
> Effective PDF/X output condition.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **effectivePDFXProfile** 
>
> Effective PDF X color profile. Can return: PDFProfileSelector enumerator or String.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the PDFExportPreference (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
<HorizontalLine />
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
<HorizontalLine />
> PdfMagnificationOptions **pdfMagnification** 
>
> The export PDF magnification options.
<HorizontalLine />
> PageLayoutOptions **pdfPageLayout** 
>
> The export PDF page layout.
<HorizontalLine />
> Boolean **openInFullScreen** 
>
> Open PDF in full screen mode.
<HorizontalLine />
> PdfDisplayTitleOptions **pdfDisplayTitle** 
>
> The export PDF display title.
<HorizontalLine />
> String **defaultDocumentLanguage** 
>
> Sets the default document language in the exported PDF. The correct ISO code of the language must be provided.
<HorizontalLine />
> Boolean **exportAsSinglePages** 
>
> Export each page or spread as a separate PDF file.
<HorizontalLine />
> String **singlePagesPDFSuffix** 
>
> Suffix to be used at the end of each file when pages are exported as separate PDF files.
<HorizontalLine />
> Mixed **pageRange** 
>
> The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
<HorizontalLine />
> Boolean **useSecurity** 
>
> If true, activates security controls for the PDF document.
<HorizontalLine />
> String **openDocumentPassword** 
>
> The password to enter when opening the PDF document. Valid only when use security is true. Note: A script can set but not get this value.
<HorizontalLine />
> String **changeSecurityPassword** 
>
> Changes the open document password to the specified string. Valid only when use security is true. Note: A script can set but not get this value.
<HorizontalLine />
> Boolean **disallowPrinting** 
>
> If true, users cannot print the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowChanging** 
>
> If true, users cannot fill in forms, sign, extract pages, or add comments in the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowCopying** 
>
> If true, users cannot copy and paste text, images, or other content from the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowNotes** 
>
> If true, users cannot add or change notes, edit text, or fill in form fields in the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowFormFillIn** 
>
> If true, users cannot change form fields in the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowExtractionForAccessibility** 
>
> If true, users cannot extract content from the PDF document using software tools for the visually impaired. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowDocumentAssembly** 
>
> If true, users cannot insert, delete, or rotate pages in the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowHiResPrinting** 
>
> If true, users cannot print high-resolution copies of the PDF document. Valid only when use security is true.
<HorizontalLine />
> Boolean **disallowPlaintextMetadata** 
>
> If true and acrobat compatibility is Acrobat 6 or higher, storage systems and search engines cannot access metadata stored in the PDF document. If true and acrobat compatibility is acrobat 5 or higher, users cannot copy and extract content from the document. Valid only when use security is true.
<HorizontalLine />
> Boolean **viewPDF** 
>
> If true, automatically opens the PDF file after exporting.
<HorizontalLine />
> Number **subsetFontsBelow** 
>
> Sets the threshold for embedding complete fonts based on how many of the fonts' characters are used in the document. If the percentage of characters used in the document for any given font exceeds the specified value, the font is completely embedded; otherwise, the font is subsetted. (Range: 0 to 100) Notes: Embedding complete fonts increases file size. To completely embed all fonts, use 0 (zero).
<HorizontalLine />
> PDFColorSpace **pdfColorSpace** 
>
> The color space to use to represent color information in the exported PDF document.
<HorizontalLine />
> ICCProfiles **includeICCProfiles** 
>
> The ICC Profiles to include in the exported PDF document. Can also accept: Boolean.
<HorizontalLine />
> Boolean **omitEPS** 
>
> If true, replaces EPS images with OPI links.
<HorizontalLine />
> Boolean **omitPDF** 
>
> If true, replaces PDF images with OPI links.
<HorizontalLine />
> Boolean **omitBitmaps** 
>
> If true, replaces bitmap images with OPI links.
<HorizontalLine />
> Boolean **cropImagesToFrames** 
>
> If true, image data that falls outside the visible portion of an image's frame is not exported to the PDF document.
<HorizontalLine />
> Boolean **generateThumbnails** 
>
> If true, generates thumbnail images for each page or spread.
<HorizontalLine />
> Boolean **optimizePDF** 
>
> If true, optimizes the exported PDF document for faster viewing in a web browser. Note: Compresses text and line art, regardless of specified compression settings.
<HorizontalLine />
> Boolean **includeStructure** 
>
> If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher.
<HorizontalLine />
> AcrobatCompatibility **acrobatCompatibility** 
>
> The exported PDF document's Acrobat compatibility.
<HorizontalLine />
> Boolean **simulateOverprint** 
>
> If true, simulates the effects of overprinting spot inks with different neutral density values by converting spot colors to process colors for printing. Note: Not valid when the color output mode is defined to leave color profiles unchanged.
<HorizontalLine />
> Mixed **pdfDestinationProfile** 
>
> The gamut of the final RGB or CMYK device. Can return: PDFProfileSelector enumerator or String.
<HorizontalLine />
> Mixed **pdfXProfile** 
>
> The PDF X color profile to use for the PDF document. . Can return: PDFProfileSelector enumerator or String.
<HorizontalLine />
> Boolean **includeHyperlinks** 
>
> If true, includes hyperlinks when exporting the document.
<HorizontalLine />
> Boolean **includeBookmarks** 
>
> If true, displays bookmarks and table of contents entries as links in the bookmarks pane in the PDF document. If false, no bookmarks are exported.
<HorizontalLine />
> Boolean **exportNonprintingObjects** 
>
> If true, makes non-printing objects visible in the PDF document.
<HorizontalLine />
> Boolean **exportGuidesAndGrids** 
>
> If true, includes visible guides and baseline grids in the PDF document.
<HorizontalLine />
> Boolean **exportLayers** 
>
> If true, saves each layer as an Acrobat layer within the PDF document.
<HorizontalLine />
> PDFXStandards **standardsCompliance** 
>
> The PDF/X standards compliance to test against.
<HorizontalLine />
> String **outputCondition** 
>
> The name of the intended printing condition. Valid only when a PDF/X compliance standard has been defined for the document. Not valid when PDF/X-3 is the compliance standard or PDF export preset. For information on compliance standards, see standards compliance and PDF X standards.
<HorizontalLine />
> Sampling **colorBitmapSampling** 
>
> The sampling option to apply to color bitmap images in the PDF document.
<HorizontalLine />
> Number **colorBitmapSamplingDPI** 
>
> The ppi of the resampled image. (Range: 9 to 2400)
<HorizontalLine />
> BitmapCompression **colorBitmapCompression** 
>
> The amount of bitmap compression to use.
<HorizontalLine />
> CompressionQuality **colorBitmapQuality** 
>
> The compression option to apply to color images.
<HorizontalLine />
> Sampling **grayscaleBitmapSampling** 
>
> The sampling option to apply to grayscale bitmap images.
<HorizontalLine />
> Number **grayscaleBitmapSamplingDPI** 
>
> The ppi of the resampled image. (Range: 9 to 2400)
<HorizontalLine />
> BitmapCompression **grayscaleBitmapCompression** 
>
> The bitmap compression option to apply to grayscale bitmap images.
<HorizontalLine />
> CompressionQuality **grayscaleBitmapQuality** 
>
> The compression option to apply to grayscale bitmap images.
<HorizontalLine />
> Sampling **monochromeBitmapSampling** 
>
> The sampling option to apply to monochrome bitmap images.
<HorizontalLine />
> Number **monochromeBitmapSamplingDPI** 
>
> The ppi of the resampled image. (Range: 9 to 2400)
<HorizontalLine />
> MonoBitmapCompression **monochromeBitmapCompression** 
>
> The bitmap compression option to apply to monochrome bitmap images.
<HorizontalLine />
> Boolean **compressTextAndLineArt** 
>
> If true, compresses text and line art using ZIP compression.
<HorizontalLine />
> Number **thresholdToCompressColor** 
>
> The minimum dpi at which color compression is applied. (Range: 1 to 10 times the value specified for color bitmap sampling DPI.)
<HorizontalLine />
> Number **thresholdToCompressGray** 
>
> The minimum dpi at which grayscale compression is applied. (Range: 1 to 10 times the value specified for grayscale bitmap sampling DPI.)
<HorizontalLine />
> Number **thresholdToCompressMonochrome** 
>
> The minimum dpi at which monochrome compression is applied. (Range: 1 to 10 times the value specified for monochrome bitmap sampling DPI.)
<HorizontalLine />
> Number **colorTileSize** 
>
> The tile size for color images. Valid only when color bitmap compression is JPEG 2000. (Range: 128 to 2048)
<HorizontalLine />
> Number **grayTileSize** 
>
> The tile size for grayscale images. Valid only when grayscale bitmap compression is JPEG 2000. (Range: 128 to 2048)
<HorizontalLine />
> PDFCompressionType **compressionType** 
>
> The objects to compress in the PDF document.
<HorizontalLine />
> Boolean **exportReaderSpreads** 
>
> If true, each spread in the exported document is combined into a single page that has spread's original width.
<HorizontalLine />
> Measurement Unit (Number or String)=any **pageMarksOffset** 
>
> The offset from the edge of the page for page marks.
<HorizontalLine />
> Boolean **cropMarks** 
>
> Prints crop marks that define where the page should be trimmed.
<HorizontalLine />
> Boolean **pageInformationMarks** 
>
> If true, prints the filename, page number, current date and time, and color separation name.
<HorizontalLine />
> Boolean **bleedMarks** 
>
> If true, print bleed marks.
<HorizontalLine />
> Boolean **colorBars** 
>
> If true, add small squares of color representing the CMYK inks and tints of gray in 10% increments.
<HorizontalLine />
> Boolean **registrationMarks** 
>
> If true, prints small targets outside the page area for aligning color separations.
<HorizontalLine />
> PDFMarkWeight **printerMarkWeight** 
>
> The stroke weight for printer's marks.
<HorizontalLine />
> Measurement Unit (Number or String)=any **bleedTop** 
>
> The height of the bleed area at the top of the page. Note: Valid only when use document bleed to print is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **bleedInside** 
>
> The width of the bleed area at the inside of the page. Note: Valid only when use document bleed to print is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **bleedBottom** 
>
> The height of the bleed area at the bottom of the page. Note: Valid only when use document bleed to print is true.
<HorizontalLine />
> Measurement Unit (Number or String)=any **bleedOutside** 
>
> The width of the bleed area at the outside of the page. Note: Valid only when use document bleed to print is true.
<HorizontalLine />
> Mixed **pdfMarkType** 
>
> The type of printer marks, either an enum value or the name of a custom marks file. Can return: MarkTypes enumerator or String.
<HorizontalLine />
> Boolean **useDocumentBleedWithPDF** 
>
> If true, uses the document's bleed settings in the PDF document.
<HorizontalLine />
> Boolean **includeSlugWithPDF** 
>
> If true, includes the document's slug area in the PDF document.
<HorizontalLine />
> Boolean **ignoreSpreadOverrides** 
>
> If true, ignores flattener spread overrides.
<HorizontalLine />
> FlattenerPreset **appliedFlattenerPreset** 
>
> The transparency flattener preset to use.
<HorizontalLine />
> String **outputConditionName** 
>
> The name of the output condition. Valid only when a PDF/X standard has been defined for the document.
<HorizontalLine />
> String **ocRegistry** 
>
> The web address for the output condition registry. Not valid when PDF/X-3 is the compliance standard or PDF export preset.
<HorizontalLine />
> InteractiveElementsOptions **interactiveElementsOption** 
>
> How to draw interactive elements.
<HorizontalLine />
> ExportLayerOptions **exportWhichLayers** 
>
> Which layers to export.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the PDFExportPreference.
<HorizontalLine />
> PDFExportPreference **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.
<HorizontalLine />
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

<HorizontalLine />
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


