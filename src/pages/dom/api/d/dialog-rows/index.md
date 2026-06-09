# DialogRows
A collection of dialog rows.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DialogRow **add**( Object **withProperties** )
> 
> Creates a new DialogRow.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new DialogRow (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the DialogRow.
<HorizontalLine />
> DialogRow **item**( Mixed **index** )
> 
> Returns the DialogRow with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> DialogRow **itemByID**( Number **id** )
> 
> Returns the DialogRow with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> DialogRow **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DialogRows within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DialogRow, index, or name at the beginning of the range. Can accept: DialogRow, Long Integer or String. |
| Mixed | to | The DialogRow, index, or name at the end of the range. Can accept: DialogRow, Long Integer or String. |

<HorizontalLine />
> DialogRow **firstItem**()
> 
> Returns the first DialogRow in the collection.
<HorizontalLine />
> DialogRow **lastItem**()
> 
> Returns the last DialogRow in the collection.
<HorizontalLine />
> DialogRow **middleItem**()
> 
> Returns the middle DialogRow in the collection.
<HorizontalLine />
> DialogRow **previousItem**( DialogRow **obj** )
> 
> Returns the DialogRow with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DialogRow | obj | The index of the DialogRow that follows the desired DialogRow. |

<HorizontalLine />
> DialogRow **nextItem**( DialogRow **obj** )
> 
> Returns the DialogRow whose index follows the specified DialogRow in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DialogRow | obj | The DialogRow whose index comes before the desired DialogRow. |

<HorizontalLine />
> DialogRow **anyItem**()
> 
> Returns any DialogRow in the collection.
<HorizontalLine />
> DialogRow **everyItem**()
> 
> Returns every DialogRow in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DialogRow.
<HorizontalLine />
> DialogRow **[]**( Number **index** )
> 
> Returns the DialogRow with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


