# ColorGroups
A collection of color groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ColorGroup **add**( String **name**, Swatch **swatchList**, Object **withProperties** )
> 
> Creates a new ColorGroup
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The color group name (Optional) |
| Swatch | swatchList | The swatches to add in color group. (Optional) |
| Object | withProperties | Initial values for properties of the new ColorGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the ColorGroup.
*** 
> ColorGroup **item**( Mixed **index** )
> 
> Returns the ColorGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ColorGroup **itemByName**( String **name** )
> 
> Returns the ColorGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ColorGroup **itemByID**( Number **id** )
> 
> Returns the ColorGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ColorGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ColorGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ColorGroup, index, or name at the beginning of the range. Can accept: ColorGroup, Long Integer or String. |
| Mixed | to | The ColorGroup, index, or name at the end of the range. Can accept: ColorGroup, Long Integer or String. |

*** 
> ColorGroup **firstItem**()
> 
> Returns the first ColorGroup in the collection.
*** 
> ColorGroup **lastItem**()
> 
> Returns the last ColorGroup in the collection.
*** 
> ColorGroup **middleItem**()
> 
> Returns the middle ColorGroup in the collection.
*** 
> ColorGroup **previousItem**( ColorGroup **obj** )
> 
> Returns the ColorGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ColorGroup | obj | The index of the ColorGroup that follows the desired ColorGroup. |

*** 
> ColorGroup **nextItem**( ColorGroup **obj** )
> 
> Returns the ColorGroup whose index follows the specified ColorGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ColorGroup | obj | The ColorGroup whose index comes before the desired ColorGroup. |

*** 
> ColorGroup **anyItem**()
> 
> Returns any ColorGroup in the collection.
*** 
> ColorGroup **everyItem**()
> 
> Returns every ColorGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ColorGroup.
*** 
> ColorGroup **[]**( Number **index** )
> 
> Returns the ColorGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


