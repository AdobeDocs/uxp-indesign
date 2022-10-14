# Cells
A collection of table cells.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Cell.
*** 
> Cell **item**( Mixed **index** )
> 
> Returns the Cell with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Cell **itemByName**( String **name** )
> 
> Returns the Cell with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Cell **itemByID**( Number **id** )
> 
> Returns the Cell with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Cell **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Cells within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Cell, index, or name at the beginning of the range. Can accept: Cell, Long Integer or String. |
| Mixed | to | The Cell, index, or name at the end of the range. Can accept: Cell, Long Integer or String. |

*** 
> Cell **firstItem**()
> 
> Returns the first Cell in the collection.
*** 
> Cell **lastItem**()
> 
> Returns the last Cell in the collection.
*** 
> Cell **middleItem**()
> 
> Returns the middle Cell in the collection.
*** 
> Cell **previousItem**( Cell **obj** )
> 
> Returns the Cell with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Cell | obj | The index of the Cell that follows the desired Cell. |

*** 
> Cell **nextItem**( Cell **obj** )
> 
> Returns the Cell whose index follows the specified Cell in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Cell | obj | The Cell whose index comes before the desired Cell. |

*** 
> Cell **anyItem**()
> 
> Returns any Cell in the collection.
*** 
> Cell **everyItem**()
> 
> Returns every Cell in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Cell.
*** 
> Cell **[]**( Number **index** )
> 
> Returns the Cell with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


