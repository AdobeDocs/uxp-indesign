# Lines
A collection of lines.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Line.
*** 
> Line **item**( Mixed **index** )
> 
> Returns the Line with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Line **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Lines within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Line, index, or name at the beginning of the range. Can accept: Line, Long Integer or String. |
| Mixed | to | The Line, index, or name at the end of the range. Can accept: Line, Long Integer or String. |

*** 
> Line **firstItem**()
> 
> Returns the first Line in the collection.
*** 
> Line **lastItem**()
> 
> Returns the last Line in the collection.
*** 
> Line **middleItem**()
> 
> Returns the middle Line in the collection.
*** 
> Line **previousItem**( Line **obj** )
> 
> Returns the Line with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Line | obj | The index of the Line that follows the desired Line. |

*** 
> Line **nextItem**( Line **obj** )
> 
> Returns the Line whose index follows the specified Line in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Line | obj | The Line whose index comes before the desired Line. |

*** 
> Line **anyItem**()
> 
> Returns any Line in the collection.
*** 
> Line **everyItem**()
> 
> Returns every Line in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Line.
*** 
> Line **[]**( Number **index** )
> 
> Returns the Line with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


