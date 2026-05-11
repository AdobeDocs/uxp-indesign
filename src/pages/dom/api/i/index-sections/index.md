# IndexSections
A collection of index sections.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the IndexSection.
*** 
> IndexSection **item**( Mixed **index** )
> 
> Returns the IndexSection with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> IndexSection **itemByName**( String **name** )
> 
> Returns the IndexSection with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> IndexSection **itemByID**( Number **id** )
> 
> Returns the IndexSection with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> IndexSection **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the IndexSections within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The IndexSection, index, or name at the beginning of the range. Can accept: IndexSection, Long Integer or String. |
| Mixed | to | The IndexSection, index, or name at the end of the range. Can accept: IndexSection, Long Integer or String. |

*** 
> IndexSection **firstItem**()
> 
> Returns the first IndexSection in the collection.
*** 
> IndexSection **lastItem**()
> 
> Returns the last IndexSection in the collection.
*** 
> IndexSection **middleItem**()
> 
> Returns the middle IndexSection in the collection.
*** 
> IndexSection **previousItem**( IndexSection **obj** )
> 
> Returns the IndexSection with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IndexSection | obj | The index of the IndexSection that follows the desired IndexSection. |

*** 
> IndexSection **nextItem**( IndexSection **obj** )
> 
> Returns the IndexSection whose index follows the specified IndexSection in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IndexSection | obj | The IndexSection whose index comes before the desired IndexSection. |

*** 
> IndexSection **anyItem**()
> 
> Returns any IndexSection in the collection.
*** 
> IndexSection **everyItem**()
> 
> Returns every IndexSection in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the IndexSection.
*** 
> IndexSection **[]**( Number **index** )
> 
> Returns the IndexSection with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


