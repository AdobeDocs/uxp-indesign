# Gradients
A collection of gradients.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Gradient **add**( Object **withProperties** )
> 
> Creates a new Gradient.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Gradient (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Gradient.
*** 
> Gradient **item**( Mixed **index** )
> 
> Returns the Gradient with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Gradient **itemByName**( String **name** )
> 
> Returns the Gradient with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Gradient **itemByID**( Number **id** )
> 
> Returns the Gradient with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Gradient **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Gradients within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Gradient, index, or name at the beginning of the range. Can accept: Gradient, Long Integer or String. |
| Mixed | to | The Gradient, index, or name at the end of the range. Can accept: Gradient, Long Integer or String. |

*** 
> Gradient **firstItem**()
> 
> Returns the first Gradient in the collection.
*** 
> Gradient **lastItem**()
> 
> Returns the last Gradient in the collection.
*** 
> Gradient **middleItem**()
> 
> Returns the middle Gradient in the collection.
*** 
> Gradient **previousItem**( Gradient **obj** )
> 
> Returns the Gradient with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Gradient | obj | The index of the Gradient that follows the desired Gradient. |

*** 
> Gradient **nextItem**( Gradient **obj** )
> 
> Returns the Gradient whose index follows the specified Gradient in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Gradient | obj | The Gradient whose index comes before the desired Gradient. |

*** 
> Gradient **anyItem**()
> 
> Returns any Gradient in the collection.
*** 
> Gradient **everyItem**()
> 
> Returns every Gradient in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Gradient.
*** 
> Gradient **[]**( Number **index** )
> 
> Returns the Gradient with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


