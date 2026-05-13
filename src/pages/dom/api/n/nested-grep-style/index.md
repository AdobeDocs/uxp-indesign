# NestedGrepStyle
A nested GREP style.

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
> The parent of the NestedGrepStyle (a TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the NestedGrepStyle within its containing object.
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
> String **grepExpression** 
>
> The GREP expression used to apply automatic styling.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the NestedGrepStyle.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the NestedGrepStyle.
<HorizontalLine />
> NestedGrepStyle **getElements**()
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


