# EndnoteRanges
A collection of endnote text ranges.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the EndnoteRange.
*** 
> EndnoteRange **item**( Mixed **index** )
> 
> Returns the EndnoteRange with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> EndnoteRange **itemByName**( String **name** )
> 
> Returns the EndnoteRange with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> EndnoteRange **itemByID**( Number **id** )
> 
> Returns the EndnoteRange with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> EndnoteRange **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EndnoteRanges within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EndnoteRange, index, or name at the beginning of the range. Can accept: EndnoteRange, Long Integer or String. |
| Mixed | to | The EndnoteRange, index, or name at the end of the range. Can accept: EndnoteRange, Long Integer or String. |

*** 
> EndnoteRange **firstItem**()
> 
> Returns the first EndnoteRange in the collection.
*** 
> EndnoteRange **lastItem**()
> 
> Returns the last EndnoteRange in the collection.
*** 
> EndnoteRange **middleItem**()
> 
> Returns the middle EndnoteRange in the collection.
*** 
> EndnoteRange **previousItem**( EndnoteRange **obj** )
> 
> Returns the EndnoteRange with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EndnoteRange | obj | The index of the EndnoteRange that follows the desired EndnoteRange. |

*** 
> EndnoteRange **nextItem**( EndnoteRange **obj** )
> 
> Returns the EndnoteRange whose index follows the specified EndnoteRange in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EndnoteRange | obj | The EndnoteRange whose index comes before the desired EndnoteRange. |

*** 
> EndnoteRange **anyItem**()
> 
> Returns any EndnoteRange in the collection.
*** 
> EndnoteRange **everyItem**()
> 
> Returns every EndnoteRange in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EndnoteRange.
*** 
> EndnoteRange **[]**( Number **index** )
> 
> Returns the EndnoteRange with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


