# PublishExportPreference
Publish export preferences.

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
> The parent of the PublishExportPreference (a Document).
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
> PublishCoverEnum **publishCover** 
>
> The publish cover option.
<HorizontalLine />
> String **coverImageFile** 
>
> The epub cover image file path.
<HorizontalLine />
> String **publishPageRange** 
>
> The publish page range.
<HorizontalLine />
> PageRangeFormat **publishPageRangeFormat** 
>
> The publish page range format.
<HorizontalLine />
> ImageConversion **imageConversion** 
>
> The file format to use for converted images. Note: Valid only when copy optimized images and/or copy formatted images is true.
<HorizontalLine />
> ImageResolution **imageExportResolution** 
>
> The export resolution
<HorizontalLine />
> String **publishDescription** 
>
> The publish description.
<HorizontalLine />
> String **publishFileName** 
>
> The file name.
<HorizontalLine />
> PublishFormatEnum **publishFormat** 
>
> the publish format.
<HorizontalLine />
> String **coverPage** 
>
> The cover page.
<HorizontalLine />
> GIFOptionsPalette **gifOptionsPalette** 
>
> The color palette for GIF conversion. Note: Not valid when image conversion is JPEG.
<HorizontalLine />
> JPEGOptionsQuality **jpegOptionsQuality** 
>
> The quality of converted JPEG images. Note: Not valid when image conversion is GIF.
<HorizontalLine />
> Boolean **publishPdf** 
>
> If PDF should be uploaded while publishing.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the PublishExportPreference.
<HorizontalLine />
> PublishExportPreference **getElements**()
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


