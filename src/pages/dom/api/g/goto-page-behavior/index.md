# GotoPageBehavior
A behavior object that jumps to a specific page of the document.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the GotoPageBehavior.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the GotoPageBehavior.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Button **parent** 
>
> The parent of the GotoPageBehavior (a Button).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the GotoPageBehavior within its containing object.
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
> GoToZoomOptions **zoomSetting** 
>
> The zoom setting.
<HorizontalLine />
> Number **pageNumber** 
>
> The page number to go to expressed as an index where 1 is the first page.
<HorizontalLine />
> Boolean **enableBehavior** 
>
> If true, the behavior is enabled.
<HorizontalLine />
> BehaviorEvents **behaviorEvent** 
>
> The event which triggers the behavior.
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
> Deletes the GotoPageBehavior.
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
> Generates a string which, if executed, will return the GotoPageBehavior.
<HorizontalLine />
> GotoPageBehavior **getElements**()
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


