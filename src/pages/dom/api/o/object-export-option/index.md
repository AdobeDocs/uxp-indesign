# ObjectExportOption
Export options for the object

## Instance
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
> The parent of the ObjectExportOption (a ObjectStyle, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame or EndnoteTextFrame).
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
> String **epubType** 
>
> The epub type as recommended by IDPF
<HorizontalLine />
> SizeTypeEnum **sizeType** 
>
> size settings to be used for the object
<HorizontalLine />
> String **customSize** 
>
> Custom size applied to the object
<HorizontalLine />
> PreserveAppearanceFromLayoutEnum **preserveAppearanceFromLayout** 
>
> Preserve Appearance from Layout
<HorizontalLine />
> SourceType **altTextSourceType** 
>
> The source type of alternate text
<HorizontalLine />
> SourceType **actualTextSourceType** 
>
> The source type of actual text
<HorizontalLine />
> String **customAltText** 
>
> The custom alternate text entered by the user
<HorizontalLine />
> String **customActualText** 
>
> The custom actual text entered by the user
<HorizontalLine />
> Mixed **altMetadataProperty** 
>
> The metadata property to use as source of alternate text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
<HorizontalLine />
> Mixed **actualMetadataProperty** 
>
> The metadata property to use as source of actual text. Can return: Ordered array containing namespacePrefix:String, propertyPath:String.
<HorizontalLine />
> TagType **applyTagType** 
>
> The tag type of page item
<HorizontalLine />
> ImageFormat **imageConversionType** 
>
> Allows user to select the image format for conversion
<HorizontalLine />
> ImageResolution **imageExportResolution** 
>
> The export resolution
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
> Boolean **customLayout** 
>
> If true, custom layout is enabled for object
<HorizontalLine />
> CustomLayoutTypeEnum **customLayoutType** 
>
> Custom Layout settings to be used for object
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **altText**()
> 
> Provides the alternate text for the object
<HorizontalLine />
> String **actualText**()
> 
> Provides the actual text for the object
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectExportOption.
<HorizontalLine />
> ObjectExportOption **getElements**()
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


