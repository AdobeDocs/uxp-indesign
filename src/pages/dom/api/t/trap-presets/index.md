# TrapPresets
A collection of trap presets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TrapPreset **add**( Object **withProperties** )
> 
> Creates a new TrapPreset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TrapPreset (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the TrapPreset.
<HorizontalLine />
> TrapPreset **item**( Mixed **index** )
> 
> Returns the TrapPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> TrapPreset **itemByName**( String **name** )
> 
> Returns the TrapPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> TrapPreset **itemByID**( Number **id** )
> 
> Returns the TrapPreset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> TrapPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TrapPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TrapPreset, index, or name at the beginning of the range. Can accept: TrapPreset, Long Integer or String. |
| Mixed | to | The TrapPreset, index, or name at the end of the range. Can accept: TrapPreset, Long Integer or String. |

<HorizontalLine />
> TrapPreset **firstItem**()
> 
> Returns the first TrapPreset in the collection.
<HorizontalLine />
> TrapPreset **lastItem**()
> 
> Returns the last TrapPreset in the collection.
<HorizontalLine />
> TrapPreset **middleItem**()
> 
> Returns the middle TrapPreset in the collection.
<HorizontalLine />
> TrapPreset **previousItem**( TrapPreset **obj** )
> 
> Returns the TrapPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TrapPreset | obj | The index of the TrapPreset that follows the desired TrapPreset. |

<HorizontalLine />
> TrapPreset **nextItem**( TrapPreset **obj** )
> 
> Returns the TrapPreset whose index follows the specified TrapPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TrapPreset | obj | The TrapPreset whose index comes before the desired TrapPreset. |

<HorizontalLine />
> TrapPreset **anyItem**()
> 
> Returns any TrapPreset in the collection.
<HorizontalLine />
> TrapPreset **everyItem**()
> 
> Returns every TrapPreset in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TrapPreset.
<HorizontalLine />
> TrapPreset **[]**( Number **index** )
> 
> Returns the TrapPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


