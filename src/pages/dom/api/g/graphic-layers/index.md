# GraphicLayers
A collection of graphic layers.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GraphicLayer.
*** 
> GraphicLayer **item**( Mixed **index** )
> 
> Returns the GraphicLayer with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GraphicLayer **itemByName**( String **name** )
> 
> Returns the GraphicLayer with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GraphicLayer **itemByID**( Number **id** )
> 
> Returns the GraphicLayer with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GraphicLayer **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GraphicLayers within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GraphicLayer, index, or name at the beginning of the range. Can accept: GraphicLayer, Long Integer or String. |
| Mixed | to | The GraphicLayer, index, or name at the end of the range. Can accept: GraphicLayer, Long Integer or String. |

*** 
> GraphicLayer **firstItem**()
> 
> Returns the first GraphicLayer in the collection.
*** 
> GraphicLayer **lastItem**()
> 
> Returns the last GraphicLayer in the collection.
*** 
> GraphicLayer **middleItem**()
> 
> Returns the middle GraphicLayer in the collection.
*** 
> GraphicLayer **previousItem**( GraphicLayer **obj** )
> 
> Returns the GraphicLayer with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GraphicLayer | obj | The index of the GraphicLayer that follows the desired GraphicLayer. |

*** 
> GraphicLayer **nextItem**( GraphicLayer **obj** )
> 
> Returns the GraphicLayer whose index follows the specified GraphicLayer in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GraphicLayer | obj | The GraphicLayer whose index comes before the desired GraphicLayer. |

*** 
> GraphicLayer **anyItem**()
> 
> Returns any GraphicLayer in the collection.
*** 
> GraphicLayer **everyItem**()
> 
> Returns every GraphicLayer in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GraphicLayer.
*** 
> GraphicLayer **[]**( Number **index** )
> 
> Returns the GraphicLayer with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


