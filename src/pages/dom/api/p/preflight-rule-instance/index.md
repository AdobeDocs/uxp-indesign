# PreflightRuleInstance
A preflight rule instance.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the PreflightRuleInstance.
<HorizontalLine />
> *Read Only* 
> 
> String **id** 
>
> The rule ID for this rule.
<HorizontalLine />
> *Read Only* 
> 
> String **description** 
>
> The description of the PreflightRuleInstance.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> PreflightProfile **parent** 
>
> The parent of the PreflightRuleInstance (a PreflightProfile).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the PreflightRuleInstance within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> RuleDataObjects **ruleDataObjects** 
>
> A collection of prefight rule data objects.
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
> PreflightRuleFlag **flag** 
>
> Indicates whether or not the preflight rule is disabled, set for error, warning, or information level feedback.
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
> Deletes the PreflightRuleInstance.
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
> Generates a string which, if executed, will return the PreflightRuleInstance.
<HorizontalLine />
> PreflightRuleInstance **getElements**()
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


