# PageReference
The page reference for an index topic.

## Instance
> *Read Only* 
> 
> Text **sourceText** 
>
> The hyperlinked text or insertion point.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the PageReference.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Topic **parent** 
>
> The parent of the PageReference (a Topic).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the PageReference within its containing object.
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
> PageReferenceType **pageReferenceType** 
>
> Options for index page references.
<HorizontalLine />
> Mixed **pageReferenceLimit** 
>
> The paragraph style or number of paragraphs or pages that defines the last page in a page range. Note: Valid only when page reference type specifies the next use of a paragraph style or a number of paragraphs or pages. . Can return: ParagraphStyle or Long Integer.
<HorizontalLine />
> CharacterStyle **pageNumberStyleOverride** 
>
> The character style applied to page numbers.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> String **name** 
>
> The name of the PageReference; this is an alias to the PageReference's label property.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the PageReference.
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
> Generates a string which, if executed, will return the PageReference.
<HorizontalLine />
> PageReference **getElements**()
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


