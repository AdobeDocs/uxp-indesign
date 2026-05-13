# DataMergeTextPlaceholders
A collection of data merge text placeholders.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DataMergeTextPlaceholder **add**( Story **parentStory**, Mixed **storyOffset**, DataMergeField **field**, Object **withProperties** )
> 
> Creates a data merge text placeholder.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Story | parentStory | The story in which to insert the placeholder. |
| Mixed | storyOffset | The position within the story at which to insert the placeholder, specified as an offset number or an insertion point. Can accept: InsertionPoint or Long Integer. |
| DataMergeField | field | The field to insert. |
| Object | withProperties | Initial values for properties of the new DataMergeTextPlaceholder (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the DataMergeTextPlaceholder.
<HorizontalLine />
> DataMergeTextPlaceholder **item**( Mixed **index** )
> 
> Returns the DataMergeTextPlaceholder with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> DataMergeTextPlaceholder **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DataMergeTextPlaceholders within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DataMergeTextPlaceholder, index, or name at the beginning of the range. Can accept: DataMergeTextPlaceholder, Long Integer or String. |
| Mixed | to | The DataMergeTextPlaceholder, index, or name at the end of the range. Can accept: DataMergeTextPlaceholder, Long Integer or String. |

<HorizontalLine />
> DataMergeTextPlaceholder **firstItem**()
> 
> Returns the first DataMergeTextPlaceholder in the collection.
<HorizontalLine />
> DataMergeTextPlaceholder **lastItem**()
> 
> Returns the last DataMergeTextPlaceholder in the collection.
<HorizontalLine />
> DataMergeTextPlaceholder **middleItem**()
> 
> Returns the middle DataMergeTextPlaceholder in the collection.
<HorizontalLine />
> DataMergeTextPlaceholder **previousItem**( DataMergeTextPlaceholder **obj** )
> 
> Returns the DataMergeTextPlaceholder with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeTextPlaceholder | obj | The index of the DataMergeTextPlaceholder that follows the desired DataMergeTextPlaceholder. |

<HorizontalLine />
> DataMergeTextPlaceholder **nextItem**( DataMergeTextPlaceholder **obj** )
> 
> Returns the DataMergeTextPlaceholder whose index follows the specified DataMergeTextPlaceholder in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DataMergeTextPlaceholder | obj | The DataMergeTextPlaceholder whose index comes before the desired DataMergeTextPlaceholder. |

<HorizontalLine />
> DataMergeTextPlaceholder **anyItem**()
> 
> Returns any DataMergeTextPlaceholder in the collection.
<HorizontalLine />
> DataMergeTextPlaceholder **everyItem**()
> 
> Returns every DataMergeTextPlaceholder in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DataMergeTextPlaceholder.
<HorizontalLine />
> DataMergeTextPlaceholder **[]**( Number **index** )
> 
> Returns the DataMergeTextPlaceholder with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


