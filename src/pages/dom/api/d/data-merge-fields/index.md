# DataMergeFields
A collection of data merge fields.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the DataMergeField.
*** 
> DataMergeField **item**( Mixed **index** )
> 
> Returns the DataMergeField with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> DataMergeField **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DataMergeFields within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DataMergeField, index, or name at the beginning of the range. Can accept: DataMergeField, Long Integer or String. |
| Mixed | to | The DataMergeField, index, or name at the end of the range. Can accept: DataMergeField, Long Integer or String. |

*** 
> DataMergeField **firstItem**()
> 
> Returns the first DataMergeField in the collection.
*** 
> DataMergeField **lastItem**()
> 
> Returns the last DataMergeField in the collection.
*** 
> DataMergeField **middleItem**()
> 
> Returns the middle DataMergeField in the collection.
*** 
> DataMergeField **previousItem**( DataMergeField **obj** )
> 
> Returns the DataMergeField with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeField | obj | The index of the DataMergeField that follows the desired DataMergeField. |

*** 
> DataMergeField **nextItem**( DataMergeField **obj** )
> 
> Returns the DataMergeField whose index follows the specified DataMergeField in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeField | obj | The DataMergeField whose index comes before the desired DataMergeField. |

*** 
> DataMergeField **anyItem**()
> 
> Returns any DataMergeField in the collection.
*** 
> DataMergeField **everyItem**()
> 
> Returns every DataMergeField in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergeField.
*** 
> DataMergeField **[]**( Number **index** )
> 
> Returns the DataMergeField with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


