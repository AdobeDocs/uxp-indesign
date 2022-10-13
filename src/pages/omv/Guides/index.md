# Guides
A collection of guides.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Guide **add**( Layer **layer**, Object **withProperties** )
> 
> Creates a new guide.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Layer | layer | The layer on which to create the guide. (Optional) |
| Object | withProperties | Initial values for properties of the new Guide (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Guide.
*** 
> Guide **item**( Mixed **index** )
> 
> Returns the Guide with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Guide **itemByName**( String **name** )
> 
> Returns the Guide with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Guide **itemByID**( Number **id** )
> 
> Returns the Guide with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Guide **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Guides within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Guide, index, or name at the beginning of the range. Can accept: Guide, Long Integer or String. |
| Mixed | to | The Guide, index, or name at the end of the range. Can accept: Guide, Long Integer or String. |

*** 
> Guide **firstItem**()
> 
> Returns the first Guide in the collection.
*** 
> Guide **lastItem**()
> 
> Returns the last Guide in the collection.
*** 
> Guide **middleItem**()
> 
> Returns the middle Guide in the collection.
*** 
> Guide **previousItem**( Guide **obj** )
> 
> Returns the Guide with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Guide | obj | The index of the Guide that follows the desired Guide. |

*** 
> Guide **nextItem**( Guide **obj** )
> 
> Returns the Guide whose index follows the specified Guide in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Guide | obj | The Guide whose index comes before the desired Guide. |

*** 
> Guide **anyItem**()
> 
> Returns any Guide in the collection.
*** 
> Guide **everyItem**()
> 
> Returns every Guide in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Guide.
*** 
> Guide **[]**( Number **index** )
> 
> Returns the Guide with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


