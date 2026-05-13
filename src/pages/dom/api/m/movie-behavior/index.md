# MovieBehavior
A movie behavior object.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the MovieBehavior.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the MovieBehavior.
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
> The parent of the MovieBehavior (a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the MovieBehavior within its containing object.
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
> Movie **movieItem** 
>
> The movie page item.
<HorizontalLine />
> Number **navigationPointID** 
>
> The id of the navigation point to play from. This property is ignored for all operations other than Play From Navigation Point.
<HorizontalLine />
> MoviePlayOperations **operation** 
>
> The playback mode.
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
> Deletes the MovieBehavior.
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
> Generates a string which, if executed, will return the MovieBehavior.
<HorizontalLine />
> MovieBehavior **getElements**()
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


