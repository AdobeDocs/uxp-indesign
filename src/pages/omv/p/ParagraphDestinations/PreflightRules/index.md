# PreflightRules
A collection of preflight rules.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the PreflightRule.
*** 
> PreflightRule **item**( Mixed **index** )
> 
> Returns the PreflightRule with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PreflightRule **itemByName**( String **name** )
> 
> Returns the PreflightRule with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PreflightRule **itemByID**( Number **id** )
> 
> Returns the PreflightRule with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PreflightRule **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PreflightRules within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PreflightRule, index, or name at the beginning of the range. Can accept: PreflightRule, Long Integer or String. |
| Mixed | to | The PreflightRule, index, or name at the end of the range. Can accept: PreflightRule, Long Integer or String. |

*** 
> PreflightRule **firstItem**()
> 
> Returns the first PreflightRule in the collection.
*** 
> PreflightRule **lastItem**()
> 
> Returns the last PreflightRule in the collection.
*** 
> PreflightRule **middleItem**()
> 
> Returns the middle PreflightRule in the collection.
*** 
> PreflightRule **previousItem**( PreflightRule **obj** )
> 
> Returns the PreflightRule with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightRule | obj | The index of the PreflightRule that follows the desired PreflightRule. |

*** 
> PreflightRule **nextItem**( PreflightRule **obj** )
> 
> Returns the PreflightRule whose index follows the specified PreflightRule in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightRule | obj | The PreflightRule whose index comes before the desired PreflightRule. |

*** 
> PreflightRule **anyItem**()
> 
> Returns any PreflightRule in the collection.
*** 
> PreflightRule **everyItem**()
> 
> Returns every PreflightRule in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightRule.
*** 
> PreflightRule **[]**( Number **index** )
> 
> Returns the PreflightRule with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


