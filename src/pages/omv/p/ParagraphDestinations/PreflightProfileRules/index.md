# PreflightProfileRules
A collection of preflight profile rules.

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
| Object | withProperties | Initial values for properties of the new PreflightProfileRule (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PreflightProfileRule.
*** 
> PreflightProfileRule **item**( Mixed **index** )
> 
> Returns the PreflightProfileRule with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PreflightProfileRule **itemByName**( String **name** )
> 
> Returns the PreflightProfileRule with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PreflightProfileRule **itemByID**( Number **id** )
> 
> Returns the PreflightProfileRule with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PreflightProfileRule **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PreflightProfileRules within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PreflightProfileRule, index, or name at the beginning of the range. Can accept: PreflightProfileRule, Long Integer or String. |
| Mixed | to | The PreflightProfileRule, index, or name at the end of the range. Can accept: PreflightProfileRule, Long Integer or String. |

*** 
> PreflightProfileRule **firstItem**()
> 
> Returns the first PreflightProfileRule in the collection.
*** 
> PreflightProfileRule **lastItem**()
> 
> Returns the last PreflightProfileRule in the collection.
*** 
> PreflightProfileRule **middleItem**()
> 
> Returns the middle PreflightProfileRule in the collection.
*** 
> PreflightProfileRule **previousItem**( PreflightProfileRule **obj** )
> 
> Returns the PreflightProfileRule with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightProfileRule | obj | The index of the PreflightProfileRule that follows the desired PreflightProfileRule. |

*** 
> PreflightProfileRule **nextItem**( PreflightProfileRule **obj** )
> 
> Returns the PreflightProfileRule whose index follows the specified PreflightProfileRule in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightProfileRule | obj | The PreflightProfileRule whose index comes before the desired PreflightProfileRule. |

*** 
> PreflightProfileRule **anyItem**()
> 
> Returns any PreflightProfileRule in the collection.
*** 
> PreflightProfileRule **everyItem**()
> 
> Returns every PreflightProfileRule in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightProfileRule.
*** 
> PreflightProfileRule **[]**( Number **index** )
> 
> Returns the PreflightProfileRule with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


