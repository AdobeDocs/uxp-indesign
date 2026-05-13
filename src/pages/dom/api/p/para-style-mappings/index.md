# ParaStyleMappings
A collection of para style mappings.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ParaStyleMapping **add**( String **sourceStyleName**, String **destinationStyleName**, MapType **mappingRuleType**, Object **withProperties** )
> 
> Adds a style mapping.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | sourceStyleName | The source style name. |
| String | destinationStyleName | The destination style name. |
| MapType | mappingRuleType | The mapping type |
| Object | withProperties | Initial values for properties of the new ParaStyleMapping (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the ParaStyleMapping.
<HorizontalLine />
> ParaStyleMapping **item**( Mixed **index** )
> 
> Returns the ParaStyleMapping with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ParaStyleMapping **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ParaStyleMappings within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ParaStyleMapping, index, or name at the beginning of the range. Can accept: ParaStyleMapping, Long Integer or String. |
| Mixed | to | The ParaStyleMapping, index, or name at the end of the range. Can accept: ParaStyleMapping, Long Integer or String. |

<HorizontalLine />
> ParaStyleMapping **firstItem**()
> 
> Returns the first ParaStyleMapping in the collection.
<HorizontalLine />
> ParaStyleMapping **lastItem**()
> 
> Returns the last ParaStyleMapping in the collection.
<HorizontalLine />
> ParaStyleMapping **middleItem**()
> 
> Returns the middle ParaStyleMapping in the collection.
<HorizontalLine />
> ParaStyleMapping **previousItem**( ParaStyleMapping **obj** )
> 
> Returns the ParaStyleMapping with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParaStyleMapping | obj | The index of the ParaStyleMapping that follows the desired ParaStyleMapping. |

<HorizontalLine />
> ParaStyleMapping **nextItem**( ParaStyleMapping **obj** )
> 
> Returns the ParaStyleMapping whose index follows the specified ParaStyleMapping in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParaStyleMapping | obj | The ParaStyleMapping whose index comes before the desired ParaStyleMapping. |

<HorizontalLine />
> ParaStyleMapping **anyItem**()
> 
> Returns any ParaStyleMapping in the collection.
<HorizontalLine />
> ParaStyleMapping **everyItem**()
> 
> Returns every ParaStyleMapping in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ParaStyleMapping.
<HorizontalLine />
> ParaStyleMapping **[]**( Number **index** )
> 
> Returns the ParaStyleMapping with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


