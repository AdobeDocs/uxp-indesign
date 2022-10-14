# HtmlItems
A collection of embedded HTML page items.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HtmlItem **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new HtmlItem
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the HtmlItem. (Optional) |
| LocationOptions | at | The location at which to insert the HtmlItem relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new HtmlItem (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the HtmlItem.
*** 
> HtmlItem **item**( Mixed **index** )
> 
> Returns the HtmlItem with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HtmlItem **itemByName**( String **name** )
> 
> Returns the HtmlItem with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HtmlItem **itemByID**( Number **id** )
> 
> Returns the HtmlItem with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HtmlItem **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HtmlItems within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HtmlItem, index, or name at the beginning of the range. Can accept: HtmlItem, Long Integer or String. |
| Mixed | to | The HtmlItem, index, or name at the end of the range. Can accept: HtmlItem, Long Integer or String. |

*** 
> HtmlItem **firstItem**()
> 
> Returns the first HtmlItem in the collection.
*** 
> HtmlItem **lastItem**()
> 
> Returns the last HtmlItem in the collection.
*** 
> HtmlItem **middleItem**()
> 
> Returns the middle HtmlItem in the collection.
*** 
> HtmlItem **previousItem**( HtmlItem **obj** )
> 
> Returns the HtmlItem with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HtmlItem | obj | The index of the HtmlItem that follows the desired HtmlItem. |

*** 
> HtmlItem **nextItem**( HtmlItem **obj** )
> 
> Returns the HtmlItem whose index follows the specified HtmlItem in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HtmlItem | obj | The HtmlItem whose index comes before the desired HtmlItem. |

*** 
> HtmlItem **anyItem**()
> 
> Returns any HtmlItem in the collection.
*** 
> HtmlItem **everyItem**()
> 
> Returns every HtmlItem in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HtmlItem.
*** 
> HtmlItem **[]**( Number **index** )
> 
> Returns the HtmlItem with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


