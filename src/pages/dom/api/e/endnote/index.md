# Endnote
An endnote.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The location of the endnote marker in the parent story
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Endnote.
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
> The parent of the Endnote (a InsertionPoint, Story, XmlStory, Cell or Table).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Endnote within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
<HorizontalLine />
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
<HorizontalLine />
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
<HorizontalLine />
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
<HorizontalLine />
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
<HorizontalLine />
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
<HorizontalLine />
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
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
> EndnoteRange **endnoteTextRange** 
>
> The endnote range object.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the Endnote; this is an alias to the Endnote's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **deleteEndnote**()
> 
> Deletes the endnote reference and the associated endnote text range.
<HorizontalLine />
> **insertTextInEndnote**( InsertionPoint **storyOffset**, String **contents** )
> 
> Insert the text in endnote text range at specified text index. Insertion position should lie within the start and end range indices excluding the markers
#### Parameters
| Type | Name | Description |
|---|---|---|
| InsertionPoint | storyOffset | The location within the story, specified as an insertion point. |
| String | contents | The content to insert. |

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
> Generates a string which, if executed, will return the Endnote.
<HorizontalLine />
> Endnote **getElements**()
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


