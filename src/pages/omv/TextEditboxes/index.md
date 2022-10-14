# TextEditboxes
A collection of text editboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TextEditbox **add**( Object **withProperties** )
> 
> Creates a new TextEditbox.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TextEditbox (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TextEditbox.
*** 
> TextEditbox **item**( Mixed **index** )
> 
> Returns the TextEditbox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextEditbox **itemByID**( Number **id** )
> 
> Returns the TextEditbox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> TextEditbox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextEditboxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextEditbox, index, or name at the beginning of the range. Can accept: TextEditbox, Long Integer or String. |
| Mixed | to | The TextEditbox, index, or name at the end of the range. Can accept: TextEditbox, Long Integer or String. |

*** 
> TextEditbox **firstItem**()
> 
> Returns the first TextEditbox in the collection.
*** 
> TextEditbox **lastItem**()
> 
> Returns the last TextEditbox in the collection.
*** 
> TextEditbox **middleItem**()
> 
> Returns the middle TextEditbox in the collection.
*** 
> TextEditbox **previousItem**( TextEditbox **obj** )
> 
> Returns the TextEditbox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextEditbox | obj | The index of the TextEditbox that follows the desired TextEditbox. |

*** 
> TextEditbox **nextItem**( TextEditbox **obj** )
> 
> Returns the TextEditbox whose index follows the specified TextEditbox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextEditbox | obj | The TextEditbox whose index comes before the desired TextEditbox. |

*** 
> TextEditbox **anyItem**()
> 
> Returns any TextEditbox in the collection.
*** 
> TextEditbox **everyItem**()
> 
> Returns every TextEditbox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextEditbox.
*** 
> TextEditbox **[]**( Number **index** )
> 
> Returns the TextEditbox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


