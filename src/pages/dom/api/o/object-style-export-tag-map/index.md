# ObjectStyleExportTagMap
A mapping object that maps an object export type to an export tag.

## Instance
> *Read Only* 
> 
> String **exportType** 
>
> The type of export.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> ObjectStyle **parent** 
>
> The parent of the ObjectStyleExportTagMap (a ObjectStyle).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the ObjectStyleExportTagMap within its containing object.
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
> String **exportTag** 
>
> The tag to map.
<HorizontalLine />
> String **exportClass** 
>
> The class to map.
<HorizontalLine />
> String **exportAttributes** 
>
> The attributes to map.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the ObjectStyleExportTagMap.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyleExportTagMap.
<HorizontalLine />
> ObjectStyleExportTagMap **getElements**()
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


