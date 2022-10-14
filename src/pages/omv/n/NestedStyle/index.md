# NestedStyle
A nested style.

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
> The parent of the NestedStyle (a TextDefault, Paragraph, ParagraphStyle, Text, InsertionPoint, TextStyleRange, TextColumn, Line, Word, Character, Story or XmlStory).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the NestedStyle within its containing object.
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
> CharacterStyle **appliedCharacterStyle** 
>
> The character style applied to the text. Can also accept: String.
*** 
> Mixed **delimiter** 
>
> The delimiting expression that indicates how deeply into the paragraph the nested style is applied. Can return: String or NestedStyleDelimiters enumerator.
*** 
> Number **repetition** 
>
> The number instances of the specified delimiter up to which, or through which, to apply the nested style.
*** 
> Boolean **inclusive** 
>
> If true, the nested style is applied through the last delimiter. If false, the nested style is applied up to the last delimiter.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the NestedStyle.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the NestedStyle.
*** 
> NestedStyle **getElements**()
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


