# FlattenerPresets
A collection of transparency flattener presets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> FlattenerPreset **add**( Object **withProperties** )
> 
> Creates a new FlattenerPreset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new FlattenerPreset (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the FlattenerPreset.
<HorizontalLine />
> FlattenerPreset **item**( Mixed **index** )
> 
> Returns the FlattenerPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> FlattenerPreset **itemByName**( String **name** )
> 
> Returns the FlattenerPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> FlattenerPreset **itemByID**( Number **id** )
> 
> Returns the FlattenerPreset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> FlattenerPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the FlattenerPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The FlattenerPreset, index, or name at the beginning of the range. Can accept: FlattenerPreset, Long Integer or String. |
| Mixed | to | The FlattenerPreset, index, or name at the end of the range. Can accept: FlattenerPreset, Long Integer or String. |

<HorizontalLine />
> FlattenerPreset **firstItem**()
> 
> Returns the first FlattenerPreset in the collection.
<HorizontalLine />
> FlattenerPreset **lastItem**()
> 
> Returns the last FlattenerPreset in the collection.
<HorizontalLine />
> FlattenerPreset **middleItem**()
> 
> Returns the middle FlattenerPreset in the collection.
<HorizontalLine />
> FlattenerPreset **previousItem**( FlattenerPreset **obj** )
> 
> Returns the FlattenerPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| FlattenerPreset | obj | The index of the FlattenerPreset that follows the desired FlattenerPreset. |

<HorizontalLine />
> FlattenerPreset **nextItem**( FlattenerPreset **obj** )
> 
> Returns the FlattenerPreset whose index follows the specified FlattenerPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| FlattenerPreset | obj | The FlattenerPreset whose index comes before the desired FlattenerPreset. |

<HorizontalLine />
> FlattenerPreset **anyItem**()
> 
> Returns any FlattenerPreset in the collection.
<HorizontalLine />
> FlattenerPreset **everyItem**()
> 
> Returns every FlattenerPreset in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the FlattenerPreset.
<HorizontalLine />
> FlattenerPreset **[]**( Number **index** )
> 
> Returns the FlattenerPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


