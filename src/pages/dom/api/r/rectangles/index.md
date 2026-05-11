# Rectangles
A collection of rectangles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Rectangle.
*** 
> Rectangle **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Rectangle
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the Rectangle. (Optional) |
| LocationOptions | at | The location at which to insert the Rectangle relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Rectangle (Optional) |

*** 
> Rectangle **item**( Mixed **index** )
> 
> Returns the Rectangle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Rectangle **itemByName**( String **name** )
> 
> Returns the Rectangle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Rectangle **itemByID**( Number **id** )
> 
> Returns the Rectangle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Rectangle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Rectangles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Rectangle, index, or name at the beginning of the range. Can accept: Rectangle, Long Integer or String. |
| Mixed | to | The Rectangle, index, or name at the end of the range. Can accept: Rectangle, Long Integer or String. |

*** 
> Rectangle **firstItem**()
> 
> Returns the first Rectangle in the collection.
*** 
> Rectangle **lastItem**()
> 
> Returns the last Rectangle in the collection.
*** 
> Rectangle **middleItem**()
> 
> Returns the middle Rectangle in the collection.
*** 
> Rectangle **previousItem**( Rectangle **obj** )
> 
> Returns the Rectangle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Rectangle | obj | The index of the Rectangle that follows the desired Rectangle. |

*** 
> Rectangle **nextItem**( Rectangle **obj** )
> 
> Returns the Rectangle whose index follows the specified Rectangle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Rectangle | obj | The Rectangle whose index comes before the desired Rectangle. |

*** 
> Rectangle **anyItem**()
> 
> Returns any Rectangle in the collection.
*** 
> Rectangle **everyItem**()
> 
> Returns every Rectangle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Rectangle.
*** 
> Rectangle **[]**( Number **index** )
> 
> Returns the Rectangle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


