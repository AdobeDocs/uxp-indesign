# NestedStyle
A nested style.

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
> The parent of the NestedStyle (a TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the NestedStyle within its containing object.
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
> CharacterStyle **appliedCharacterStyle** 
>
> The character style applied to the text. Can also accept: String.
<HorizontalLine />
> Mixed **delimiter** 
>
> The delimiting expression that indicates how deeply into the paragraph the nested style is applied. Can return: String or NestedStyleDelimiters enumerator.
<HorizontalLine />
> Number **repetition** 
>
> The number instances of the specified delimiter up to which, or through which, to apply the nested style.
<HorizontalLine />
> Boolean **inclusive** 
>
> If true, the nested style is applied through the last delimiter. If false, the nested style is applied up to the last delimiter.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the NestedStyle.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the NestedStyle.
<HorizontalLine />
> NestedStyle **getElements**()
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


