# Changes
A collection of changes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Change.
*** 
> Change **item**( Mixed **index** )
> 
> Returns the Change with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Change **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Changes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Change, index, or name at the beginning of the range. Can accept: Change, Long Integer or String. |
| Mixed | to | The Change, index, or name at the end of the range. Can accept: Change, Long Integer or String. |

*** 
> Change **firstItem**()
> 
> Returns the first Change in the collection.
*** 
> Change **lastItem**()
> 
> Returns the last Change in the collection.
*** 
> Change **middleItem**()
> 
> Returns the middle Change in the collection.
*** 
> Change **previousItem**( Change **obj** )
> 
> Returns the Change with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Change | obj | The index of the Change that follows the desired Change. |

*** 
> Change **nextItem**( Change **obj** )
> 
> Returns the Change whose index follows the specified Change in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Change | obj | The Change whose index comes before the desired Change. |

*** 
> Change **anyItem**()
> 
> Returns any Change in the collection.
*** 
> Change **everyItem**()
> 
> Returns every Change in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Change.
*** 
> Change **[]**( Number **index** )
> 
> Returns the Change with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


