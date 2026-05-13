# ExportForWebPreference
Export for web preferences.

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
> The parent of the ExportForWebPreference (a Application or Document).
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
> Boolean **copyFormattedImages** 
>
> If true, copies formatted images to the images subfolder.
<HorizontalLine />
> Boolean **copyOptimizedImages** 
>
> If true, copies optimized images to the images subfolder.
<HorizontalLine />
> Boolean **copyOriginalImages** 
>
> If true, copies original images to the images subfolder.
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ExportForWebPreference.
<HorizontalLine />
> ExportForWebPreference **getElements**()
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


