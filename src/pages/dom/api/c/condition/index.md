# Condition
A condition for conditional text.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Condition.
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
> The parent of the Condition (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Condition within its containing object.
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
> The name of the Condition.
<HorizontalLine />
> Mixed **indicatorColor** 
>
> The color for the condition indicator; specified either as an array of three doubles representing RGB values in the range 0 to 255, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
<HorizontalLine />
> ConditionIndicatorMethod **indicatorMethod** 
>
> The condition indicator method.
<HorizontalLine />
> ConditionUnderlineIndicatorAppearance **underlineIndicatorAppearance** 
>
> The condition underline indicator appearance.
<HorizontalLine />
> Boolean **visible** 
>
> If true, the Condition is visible.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
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
> Generates a string which, if executed, will return the Condition.
<HorizontalLine />
> Condition **getElements**()
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


