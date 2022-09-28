# Colors
A collection of colors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Color.
*** 
> Color **add**( Object **withProperties** )
> 
> Creates a new Color.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Color (Optional) |

*** 
> Color **item**( Mixed **index** )
> 
> Returns the Color with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Color **itemByName**( String **name** )
> 
> Returns the Color with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Color **itemByID**( Number **id** )
> 
> Returns the Color with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Color **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Colors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Color, index, or name at the beginning of the range. Can accept: Color, Long Integer or String. |
| Mixed | to | The Color, index, or name at the end of the range. Can accept: Color, Long Integer or String. |

*** 
> Color **firstItem**()
> 
> Returns the first Color in the collection.
*** 
> Color **lastItem**()
> 
> Returns the last Color in the collection.
*** 
> Color **middleItem**()
> 
> Returns the middle Color in the collection.
*** 
> Color **previousItem**( Color **obj** )
> 
> Returns the Color with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Color | obj | The index of the Color that follows the desired Color. |

*** 
> Color **nextItem**( Color **obj** )
> 
> Returns the Color whose index follows the specified Color in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Color | obj | The Color whose index comes before the desired Color. |

*** 
> Color **anyItem**()
> 
> Returns any Color in the collection.
*** 
> Color **everyItem**()
> 
> Returns every Color in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Color.
*** 
> Color **[]**( Number **index** )
> 
> Returns the Color with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


