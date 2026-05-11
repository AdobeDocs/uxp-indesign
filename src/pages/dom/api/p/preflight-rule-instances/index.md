# PreflightRuleInstances
A collection of preflight rule instances.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Mixed **add**( String **id**, Object **withProperties** )
> 
> Adds a new preflight rule to the profile.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | id | The ID of the rule to be added |
| Object | withProperties | Initial values for properties of the new PreflightRuleInstance (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PreflightRuleInstance.
*** 
> PreflightRuleInstance **item**( Mixed **index** )
> 
> Returns the PreflightRuleInstance with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PreflightRuleInstance **itemByName**( String **name** )
> 
> Returns the PreflightRuleInstance with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PreflightRuleInstance **itemByID**( Number **id** )
> 
> Returns the PreflightRuleInstance with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PreflightRuleInstance **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PreflightRuleInstances within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PreflightRuleInstance, index, or name at the beginning of the range. Can accept: PreflightRuleInstance, Long Integer or String. |
| Mixed | to | The PreflightRuleInstance, index, or name at the end of the range. Can accept: PreflightRuleInstance, Long Integer or String. |

*** 
> PreflightRuleInstance **firstItem**()
> 
> Returns the first PreflightRuleInstance in the collection.
*** 
> PreflightRuleInstance **lastItem**()
> 
> Returns the last PreflightRuleInstance in the collection.
*** 
> PreflightRuleInstance **middleItem**()
> 
> Returns the middle PreflightRuleInstance in the collection.
*** 
> PreflightRuleInstance **previousItem**( PreflightRuleInstance **obj** )
> 
> Returns the PreflightRuleInstance with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightRuleInstance | obj | The index of the PreflightRuleInstance that follows the desired PreflightRuleInstance. |

*** 
> PreflightRuleInstance **nextItem**( PreflightRuleInstance **obj** )
> 
> Returns the PreflightRuleInstance whose index follows the specified PreflightRuleInstance in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightRuleInstance | obj | The PreflightRuleInstance whose index comes before the desired PreflightRuleInstance. |

*** 
> PreflightRuleInstance **anyItem**()
> 
> Returns any PreflightRuleInstance in the collection.
*** 
> PreflightRuleInstance **everyItem**()
> 
> Returns every PreflightRuleInstance in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightRuleInstance.
*** 
> PreflightRuleInstance **[]**( Number **index** )
> 
> Returns the PreflightRuleInstance with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


