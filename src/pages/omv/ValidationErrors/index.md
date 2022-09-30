# ValidationErrors
A collection of XML validation errors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ValidationError.
*** 
> ValidationError **item**( Mixed **index** )
> 
> Returns the ValidationError with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ValidationError **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ValidationErrors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ValidationError, index, or name at the beginning of the range. Can accept: ValidationError, Long Integer or String. |
| Mixed | to | The ValidationError, index, or name at the end of the range. Can accept: ValidationError, Long Integer or String. |

*** 
> ValidationError **firstItem**()
> 
> Returns the first ValidationError in the collection.
*** 
> ValidationError **lastItem**()
> 
> Returns the last ValidationError in the collection.
*** 
> ValidationError **middleItem**()
> 
> Returns the middle ValidationError in the collection.
*** 
> ValidationError **previousItem**( ValidationError **obj** )
> 
> Returns the ValidationError with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ValidationError | obj | The index of the ValidationError that follows the desired ValidationError. |

*** 
> ValidationError **nextItem**( ValidationError **obj** )
> 
> Returns the ValidationError whose index follows the specified ValidationError in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ValidationError | obj | The ValidationError whose index comes before the desired ValidationError. |

*** 
> ValidationError **anyItem**()
> 
> Returns any ValidationError in the collection.
*** 
> ValidationError **everyItem**()
> 
> Returns every ValidationError in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ValidationError.
*** 
> ValidationError **[]**( Number **index** )
> 
> Returns the ValidationError with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


