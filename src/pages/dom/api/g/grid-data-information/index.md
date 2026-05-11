# GridDataInformation
Grid defaults. Note: Applies to named, layout, and frame (story) grids.

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
> The parent of the GridDataInformation (a Story, XmlStory, Page, NamedGrid, TextFrame or EndnoteTextFrame).
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
> Mixed **appliedFont** 
>
> The font applied to the GridDataInformation, specified as either a font object or the name of font family. Can return: Font or String.
*** 
> String **fontStyle** 
>
> The name of the font style.
*** 
> Measurement Unit (Number or String)=any **pointSize** 
>
> The text size.
*** 
> Number **characterAki** 
>
> The amount of white space between characters.
*** 
> Number **lineAki** 
>
> The amount of white space between lines.
*** 
> Number **horizontalScale** 
>
> The horizontal scaling applied to the GridDataInformation.
*** 
> Number **verticalScale** 
>
> The vertical scaling applied to the GridDataInformation.
*** 
> LineAlignment **lineAlignment** 
>
> The line justification.
*** 
> GridAlignment **gridAlignment** 
>
> The alignment to the frame grid or baseline grid.
*** 
> CharacterAlignment **characterAlignment** 
>
> The alignment of small characters to the largest character in the line.
*** 
> GridViewSettings **gridView** 
>
> The grid view setting.
*** 
> CharacterCountLocation **characterCountLocation** 
>
> The character count location. Note: Valid when show character count is true.
*** 
> Number **characterCountSize** 
>
> The character size for the character count display.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GridDataInformation.
*** 
> GridDataInformation **getElements**()
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


