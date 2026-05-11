# XMLImportMaps
A collection of XML import maps.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> XMLImportMap **add**( Mixed **markupTag**, Mixed **mappedStyle**, Object **withProperties** )
> 
> Create a new mapping
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | markupTag | The tag to map. Can accept: XMLTag or String. |
| Mixed | mappedStyle | the mapped style. Can accept: ParagraphStyle, CharacterStyle, TableStyle, CellStyle or String. |
| Object | withProperties | Initial values for properties of the new XMLImportMap (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the XMLImportMap.
*** 
> XMLImportMap **item**( Mixed **index** )
> 
> Returns the XMLImportMap with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> XMLImportMap **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the XMLImportMaps within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The XMLImportMap, index, or name at the beginning of the range. Can accept: XMLImportMap, Long Integer or String. |
| Mixed | to | The XMLImportMap, index, or name at the end of the range. Can accept: XMLImportMap, Long Integer or String. |

*** 
> XMLImportMap **firstItem**()
> 
> Returns the first XMLImportMap in the collection.
*** 
> XMLImportMap **lastItem**()
> 
> Returns the last XMLImportMap in the collection.
*** 
> XMLImportMap **middleItem**()
> 
> Returns the middle XMLImportMap in the collection.
*** 
> XMLImportMap **previousItem**( XMLImportMap **obj** )
> 
> Returns the XMLImportMap with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLImportMap | obj | The index of the XMLImportMap that follows the desired XMLImportMap. |

*** 
> XMLImportMap **nextItem**( XMLImportMap **obj** )
> 
> Returns the XMLImportMap whose index follows the specified XMLImportMap in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLImportMap | obj | The XMLImportMap whose index comes before the desired XMLImportMap. |

*** 
> XMLImportMap **anyItem**()
> 
> Returns any XMLImportMap in the collection.
*** 
> XMLImportMap **everyItem**()
> 
> Returns every XMLImportMap in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the XMLImportMap.
*** 
> XMLImportMap **[]**( Number **index** )
> 
> Returns the XMLImportMap with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


