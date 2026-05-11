# ComboBoxes
A collection of comboboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ComboBox.
*** 
> ComboBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new ComboBox
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the ComboBox. (Optional) |
| LocationOptions | at | The location at which to insert the ComboBox relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new ComboBox (Optional) |

*** 
> ComboBox **item**( Mixed **index** )
> 
> Returns the ComboBox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ComboBox **itemByName**( String **name** )
> 
> Returns the ComboBox with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ComboBox **itemByID**( Number **id** )
> 
> Returns the ComboBox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ComboBox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ComboBoxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ComboBox, index, or name at the beginning of the range. Can accept: ComboBox, Long Integer or String. |
| Mixed | to | The ComboBox, index, or name at the end of the range. Can accept: ComboBox, Long Integer or String. |

*** 
> ComboBox **firstItem**()
> 
> Returns the first ComboBox in the collection.
*** 
> ComboBox **lastItem**()
> 
> Returns the last ComboBox in the collection.
*** 
> ComboBox **middleItem**()
> 
> Returns the middle ComboBox in the collection.
*** 
> ComboBox **previousItem**( ComboBox **obj** )
> 
> Returns the ComboBox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ComboBox | obj | The index of the ComboBox that follows the desired ComboBox. |

*** 
> ComboBox **nextItem**( ComboBox **obj** )
> 
> Returns the ComboBox whose index follows the specified ComboBox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ComboBox | obj | The ComboBox whose index comes before the desired ComboBox. |

*** 
> ComboBox **anyItem**()
> 
> Returns any ComboBox in the collection.
*** 
> ComboBox **everyItem**()
> 
> Returns every ComboBox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ComboBox.
*** 
> ComboBox **[]**( Number **index** )
> 
> Returns the ComboBox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


