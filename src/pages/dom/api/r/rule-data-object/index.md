# RuleDataObject
A preflight rule data object.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the RuleDataObject.
<HorizontalLine />
> *Read Only* 
> 
> RuleDataType **dataType** 
>
> The type of data.
<HorizontalLine />
> *Read Only* 
> 
> String **id** 
>
> The ID for this rule data object.
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
> The parent of the RuleDataObject (a PreflightProfileRule or PreflightRuleInstance).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the RuleDataObject within its containing object.
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
> Mixed **dataValue** 
>
> The value for this data object. Can return: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the RuleDataObject.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the RuleDataObject.
<HorizontalLine />
> RuleDataObject **getElements**()
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


