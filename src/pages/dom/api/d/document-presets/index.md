# DocumentPresets
A collection of document presets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> DocumentPreset **add**( Object **withProperties** )
> 
> Creates a new DocumentPreset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new DocumentPreset (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the DocumentPreset.
<HorizontalLine />
> DocumentPreset **item**( Mixed **index** )
> 
> Returns the DocumentPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> DocumentPreset **itemByName**( String **name** )
> 
> Returns the DocumentPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> DocumentPreset **itemByID**( Number **id** )
> 
> Returns the DocumentPreset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> DocumentPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DocumentPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DocumentPreset, index, or name at the beginning of the range. Can accept: DocumentPreset, Long Integer or String. |
| Mixed | to | The DocumentPreset, index, or name at the end of the range. Can accept: DocumentPreset, Long Integer or String. |

<HorizontalLine />
> DocumentPreset **firstItem**()
> 
> Returns the first DocumentPreset in the collection.
<HorizontalLine />
> DocumentPreset **lastItem**()
> 
> Returns the last DocumentPreset in the collection.
<HorizontalLine />
> DocumentPreset **middleItem**()
> 
> Returns the middle DocumentPreset in the collection.
<HorizontalLine />
> DocumentPreset **previousItem**( DocumentPreset **obj** )
> 
> Returns the DocumentPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DocumentPreset | obj | The index of the DocumentPreset that follows the desired DocumentPreset. |

<HorizontalLine />
> DocumentPreset **nextItem**( DocumentPreset **obj** )
> 
> Returns the DocumentPreset whose index follows the specified DocumentPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DocumentPreset | obj | The DocumentPreset whose index comes before the desired DocumentPreset. |

<HorizontalLine />
> DocumentPreset **anyItem**()
> 
> Returns any DocumentPreset in the collection.
<HorizontalLine />
> DocumentPreset **everyItem**()
> 
> Returns every DocumentPreset in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the DocumentPreset.
<HorizontalLine />
> DocumentPreset **[]**( Number **index** )
> 
> Returns the DocumentPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


