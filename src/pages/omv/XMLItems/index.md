# XMLItems
A collection of XML items.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the XMLItem.
*** 
> XMLItem **item**( Mixed **index** )
> 
> Returns the XMLItem with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLItem **itemByID**( Number **id** )
> 
> Returns the XMLItem with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> XMLItem **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLItems within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLItem, index, or name at the beginning of the range. Can accept: XMLItem, Long Integer or String. |
| Mixed | to | The XMLItem, index, or name at the end of the range. Can accept: XMLItem, Long Integer or String. |

*** 
> XMLItem **firstItem**()
> 
> Returns the first XMLItem in the collection.
*** 
> XMLItem **lastItem**()
> 
> Returns the last XMLItem in the collection.
*** 
> XMLItem **middleItem**()
> 
> Returns the middle XMLItem in the collection.
*** 
> XMLItem **previousItem**( XMLItem **obj** )
> 
> Returns the XMLItem with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLItem | obj | The index of the XMLItem that follows the desired XMLItem. |

*** 
> XMLItem **nextItem**( XMLItem **obj** )
> 
> Returns the XMLItem whose index follows the specified XMLItem in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLItem | obj | The XMLItem whose index comes before the desired XMLItem. |

*** 
> XMLItem **anyItem**()
> 
> Returns any XMLItem in the collection.
*** 
> XMLItem **everyItem**()
> 
> Returns every XMLItem in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLItem.
*** 
> XMLItem **[]**( Number **index** )
> 
> Returns the XMLItem with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


