# XMLExportMaps
A collection of XML export maps.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> XMLExportMap **add**( Mixed **mappedStyle**, Mixed **markupTag**, Object **withProperties** )
> 
> Create a new mapping
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | mappedStyle | The mapped style. Can accept: ParagraphStyle, CharacterStyle, TableStyle, CellStyle or String. |
| Mixed | markupTag | The tag to map. Can accept: XMLTag or String. |
| Object | withProperties | Initial values for properties of the new XMLExportMap (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the XMLExportMap.
*** 
> XMLExportMap **item**( Mixed **index** )
> 
> Returns the XMLExportMap with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLExportMap **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLExportMaps within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLExportMap, index, or name at the beginning of the range. Can accept: XMLExportMap, Long Integer or String. |
| Mixed | to | The XMLExportMap, index, or name at the end of the range. Can accept: XMLExportMap, Long Integer or String. |

*** 
> XMLExportMap **firstItem**()
> 
> Returns the first XMLExportMap in the collection.
*** 
> XMLExportMap **lastItem**()
> 
> Returns the last XMLExportMap in the collection.
*** 
> XMLExportMap **middleItem**()
> 
> Returns the middle XMLExportMap in the collection.
*** 
> XMLExportMap **previousItem**( XMLExportMap **obj** )
> 
> Returns the XMLExportMap with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLExportMap | obj | The index of the XMLExportMap that follows the desired XMLExportMap. |

*** 
> XMLExportMap **nextItem**( XMLExportMap **obj** )
> 
> Returns the XMLExportMap whose index follows the specified XMLExportMap in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLExportMap | obj | The XMLExportMap whose index comes before the desired XMLExportMap. |

*** 
> XMLExportMap **anyItem**()
> 
> Returns any XMLExportMap in the collection.
*** 
> XMLExportMap **everyItem**()
> 
> Returns every XMLExportMap in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLExportMap.
*** 
> XMLExportMap **[]**( Number **index** )
> 
> Returns the XMLExportMap with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


