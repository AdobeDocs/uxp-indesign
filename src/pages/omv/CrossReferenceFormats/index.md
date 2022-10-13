# CrossReferenceFormats
A collection of cross reference formats.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CrossReferenceFormat **add**( String **name**, Object **withProperties** )
> 
> Creates a new cross reference format.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The format name. (Optional) |
| Object | withProperties | Initial values for properties of the new CrossReferenceFormat (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CrossReferenceFormat.
*** 
> CrossReferenceFormat **item**( Mixed **index** )
> 
> Returns the CrossReferenceFormat with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CrossReferenceFormat **itemByName**( String **name** )
> 
> Returns the CrossReferenceFormat with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CrossReferenceFormat **itemByID**( Number **id** )
> 
> Returns the CrossReferenceFormat with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CrossReferenceFormat **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CrossReferenceFormats within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CrossReferenceFormat, index, or name at the beginning of the range. Can accept: CrossReferenceFormat, Long Integer or String. |
| Mixed | to | The CrossReferenceFormat, index, or name at the end of the range. Can accept: CrossReferenceFormat, Long Integer or String. |

*** 
> CrossReferenceFormat **firstItem**()
> 
> Returns the first CrossReferenceFormat in the collection.
*** 
> CrossReferenceFormat **lastItem**()
> 
> Returns the last CrossReferenceFormat in the collection.
*** 
> CrossReferenceFormat **middleItem**()
> 
> Returns the middle CrossReferenceFormat in the collection.
*** 
> CrossReferenceFormat **previousItem**( CrossReferenceFormat **obj** )
> 
> Returns the CrossReferenceFormat with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CrossReferenceFormat | obj | The index of the CrossReferenceFormat that follows the desired CrossReferenceFormat. |

*** 
> CrossReferenceFormat **nextItem**( CrossReferenceFormat **obj** )
> 
> Returns the CrossReferenceFormat whose index follows the specified CrossReferenceFormat in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CrossReferenceFormat | obj | The CrossReferenceFormat whose index comes before the desired CrossReferenceFormat. |

*** 
> CrossReferenceFormat **anyItem**()
> 
> Returns any CrossReferenceFormat in the collection.
*** 
> CrossReferenceFormat **everyItem**()
> 
> Returns every CrossReferenceFormat in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CrossReferenceFormat.
*** 
> CrossReferenceFormat **[]**( Number **index** )
> 
> Returns the CrossReferenceFormat with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


