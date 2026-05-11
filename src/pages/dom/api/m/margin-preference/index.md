# MarginPreference
Margin preferences.

## Instance
> *Read Only* 
> 
> Boolean **customColumns** 
>
> If false, columns are evenly spaced. If true, columns can have custom widths.
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
> The parent of the MarginPreference (a Application, Document or Page).
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
> Number **columnCount** 
>
> The number of columns to place on the page.
*** 
> Measurement Unit (Number or String)=any **columnGutter** 
>
> The distance between columns.
*** 
> Measurement Unit (Number or String)=any **top** 
>
> The top edge of the MarginPreference.
*** 
> Measurement Unit (Number or String)=any **bottom** 
>
> The bottom edge of the MarginPreference.
*** 
> Measurement Unit (Number or String)=any **left** 
>
> The left edge of the MarginPreference.
*** 
> Measurement Unit (Number or String)=any **right** 
>
> The right edge of the MarginPreference.
*** 
> HorizontalOrVertical **columnDirection** 
>
> The direction of text in the column.
*** 
> Measurement Unit (Number or String)=any **columnsPositions** 
>
> The distance that each column guide is placed from the left margin, formatted as an array in the format [guide1, guide2, guide3].
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the MarginPreference.
*** 
> MarginPreference **getElements**()
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


