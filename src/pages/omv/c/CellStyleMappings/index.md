# CellStyleMappings
A collection of cell style mappings.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CellStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
> 
> Adds a style mapping.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | sourceStyleName | The source style name. |
| String | destinationStyleName | The destination style name. |
| MapType | mappingRuleType | The mapping type |
| Object | withProperties | Initial values for properties of the new CellStyleMapping (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CellStyleMapping.
*** 
> CellStyleMapping **item**( Mixed **index** )
> 
> Returns the CellStyleMapping with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CellStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CellStyleMappings within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CellStyleMapping, index, or name at the beginning of the range. Can accept: CellStyleMapping, Long Integer or String. |
| Mixed | to | The CellStyleMapping, index, or name at the end of the range. Can accept: CellStyleMapping, Long Integer or String. |

*** 
> CellStyleMapping **firstItem**()
> 
> Returns the first CellStyleMapping in the collection.
*** 
> CellStyleMapping **lastItem**()
> 
> Returns the last CellStyleMapping in the collection.
*** 
> CellStyleMapping **middleItem**()
> 
> Returns the middle CellStyleMapping in the collection.
*** 
> CellStyleMapping **previousItem**( CellStyleMapping **obj** )
> 
> Returns the CellStyleMapping with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyleMapping | obj | The index of the CellStyleMapping that follows the desired CellStyleMapping. |

*** 
> CellStyleMapping **nextItem**( CellStyleMapping **obj** )
> 
> Returns the CellStyleMapping whose index follows the specified CellStyleMapping in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CellStyleMapping | obj | The CellStyleMapping whose index comes before the desired CellStyleMapping. |

*** 
> CellStyleMapping **anyItem**()
> 
> Returns any CellStyleMapping in the collection.
*** 
> CellStyleMapping **everyItem**()
> 
> Returns every CellStyleMapping in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CellStyleMapping.
*** 
> CellStyleMapping **[]**( Number **index** )
> 
> Returns the CellStyleMapping with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


