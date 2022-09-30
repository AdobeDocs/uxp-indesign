# Tints
A collection of tints.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Tint.
*** 
> Tint **add**( Color **baseColor**, Object **withProperties** )
> 
> Creates a new tint swatch.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Color | baseColor | The color that the tint is based upon. |
| Object | withProperties | Initial values for properties of the new Tint (Optional) |

*** 
> Tint **item**( Mixed **index** )
> 
> Returns the Tint with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Tint **itemByName**( String **name** )
> 
> Returns the Tint with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Tint **itemByID**( Number **id** )
> 
> Returns the Tint with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Tint **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Tints within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Tint, index, or name at the beginning of the range. Can accept: Tint, Long Integer or String. |
| Mixed | to | The Tint, index, or name at the end of the range. Can accept: Tint, Long Integer or String. |

*** 
> Tint **firstItem**()
> 
> Returns the first Tint in the collection.
*** 
> Tint **lastItem**()
> 
> Returns the last Tint in the collection.
*** 
> Tint **middleItem**()
> 
> Returns the middle Tint in the collection.
*** 
> Tint **previousItem**( Tint **obj** )
> 
> Returns the Tint with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Tint | obj | The index of the Tint that follows the desired Tint. |

*** 
> Tint **nextItem**( Tint **obj** )
> 
> Returns the Tint whose index follows the specified Tint in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Tint | obj | The Tint whose index comes before the desired Tint. |

*** 
> Tint **anyItem**()
> 
> Returns any Tint in the collection.
*** 
> Tint **everyItem**()
> 
> Returns every Tint in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Tint.
*** 
> Tint **[]**( Number **index** )
> 
> Returns the Tint with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


