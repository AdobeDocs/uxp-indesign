# TableStyleMappings
A collection of table style mappings.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TableStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
> 
> Adds a style mapping.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | sourceStyleName | The source style name. |
| String | destinationStyleName | The destination style name. |
| MapType | mappingRuleType | The mapping type |
| Object | withProperties | Initial values for properties of the new TableStyleMapping (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TableStyleMapping.
*** 
> TableStyleMapping **item**( Mixed **index** )
> 
> Returns the TableStyleMapping with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TableStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TableStyleMappings within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TableStyleMapping, index, or name at the beginning of the range. Can accept: TableStyleMapping, Long Integer or String. |
| Mixed | to | The TableStyleMapping, index, or name at the end of the range. Can accept: TableStyleMapping, Long Integer or String. |

*** 
> TableStyleMapping **firstItem**()
> 
> Returns the first TableStyleMapping in the collection.
*** 
> TableStyleMapping **lastItem**()
> 
> Returns the last TableStyleMapping in the collection.
*** 
> TableStyleMapping **middleItem**()
> 
> Returns the middle TableStyleMapping in the collection.
*** 
> TableStyleMapping **previousItem**( TableStyleMapping **obj** )
> 
> Returns the TableStyleMapping with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyleMapping | obj | The index of the TableStyleMapping that follows the desired TableStyleMapping. |

*** 
> TableStyleMapping **nextItem**( TableStyleMapping **obj** )
> 
> Returns the TableStyleMapping whose index follows the specified TableStyleMapping in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyleMapping | obj | The TableStyleMapping whose index comes before the desired TableStyleMapping. |

*** 
> TableStyleMapping **anyItem**()
> 
> Returns any TableStyleMapping in the collection.
*** 
> TableStyleMapping **everyItem**()
> 
> Returns every TableStyleMapping in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TableStyleMapping.
*** 
> TableStyleMapping **[]**( Number **index** )
> 
> Returns the TableStyleMapping with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


