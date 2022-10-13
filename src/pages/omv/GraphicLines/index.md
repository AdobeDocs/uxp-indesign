# GraphicLines
A collection of graphic lines.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GraphicLine.
*** 
> GraphicLine **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new GraphicLine
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the GraphicLine. (Optional) |
| LocationOptions | at | The location at which to insert the GraphicLine relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new GraphicLine (Optional) |

*** 
> GraphicLine **item**( Mixed **index** )
> 
> Returns the GraphicLine with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GraphicLine **itemByName**( String **name** )
> 
> Returns the GraphicLine with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GraphicLine **itemByID**( Number **id** )
> 
> Returns the GraphicLine with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GraphicLine **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GraphicLines within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GraphicLine, index, or name at the beginning of the range. Can accept: GraphicLine, Long Integer or String. |
| Mixed | to | The GraphicLine, index, or name at the end of the range. Can accept: GraphicLine, Long Integer or String. |

*** 
> GraphicLine **firstItem**()
> 
> Returns the first GraphicLine in the collection.
*** 
> GraphicLine **lastItem**()
> 
> Returns the last GraphicLine in the collection.
*** 
> GraphicLine **middleItem**()
> 
> Returns the middle GraphicLine in the collection.
*** 
> GraphicLine **previousItem**( GraphicLine **obj** )
> 
> Returns the GraphicLine with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GraphicLine | obj | The index of the GraphicLine that follows the desired GraphicLine. |

*** 
> GraphicLine **nextItem**( GraphicLine **obj** )
> 
> Returns the GraphicLine whose index follows the specified GraphicLine in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GraphicLine | obj | The GraphicLine whose index comes before the desired GraphicLine. |

*** 
> GraphicLine **anyItem**()
> 
> Returns any GraphicLine in the collection.
*** 
> GraphicLine **everyItem**()
> 
> Returns every GraphicLine in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GraphicLine.
*** 
> GraphicLine **[]**( Number **index** )
> 
> Returns the GraphicLine with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


