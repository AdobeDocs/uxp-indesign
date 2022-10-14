# Layers
A collection of layers.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Layer **add**( Object **withProperties** )
> 
> Creates a new Layer.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Layer (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Layer.
*** 
> Layer **item**( Mixed **index** )
> 
> Returns the Layer with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Layer **itemByName**( String **name** )
> 
> Returns the Layer with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Layer **itemByID**( Number **id** )
> 
> Returns the Layer with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Layer **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Layers within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Layer, index, or name at the beginning of the range. Can accept: Layer, Long Integer or String. |
| Mixed | to | The Layer, index, or name at the end of the range. Can accept: Layer, Long Integer or String. |

*** 
> Layer **firstItem**()
> 
> Returns the first Layer in the collection.
*** 
> Layer **lastItem**()
> 
> Returns the last Layer in the collection.
*** 
> Layer **middleItem**()
> 
> Returns the middle Layer in the collection.
*** 
> Layer **previousItem**( Layer **obj** )
> 
> Returns the Layer with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | obj | The index of the Layer that follows the desired Layer. |

*** 
> Layer **nextItem**( Layer **obj** )
> 
> Returns the Layer whose index follows the specified Layer in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | obj | The Layer whose index comes before the desired Layer. |

*** 
> Layer **anyItem**()
> 
> Returns any Layer in the collection.
*** 
> Layer **everyItem**()
> 
> Returns every Layer in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Layer.
*** 
> Layer **[]**( Number **index** )
> 
> Returns the Layer with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


