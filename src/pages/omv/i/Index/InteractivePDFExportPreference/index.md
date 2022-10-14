# InteractivePDFExportPreference
Interactive PDF export settings for the application object.

## Instance
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
> The parent of the InteractivePDFExportPreference (a Application).
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
> Mixed **pageRange** 
>
> The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
*** 
> Boolean **exportReaderSpreads** 
>
> If true, each spread in the exported document is combined into a single page that has spread's original width.
*** 
> Boolean **viewPDF** 
>
> If true, automatically opens the PDF file after exporting.
*** 
> Boolean **generateThumbnails** 
>
> If true, generates thumbnail images for each page or spread.
*** 
> Boolean **exportLayers** 
>
> If true, saves each layer as an Acrobat layer within the PDF document.
*** 
> Boolean **includeStructure** 
>
> If true, creates a tagged PDF file. Note: If acrobat compatibility is acrobat 6 or higher, tags are visible only when the PDF is opened in Acrobat 6 or higher.
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
> Boolean **flipPages** 
>
> Automatically flip pages in the exported PDF.
*** 
> Number **flipPagesSpeed** 
>
> The speed that the pages flip.
*** 
> PageTransitionOverrideOptions **pageTransitionOverride** 
>
> The name of the page transition to use for all pages.
*** 
> InteractivePDFInteractiveElementsOptions **interactivePDFInteractiveElementsOption** 
>
> How to draw interactive elements.
*** 
> PDFRasterCompressionOptions **pdfRasterCompression** 
>
> The PDF raster compression options.
*** 
> PDFJPEGQualityOptions **pdfJPEGQuality** 
>
> The PDF JPEG quality options.
*** 
> Mixed **rasterResolution** 
>
> The raster resolution. Can return: RasterResolutionOptions enumerator or Long Integer (72 - 300).
*** 
> Boolean **usePDFStructureForTabOrder** 
>
> Use tagged PDF structure for interactive elements tab order.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the InteractivePDFExportPreference.
*** 
> InteractivePDFExportPreference **getElements**()
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


