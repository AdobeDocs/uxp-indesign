# Libraries
A collection of object libraries.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Library **add**( File **fullName**, Object **withProperties** )
> 
> Creates a new object libary.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | fullName | The library's path and file name. |
| Object | withProperties | Initial values for properties of the new Library (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Library.
*** 
> Library **item**( Mixed **index** )
> 
> Returns the Library with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Library **itemByName**( String **name** )
> 
> Returns the Library with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Library **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Libraries within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Library, index, or name at the beginning of the range. Can accept: Library, Long Integer or String. |
| Mixed | to | The Library, index, or name at the end of the range. Can accept: Library, Long Integer or String. |

*** 
> Library **firstItem**()
> 
> Returns the first Library in the collection.
*** 
> Library **lastItem**()
> 
> Returns the last Library in the collection.
*** 
> Library **middleItem**()
> 
> Returns the middle Library in the collection.
*** 
> Library **previousItem**( Library **obj** )
> 
> Returns the Library with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Library | obj | The index of the Library that follows the desired Library. |

*** 
> Library **nextItem**( Library **obj** )
> 
> Returns the Library whose index follows the specified Library in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Library | obj | The Library whose index comes before the desired Library. |

*** 
> Library **anyItem**()
> 
> Returns any Library in the collection.
*** 
> Library **everyItem**()
> 
> Returns every Library in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Library.
*** 
> Library **[]**( Number **index** )
> 
> Returns the Library with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


