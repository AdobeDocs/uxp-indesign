# BaselineFrameGridOption
Baseline frame grid options.

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
> The parent of the BaselineFrameGridOption (a Application, Document, TextFrame, EndnoteTextFrame or ObjectStyle).
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
> Boolean **useCustomBaselineFrameGrid** 
>
> If true, uses a custom baseline frame grid.
<HorizontalLine />
> Measurement Unit (Number or String)=any **startingOffsetForBaselineFrameGrid** 
>
> The amount to offset the baseline grid.
<HorizontalLine />
> BaselineFrameGridRelativeOption **baselineFrameGridRelativeOption** 
>
> The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid.
<HorizontalLine />
> Measurement Unit (Number or String)=any **baselineFrameGridIncrement** 
>
> The distance between grid lines.
<HorizontalLine />
> Mixed **baselineFrameGridColor** 
>
> The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the BaselineFrameGridOption.
<HorizontalLine />
> BaselineFrameGridOption **getElements**()
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


