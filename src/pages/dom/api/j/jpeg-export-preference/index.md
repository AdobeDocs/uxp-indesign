# JPEGExportPreference
JPEG export preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the JPEGExportPreference (a Application).
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
> Boolean **exportingSpread** 
>
> If true, exports each spread as a single JPEG file. If false, exports facing pages as separate files and appends sequential numbers to each file name.
<HorizontalLine />
> JPEGOptionsQuality **jpegQuality** 
>
> The compression quality.
<HorizontalLine />
> String **pageString** 
>
> The page(s) to export, specified as a page number or an array of page numbers. Note: Valid when JPEG export range is not all.
<HorizontalLine />
> JPEGOptionsFormat **jpegRenderingStyle** 
>
> The rendering style.
<HorizontalLine />
> ExportRangeOrAllPages **jpegExportRange** 
>
> The page range to export.
<HorizontalLine />
> Boolean **embedColorProfile** 
>
> True to embed the color profile, false otherwise.
<HorizontalLine />
> JpegColorSpaceEnum **jpegColorSpace** 
>
> One of RGB, CMYK or Gray
<HorizontalLine />
> Boolean **useDocumentBleeds** 
>
> If true, uses the document's bleed settings in the exported JPEG.
<HorizontalLine />
> Boolean **antiAlias** 
>
> If true, use anti-aliasing for text and vectors during export.
<HorizontalLine />
> Boolean **simulateOverprint** 
>
> If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing.
<HorizontalLine />
> Number **exportResolution** 
>
> The export	resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0)
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the JPEGExportPreference.
<HorizontalLine />
> JPEGExportPreference **getElements**()
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


