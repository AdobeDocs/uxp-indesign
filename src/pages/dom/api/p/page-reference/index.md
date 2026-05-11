# PageReference
The page reference for an index topic.

## Instance
> *Read Only* 
> 
> Text **sourceText** 
>
> The hyperlinked text or insertion point.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the PageReference.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Topic **parent** 
>
> The parent of the PageReference (a Topic).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the PageReference within its containing object.
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
> PageReferenceType **pageReferenceType** 
>
> Options for index page references.
*** 
> Mixed **pageReferenceLimit** 
>
> The paragraph style or number of paragraphs or pages that defines the last page in a page range. Note: Valid only when page reference type specifies the next use of a paragraph style or a number of paragraphs or pages. . Can return: ParagraphStyle or Long Integer.
*** 
> CharacterStyle **pageNumberStyleOverride** 
>
> The character style applied to page numbers.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the PageReference; this is an alias to the PageReference's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PageReference.
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
> Generates a string which, if executed, will return the PageReference.
*** 
> PageReference **getElements**()
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


