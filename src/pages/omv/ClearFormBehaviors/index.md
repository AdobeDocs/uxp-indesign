# ClearFormBehaviors
A collection of clear form behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ClearFormBehavior.
*** 
> ClearFormBehavior **add**( Object **withProperties** )
> 
> Creates a new ClearFormBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ClearFormBehavior (Optional) |

*** 
> ClearFormBehavior **item**( Mixed **index** )
> 
> Returns the ClearFormBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ClearFormBehavior **itemByName**( String **name** )
> 
> Returns the ClearFormBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ClearFormBehavior **itemByID**( Number **id** )
> 
> Returns the ClearFormBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ClearFormBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ClearFormBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ClearFormBehavior, index, or name at the beginning of the range. Can accept: ClearFormBehavior, Long Integer or String. |
| Mixed | to | The ClearFormBehavior, index, or name at the end of the range. Can accept: ClearFormBehavior, Long Integer or String. |

*** 
> ClearFormBehavior **firstItem**()
> 
> Returns the first ClearFormBehavior in the collection.
*** 
> ClearFormBehavior **lastItem**()
> 
> Returns the last ClearFormBehavior in the collection.
*** 
> ClearFormBehavior **middleItem**()
> 
> Returns the middle ClearFormBehavior in the collection.
*** 
> ClearFormBehavior **previousItem**( ClearFormBehavior **obj** )
> 
> Returns the ClearFormBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ClearFormBehavior | obj | The index of the ClearFormBehavior that follows the desired ClearFormBehavior. |

*** 
> ClearFormBehavior **nextItem**( ClearFormBehavior **obj** )
> 
> Returns the ClearFormBehavior whose index follows the specified ClearFormBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ClearFormBehavior | obj | The ClearFormBehavior whose index comes before the desired ClearFormBehavior. |

*** 
> ClearFormBehavior **anyItem**()
> 
> Returns any ClearFormBehavior in the collection.
*** 
> ClearFormBehavior **everyItem**()
> 
> Returns every ClearFormBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ClearFormBehavior.
*** 
> ClearFormBehavior **[]**( Number **index** )
> 
> Returns the ClearFormBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


