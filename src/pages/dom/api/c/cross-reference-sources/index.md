# CrossReferenceSources
A collection of cross reference text sources.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CrossReferenceSource **add**( Text **source**, CrossReferenceFormat **appliedFormat**, Object **withProperties** )
> 
> Creates a new cross reference text source.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | source | The text or insertion point to create the source. |
| CrossReferenceFormat | appliedFormat | Format used for cross reference source. |
| Object | withProperties | Initial values for properties of the new CrossReferenceSource (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CrossReferenceSource.
*** 
> CrossReferenceSource **item**( Mixed **index** )
> 
> Returns the CrossReferenceSource with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CrossReferenceSource **itemByName**( String **name** )
> 
> Returns the CrossReferenceSource with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CrossReferenceSource **itemByID**( Number **id** )
> 
> Returns the CrossReferenceSource with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CrossReferenceSource **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CrossReferenceSources within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CrossReferenceSource, index, or name at the beginning of the range. Can accept: CrossReferenceSource, Long Integer or String. |
| Mixed | to | The CrossReferenceSource, index, or name at the end of the range. Can accept: CrossReferenceSource, Long Integer or String. |

*** 
> CrossReferenceSource **firstItem**()
> 
> Returns the first CrossReferenceSource in the collection.
*** 
> CrossReferenceSource **lastItem**()
> 
> Returns the last CrossReferenceSource in the collection.
*** 
> CrossReferenceSource **middleItem**()
> 
> Returns the middle CrossReferenceSource in the collection.
*** 
> CrossReferenceSource **previousItem**( CrossReferenceSource **obj** )
> 
> Returns the CrossReferenceSource with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CrossReferenceSource | obj | The index of the CrossReferenceSource that follows the desired CrossReferenceSource. |

*** 
> CrossReferenceSource **nextItem**( CrossReferenceSource **obj** )
> 
> Returns the CrossReferenceSource whose index follows the specified CrossReferenceSource in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CrossReferenceSource | obj | The CrossReferenceSource whose index comes before the desired CrossReferenceSource. |

*** 
> CrossReferenceSource **anyItem**()
> 
> Returns any CrossReferenceSource in the collection.
*** 
> CrossReferenceSource **everyItem**()
> 
> Returns every CrossReferenceSource in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CrossReferenceSource.
*** 
> CrossReferenceSource **[]**( Number **index** )
> 
> Returns the CrossReferenceSource with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


