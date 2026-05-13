# DialogColumns
A collection of dialog columns.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DialogColumn **add**( Object **withProperties** )
> 
> Creates a new DialogColumn.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new DialogColumn (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the DialogColumn.
<HorizontalLine />
> DialogColumn **item**( Mixed **index** )
> 
> Returns the DialogColumn with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> DialogColumn **itemByID**( Number **id** )
> 
> Returns the DialogColumn with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> DialogColumn **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DialogColumns within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DialogColumn, index, or name at the beginning of the range. Can accept: DialogColumn, Long Integer or String. |
| Mixed | to | The DialogColumn, index, or name at the end of the range. Can accept: DialogColumn, Long Integer or String. |

<HorizontalLine />
> DialogColumn **firstItem**()
> 
> Returns the first DialogColumn in the collection.
<HorizontalLine />
> DialogColumn **lastItem**()
> 
> Returns the last DialogColumn in the collection.
<HorizontalLine />
> DialogColumn **middleItem**()
> 
> Returns the middle DialogColumn in the collection.
<HorizontalLine />
> DialogColumn **previousItem**( DialogColumn **obj** )
> 
> Returns the DialogColumn with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DialogColumn | obj | The index of the DialogColumn that follows the desired DialogColumn. |

<HorizontalLine />
> DialogColumn **nextItem**( DialogColumn **obj** )
> 
> Returns the DialogColumn whose index follows the specified DialogColumn in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DialogColumn | obj | The DialogColumn whose index comes before the desired DialogColumn. |

<HorizontalLine />
> DialogColumn **anyItem**()
> 
> Returns any DialogColumn in the collection.
<HorizontalLine />
> DialogColumn **everyItem**()
> 
> Returns every DialogColumn in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DialogColumn.
<HorizontalLine />
> DialogColumn **[]**( Number **index** )
> 
> Returns the DialogColumn with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


