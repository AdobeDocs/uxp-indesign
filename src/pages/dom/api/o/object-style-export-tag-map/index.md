# ObjectStyleExportTagMap
A mapping object that maps an object export type to an export tag.

## Instance
> *Read Only* 
> 
> String **exportType** 
>
> The type of export.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> ObjectStyle **parent** 
>
> The parent of the ObjectStyleExportTagMap (a ObjectStyle).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the ObjectStyleExportTagMap within its containing object.
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
> String **exportTag** 
>
> The tag to map.
*** 
> String **exportClass** 
>
> The class to map.
*** 
> String **exportAttributes** 
>
> The attributes to map.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the ObjectStyleExportTagMap.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyleExportTagMap.
*** 
> ObjectStyleExportTagMap **getElements**()
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


