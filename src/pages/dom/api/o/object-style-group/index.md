# ObjectStyleGroup
An object style group.

## Instance
> *Read Only* 
> 
> ObjectStyle **allObjectStyles** 
>
> All object styles contained by the ObjectStyleGroup.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ObjectStyleGroup.
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
> The parent of the ObjectStyleGroup (a Document, Application or ObjectStyleGroup).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the ObjectStyleGroup within its containing object.
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
> ObjectStyles **objectStyles** 
>
> A collection of object styles.
<HorizontalLine />
> *Read Only* 
> 
> ObjectStyleGroups **objectStyleGroups** 
>
> A collection of object style groups.
<HorizontalLine />
> String **name** 
>
> The name of the ObjectStyleGroup.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> ObjectStyleGroup **duplicate**()
> 
> Duplicates the ObjectStyleGroup.
<HorizontalLine />
> ObjectStyleGroup **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the ObjectStyleGroup to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The new location relative to the reference object or within the container object. |
| Mixed | reference | The reference object. Note: Required when the to parameter is before or after. Can accept: ObjectStyle, ObjectStyleGroup, Document or Application. (Optional) |

<HorizontalLine />
> **remove**( ObjectStyle **replacingWith** )
> 
> Deletes the ObjectStyleGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | replacingWith | The ObjectStyleGroup to apply in place of the deleted ObjectStyleGroup. (Optional) |

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
> Generates a string which, if executed, will return the ObjectStyleGroup.
<HorizontalLine />
> ObjectStyleGroup **getElements**()
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


