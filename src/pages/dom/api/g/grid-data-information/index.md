# GridDataInformation
Grid defaults. Note: Applies to named, layout, and frame (story) grids.

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
> The parent of the GridDataInformation (a Story, XmlStory, Page, NamedGrid, TextFrame or EndnoteTextFrame).
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
> Mixed **appliedFont** 
>
> The font applied to the GridDataInformation, specified as either a font object or the name of font family. Can return: Font or String.
<HorizontalLine />
> String **fontStyle** 
>
> The name of the font style.
<HorizontalLine />
> Measurement Unit (Number or String)=any **pointSize** 
>
> The text size.
<HorizontalLine />
> Number **characterAki** 
>
> The amount of white space between characters.
<HorizontalLine />
> Number **lineAki** 
>
> The amount of white space between lines.
<HorizontalLine />
> Number **horizontalScale** 
>
> The horizontal scaling applied to the GridDataInformation.
<HorizontalLine />
> Number **verticalScale** 
>
> The vertical scaling applied to the GridDataInformation.
<HorizontalLine />
> LineAlignment **lineAlignment** 
>
> The line justification.
<HorizontalLine />
> GridAlignment **gridAlignment** 
>
> The alignment to the frame grid or baseline grid.
<HorizontalLine />
> CharacterAlignment **characterAlignment** 
>
> The alignment of small characters to the largest character in the line.
<HorizontalLine />
> GridViewSettings **gridView** 
>
> The grid view setting.
<HorizontalLine />
> CharacterCountLocation **characterCountLocation** 
>
> The character count location. Note: Valid when show character count is true.
<HorizontalLine />
> Number **characterCountSize** 
>
> The character size for the character count display.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the GridDataInformation.
<HorizontalLine />
> GridDataInformation **getElements**()
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


