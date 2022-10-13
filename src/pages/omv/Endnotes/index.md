# Endnotes
A collection of endnotes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Endnote.
*** 
> Endnote **item**( Mixed **index** )
> 
> Returns the Endnote with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Endnote **itemByName**( String **name** )
> 
> Returns the Endnote with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Endnote **itemByID**( Number **id** )
> 
> Returns the Endnote with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Endnote **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Endnotes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Endnote, index, or name at the beginning of the range. Can accept: Endnote, Long Integer or String. |
| Mixed | to | The Endnote, index, or name at the end of the range. Can accept: Endnote, Long Integer or String. |

*** 
> Endnote **firstItem**()
> 
> Returns the first Endnote in the collection.
*** 
> Endnote **lastItem**()
> 
> Returns the last Endnote in the collection.
*** 
> Endnote **middleItem**()
> 
> Returns the middle Endnote in the collection.
*** 
> Endnote **previousItem**( Endnote **obj** )
> 
> Returns the Endnote with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Endnote | obj | The index of the Endnote that follows the desired Endnote. |

*** 
> Endnote **nextItem**( Endnote **obj** )
> 
> Returns the Endnote whose index follows the specified Endnote in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Endnote | obj | The Endnote whose index comes before the desired Endnote. |

*** 
> Endnote **anyItem**()
> 
> Returns any Endnote in the collection.
*** 
> Endnote **everyItem**()
> 
> Returns every Endnote in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Endnote.
*** 
> Endnote **[]**( Number **index** )
> 
> Returns the Endnote with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


