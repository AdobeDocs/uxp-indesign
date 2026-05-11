# PNGExportPreference
PNG export preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the PNGExportPreference (a Application).
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
> PNGExportRangeEnum **pngExportRange** 
>
> The page range to export.
*** 
> String **pageString** 
>
> The page(s) to export, specified as a page number or an array of page numbers. Note: Valid when PNG export range is not all.
*** 
> Boolean **exportingSpread** 
>
> If true, exports each spread as a single PNG file. If false, exports facing pages as separate files and appends sequential numbers to each file name.
*** 
> PNGQualityEnum **pngQuality** 
>
> The compression quality.
*** 
> Number **exportResolution** 
>
> The export resolution expressed as a real number instead of an integer. (Range: 1.0 to 2400.0)
*** 
> PNGColorSpaceEnum **pngColorSpace** 
>
> RGB or Gray
*** 
> Boolean **transparentBackground** 
>
> If true, use a transparent background for the exported PNG.
*** 
> Boolean **antiAlias** 
>
> If true, use anti-aliasing for text and vectors during export.
*** 
> Boolean **useDocumentBleeds** 
>
> If true, uses the document's bleed settings in the exported PNG.
*** 
> Boolean **simulateOverprint** 
>
> If true, simulates the effects of overprinting spot and process colors in the same way they would occur when printing.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the PNGExportPreference.
*** 
> PNGExportPreference **getElements**()
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


