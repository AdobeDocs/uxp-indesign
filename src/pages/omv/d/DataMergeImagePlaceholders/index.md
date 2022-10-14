# DataMergeImagePlaceholders
A collection of data merge image placeholders.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DataMergeImagePlaceholder **add**( PageItem **placeholder**, DataMergeField **field**, Object **withProperties** )
> 
> Creates a data merge image placeholder.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | placeholder | The page item on which to place the placeholder. |
| DataMergeField | field | The data merge field to insert. |
| Object | withProperties | Initial values for properties of the new DataMergeImagePlaceholder (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the DataMergeImagePlaceholder.
*** 
> DataMergeImagePlaceholder **item**( Mixed **index** )
> 
> Returns the DataMergeImagePlaceholder with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> DataMergeImagePlaceholder **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DataMergeImagePlaceholders within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DataMergeImagePlaceholder, index, or name at the beginning of the range. Can accept: DataMergeImagePlaceholder, Long Integer or String. |
| Mixed | to | The DataMergeImagePlaceholder, index, or name at the end of the range. Can accept: DataMergeImagePlaceholder, Long Integer or String. |

*** 
> DataMergeImagePlaceholder **firstItem**()
> 
> Returns the first DataMergeImagePlaceholder in the collection.
*** 
> DataMergeImagePlaceholder **lastItem**()
> 
> Returns the last DataMergeImagePlaceholder in the collection.
*** 
> DataMergeImagePlaceholder **middleItem**()
> 
> Returns the middle DataMergeImagePlaceholder in the collection.
*** 
> DataMergeImagePlaceholder **previousItem**( DataMergeImagePlaceholder **obj** )
> 
> Returns the DataMergeImagePlaceholder with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeImagePlaceholder | obj | The index of the DataMergeImagePlaceholder that follows the desired DataMergeImagePlaceholder. |

*** 
> DataMergeImagePlaceholder **nextItem**( DataMergeImagePlaceholder **obj** )
> 
> Returns the DataMergeImagePlaceholder whose index follows the specified DataMergeImagePlaceholder in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeImagePlaceholder | obj | The DataMergeImagePlaceholder whose index comes before the desired DataMergeImagePlaceholder. |

*** 
> DataMergeImagePlaceholder **anyItem**()
> 
> Returns any DataMergeImagePlaceholder in the collection.
*** 
> DataMergeImagePlaceholder **everyItem**()
> 
> Returns every DataMergeImagePlaceholder in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergeImagePlaceholder.
*** 
> DataMergeImagePlaceholder **[]**( Number **index** )
> 
> Returns the DataMergeImagePlaceholder with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


