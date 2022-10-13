# Rows
A collection of table rows.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Mixed **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Row.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The Row's location relative to the reference object or within the table.  (Optional) |
| Mixed | reference | The reference object. Note: The reference object must be within the table. Required only when the at value contains before or after. Can accept: Row, Column, Cell or Table. (Optional) |
| Object | withProperties | Initial values for properties of the new Row (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Row.
*** 
> Row **item**( Mixed **index** )
> 
> Returns the Row with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Row **itemByName**( String **name** )
> 
> Returns the Row with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Row **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Rows within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Row, index, or name at the beginning of the range. Can accept: Row, Long Integer or String. |
| Mixed | to | The Row, index, or name at the end of the range. Can accept: Row, Long Integer or String. |

*** 
> Row **firstItem**()
> 
> Returns the first Row in the collection.
*** 
> Row **lastItem**()
> 
> Returns the last Row in the collection.
*** 
> Row **middleItem**()
> 
> Returns the middle Row in the collection.
*** 
> Row **previousItem**( Row **obj** )
> 
> Returns the Row with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Row | obj | The index of the Row that follows the desired Row. |

*** 
> Row **nextItem**( Row **obj** )
> 
> Returns the Row whose index follows the specified Row in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Row | obj | The Row whose index comes before the desired Row. |

*** 
> Row **anyItem**()
> 
> Returns any Row in the collection.
*** 
> Row **everyItem**()
> 
> Returns every Row in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Row.
*** 
> Row **[]**( Number **index** )
> 
> Returns the Row with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


