# Columns
A collection of table columns.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Mixed **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Column.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The Column's location relative to the reference object or within the table.  (Optional) |
| Mixed | reference | The reference object. Note: The reference object must be within the table. Required only when the at value contains before or after. Can accept: Row, Column, Cell or Table. (Optional) |
| Object | withProperties | Initial values for properties of the new Column (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Column.
*** 
> Column **item**( Mixed **index** )
> 
> Returns the Column with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Column **itemByName**( String **name** )
> 
> Returns the Column with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Column **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Columns within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Column, index, or name at the beginning of the range. Can accept: Column, Long Integer or String. |
| Mixed | to | The Column, index, or name at the end of the range. Can accept: Column, Long Integer or String. |

*** 
> Column **firstItem**()
> 
> Returns the first Column in the collection.
*** 
> Column **lastItem**()
> 
> Returns the last Column in the collection.
*** 
> Column **middleItem**()
> 
> Returns the middle Column in the collection.
*** 
> Column **previousItem**( Column **obj** )
> 
> Returns the Column with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Column | obj | The index of the Column that follows the desired Column. |

*** 
> Column **nextItem**( Column **obj** )
> 
> Returns the Column whose index follows the specified Column in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Column | obj | The Column whose index comes before the desired Column. |

*** 
> Column **anyItem**()
> 
> Returns any Column in the collection.
*** 
> Column **everyItem**()
> 
> Returns every Column in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Column.
*** 
> Column **[]**( Number **index** )
> 
> Returns the Column with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


