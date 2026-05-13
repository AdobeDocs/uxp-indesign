# WatermarkPreference
Watermark preference

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
> The parent of the WatermarkPreference (a Document or Application).
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
> Boolean **watermarkVisibility** 
>
> Watermark visibility for a document
<HorizontalLine />
> Boolean **watermarkDoPrint** 
>
> Watermark do print for a document
<HorizontalLine />
> Boolean **watermarkDrawInBack** 
>
> Watermark draw in back for a document
<HorizontalLine />
> String **watermarkText** 
>
> Watermark text for a document
<HorizontalLine />
> String **watermarkFontFamily** 
>
> Watermark font family display name
<HorizontalLine />
> String **watermarkFontStyle** 
>
> Watermark font style name
<HorizontalLine />
> Number **watermarkFontPointSize** 
>
> Watermark font point size for a document
<HorizontalLine />
> Mixed **watermarkFontColor** 
>
> Watermark font color for a document. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
<HorizontalLine />
> Number **watermarkOpacity** 
>
> Watermark opacity (as a percentage). (Range: 0 to 100)
<HorizontalLine />
> Number **watermarkRotation** 
>
> Watermark rotation for a document
<HorizontalLine />
> WatermarkHorizontalPositionEnum **watermarkHorizontalPosition** 
>
> Watermark horizontal position enum for a document
<HorizontalLine />
> Measurement Unit (Number or String)=any **watermarkHorizontalOffset** 
>
> Watermark horizontal offset for a document
<HorizontalLine />
> WatermarkVerticalPositionEnum **watermarkVerticalPosition** 
>
> Watermark vertical position enum for a document
<HorizontalLine />
> Measurement Unit (Number or String)=any **watermarkVerticalOffset** 
>
> Watermark vertical offset for a document
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the WatermarkPreference.
<HorizontalLine />
> WatermarkPreference **getElements**()
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


