# PICTs
A collection of PICT graphics.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the PICT.
*** 
> PICT **item**( Mixed **index** )
> 
> Returns the PICT with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PICT **itemByName**( String **name** )
> 
> Returns the PICT with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PICT **itemByID**( Number **id** )
> 
> Returns the PICT with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PICT **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PICTs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PICT, index, or name at the beginning of the range. Can accept: PICT, Long Integer or String. |
| Mixed | to | The PICT, index, or name at the end of the range. Can accept: PICT, Long Integer or String. |

*** 
> PICT **firstItem**()
> 
> Returns the first PICT in the collection.
*** 
> PICT **lastItem**()
> 
> Returns the last PICT in the collection.
*** 
> PICT **middleItem**()
> 
> Returns the middle PICT in the collection.
*** 
> PICT **previousItem**( PICT **obj** )
> 
> Returns the PICT with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PICT | obj | The index of the PICT that follows the desired PICT. |

*** 
> PICT **nextItem**( PICT **obj** )
> 
> Returns the PICT whose index follows the specified PICT in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PICT | obj | The PICT whose index comes before the desired PICT. |

*** 
> PICT **anyItem**()
> 
> Returns any PICT in the collection.
*** 
> PICT **everyItem**()
> 
> Returns every PICT in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PICT.
*** 
> PICT **[]**( Number **index** )
> 
> Returns the PICT with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


