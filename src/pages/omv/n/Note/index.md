# Note
A note in a story.

## Instance
> *Read Only* 
> 
> Date **creationDate** 
>
> The date and time the note was created.
*** 
> *Read Only* 
> 
> Date **modificationDate** 
>
> The date and time the note was last modified.
*** 
> *Read Only* 
> 
> String **userName** 
>
> The user who made the note.
*** 
> *Read Only* 
> 
> InsertionPoint **storyOffset** 
>
> The insertion point before the table in the story containing the table.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Note.
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
> The parent of the Note (a XmlStory, Story, TextFrame, EndnoteTextFrame, InsertionPoint or Cell).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Note within its containing object.
*** 
> *Read Only* 
> 
> TextVariableInstances **textVariableInstances** 
>
> A collection of text variable instances.
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
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
*** 
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
*** 
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
*** 
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
*** 
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
*** 
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
*** 
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
*** 
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
*** 
> *Read Only* 
> 
> HiddenTexts **hiddenTexts** 
>
> A collection of hidden text objects.
*** 
> Boolean **collapsed** 
>
> If true, the note is collapsed in galley view.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the Note; this is an alias to the Note's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Note.
*** 
> **convertToText**()
> 
> Converts the note to story text.
*** 
> Note **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the note to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The new location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: Text or Story. (Optional) |

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
> Generates a string which, if executed, will return the Note.
*** 
> Note **getElements**()
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


