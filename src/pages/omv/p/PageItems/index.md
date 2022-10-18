# PageItems
The page items collection, which can be used to process all page items in a container (such as a document, page, or group), regardless of type.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the PageItem.
*** 
> PageItem **item**( Mixed **index** )
> 
> Returns the PageItem with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PageItem **itemByName**( String **name** )
> 
> Returns the PageItem with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PageItem **itemByID**( Number **id** )
> 
> Returns the PageItem with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PageItem **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PageItems within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PageItem, index, or name at the beginning of the range. Can accept: PageItem, Long Integer or String. |
| Mixed | to | The PageItem, index, or name at the end of the range. Can accept: PageItem, Long Integer or String. |

*** 
> PageItem **firstItem**()
> 
> Returns the first PageItem in the collection.
*** 
> PageItem **lastItem**()
> 
> Returns the last PageItem in the collection.
*** 
> PageItem **middleItem**()
> 
> Returns the middle PageItem in the collection.
*** 
> PageItem **previousItem**( PageItem **obj** )
> 
> Returns the PageItem with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | obj | The index of the PageItem that follows the desired PageItem. |

*** 
> PageItem **nextItem**( PageItem **obj** )
> 
> Returns the PageItem whose index follows the specified PageItem in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | obj | The PageItem whose index comes before the desired PageItem. |

*** 
> PageItem **anyItem**()
> 
> Returns any PageItem in the collection.
*** 
> PageItem **everyItem**()
> 
> Returns every PageItem in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PageItem.
*** 
> PageItem **[]**( Number **index** )
> 
> Returns the PageItem with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


