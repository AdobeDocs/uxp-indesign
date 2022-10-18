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

*** 
> Number **count**()
> 
> Displays the number of elements in the DocumentPreset.
*** 
> DocumentPreset **item**( Mixed **index** )
> 
> Returns the DocumentPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> DocumentPreset **itemByName**( String **name** )
> 
> Returns the DocumentPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> DocumentPreset **itemByID**( Number **id** )
> 
> Returns the DocumentPreset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> DocumentPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the DocumentPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The DocumentPreset, index, or name at the beginning of the range. Can accept: DocumentPreset, Long Integer or String. |
| Mixed | to | The DocumentPreset, index, or name at the end of the range. Can accept: DocumentPreset, Long Integer or String. |

*** 
> DocumentPreset **firstItem**()
> 
> Returns the first DocumentPreset in the collection.
*** 
> DocumentPreset **lastItem**()
> 
> Returns the last DocumentPreset in the collection.
*** 
> DocumentPreset **middleItem**()
> 
> Returns the middle DocumentPreset in the collection.
*** 
> DocumentPreset **previousItem**( DocumentPreset **obj** )
> 
> Returns the DocumentPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DocumentPreset | obj | The index of the DocumentPreset that follows the desired DocumentPreset. |

*** 
> DocumentPreset **nextItem**( DocumentPreset **obj** )
> 
> Returns the DocumentPreset whose index follows the specified DocumentPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DocumentPreset | obj | The DocumentPreset whose index comes before the desired DocumentPreset. |

*** 
> DocumentPreset **anyItem**()
> 
> Returns any DocumentPreset in the collection.
*** 
> DocumentPreset **everyItem**()
> 
> Returns every DocumentPreset in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the DocumentPreset.
*** 
> DocumentPreset **[]**( Number **index** )
> 
> Returns the DocumentPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


