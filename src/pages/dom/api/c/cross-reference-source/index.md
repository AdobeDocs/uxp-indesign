# CrossReferenceSource
A cross reference text source object.

## Instance
> *Read Only* 
> 
> Boolean **hidden** 
>
> If true, the hyperlink is hidden.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the CrossReferenceSource.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the CrossReferenceSource (a Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the CrossReferenceSource within its containing object.
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
> CrossReferenceFormat **appliedFormat** 
>
> Format used for cross reference source.
*** 
> String **name** 
>
> The name of the CrossReferenceSource.
*** 
> Text **sourceText** 
>
> The hyperlinked text or insertion point.
*** 
> CharacterStyle **appliedCharacterStyle** 
>
> Character style of the hyperlink text source.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **update**()
> 
> Updates cross reference text source content.
*** 
> **remove**()
> 
> Deletes the CrossReferenceSource.
*** 
> **showSource**()
> 
> Jumps to the hyperlink source.
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
> Generates a string which, if executed, will return the CrossReferenceSource.
*** 
> CrossReferenceSource **getElements**()
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


