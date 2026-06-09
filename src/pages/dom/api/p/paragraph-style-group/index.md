# ParagraphStyleGroup
A paragraph style group.

## Instance
> *Read Only* 
> 
> ParagraphStyle **allParagraphStyles** 
>
> Lists all paragraph styles (regardless of their group).
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ParagraphStyleGroup.
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
> The parent of the ParagraphStyleGroup (a Document, Application or ParagraphStyleGroup).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the ParagraphStyleGroup within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> ParagraphStyles **paragraphStyles** 
>
> A collection of paragraph styles.
<HorizontalLine />
> *Read Only* 
> 
> ParagraphStyleGroups **paragraphStyleGroups** 
>
> A collection of paragraph style groups.
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
> String **name** 
>
> The name of the ParagraphStyleGroup.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> ParagraphStyleGroup **duplicate**()
> 
> Duplicates the ParagraphStyleGroup.
<HorizontalLine />
> ParagraphStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the style to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: ParagraphStyle, ParagraphStyleGroup, CharacterStyle, CharacterStyleGroup, CellStyle, CellStyleGroup, TableStyle, TableStyleGroup, Document or Application. (Optional) |

<HorizontalLine />
> **remove**( Mixed **replacingWith** )
> 
> Deletes the style.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | replacingWith | The style to apply in place of the deleted style. Can accept: ParagraphStyle or CharacterStyle. (Optional) |

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
> Generates a string which, if executed, will return the ParagraphStyleGroup.
<HorizontalLine />
> ParagraphStyleGroup **getElements**()
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


