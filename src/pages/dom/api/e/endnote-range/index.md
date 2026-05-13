# EndnoteRange
An endnote text range.

## Instance
> *Read Only* 
> 
> Number **endnoteRangeStartIndex** 
>
> Starting Index of the endnote range object.
<HorizontalLine />
> *Read Only* 
> 
> Number **endnoteRangeEndIndex** 
>
> Ending Index of the endnote range object.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the EndnoteRange.
<HorizontalLine />
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
> The parent of the EndnoteRange (a Text, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Story or XmlStory).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the EndnoteRange within its containing object.
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
> Endnote **sourceEndnote** 
>
> The endnote reference corresponding to the endnote text range.
<HorizontalLine />
> Mixed **endnoteRangeContent** 
>
> EndnoteRange Contents, It will skip the endnote number while setting/replacing the content into endnote range. Can return: String, SpecialCharacters enumerator or Array of Strings or SpecialCharacters enumerators. Can also accept: NothingEnum enumerator or Array of Strings, SpecialCharacters enumerators or NothingEnum enumerators.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the EndnoteRange; this is an alias to the EndnoteRange's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **deleteEndnoteRange**()
> 
> Deletes the endnote range and the associated endnote anchor.
<HorizontalLine />
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the EndnoteRange.
<HorizontalLine />
> EndnoteRange **getElements**()
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


