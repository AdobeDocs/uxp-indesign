# EPubExportPreference
EPub export preferences.

## Instance
> *Read Only* 
> 
> Number **level** 
>
> The PNG compression level.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the EPubExportPreference (a Book or Document).
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
> String **epubTitle** 
>
> The epub title.
<HorizontalLine />
> String **epubCreator** 
>
> The epub creator.
<HorizontalLine />
> String **epubSubject** 
>
> The epub subject.
<HorizontalLine />
> String **epubDescription** 
>
> The epub description.
<HorizontalLine />
> String **epubDate** 
>
> The epub date.
<HorizontalLine />
> String **epubRights** 
>
> The epub rights.
<HorizontalLine />
> Boolean **useExistingImageOnExport** 
>
> If true, InDesign will use existing image for graphic objects on export.
<HorizontalLine />
> Boolean **includeClassesInHTML** 
>
> If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes.
<HorizontalLine />
> UseSVGAsEnum **useSVGAs** 
>
> Use SVG As
<HorizontalLine />
> String **epubPublisher** 
>
> The epub publisher.
<HorizontalLine />
> String **id** 
>
> The epub unique identifier, like ISBN.
<HorizontalLine />
> ExportOrder **exportOrder** 
>
> The export order.
<HorizontalLine />
> EpubCover **epubCover** 
>
> The epub cover option.
<HorizontalLine />
> String **coverImageFile** 
>
> The epub cover image file path.
<HorizontalLine />
> BulletListExportOption **bulletExportOption** 
>
> The bullet export option.
<HorizontalLine />
> NumberedListExportOption **numberedListExportOption** 
>
> The numbered list export option.
<HorizontalLine />
> Number **leftMargin** 
>
> Left margin of the epub.
<HorizontalLine />
> Number **rightMargin** 
>
> Right margin of the epub.
<HorizontalLine />
> Number **topMargin** 
>
> Top margin of the epub.
<HorizontalLine />
> Number **bottomMargin** 
>
> Bottom margin of the epub.
<HorizontalLine />
> ImageResolution **imageExportResolution** 
>
> The export resolution
<HorizontalLine />
> ImageSizeOption **customImageSizeOption** 
>
> Allows user to select the image size option for conversion
<HorizontalLine />
> Boolean **preserveLayoutAppearence** 
>
> If true, format image based on layout appearence.
<HorizontalLine />
> ImageAlignmentType **imageAlignment** 
>
> Alignment applied to images
<HorizontalLine />
> Number **imageSpaceBefore** 
>
> Space Before applied to images
<HorizontalLine />
> Number **imageSpaceAfter** 
>
> Space After applied to images
<HorizontalLine />
> Boolean **useImagePageBreak** 
>
> If true, image page break settings will be used in objects
<HorizontalLine />
> ImagePageBreakType **imagePageBreak** 
>
> Image page break settings to be used with objects
<HorizontalLine />
> ImageConversion **imageConversion** 
>
> The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true.
<HorizontalLine />
> GIFOptionsPalette **gifOptionsPalette** 
>
> The color palette for GIF conversion. Note: Not valid when image conversion is JPEG.
<HorizontalLine />
> Boolean **gifOptionsInterlaced** 
>
> If true, generates interlaced GIFs. Note: Not valid  when image conversion is JPEG.
<HorizontalLine />
> JPEGOptionsQuality **jpegOptionsQuality** 
>
> The quality of converted JPEG images. Note: Not valid when image conversion is GIF.
<HorizontalLine />
> JPEGOptionsFormat **jpegOptionsFormat** 
>
> The formatting method for converted JPEG images. Note: Not valid  when image conversion is GIF.
<HorizontalLine />
> Boolean **ignoreObjectConversionSettings** 
>
> ignore object level image conversion settings.
<HorizontalLine />
> String **tocStyleName** 
>
> The name of TOC style to generate epub TOC.
<HorizontalLine />
> Boolean **breakDocument** 
>
> If  true, break InDesign document into smaller piece when generating epub.
<HorizontalLine />
> String **paragraphStyleName** 
>
> The name of paragraph style to break InDesign document.
<HorizontalLine />
> Boolean **stripSoftReturn** 
>
> If  true, strip soft return.
<HorizontalLine />
> Boolean **preserveLocalOverride** 
>
> If true, output local style override.
<HorizontalLine />
> Boolean **embedFont** 
>
> If true, embed font in epub.
<HorizontalLine />
> String **externalStyleSheets** 
>
> The file path of external cascading style sheets.
<HorizontalLine />
> String **javascripts** 
>
> The file path of external javascripts.
<HorizontalLine />
> EpubVersion **version** 
>
> The version of EPUB.
<HorizontalLine />
> Boolean **generateCascadeStyleSheet** 
>
> If true, InDesign will generate cascade style sheet.
<HorizontalLine />
> EPubFootnotePlacement **footnotePlacement** 
>
> The placement of footnote for EPub export
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPubExportPreference.
<HorizontalLine />
> EPubExportPreference **getElements**()
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


