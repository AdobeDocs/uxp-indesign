# GotoPageBehavior
A behavior object that jumps to a specific page of the document.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the GotoPageBehavior.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the GotoPageBehavior.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Button **parent** 
>
> The parent of the GotoPageBehavior (a Button).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the GotoPageBehavior within its containing object.
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
> GoToZoomOptions **zoomSetting** 
>
> The zoom setting.
*** 
> Number **pageNumber** 
>
> The page number to go to expressed as an index where 1 is the first page.
*** 
> Boolean **enableBehavior** 
>
> If true, the behavior is enabled.
*** 
> BehaviorEvents **behaviorEvent** 
>
> The event which triggers the behavior.
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
> Deletes the GotoPageBehavior.
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
> Generates a string which, if executed, will return the GotoPageBehavior.
*** 
> GotoPageBehavior **getElements**()
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


