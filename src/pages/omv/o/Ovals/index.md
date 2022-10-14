# Ovals
A collection of ellipses.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Oval.
*** 
> Oval **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Oval
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the Oval. (Optional) |
| LocationOptions | at | The location at which to insert the Oval relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Oval (Optional) |

*** 
> Oval **item**( Mixed **index** )
> 
> Returns the Oval with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Oval **itemByName**( String **name** )
> 
> Returns the Oval with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Oval **itemByID**( Number **id** )
> 
> Returns the Oval with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Oval **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Ovals within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Oval, index, or name at the beginning of the range. Can accept: Oval, Long Integer or String. |
| Mixed | to | The Oval, index, or name at the end of the range. Can accept: Oval, Long Integer or String. |

*** 
> Oval **firstItem**()
> 
> Returns the first Oval in the collection.
*** 
> Oval **lastItem**()
> 
> Returns the last Oval in the collection.
*** 
> Oval **middleItem**()
> 
> Returns the middle Oval in the collection.
*** 
> Oval **previousItem**( Oval **obj** )
> 
> Returns the Oval with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Oval | obj | The index of the Oval that follows the desired Oval. |

*** 
> Oval **nextItem**( Oval **obj** )
> 
> Returns the Oval whose index follows the specified Oval in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Oval | obj | The Oval whose index comes before the desired Oval. |

*** 
> Oval **anyItem**()
> 
> Returns any Oval in the collection.
*** 
> Oval **everyItem**()
> 
> Returns every Oval in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Oval.
*** 
> Oval **[]**( Number **index** )
> 
> Returns the Oval with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


