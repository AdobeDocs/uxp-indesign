# TextBoxes
A collection of text boxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the TextBox.
*** 
> TextBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new TextBox
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the TextBox. (Optional) |
| LocationOptions | at | The location at which to insert the TextBox relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new TextBox (Optional) |

*** 
> TextBox **item**( Mixed **index** )
> 
> Returns the TextBox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextBox **itemByName**( String **name** )
> 
> Returns the TextBox with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TextBox **itemByID**( Number **id** )
> 
> Returns the TextBox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> TextBox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextBoxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextBox, index, or name at the beginning of the range. Can accept: TextBox, Long Integer or String. |
| Mixed | to | The TextBox, index, or name at the end of the range. Can accept: TextBox, Long Integer or String. |

*** 
> TextBox **firstItem**()
> 
> Returns the first TextBox in the collection.
*** 
> TextBox **lastItem**()
> 
> Returns the last TextBox in the collection.
*** 
> TextBox **middleItem**()
> 
> Returns the middle TextBox in the collection.
*** 
> TextBox **previousItem**( TextBox **obj** )
> 
> Returns the TextBox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextBox | obj | The index of the TextBox that follows the desired TextBox. |

*** 
> TextBox **nextItem**( TextBox **obj** )
> 
> Returns the TextBox whose index follows the specified TextBox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextBox | obj | The TextBox whose index comes before the desired TextBox. |

*** 
> TextBox **anyItem**()
> 
> Returns any TextBox in the collection.
*** 
> TextBox **everyItem**()
> 
> Returns every TextBox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextBox.
*** 
> TextBox **[]**( Number **index** )
> 
> Returns the TextBox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


