# ObjectExportOption
Export options for the object

## Instance
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
> The parent of the ObjectExportOption (a ObjectStyle, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame or EndnoteTextFrame).
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
> String **epubType** 
>
> The epub type as recommended by IDPF
*** 
> SizeTypeEnum **sizeType** 
>
> size settings to be used for the object
*** 
> String **customSize** 
>
> Custom size applied to the object
*** 
> PreserveAppearanceFromLayoutEnum **preserveAppearanceFromLayout** 
>
> Preserve Appearance from Layout
*** 
> SourceType **altTextSourceType** 
>
> The source type of alternate text
*** 
> SourceType **actualTextSourceType** 
>
> The source type of actual text
*** 
> String **customAltText** 
>
> The custom alternate text entered by the user
*** 
> String **customActualText** 
>
> The custom actual text entered by the user
*** 
> Mixed **altMetadataProperty** 
>
> The metadata property to use as source of alternate text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
*** 
> Mixed **actualMetadataProperty** 
>
> The metadata property to use as source of actual text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
*** 
> TagType **applyTagType** 
>
> The tag type of page item
*** 
> ImageFormat **imageConversionType** 
>
> Allows user to select the image format for conversion
*** 
> ImageResolution **imageExportResolution** 
>
> The export resolution
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
> Boolean **customLayout** 
>
> If true, custom layout is enabled for object
*** 
> CustomLayoutTypeEnum **customLayoutType** 
>
> Custom Layout settings to be used for object
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **altText**()
> 
> Provides the alternate text for the object
*** 
> String **actualText**()
> 
> Provides the actual text for the object
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectExportOption.
*** 
> ObjectExportOption **getElements**()
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


