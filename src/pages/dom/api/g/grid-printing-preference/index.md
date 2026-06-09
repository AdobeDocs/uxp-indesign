# GridPrintingPreference
Grid printing and exporting preferences.

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
> The parent of the GridPrintingPreference (a Application).
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
> Boolean **layoutGridPrinting** 
>
> If true, displays layout grids in the printed or exported document.
<HorizontalLine />
> Boolean **frameGridPrinting** 
>
> If true, displays frame (story) grids in the printed or exported document.
<HorizontalLine />
> Boolean **textPrinting** 
>
> If true, displays text in the printed or exported document.
<HorizontalLine />
> Boolean **pageItemPrinting** 
>
> If true, displays page items other than text, frame grids, and layout grids in the printed or exported document. For information on printing and exporting text and grids, see text printing, frame grid printing, and layout grid printing.
<HorizontalLine />
> Number **layoutGridStrokeWeight** 
>
> The stroke weight (in points) of the layout grid.
<HorizontalLine />
> Number **frameGridStrokeWeight** 
>
> The stroke weight (in points) of the frame grid.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GridPrintingPreference.
<HorizontalLine />
> GridPrintingPreference **getElements**()
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


