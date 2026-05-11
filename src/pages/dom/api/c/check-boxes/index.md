# CheckBoxes
A collection of checkboxes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the CheckBox.
*** 
> CheckBox **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new CheckBox
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the CheckBox. (Optional) |
| LocationOptions | at | The location at which to insert the CheckBox relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new CheckBox (Optional) |

*** 
> CheckBox **item**( Mixed **index** )
> 
> Returns the CheckBox with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CheckBox **itemByName**( String **name** )
> 
> Returns the CheckBox with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CheckBox **itemByID**( Number **id** )
> 
> Returns the CheckBox with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CheckBox **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CheckBoxes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CheckBox, index, or name at the beginning of the range. Can accept: CheckBox, Long Integer or String. |
| Mixed | to | The CheckBox, index, or name at the end of the range. Can accept: CheckBox, Long Integer or String. |

*** 
> CheckBox **firstItem**()
> 
> Returns the first CheckBox in the collection.
*** 
> CheckBox **lastItem**()
> 
> Returns the last CheckBox in the collection.
*** 
> CheckBox **middleItem**()
> 
> Returns the middle CheckBox in the collection.
*** 
> CheckBox **previousItem**( CheckBox **obj** )
> 
> Returns the CheckBox with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CheckBox | obj | The index of the CheckBox that follows the desired CheckBox. |

*** 
> CheckBox **nextItem**( CheckBox **obj** )
> 
> Returns the CheckBox whose index follows the specified CheckBox in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CheckBox | obj | The CheckBox whose index comes before the desired CheckBox. |

*** 
> CheckBox **anyItem**()
> 
> Returns any CheckBox in the collection.
*** 
> CheckBox **everyItem**()
> 
> Returns every CheckBox in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CheckBox.
*** 
> CheckBox **[]**( Number **index** )
> 
> Returns the CheckBox with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


