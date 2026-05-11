# IndexingSortOptions
A collection of indexing sort options.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the IndexingSortOption.
*** 
> IndexingSortOption **item**( Mixed **index** )
> 
> Returns the IndexingSortOption with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> IndexingSortOption **itemByName**( String **name** )
> 
> Returns the IndexingSortOption with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> IndexingSortOption **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the IndexingSortOptions within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The IndexingSortOption, index, or name at the beginning of the range. Can accept: IndexingSortOption, Long Integer or String. |
| Mixed | to | The IndexingSortOption, index, or name at the end of the range. Can accept: IndexingSortOption, Long Integer or String. |

*** 
> IndexingSortOption **firstItem**()
> 
> Returns the first IndexingSortOption in the collection.
*** 
> IndexingSortOption **lastItem**()
> 
> Returns the last IndexingSortOption in the collection.
*** 
> IndexingSortOption **middleItem**()
> 
> Returns the middle IndexingSortOption in the collection.
*** 
> IndexingSortOption **previousItem**( IndexingSortOption **obj** )
> 
> Returns the IndexingSortOption with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IndexingSortOption | obj | The index of the IndexingSortOption that follows the desired IndexingSortOption. |

*** 
> IndexingSortOption **nextItem**( IndexingSortOption **obj** )
> 
> Returns the IndexingSortOption whose index follows the specified IndexingSortOption in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IndexingSortOption | obj | The IndexingSortOption whose index comes before the desired IndexingSortOption. |

*** 
> IndexingSortOption **anyItem**()
> 
> Returns any IndexingSortOption in the collection.
*** 
> IndexingSortOption **everyItem**()
> 
> Returns every IndexingSortOption in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the IndexingSortOption.
*** 
> IndexingSortOption **[]**( Number **index** )
> 
> Returns the IndexingSortOption with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


