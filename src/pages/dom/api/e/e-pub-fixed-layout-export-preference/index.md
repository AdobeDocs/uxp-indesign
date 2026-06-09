# EPubFixedLayoutExportPreference
EPub fixed layout export preferences.

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
> The parent of the EPubFixedLayoutExportPreference (a Book or Document).
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
> String **epubPublisher** 
>
> The epub publisher.
<HorizontalLine />
> String **id** 
>
> The epub unique identifier, like ISBN.
<HorizontalLine />
> EpubCover **epubCover** 
>
> The epub cover option.
<HorizontalLine />
> String **coverImageFile** 
>
> The epub cover image file path.
<HorizontalLine />
> ImageResolution **imageExportResolution** 
>
> The export resolution
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
> String **tocStyleName** 
>
> The name of TOC style to generate epub TOC.
<HorizontalLine />
> String **externalStyleSheets** 
>
> The file path of external cascading style sheets.
<HorizontalLine />
> String **javascripts** 
>
> The file path of external javascripts.
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
> String **epubPageRange** 
>
> The epub page range.
<HorizontalLine />
> PageRangeFormat **epubPageRangeFormat** 
>
> The epub page range format.
<HorizontalLine />
> EpubFixedLayoutSpreadControl **epubSpreadControlOptions** 
>
> The control for spreads in fixed layout EPub.
<HorizontalLine />
> EpubNavigationStyle **epubNavigationStyles** 
>
> The epub navigation style.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPubFixedLayoutExportPreference.
<HorizontalLine />
> EPubFixedLayoutExportPreference **getElements**()
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


