# RadioButtons
A collection of radio buttons.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the RadioButton.
*** 
> RadioButton **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new RadioButton
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the RadioButton. (Optional) |
| LocationOptions | at | The location at which to insert the RadioButton relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new RadioButton (Optional) |

*** 
> RadioButton **item**( Mixed **index** )
> 
> Returns the RadioButton with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> RadioButton **itemByName**( String **name** )
> 
> Returns the RadioButton with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> RadioButton **itemByID**( Number **id** )
> 
> Returns the RadioButton with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> RadioButton **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the RadioButtons within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The RadioButton, index, or name at the beginning of the range. Can accept: RadioButton, Long Integer or String. |
| Mixed | to | The RadioButton, index, or name at the end of the range. Can accept: RadioButton, Long Integer or String. |

*** 
> RadioButton **firstItem**()
> 
> Returns the first RadioButton in the collection.
*** 
> RadioButton **lastItem**()
> 
> Returns the last RadioButton in the collection.
*** 
> RadioButton **middleItem**()
> 
> Returns the middle RadioButton in the collection.
*** 
> RadioButton **previousItem**( RadioButton **obj** )
> 
> Returns the RadioButton with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RadioButton | obj | The index of the RadioButton that follows the desired RadioButton. |

*** 
> RadioButton **nextItem**( RadioButton **obj** )
> 
> Returns the RadioButton whose index follows the specified RadioButton in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RadioButton | obj | The RadioButton whose index comes before the desired RadioButton. |

*** 
> RadioButton **anyItem**()
> 
> Returns any RadioButton in the collection.
*** 
> RadioButton **everyItem**()
> 
> Returns every RadioButton in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the RadioButton.
*** 
> RadioButton **[]**( Number **index** )
> 
> Returns the RadioButton with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


