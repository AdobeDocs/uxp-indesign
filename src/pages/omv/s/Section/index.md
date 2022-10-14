# Section
A section.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of pages in the section.
*** 
> *Read Only* 
> 
> Number **alternateLayoutLength** 
>
> The number of pages in the alternate layout section.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Section.
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
> The parent of the Section (a Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Section within its containing object.
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
> String **alternateLayout** 
>
> The alternate layout name for a set of pages.
*** 
> String **name** 
>
> The name of the Section.
*** 
> Mixed **pageNumberStyle** 
>
> The page number style. Can return: PageNumberStyle enumerator or String.
*** 
> Boolean **continueNumbering** 
>
> If true, continues page numbers sequentially from the previous section.
*** 
> Boolean **includeSectionPrefix** 
>
> If true, places the specified prefix before page numbers on all pages in the section.
*** 
> Number **pageNumberStart** 
>
> The page number assigned to the first page in the section. Note: Valid only when continue numbering is false.
*** 
> String **marker** 
>
> The section marker.
*** 
> Page **pageStart** 
>
> The start page for the section.
*** 
> String **sectionPrefix** 
>
> The prefix to place before page numbers on pages in the section. May include up to 8 characters. Note: Valid only when include section prefix is true.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Section.
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
> Generates a string which, if executed, will return the Section.
*** 
> Section **getElements**()
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


