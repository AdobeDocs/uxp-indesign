# MediaItems
The media items collection.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MediaItem.
*** 
> MediaItem **item**( Mixed **index** )
> 
> Returns the MediaItem with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MediaItem **itemByName**( String **name** )
> 
> Returns the MediaItem with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MediaItem **itemByID**( Number **id** )
> 
> Returns the MediaItem with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MediaItem **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MediaItems within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MediaItem, index, or name at the beginning of the range. Can accept: MediaItem, Long Integer or String. |
| Mixed | to | The MediaItem, index, or name at the end of the range. Can accept: MediaItem, Long Integer or String. |

*** 
> MediaItem **firstItem**()
> 
> Returns the first MediaItem in the collection.
*** 
> MediaItem **lastItem**()
> 
> Returns the last MediaItem in the collection.
*** 
> MediaItem **middleItem**()
> 
> Returns the middle MediaItem in the collection.
*** 
> MediaItem **previousItem**( MediaItem **obj** )
> 
> Returns the MediaItem with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MediaItem | obj | The index of the MediaItem that follows the desired MediaItem. |

*** 
> MediaItem **nextItem**( MediaItem **obj** )
> 
> Returns the MediaItem whose index follows the specified MediaItem in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MediaItem | obj | The MediaItem whose index comes before the desired MediaItem. |

*** 
> MediaItem **anyItem**()
> 
> Returns any MediaItem in the collection.
*** 
> MediaItem **everyItem**()
> 
> Returns every MediaItem in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MediaItem.
*** 
> MediaItem **[]**( Number **index** )
> 
> Returns the MediaItem with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


