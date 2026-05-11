# EPubFixedLayoutExportPreference
EPub fixed layout export preferences.

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
> The parent of the EPubFixedLayoutExportPreference (a Book or Document).
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
> String **epubPublisher** 
>
> The epub publisher.
*** 
> String **id** 
>
> The epub unique identifier, like ISBN.
*** 
> EpubCover **epubCover** 
>
> The epub cover option.
*** 
> String **coverImageFile** 
>
> The epub cover image file path.
*** 
> ImageResolution **imageExportResolution** 
>
> The export resolution
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
> String **tocStyleName** 
>
> The name of TOC style to generate epub TOC.
*** 
> String **externalStyleSheets** 
>
> The file path of external cascading style sheets.
*** 
> String **javascripts** 
>
> The file path of external javascripts.
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
> String **epubPageRange** 
>
> The epub page range.
*** 
> PageRangeFormat **epubPageRangeFormat** 
>
> The epub page range format.
*** 
> EpubFixedLayoutSpreadControl **epubSpreadControlOptions** 
>
> The control for spreads in fixed layout EPub.
*** 
> EpubNavigationStyle **epubNavigationStyles** 
>
> The epub navigation style.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPubFixedLayoutExportPreference.
*** 
> EPubFixedLayoutExportPreference **getElements**()
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


