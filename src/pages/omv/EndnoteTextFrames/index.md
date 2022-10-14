# EndnoteTextFrames
A collection of endnote text frames.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> EndnoteTextFrame **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new EndnoteTextFrame
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the EndnoteTextFrame. (Optional) |
| LocationOptions | at | The location at which to insert the EndnoteTextFrame relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new EndnoteTextFrame (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the EndnoteTextFrame.
*** 
> EndnoteTextFrame **item**( Mixed **index** )
> 
> Returns the EndnoteTextFrame with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> EndnoteTextFrame **itemByName**( String **name** )
> 
> Returns the EndnoteTextFrame with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> EndnoteTextFrame **itemByID**( Number **id** )
> 
> Returns the EndnoteTextFrame with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> EndnoteTextFrame **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EndnoteTextFrames within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EndnoteTextFrame, index, or name at the beginning of the range. Can accept: EndnoteTextFrame, Long Integer or String. |
| Mixed | to | The EndnoteTextFrame, index, or name at the end of the range. Can accept: EndnoteTextFrame, Long Integer or String. |

*** 
> EndnoteTextFrame **firstItem**()
> 
> Returns the first EndnoteTextFrame in the collection.
*** 
> EndnoteTextFrame **lastItem**()
> 
> Returns the last EndnoteTextFrame in the collection.
*** 
> EndnoteTextFrame **middleItem**()
> 
> Returns the middle EndnoteTextFrame in the collection.
*** 
> EndnoteTextFrame **previousItem**( EndnoteTextFrame **obj** )
> 
> Returns the EndnoteTextFrame with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EndnoteTextFrame | obj | The index of the EndnoteTextFrame that follows the desired EndnoteTextFrame. |

*** 
> EndnoteTextFrame **nextItem**( EndnoteTextFrame **obj** )
> 
> Returns the EndnoteTextFrame whose index follows the specified EndnoteTextFrame in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EndnoteTextFrame | obj | The EndnoteTextFrame whose index comes before the desired EndnoteTextFrame. |

*** 
> EndnoteTextFrame **anyItem**()
> 
> Returns any EndnoteTextFrame in the collection.
*** 
> EndnoteTextFrame **everyItem**()
> 
> Returns every EndnoteTextFrame in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EndnoteTextFrame.
*** 
> EndnoteTextFrame **[]**( Number **index** )
> 
> Returns the EndnoteTextFrame with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


