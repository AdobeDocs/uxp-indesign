# Book
A book.

## Instance
> *Read Only* 
> 
> PreflightBookOption **preflightBookOptions** 
>
> Preflight book option settings.
<HorizontalLine />
> *Read Only* 
> 
> EPubFixedLayoutExportPreference **epubFixedLayoutExportPreferences** 
>
> EPub fixed layout export preference settings.
<HorizontalLine />
> *Read Only* 
> 
> EPubExportPreference **epubExportPreferences** 
>
> EPub export preference settings.
<HorizontalLine />
> *Read Only* 
> 
> PrintPreference **printPreferences** 
>
> Print preference settings.
<HorizontalLine />
> *Read Only* 
> 
> String **name** 
>
> The name of the Book.
<HorizontalLine />
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the Book, including the name of the Book.
<HorizontalLine />
> *Read Only* 
> 
> File **filePath** 
>
> The full path to the file.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **modified** 
>
> If true, the Book has been modified since it was last saved.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **saved** 
>
> If true, the Book has been saved since it was created.
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
> The parent of the Book (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Book within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
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
> *Read Only* 
> 
> BookContents **bookContents** 
>
> A collection of book content objects.
<HorizontalLine />
> Mixed **styleSourceDocument** 
>
> Current style source document. Can return: Document or BookContent.
<HorizontalLine />
> RepaginateOption **repaginationOption** 
>
> Page numbering options for book content objects within the book.
<HorizontalLine />
> Boolean **insertBlankPage** 
>
> If true, inserts a blank page as necessary to fill in page number gaps caused by the odd or even specification set in the repagination option.
<HorizontalLine />
> Boolean **automaticPagination** 
>
> If true, automatically updates page numbers when pages in book content files are added, deleted, or rearranged.
<HorizontalLine />
> Boolean **automaticDocumentConversion** 
>
> If true, automatically converts the book content object during repagination and synchronization.
<HorizontalLine />
> Boolean **synchronizeCrossReferenceFormat** 
>
> If true, synchronize cross reference formats
<HorizontalLine />
> Boolean **mergeIdenticalLayers** 
>
> If true, merges identically named layers when exporting to PDF.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Boolean **synchronizeTableOfContentStyle** 
>
> If true, synchronize table of content styles.
<HorizontalLine />
> Boolean **synchronizeTextVariable** 
>
> If true, synchronize text variables.
<HorizontalLine />
> Boolean **synchronizeTableStyle** 
>
> If true, synchronize table styles.
<HorizontalLine />
> Boolean **synchronizeParagraphStyle** 
>
> If true, synchronize paragraph styles.
<HorizontalLine />
> Boolean **synchronizeCharacterStyle** 
>
> If true, synchronize character styles.
<HorizontalLine />
> Boolean **synchronizeTrapStyle** 
>
> If true, synchronize trap styles.
<HorizontalLine />
> Boolean **synchronizeMasterPage** 
>
> If true, synchronize master pages.
<HorizontalLine />
> Boolean **synchronizeObjectStyle** 
>
> If true, synchronize object styles.
<HorizontalLine />
> Boolean **synchronizeSwatch** 
>
> If true, synchronize swatches.
<HorizontalLine />
> Boolean **synchronizeCellStyle** 
>
> If true, synchronize cell styles.
<HorizontalLine />
> Boolean **synchronizeBulletNumberingList** 
>
> If true, synchronize bullets and numbering.
<HorizontalLine />
> Boolean **synchronizeConditionalText** 
>
> If true, synchronize conditional text.
<HorizontalLine />
> SmartMatchOptions **smartMatchStyleGroups** 
>
> How to match styles with same name while synchronizing a book.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Boolean **packageForPrint**( File **to**, Boolean **copyingFonts**, Boolean **copyingLinkedGraphics**, Boolean **copyingProfiles**, Boolean **updatingGraphics**, Boolean **includingHiddenLayers**, Boolean **ignorePreflightErrors**, Boolean **creatingReport**, Boolean **includeIdml**, Boolean **includePdf**, String **pdfStyle**, Boolean **useDocumentHyphenationExceptionsOnly**, String **versionComments**, Boolean **forceSave** )
> 
> Packages the document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The folder, alias, or path in which to place the packaged files. |
| Boolean | copyingFonts | If true, copies fonts used in the document to the package folder. |
| Boolean | copyingLinkedGraphics | If true, copies linked graphics files to the package folder. |
| Boolean | copyingProfiles | If true, copies color profiles to the package folder. |
| Boolean | updatingGraphics | If true, updates graphics links to the package folder. |
| Boolean | includingHiddenLayers | If true, copies fonts and links from hidden layers to the package. |
| Boolean | ignorePreflightErrors | If true, ignores preflight errors and proceeds with the packaging. If false, cancels the packaging when errors exist. |
| Boolean | creatingReport | If true, creates a package report that includes printing instructions, print settings, lists of fonts, links and required inks, and other information. |
| Boolean | includeIdml | If true, generates and includes IDML in the package folder. (Optional) |
| Boolean | includePdf | If true, generates and includes PDF in the package folder. (Optional) |
| String | pdfStyle | If specified and PDF is to be included, use this style for PDF export if it is valid, otherwise use the last used PDF preset. (Optional) |
| Boolean | useDocumentHyphenationExceptionsOnly | If this option is selected, InDesign flags this document so that it does not reflow when someone else opens or edits it on a computer that has different hyphenation and dictionary settings. (Optional) |
| String | versionComments | The comments for the version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

<HorizontalLine />
> **preflight**( File **to**, Boolean **autoOpen** )
> 
> Preflight a book and optionally save the resulting report.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The preflight report to save to. (Optional) |
| Boolean | autoOpen | If true, automatically open the report after creation. (Optional) |

<HorizontalLine />
> **print**( Boolean **printDialog**, Mixed **using** )
> 
> Prints the Book(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | printDialog | Whether to invoke the print dialog (Optional) |
| Mixed | using | Printer preset to use. Can accept: PrinterPresetTypes enumerator or PrinterPreset. (Optional) |

<HorizontalLine />
> **close**( SaveOptions **saving**, File **savingIn**, String **versionComments**, Boolean **forceSave** )
> 
> Close the Book
#### Parameters
| Type | Name | Description |
|---|---|---|
| SaveOptions | saving | Whether to save changes before closing the Book (Optional) |
| File | savingIn | The file in which to save the Book (Optional) |
| String | versionComments | The comment for this version (Optional) |
| Boolean | forceSave | Forcibly save a version (Optional) |

<HorizontalLine />
> **save**( File **to**, String **versionComments**, Boolean **forceSave** )
> 
> Saves the book.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The file path. Note: Required only if the book has not been previously saved. If the book has previously been saved, specifying a path saves a copy and closes the original book. (Optional) |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

<HorizontalLine />
> **exportFile**( Mixed **format**, File **to**, Boolean **showingOptions**, PDFExportPreset **using**, BookContent **whichDocuments**, String **versionComments**, Boolean **forceSave** )
> 
> Exports the book to a file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | format | The export format, specified as an enumeration value or as an extension that appears in the Save as type or Format menu in the Export dialog. Can accept: ExportFormat enumerator or String. |
| File | to | The file to which to export the book. (Optional) |
| Boolean | showingOptions | Used to specify if the PDF Export Options Dialog needs to be shown or not (Optional) |
| PDFExportPreset | using | Used to specify the presets for the export which can be the object of the preset type, enumeration for existing presets or user defined presets, or a string naming the preset to be used, but in case Showing Options is true, the preset specified in the Export Dialog will over ride this parameter (Optional) |
| BookContent | whichDocuments | Used to specify a list of book content references, from the current book, where the list may contain duplicate entries and if the list is not specified then the entire book contents shall be exported (Optional) |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

<HorizontalLine />
> **synchronize**()
> 
> Synchronizes the entire book to the style source document.
<HorizontalLine />
> **repaginate**()
> 
> Repaginates the book.
<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> **updateChapterAndParagraphNumbers**()
> 
> Updates chapter numbers and paragraph numbers throughout the book.
<HorizontalLine />
> **updateAllNumbers**()
> 
> Update all numbers (e.g. Page numbers, chapter numbers and paragraph numbers) throughout the book.
<HorizontalLine />
> **updateAllCrossReferences**()
> 
> Updates the cross references in the entire book.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Book.
<HorizontalLine />
> Book **getElements**()
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


