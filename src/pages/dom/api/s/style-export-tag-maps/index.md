# StyleExportTagMaps
A collection of style export tag maps.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> StyleExportTagMap **add**( String **exportType**, String **exportTag**, String **exportClass**, String **exportAttributes**, Object **withProperties** )
> 
> Create a new mapping
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | exportType | The type of export. |
| String | exportTag | The tag to map. |
| String | exportClass | The class to map. |
| String | exportAttributes | The attributes to map. |
| Object | withProperties | Initial values for properties of the new StyleExportTagMap (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the StyleExportTagMap.
<HorizontalLine />
> StyleExportTagMap **item**( Mixed **index** )
> 
> Returns the StyleExportTagMap with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> StyleExportTagMap **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the StyleExportTagMaps within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The StyleExportTagMap, index, or name at the beginning of the range. Can accept: StyleExportTagMap, Long Integer or String. |
| Mixed | to | The StyleExportTagMap, index, or name at the end of the range. Can accept: StyleExportTagMap, Long Integer or String. |

<HorizontalLine />
> StyleExportTagMap **firstItem**()
> 
> Returns the first StyleExportTagMap in the collection.
<HorizontalLine />
> StyleExportTagMap **lastItem**()
> 
> Returns the last StyleExportTagMap in the collection.
<HorizontalLine />
> StyleExportTagMap **middleItem**()
> 
> Returns the middle StyleExportTagMap in the collection.
<HorizontalLine />
> StyleExportTagMap **previousItem**( StyleExportTagMap **obj** )
> 
> Returns the StyleExportTagMap with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StyleExportTagMap | obj | The index of the StyleExportTagMap that follows the desired StyleExportTagMap. |

<HorizontalLine />
> StyleExportTagMap **nextItem**( StyleExportTagMap **obj** )
> 
> Returns the StyleExportTagMap whose index follows the specified StyleExportTagMap in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StyleExportTagMap | obj | The StyleExportTagMap whose index comes before the desired StyleExportTagMap. |

<HorizontalLine />
> StyleExportTagMap **anyItem**()
> 
> Returns any StyleExportTagMap in the collection.
<HorizontalLine />
> StyleExportTagMap **everyItem**()
> 
> Returns every StyleExportTagMap in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the StyleExportTagMap.
<HorizontalLine />
> StyleExportTagMap **[]**( Number **index** )
> 
> Returns the StyleExportTagMap with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


