# CharStyleMappings
A collection of char style mappings.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CharStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
> 
> Adds a style mapping.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | sourceStyleName | The source style name. |
| String | destinationStyleName | The destination style name. |
| MapType | mappingRuleType | The mapping type |
| Object | withProperties | Initial values for properties of the new CharStyleMapping (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the CharStyleMapping.
<HorizontalLine />
> CharStyleMapping **item**( Mixed **index** )
> 
> Returns the CharStyleMapping with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> CharStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CharStyleMappings within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CharStyleMapping, index, or name at the beginning of the range. Can accept: CharStyleMapping, Long Integer or String. |
| Mixed | to | The CharStyleMapping, index, or name at the end of the range. Can accept: CharStyleMapping, Long Integer or String. |

<HorizontalLine />
> CharStyleMapping **firstItem**()
> 
> Returns the first CharStyleMapping in the collection.
<HorizontalLine />
> CharStyleMapping **lastItem**()
> 
> Returns the last CharStyleMapping in the collection.
<HorizontalLine />
> CharStyleMapping **middleItem**()
> 
> Returns the middle CharStyleMapping in the collection.
<HorizontalLine />
> CharStyleMapping **previousItem**( CharStyleMapping **obj** )
> 
> Returns the CharStyleMapping with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharStyleMapping | obj | The index of the CharStyleMapping that follows the desired CharStyleMapping. |

<HorizontalLine />
> CharStyleMapping **nextItem**( CharStyleMapping **obj** )
> 
> Returns the CharStyleMapping whose index follows the specified CharStyleMapping in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CharStyleMapping | obj | The CharStyleMapping whose index comes before the desired CharStyleMapping. |

<HorizontalLine />
> CharStyleMapping **anyItem**()
> 
> Returns any CharStyleMapping in the collection.
<HorizontalLine />
> CharStyleMapping **everyItem**()
> 
> Returns every CharStyleMapping in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the CharStyleMapping.
<HorizontalLine />
> CharStyleMapping **[]**( Number **index** )
> 
> Returns the CharStyleMapping with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


