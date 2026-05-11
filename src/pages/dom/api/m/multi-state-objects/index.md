# MultiStateObjects
A collection of multi-state objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MultiStateObject.
*** 
> MultiStateObject **add**( Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new MultiStateObject
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the MultiStateObject. (Optional) |
| LocationOptions | at | The location at which to insert the MultiStateObject relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new MultiStateObject (Optional) |

*** 
> MultiStateObject **item**( Mixed **index** )
> 
> Returns the MultiStateObject with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MultiStateObject **itemByName**( String **name** )
> 
> Returns the MultiStateObject with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MultiStateObject **itemByID**( Number **id** )
> 
> Returns the MultiStateObject with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MultiStateObject **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MultiStateObjects within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MultiStateObject, index, or name at the beginning of the range. Can accept: MultiStateObject, Long Integer or String. |
| Mixed | to | The MultiStateObject, index, or name at the end of the range. Can accept: MultiStateObject, Long Integer or String. |

*** 
> MultiStateObject **firstItem**()
> 
> Returns the first MultiStateObject in the collection.
*** 
> MultiStateObject **lastItem**()
> 
> Returns the last MultiStateObject in the collection.
*** 
> MultiStateObject **middleItem**()
> 
> Returns the middle MultiStateObject in the collection.
*** 
> MultiStateObject **previousItem**( MultiStateObject **obj** )
> 
> Returns the MultiStateObject with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MultiStateObject | obj | The index of the MultiStateObject that follows the desired MultiStateObject. |

*** 
> MultiStateObject **nextItem**( MultiStateObject **obj** )
> 
> Returns the MultiStateObject whose index follows the specified MultiStateObject in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MultiStateObject | obj | The MultiStateObject whose index comes before the desired MultiStateObject. |

*** 
> MultiStateObject **anyItem**()
> 
> Returns any MultiStateObject in the collection.
*** 
> MultiStateObject **everyItem**()
> 
> Returns every MultiStateObject in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MultiStateObject.
*** 
> MultiStateObject **[]**( Number **index** )
> 
> Returns the MultiStateObject with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


