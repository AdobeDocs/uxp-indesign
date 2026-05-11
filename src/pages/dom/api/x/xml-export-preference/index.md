# XMLExportPreference
XML export preferences.

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
> The parent of the XMLExportPreference (a Application or Document).
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
> Boolean **viewAfterExport** 
>
> If true, displays exported XML content in a specified viewer.
*** 
> Mixed **preferredBrowser** 
>
> The preferred browser for viewing XML. Can return: File or NothingEnum enumerator.
*** 
> Boolean **exportFromSelected** 
>
> If true, exports XML content from the selected XML element. If false, exports the entire document.
*** 
> XMLFileEncoding **fileEncoding** 
>
> The file encoding type for exporting XML content.
*** 
> Boolean **ruby** 
>
> If true, includes Ruby text in the exported XML content.
*** 
> Boolean **excludeDtd** 
>
> If true, excludes the DTD from the exported XML content.
*** 
> Boolean **copyOriginalImages** 
>
> If true, copies original images to the images subfolder.
*** 
> Boolean **copyOptimizedImages** 
>
> If true, copies optimized images to the images subfolder.
*** 
> Boolean **copyFormattedImages** 
>
> If true, copies formatted images to the images subfolder.
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
> Boolean **allowTransform** 
>
> If true, transforms the XML using an XSLT file.
*** 
> Mixed **transformFilename** 
>
> The name of the XSLT file. Note: Valid when allow transform is true. Can return: File or XMLTransformFile enumerator.
*** 
> Boolean **characterReferences** 
>
> If true, replaces special characters with character references.
*** 
> XMLExportUntaggedTablesFormat **exportUntaggedTablesFormat** 
>
> The export format for untagged tables in tagged stories.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLExportPreference.
*** 
> XMLExportPreference **getElements**()
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


