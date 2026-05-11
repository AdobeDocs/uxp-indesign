# HTMLExportPreference
HTML export preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the HTMLExportPreference (a Document).
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
> Boolean **includeClassesInHTML** 
>
> If true, InDesign will generate class attributes for elements in HTML, else will generate plain html without class attributes.
*** 
> UseSVGAsEnum **useSVGAs** 
>
> Use SVG As
*** 
> Boolean **exportSelection** 
>
> If true and have selection, export selected content to HTML.
*** 
> ExportOrder **exportOrder** 
>
> The export order.
*** 
> BulletListExportOption **bulletExportOption** 
>
> The bullet export option.
*** 
> NumberedListExportOption **numberedListExportOption** 
>
> The numbered list export option.
*** 
> Boolean **viewDocumentAfterExport** 
>
> If true, open docuemnt in viewer after export.
*** 
> ImageExportOption **imageExportOption** 
>
> The export order.
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
> Number **level** 
>
> The PNG compression level.
*** 
> Boolean **ignoreObjectConversionSettings** 
>
> ignore object level image conversion settings.
*** 
> String **serverPath** 
>
> The server path for image .
*** 
> String **imageExtension** 
>
> The image extension on server.
*** 
> Boolean **preserveLocalOverride** 
>
> If true, output local style override.
*** 
> String **externalStyleSheets** 
>
> The file path of external cascading style sheets.
*** 
> String **javascripts** 
>
> The file path of external javascripts.
*** 
> Boolean **generateCascadeStyleSheet** 
>
> If true, InDesign will generate cascade style sheet.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the HTMLExportPreference.
*** 
> HTMLExportPreference **getElements**()
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


