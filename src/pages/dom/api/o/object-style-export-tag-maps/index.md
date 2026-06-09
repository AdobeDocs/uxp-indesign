# ObjectStyleExportTagMaps
A collection of object style export tag maps.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ObjectStyleExportTagMap **add**( String **exportType**, String **exportTag**, String **exportClass**, String **exportAttributes**, Object **withProperties** )
> 
> Create a new mapping
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | exportType | The type of export. |
| String | exportTag | The tag to map. |
| String | exportClass | The class to map. |
| String | exportAttributes | The attributes to map. |
| Object | withProperties | Initial values for properties of the new ObjectStyleExportTagMap (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the ObjectStyleExportTagMap.
<HorizontalLine />
> ObjectStyleExportTagMap **item**( Mixed **index** )
> 
> Returns the ObjectStyleExportTagMap with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ObjectStyleExportTagMap **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ObjectStyleExportTagMaps within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ObjectStyleExportTagMap, index, or name at the beginning of the range. Can accept: ObjectStyleExportTagMap, Long Integer or String. |
| Mixed | to | The ObjectStyleExportTagMap, index, or name at the end of the range. Can accept: ObjectStyleExportTagMap, Long Integer or String. |

<HorizontalLine />
> ObjectStyleExportTagMap **firstItem**()
> 
> Returns the first ObjectStyleExportTagMap in the collection.
<HorizontalLine />
> ObjectStyleExportTagMap **lastItem**()
> 
> Returns the last ObjectStyleExportTagMap in the collection.
<HorizontalLine />
> ObjectStyleExportTagMap **middleItem**()
> 
> Returns the middle ObjectStyleExportTagMap in the collection.
<HorizontalLine />
> ObjectStyleExportTagMap **previousItem**( ObjectStyleExportTagMap **obj** )
> 
> Returns the ObjectStyleExportTagMap with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyleExportTagMap | obj | The index of the ObjectStyleExportTagMap that follows the desired ObjectStyleExportTagMap. |

<HorizontalLine />
> ObjectStyleExportTagMap **nextItem**( ObjectStyleExportTagMap **obj** )
> 
> Returns the ObjectStyleExportTagMap whose index follows the specified ObjectStyleExportTagMap in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyleExportTagMap | obj | The ObjectStyleExportTagMap whose index comes before the desired ObjectStyleExportTagMap. |

<HorizontalLine />
> ObjectStyleExportTagMap **anyItem**()
> 
> Returns any ObjectStyleExportTagMap in the collection.
<HorizontalLine />
> ObjectStyleExportTagMap **everyItem**()
> 
> Returns every ObjectStyleExportTagMap in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyleExportTagMap.
<HorizontalLine />
> ObjectStyleExportTagMap **[]**( Number **index** )
> 
> Returns the ObjectStyleExportTagMap with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


