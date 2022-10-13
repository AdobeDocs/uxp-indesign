# InsertionPoints
A collection of insertion points.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the InsertionPoint.
*** 
> InsertionPoint **item**( Mixed **index** )
> 
> Returns the InsertionPoint with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> InsertionPoint **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the InsertionPoints within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The InsertionPoint, index, or name at the beginning of the range. Can accept: InsertionPoint, Long Integer or String. |
| Mixed | to | The InsertionPoint, index, or name at the end of the range. Can accept: InsertionPoint, Long Integer or String. |

*** 
> InsertionPoint **firstItem**()
> 
> Returns the first InsertionPoint in the collection.
*** 
> InsertionPoint **lastItem**()
> 
> Returns the last InsertionPoint in the collection.
*** 
> InsertionPoint **middleItem**()
> 
> Returns the middle InsertionPoint in the collection.
*** 
> InsertionPoint **previousItem**( InsertionPoint **obj** )
> 
> Returns the InsertionPoint with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| InsertionPoint | obj | The index of the InsertionPoint that follows the desired InsertionPoint. |

*** 
> InsertionPoint **nextItem**( InsertionPoint **obj** )
> 
> Returns the InsertionPoint whose index follows the specified InsertionPoint in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| InsertionPoint | obj | The InsertionPoint whose index comes before the desired InsertionPoint. |

*** 
> InsertionPoint **anyItem**()
> 
> Returns any InsertionPoint in the collection.
*** 
> InsertionPoint **everyItem**()
> 
> Returns every InsertionPoint in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the InsertionPoint.
*** 
> InsertionPoint **[]**( Number **index** )
> 
> Returns the InsertionPoint with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


