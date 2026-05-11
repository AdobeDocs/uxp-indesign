# DataMergeQrcodePlaceholders
A collection of data merge QR code placeholders.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DataMergeQrcodePlaceholder **add**( PageItem **placeholder**, DataMergeField **field**, Object **withProperties** )
> 
> Creates a data merge QR code placeholder.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | placeholder | The page item on which to place the placeholder. |
| DataMergeField | field | The data merge field to insert. |
| Object | withProperties | Initial values for properties of the new DataMergeQrcodePlaceholder (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the DataMergeQrcodePlaceholder.
*** 
> DataMergeQrcodePlaceholder **item**( Mixed **index** )
> 
> Returns the DataMergeQrcodePlaceholder with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> DataMergeQrcodePlaceholder **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DataMergeQrcodePlaceholders within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DataMergeQrcodePlaceholder, index, or name at the beginning of the range. Can accept: DataMergeQrcodePlaceholder, Long Integer or String. |
| Mixed | to | The DataMergeQrcodePlaceholder, index, or name at the end of the range. Can accept: DataMergeQrcodePlaceholder, Long Integer or String. |

*** 
> DataMergeQrcodePlaceholder **firstItem**()
> 
> Returns the first DataMergeQrcodePlaceholder in the collection.
*** 
> DataMergeQrcodePlaceholder **lastItem**()
> 
> Returns the last DataMergeQrcodePlaceholder in the collection.
*** 
> DataMergeQrcodePlaceholder **middleItem**()
> 
> Returns the middle DataMergeQrcodePlaceholder in the collection.
*** 
> DataMergeQrcodePlaceholder **previousItem**( DataMergeQrcodePlaceholder **obj** )
> 
> Returns the DataMergeQrcodePlaceholder with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeQrcodePlaceholder | obj | The index of the DataMergeQrcodePlaceholder that follows the desired DataMergeQrcodePlaceholder. |

*** 
> DataMergeQrcodePlaceholder **nextItem**( DataMergeQrcodePlaceholder **obj** )
> 
> Returns the DataMergeQrcodePlaceholder whose index follows the specified DataMergeQrcodePlaceholder in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeQrcodePlaceholder | obj | The DataMergeQrcodePlaceholder whose index comes before the desired DataMergeQrcodePlaceholder. |

*** 
> DataMergeQrcodePlaceholder **anyItem**()
> 
> Returns any DataMergeQrcodePlaceholder in the collection.
*** 
> DataMergeQrcodePlaceholder **everyItem**()
> 
> Returns every DataMergeQrcodePlaceholder in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergeQrcodePlaceholder.
*** 
> DataMergeQrcodePlaceholder **[]**( Number **index** )
> 
> Returns the DataMergeQrcodePlaceholder with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


