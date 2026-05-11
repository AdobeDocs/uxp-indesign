# EPubExportPreference
EPub export preferences.

## Instance
> *Read Only* 
> 
> Number **level** 
>
> The PNG compression level.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the EPubExportPreference (a Book or Document).
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
> String **epubTitle** 
>
> The epub title.
*** 
> String **epubCreator** 
>
> The epub creator.
*** 
> String **epubSubject** 
>
> The epub subject.
*** 
> String **epubDescription** 
>
> The epub description.
*** 
> String **epubDate** 
>
> The epub date.
*** 
> String **epubRights** 
>
> The epub rights.
*** 
> Boolean **useExistingImageOnExport** 
>
> If true, InDesign will use existing image for graphic objects on export.
*** 
> Boolean **includeClassesInHTML** 
>
> If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes.
*** 
> UseSVGAsEnum **useSVGAs** 
>
> Use SVG As
*** 
> String **epubPublisher** 
>
> The epub publisher.
*** 
> String **id** 
>
> The epub unique identifier, like ISBN.
*** 
> ExportOrder **exportOrder** 
>
> The export order.
*** 
> EpubCover **epubCover** 
>
> The epub cover option.
*** 
> String **coverImageFile** 
>
> The epub cover image file path.
*** 
> BulletListExportOption **bulletExportOption** 
>
> The bullet export option.
*** 
> NumberedListExportOption **numberedListExportOption** 
>
> The numbered list export option.
*** 
> Number **leftMargin** 
>
> Left margin of the epub.
*** 
> Number **rightMargin** 
>
> Right margin of the epub.
*** 
> Number **topMargin** 
>
> Top margin of the epub.
*** 
> Number **bottomMargin** 
>
> Bottom margin of the epub.
*** 
> ImageResolution **imageExportResolution** 
>
> The export resolution
*** 
> ImageSizeOption **customImageSizeOption** 
>
> Allows user to select the image size option for conversion
*** 
> Boolean **preserveLayoutAppearence** 
>
> If true, format image based on layout appearence.
*** 
> ImageAlignmentType **imageAlignment** 
>
> Alignment applied to images
*** 
> Number **imageSpaceBefore** 
>
> Space Before applied to images
*** 
> Number **imageSpaceAfter** 
>
> Space After applied to images
*** 
> Boolean **useImagePageBreak** 
>
> If true, image page break settings will be used in objects
*** 
> ImagePageBreakType **imagePageBreak** 
>
> Image page break settings to be used with objects
*** 
> ImageConversion **imageConversion** 
>
> The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true.
*** 
> GIFOptionsPalette **gifOptionsPalette** 
>
> The color palette for GIF conversion. Note: Not valid when image conversion is JPEG.
*** 
> Boolean **gifOptionsInterlaced** 
>
> If true, generates interlaced GIFs. Note: Not valid  when image conversion is JPEG.
*** 
> JPEGOptionsQuality **jpegOptionsQuality** 
>
> The quality of converted JPEG images. Note: Not valid when image conversion is GIF.
*** 
> JPEGOptionsFormat **jpegOptionsFormat** 
>
> The formatting method for converted JPEG images. Note: Not valid  when image conversion is GIF.
*** 
> Boolean **ignoreObjectConversionSettings** 
>
> ignore object level image conversion settings.
*** 
> String **tocStyleName** 
>
> The name of TOC style to generate epub TOC.
*** 
> Boolean **breakDocument** 
>
> If  true, break InDesign document into smaller piece when generating epub.
*** 
> String **paragraphStyleName** 
>
> The name of paragraph style to break InDesign document.
*** 
> Boolean **stripSoftReturn** 
>
> If  true, strip soft return.
*** 
> Boolean **preserveLocalOverride** 
>
> If true, output local style override.
*** 
> Boolean **embedFont** 
>
> If true, embed font in epub.
*** 
> String **externalStyleSheets** 
>
> The file path of external cascading style sheets.
*** 
> String **javascripts** 
>
> The file path of external javascripts.
*** 
> EpubVersion **version** 
>
> The version of EPUB.
*** 
> Boolean **generateCascadeStyleSheet** 
>
> If true, InDesign will generate cascade style sheet.
*** 
> EPubFootnotePlacement **footnotePlacement** 
>
> The placement of footnote for EPub export
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPubExportPreference.
*** 
> EPubExportPreference **getElements**()
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


