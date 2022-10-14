# Condition
A condition for conditional text.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Condition.
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
> The parent of the Condition (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Condition within its containing object.
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
> The name of the Condition.
*** 
> Mixed **indicatorColor** 
>
> The color for the condition indicator; specified either as an array of three doubles representing RGB values in the range 0 to 255, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> ConditionIndicatorMethod **indicatorMethod** 
>
> The condition indicator method.
*** 
> ConditionUnderlineIndicatorAppearance **underlineIndicatorAppearance** 
>
> The condition underline indicator appearance.
*** 
> Boolean **visible** 
>
> If true, the Condition is visible.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**( Mixed **replacingWith** )
> 
> Delete the condition.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | replacingWith | The condition to apply to text in place of the deleted condition. By default, no condition is applied in place of the deleted condition. Can accept: Condition or String. (Optional) |

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
> Generates a string which, if executed, will return the Condition.
*** 
> Condition **getElements**()
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


