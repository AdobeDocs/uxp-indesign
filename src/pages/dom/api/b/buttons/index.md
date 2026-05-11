# Buttons
A collection of buttons.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Button.
*** 
> Button **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Button
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the Button. (Optional) |
| LocationOptions | at | The location at which to insert the Button relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Button (Optional) |

*** 
> Button **item**( Mixed **index** )
> 
> Returns the Button with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Button **itemByName**( String **name** )
> 
> Returns the Button with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Button **itemByID**( Number **id** )
> 
> Returns the Button with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Button **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Buttons within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Button, index, or name at the beginning of the range. Can accept: Button, Long Integer or String. |
| Mixed | to | The Button, index, or name at the end of the range. Can accept: Button, Long Integer or String. |

*** 
> Button **firstItem**()
> 
> Returns the first Button in the collection.
*** 
> Button **lastItem**()
> 
> Returns the last Button in the collection.
*** 
> Button **middleItem**()
> 
> Returns the middle Button in the collection.
*** 
> Button **previousItem**( Button **obj** )
> 
> Returns the Button with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Button | obj | The index of the Button that follows the desired Button. |

*** 
> Button **nextItem**( Button **obj** )
> 
> Returns the Button whose index follows the specified Button in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Button | obj | The Button whose index comes before the desired Button. |

*** 
> Button **anyItem**()
> 
> Returns any Button in the collection.
*** 
> Button **everyItem**()
> 
> Returns every Button in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Button.
*** 
> Button **[]**( Number **index** )
> 
> Returns the Button with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


