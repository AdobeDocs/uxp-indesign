# ConditionSet
A condition set for conditional text.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ConditionSet.
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
> The parent of the ConditionSet (a Application or Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the ConditionSet within its containing object.
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
> The name of the ConditionSet.
*** 
> Mixed **setConditions** 
>
> List of conditions and visibilities in the set. Can return: Ordered array containing condition:Condition, visibility:Boolean.
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
> Delete a condition set for conditional text.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | replacingWith | The condition set to apply to the text in place of the deleted condition set. By default, no condition set is applied in place of the deleted condition set. Can accept: ConditionSet or String. (Optional) |

*** 
> **redefine**()
> 
> Redefine a condition set with the currently existing conditions and visibilities.
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
> Generates a string which, if executed, will return the ConditionSet.
*** 
> ConditionSet **getElements**()
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


