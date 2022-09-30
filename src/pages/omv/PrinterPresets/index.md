# PrinterPresets
A collection of printer presets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PrinterPreset **add**( Object **withProperties** )
> 
> Creates a new PrinterPreset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PrinterPreset (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PrinterPreset.
*** 
> PrinterPreset **item**( Mixed **index** )
> 
> Returns the PrinterPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PrinterPreset **itemByName**( String **name** )
> 
> Returns the PrinterPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PrinterPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PrinterPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PrinterPreset, index, or name at the beginning of the range. Can accept: PrinterPreset, Long Integer or String. |
| Mixed | to | The PrinterPreset, index, or name at the end of the range. Can accept: PrinterPreset, Long Integer or String. |

*** 
> PrinterPreset **firstItem**()
> 
> Returns the first PrinterPreset in the collection.
*** 
> PrinterPreset **lastItem**()
> 
> Returns the last PrinterPreset in the collection.
*** 
> PrinterPreset **middleItem**()
> 
> Returns the middle PrinterPreset in the collection.
*** 
> PrinterPreset **previousItem**( PrinterPreset **obj** )
> 
> Returns the PrinterPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PrinterPreset | obj | The index of the PrinterPreset that follows the desired PrinterPreset. |

*** 
> PrinterPreset **nextItem**( PrinterPreset **obj** )
> 
> Returns the PrinterPreset whose index follows the specified PrinterPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PrinterPreset | obj | The PrinterPreset whose index comes before the desired PrinterPreset. |

*** 
> PrinterPreset **anyItem**()
> 
> Returns any PrinterPreset in the collection.
*** 
> PrinterPreset **everyItem**()
> 
> Returns every PrinterPreset in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PrinterPreset.
*** 
> PrinterPreset **[]**( Number **index** )
> 
> Returns the PrinterPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


