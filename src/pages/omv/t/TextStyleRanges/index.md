# TextStyleRanges
A collection of text style ranges.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the TextStyleRange.
*** 
> TextStyleRange **item**( Mixed **index** )
> 
> Returns the TextStyleRange with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TextStyleRange **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TextStyleRanges within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TextStyleRange, index, or name at the beginning of the range. Can accept: TextStyleRange, Long Integer or String. |
| Mixed | to | The TextStyleRange, index, or name at the end of the range. Can accept: TextStyleRange, Long Integer or String. |

*** 
> TextStyleRange **firstItem**()
> 
> Returns the first TextStyleRange in the collection.
*** 
> TextStyleRange **lastItem**()
> 
> Returns the last TextStyleRange in the collection.
*** 
> TextStyleRange **middleItem**()
> 
> Returns the middle TextStyleRange in the collection.
*** 
> TextStyleRange **previousItem**( TextStyleRange **obj** )
> 
> Returns the TextStyleRange with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextStyleRange | obj | The index of the TextStyleRange that follows the desired TextStyleRange. |

*** 
> TextStyleRange **nextItem**( TextStyleRange **obj** )
> 
> Returns the TextStyleRange whose index follows the specified TextStyleRange in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TextStyleRange | obj | The TextStyleRange whose index comes before the desired TextStyleRange. |

*** 
> TextStyleRange **anyItem**()
> 
> Returns any TextStyleRange in the collection.
*** 
> TextStyleRange **everyItem**()
> 
> Returns every TextStyleRange in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextStyleRange.
*** 
> TextStyleRange **[]**( Number **index** )
> 
> Returns the TextStyleRange with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


