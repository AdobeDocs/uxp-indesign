# ListBoxes
A collection of listboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ListBox.
*** 
> ListBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new ListBox
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the ListBox. (Optional) |
| LocationOptions | at | The location at which to insert the ListBox relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new ListBox (Optional) |

*** 
> ListBox **item**( Mixed **index** )
> 
> Returns the ListBox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ListBox **itemByName**( String **name** )
> 
> Returns the ListBox with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ListBox **itemByID**( Number **id** )
> 
> Returns the ListBox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ListBox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ListBoxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ListBox, index, or name at the beginning of the range. Can accept: ListBox, Long Integer or String. |
| Mixed | to | The ListBox, index, or name at the end of the range. Can accept: ListBox, Long Integer or String. |

*** 
> ListBox **firstItem**()
> 
> Returns the first ListBox in the collection.
*** 
> ListBox **lastItem**()
> 
> Returns the last ListBox in the collection.
*** 
> ListBox **middleItem**()
> 
> Returns the middle ListBox in the collection.
*** 
> ListBox **previousItem**( ListBox **obj** )
> 
> Returns the ListBox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ListBox | obj | The index of the ListBox that follows the desired ListBox. |

*** 
> ListBox **nextItem**( ListBox **obj** )
> 
> Returns the ListBox whose index follows the specified ListBox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ListBox | obj | The ListBox whose index comes before the desired ListBox. |

*** 
> ListBox **anyItem**()
> 
> Returns any ListBox in the collection.
*** 
> ListBox **everyItem**()
> 
> Returns every ListBox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ListBox.
*** 
> ListBox **[]**( Number **index** )
> 
> Returns the ListBox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


