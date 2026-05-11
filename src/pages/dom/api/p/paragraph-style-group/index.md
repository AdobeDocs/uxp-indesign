# ParagraphStyleGroup
A paragraph style group.

## Instance
> *Read Only* 
> 
> ParagraphStyle **allParagraphStyles** 
>
> Lists all paragraph styles (regardless of their group).
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ParagraphStyleGroup.
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
> The parent of the ParagraphStyleGroup (a Document, Application or ParagraphStyleGroup).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the ParagraphStyleGroup within its containing object.
*** 
> *Read Only* 
> 
> ParagraphStyles **paragraphStyles** 
>
> A collection of paragraph styles.
*** 
> *Read Only* 
> 
> ParagraphStyleGroups **paragraphStyleGroups** 
>
> A collection of paragraph style groups.
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
> String **name** 
>
> The name of the ParagraphStyleGroup.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> ParagraphStyleGroup **duplicate**()
> 
> Duplicates the ParagraphStyleGroup.
*** 
> ParagraphStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the style to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

*** 
> **remove**( Mixed **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | replacingWith | The style to apply in place of the deleted style. Can accept: ParagraphStyle or CharacterStyle. (Optional) |

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
> Generates a string which, if executed, will return the ParagraphStyleGroup.
*** 
> ParagraphStyleGroup **getElements**()
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


