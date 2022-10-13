# TextColumns
A collection of text columns.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the TextColumn.
*** 
> TextColumn **item**( Mixed **index** )
> 
> Returns the TextColumn with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextColumn **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextColumns within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextColumn, index, or name at the beginning of the range. Can accept: TextColumn, Long Integer or String. |
| Mixed | to | The TextColumn, index, or name at the end of the range. Can accept: TextColumn, Long Integer or String. |

*** 
> TextColumn **firstItem**()
> 
> Returns the first TextColumn in the collection.
*** 
> TextColumn **lastItem**()
> 
> Returns the last TextColumn in the collection.
*** 
> TextColumn **middleItem**()
> 
> Returns the middle TextColumn in the collection.
*** 
> TextColumn **previousItem**( TextColumn **obj** )
> 
> Returns the TextColumn with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextColumn | obj | The index of the TextColumn that follows the desired TextColumn. |

*** 
> TextColumn **nextItem**( TextColumn **obj** )
> 
> Returns the TextColumn whose index follows the specified TextColumn in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextColumn | obj | The TextColumn whose index comes before the desired TextColumn. |

*** 
> TextColumn **anyItem**()
> 
> Returns any TextColumn in the collection.
*** 
> TextColumn **everyItem**()
> 
> Returns every TextColumn in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextColumn.
*** 
> TextColumn **[]**( Number **index** )
> 
> Returns the TextColumn with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


