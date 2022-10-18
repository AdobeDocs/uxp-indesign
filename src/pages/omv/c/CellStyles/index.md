# CellStyles
A collection of cell styles.

## Instance
> *Read Only* 
> 
> Mixed **length** 
>
> The number of objects in the collection. Can return: Long Integer or NothingEnum enumerator.

### Methods
> CellStyle **add**( Object **withProperties** )
> 
> Creates a new CellStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CellStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CellStyle.
*** 
> CellStyle **item**( Mixed **index** )
> 
> Returns the CellStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CellStyle **itemByName**( String **name** )
> 
> Returns the CellStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CellStyle **itemByID**( Number **id** )
> 
> Returns the CellStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CellStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CellStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CellStyle, index, or name at the beginning of the range. Can accept: CellStyle, Long Integer or String. |
| Mixed | to | The CellStyle, index, or name at the end of the range. Can accept: CellStyle, Long Integer or String. |

*** 
> CellStyle **firstItem**()
> 
> Returns the first CellStyle in the collection.
*** 
> CellStyle **lastItem**()
> 
> Returns the last CellStyle in the collection.
*** 
> CellStyle **middleItem**()
> 
> Returns the middle CellStyle in the collection.
*** 
> CellStyle **previousItem**( CellStyle **obj** )
> 
> Returns the CellStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyle | obj | The index of the CellStyle that follows the desired CellStyle. |

*** 
> CellStyle **nextItem**( CellStyle **obj** )
> 
> Returns the CellStyle whose index follows the specified CellStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyle | obj | The CellStyle whose index comes before the desired CellStyle. |

*** 
> CellStyle **anyItem**()
> 
> Returns any CellStyle in the collection.
*** 
> CellStyle **everyItem**()
> 
> Returns every CellStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CellStyle.
*** 
> CellStyle **[]**( Number **index** )
> 
> Returns the CellStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


