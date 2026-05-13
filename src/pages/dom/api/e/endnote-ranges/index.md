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
<HorizontalLine />
> EndnoteRange **item**( Mixed **index** )
> 
> Returns the EndnoteRange with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> EndnoteRange **itemByName**( String **name** )
> 
> Returns the EndnoteRange with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> EndnoteRange **itemByID**( Number **id** )
> 
> Returns the EndnoteRange with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> EndnoteRange **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EndnoteRanges within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EndnoteRange, index, or name at the beginning of the range. Can accept: EndnoteRange, Long Integer or String. |
| Mixed | to | The EndnoteRange, index, or name at the end of the range. Can accept: EndnoteRange, Long Integer or String. |

<HorizontalLine />
> EndnoteRange **firstItem**()
> 
> Returns the first EndnoteRange in the collection.
<HorizontalLine />
> EndnoteRange **lastItem**()
> 
> Returns the last EndnoteRange in the collection.
<HorizontalLine />
> EndnoteRange **middleItem**()
> 
> Returns the middle EndnoteRange in the collection.
<HorizontalLine />
> EndnoteRange **previousItem**( EndnoteRange **obj** )
> 
> Returns the EndnoteRange with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EndnoteRange | obj | The index of the EndnoteRange that follows the desired EndnoteRange. |

<HorizontalLine />
> EndnoteRange **nextItem**( EndnoteRange **obj** )
> 
> Returns the EndnoteRange whose index follows the specified EndnoteRange in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EndnoteRange | obj | The EndnoteRange whose index comes before the desired EndnoteRange. |

<HorizontalLine />
> EndnoteRange **anyItem**()
> 
> Returns any EndnoteRange in the collection.
<HorizontalLine />
> EndnoteRange **everyItem**()
> 
> Returns every EndnoteRange in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the EndnoteRange.
<HorizontalLine />
> EndnoteRange **[]**( Number **index** )
> 
> Returns the EndnoteRange with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


