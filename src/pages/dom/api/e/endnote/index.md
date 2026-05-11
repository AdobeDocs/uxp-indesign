# Endnote
An endnote.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The location of the endnote marker in the parent story
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Endnote.
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
> The parent of the Endnote (a InsertionPoint, Story, XmlStory, Cell or Table).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Endnote within its containing object.
*** 
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
*** 
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
*** 
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
*** 
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
*** 
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
*** 
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
*** 
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
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
> EndnoteRange **endnoteTextRange** 
>
> The endnote range object.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the Endnote; this is an alias to the Endnote's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **deleteEndnote**()
> 
> Deletes the endnote reference and the associated endnote text range.
*** 
> **insertTextInEndnote**( InsertionPoint **storyOffset**, String **contents** )
> 
> Insert the text in endnote text range at specified text index. Insertion position should lie within the start and end range indices excluding the markers
#### Parameters
| Type | Name | Description |
|---|---|---|
| InsertionPoint | storyOffset | The location within the story, specified as an insertion point. |
| String | contents | The content to insert. |

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
> Generates a string which, if executed, will return the Endnote.
*** 
> Endnote **getElements**()
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


