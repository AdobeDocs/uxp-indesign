# HiddenText
A hidden text object.

## Instance
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The insertion point before the table in the story containing the table.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the HiddenText.
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
> The parent of the HiddenText (a Story, XmlStory, TextFrame, EndnoteTextFrame, InsertionPoint, Note, Cell or Footnote).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the HiddenText within its containing object.
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
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
<HorizontalLine />
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
<HorizontalLine />
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
<HorizontalLine />
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
<HorizontalLine />
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
<HorizontalLine />
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
<HorizontalLine />
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
<HorizontalLine />
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the HiddenText; this is an alias to the HiddenText's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
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
> Generates a string which, if executed, will return the HiddenText.
<HorizontalLine />
> HiddenText **getElements**()
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


