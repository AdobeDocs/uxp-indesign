# CellStyleGroups
A collection of cell style groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CellStyleGroup **add**( Object **withProperties** )
> 
> Creates a new CellStyleGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CellStyleGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CellStyleGroup.
*** 
> CellStyleGroup **item**( Mixed **index** )
> 
> Returns the CellStyleGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CellStyleGroup **itemByName**( String **name** )
> 
> Returns the CellStyleGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CellStyleGroup **itemByID**( Number **id** )
> 
> Returns the CellStyleGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CellStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CellStyleGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CellStyleGroup, index, or name at the beginning of the range. Can accept: CellStyleGroup, Long Integer or String. |
| Mixed | to | The CellStyleGroup, index, or name at the end of the range. Can accept: CellStyleGroup, Long Integer or String. |

*** 
> CellStyleGroup **firstItem**()
> 
> Returns the first CellStyleGroup in the collection.
*** 
> CellStyleGroup **lastItem**()
> 
> Returns the last CellStyleGroup in the collection.
*** 
> CellStyleGroup **middleItem**()
> 
> Returns the middle CellStyleGroup in the collection.
*** 
> CellStyleGroup **previousItem**( CellStyleGroup **obj** )
> 
> Returns the CellStyleGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyleGroup | obj | The index of the CellStyleGroup that follows the desired CellStyleGroup. |

*** 
> CellStyleGroup **nextItem**( CellStyleGroup **obj** )
> 
> Returns the CellStyleGroup whose index follows the specified CellStyleGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyleGroup | obj | The CellStyleGroup whose index comes before the desired CellStyleGroup. |

*** 
> CellStyleGroup **anyItem**()
> 
> Returns any CellStyleGroup in the collection.
*** 
> CellStyleGroup **everyItem**()
> 
> Returns every CellStyleGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CellStyleGroup.
*** 
> CellStyleGroup **[]**( Number **index** )
> 
> Returns the CellStyleGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


