# TextFrames
A collection of text frames.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the TextFrame.
*** 
> TextFrame **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new TextFrame
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the TextFrame. (Optional) |
| LocationOptions | at | The location at which to insert the TextFrame relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new TextFrame (Optional) |

*** 
> TextFrame **item**( Mixed **index** )
> 
> Returns the TextFrame with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextFrame **itemByName**( String **name** )
> 
> Returns the TextFrame with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TextFrame **itemByID**( Number **id** )
> 
> Returns the TextFrame with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> TextFrame **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextFrames within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextFrame, index, or name at the beginning of the range. Can accept: TextFrame, Long Integer or String. |
| Mixed | to | The TextFrame, index, or name at the end of the range. Can accept: TextFrame, Long Integer or String. |

*** 
> TextFrame **firstItem**()
> 
> Returns the first TextFrame in the collection.
*** 
> TextFrame **lastItem**()
> 
> Returns the last TextFrame in the collection.
*** 
> TextFrame **middleItem**()
> 
> Returns the middle TextFrame in the collection.
*** 
> TextFrame **previousItem**( TextFrame **obj** )
> 
> Returns the TextFrame with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextFrame | obj | The index of the TextFrame that follows the desired TextFrame. |

*** 
> TextFrame **nextItem**( TextFrame **obj** )
> 
> Returns the TextFrame whose index follows the specified TextFrame in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextFrame | obj | The TextFrame whose index comes before the desired TextFrame. |

*** 
> TextFrame **anyItem**()
> 
> Returns any TextFrame in the collection.
*** 
> TextFrame **everyItem**()
> 
> Returns every TextFrame in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextFrame.
*** 
> TextFrame **[]**( Number **index** )
> 
> Returns the TextFrame with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


