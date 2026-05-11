# PDFExportPresets
A collection of PDF export presets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PDFExportPreset **add**( Object **withProperties** )
> 
> Creates a new PDFExportPreset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PDFExportPreset (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PDFExportPreset.
*** 
> PDFExportPreset **item**( Mixed **index** )
> 
> Returns the PDFExportPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PDFExportPreset **itemByName**( String **name** )
> 
> Returns the PDFExportPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PDFExportPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PDFExportPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PDFExportPreset, index, or name at the beginning of the range. Can accept: PDFExportPreset, Long Integer or String. |
| Mixed | to | The PDFExportPreset, index, or name at the end of the range. Can accept: PDFExportPreset, Long Integer or String. |

*** 
> PDFExportPreset **firstItem**()
> 
> Returns the first PDFExportPreset in the collection.
*** 
> PDFExportPreset **lastItem**()
> 
> Returns the last PDFExportPreset in the collection.
*** 
> PDFExportPreset **middleItem**()
> 
> Returns the middle PDFExportPreset in the collection.
*** 
> PDFExportPreset **previousItem**( PDFExportPreset **obj** )
> 
> Returns the PDFExportPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PDFExportPreset | obj | The index of the PDFExportPreset that follows the desired PDFExportPreset. |

*** 
> PDFExportPreset **nextItem**( PDFExportPreset **obj** )
> 
> Returns the PDFExportPreset whose index follows the specified PDFExportPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PDFExportPreset | obj | The PDFExportPreset whose index comes before the desired PDFExportPreset. |

*** 
> PDFExportPreset **anyItem**()
> 
> Returns any PDFExportPreset in the collection.
*** 
> PDFExportPreset **everyItem**()
> 
> Returns every PDFExportPreset in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PDFExportPreset.
*** 
> PDFExportPreset **[]**( Number **index** )
> 
> Returns the PDFExportPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


