# MojikumiTable
The mojikumi table.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MojikumiTable.
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
> The parent of the MojikumiTable (a Document or Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the MojikumiTable within its containing object.
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
> The name of the MojikumiTable.
<HorizontalLine />
> MojikumiTableDefaults **basedOnMojikumiSet** 
>
> The existing mojikumi set on which to base the new mojikumi set.
<HorizontalLine />
> Mixed **overrideMojikumiAkiList** 
>
> The mojikumi overrides for aki. Can return: Ordered array containing targetMojikumiClass:Short Integer, sideMojikumiClass:Short Integer, sideIsAfterTarget:Boolean, minimum:Real, desired:Real, maximum:Real, compressionPriority:Short Integer, akiDoesNotFloat:Boolean.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the MojikumiTable.
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
> Generates a string which, if executed, will return the MojikumiTable.
<HorizontalLine />
> MojikumiTable **getElements**()
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


