# HTMLExportPreference
HTML export preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the HTMLExportPreference (a Document).
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
> Boolean **includeClassesInHTML** 
>
> If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes.
<HorizontalLine />
> UseSVGAsEnum **useSVGAs** 
>
> Use SVG As
<HorizontalLine />
> Boolean **exportSelection** 
>
> If true and have selection, export selected content to HTML.
<HorizontalLine />
> ExportOrder **exportOrder** 
>
> The export order.
<HorizontalLine />
> BulletListExportOption **bulletExportOption** 
>
> The bullet export option.
<HorizontalLine />
> NumberedListExportOption **numberedListExportOption** 
>
> The numbered list export option.
<HorizontalLine />
> Boolean **viewDocumentAfterExport** 
>
> If true, open docuemnt in viewer after export.
<HorizontalLine />
> ImageExportOption **imageExportOption** 
>
> The export order.
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
> Number **level** 
>
> The PNG compression level.
<HorizontalLine />
> Boolean **ignoreObjectConversionSettings** 
>
> ignore object level image conversion settings.
<HorizontalLine />
> String **serverPath** 
>
> The server path for image .
<HorizontalLine />
> String **imageExtension** 
>
> The image extension on server.
<HorizontalLine />
> Boolean **preserveLocalOverride** 
>
> If true, output local style override.
<HorizontalLine />
> String **externalStyleSheets** 
>
> The file path of external cascading style sheets.
<HorizontalLine />
> String **javascripts** 
>
> The file path of external javascripts.
<HorizontalLine />
> Boolean **generateCascadeStyleSheet** 
>
> If true, InDesign will generate cascade style sheet.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the HTMLExportPreference.
<HorizontalLine />
> HTMLExportPreference **getElements**()
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


