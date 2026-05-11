# EndnoteRange
An endnote text range.

## Instance
> *Read Only* 
> 
> Number **endnoteRangeStartIndex** 
>
> Starting Index of the endnote range object.
*** 
> *Read Only* 
> 
> Number **endnoteRangeEndIndex** 
>
> Ending Index of the endnote range object.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the EndnoteRange.
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
> The parent of the EndnoteRange (a Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or XmlStory).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the EndnoteRange within its containing object.
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
> Endnote **sourceEndnote** 
>
> The endnote reference corresponding to the endnote text range.
*** 
> Mixed **endnoteRangeContent** 
>
> EndnoteRange Contents, It will skip the endnote number while setting/replacing the content into endnote range. Can return: String, SpecialCharacters enumerator or Array of Strings or SpecialCharacters enumerators. Can also accept: NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the EndnoteRange; this is an alias to the EndnoteRange's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **deleteEndnoteRange**()
> 
> Deletes the endnote range and the associated endnote anchor.
*** 
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EndnoteRange.
*** 
> EndnoteRange **getElements**()
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


