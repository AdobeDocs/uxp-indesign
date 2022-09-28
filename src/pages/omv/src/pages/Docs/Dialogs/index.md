# Dialogs
A collection of dialogs.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Dialog **add**( Object **withProperties** )
> 
> Creates a new Dialog.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Dialog (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Dialog.
*** 
> Dialog **item**( Mixed **index** )
> 
> Returns the Dialog with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Dialog **itemByName**( String **name** )
> 
> Returns the Dialog with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Dialog **itemByID**( Number **id** )
> 
> Returns the Dialog with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Dialog **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Dialogs within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Dialog, index, or name at the beginning of the range. Can accept: Dialog, Long Integer or String. |
| Mixed | to | The Dialog, index, or name at the end of the range. Can accept: Dialog, Long Integer or String. |

*** 
> Dialog **firstItem**()
> 
> Returns the first Dialog in the collection.
*** 
> Dialog **lastItem**()
> 
> Returns the last Dialog in the collection.
*** 
> Dialog **middleItem**()
> 
> Returns the middle Dialog in the collection.
*** 
> Dialog **previousItem**( Dialog **obj** )
> 
> Returns the Dialog with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Dialog | obj | The index of the Dialog that follows the desired Dialog. |

*** 
> Dialog **nextItem**( Dialog **obj** )
> 
> Returns the Dialog whose index follows the specified Dialog in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Dialog | obj | The Dialog whose index comes before the desired Dialog. |

*** 
> Dialog **anyItem**()
> 
> Returns any Dialog in the collection.
*** 
> Dialog **everyItem**()
> 
> Returns every Dialog in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Dialog.
*** 
> Dialog **[]**( Number **index** )
> 
> Returns the Dialog with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


