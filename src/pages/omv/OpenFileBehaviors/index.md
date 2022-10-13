# OpenFileBehaviors
A collection of open file behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the OpenFileBehavior.
*** 
> OpenFileBehavior **add**( Object **withProperties** )
> 
> Creates a new OpenFileBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new OpenFileBehavior (Optional) |

*** 
> OpenFileBehavior **item**( Mixed **index** )
> 
> Returns the OpenFileBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> OpenFileBehavior **itemByName**( String **name** )
> 
> Returns the OpenFileBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> OpenFileBehavior **itemByID**( Number **id** )
> 
> Returns the OpenFileBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> OpenFileBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the OpenFileBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The OpenFileBehavior, index, or name at the beginning of the range. Can accept: OpenFileBehavior, Long Integer or String. |
| Mixed | to | The OpenFileBehavior, index, or name at the end of the range. Can accept: OpenFileBehavior, Long Integer or String. |

*** 
> OpenFileBehavior **firstItem**()
> 
> Returns the first OpenFileBehavior in the collection.
*** 
> OpenFileBehavior **lastItem**()
> 
> Returns the last OpenFileBehavior in the collection.
*** 
> OpenFileBehavior **middleItem**()
> 
> Returns the middle OpenFileBehavior in the collection.
*** 
> OpenFileBehavior **previousItem**( OpenFileBehavior **obj** )
> 
> Returns the OpenFileBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| OpenFileBehavior | obj | The index of the OpenFileBehavior that follows the desired OpenFileBehavior. |

*** 
> OpenFileBehavior **nextItem**( OpenFileBehavior **obj** )
> 
> Returns the OpenFileBehavior whose index follows the specified OpenFileBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| OpenFileBehavior | obj | The OpenFileBehavior whose index comes before the desired OpenFileBehavior. |

*** 
> OpenFileBehavior **anyItem**()
> 
> Returns any OpenFileBehavior in the collection.
*** 
> OpenFileBehavior **everyItem**()
> 
> Returns every OpenFileBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the OpenFileBehavior.
*** 
> OpenFileBehavior **[]**( Number **index** )
> 
> Returns the OpenFileBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


