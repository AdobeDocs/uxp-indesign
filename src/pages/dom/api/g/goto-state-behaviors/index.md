# GotoStateBehaviors
A collection of goto state behaviors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoStateBehavior.
*** 
> GotoStateBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoStateBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoStateBehavior (Optional) |

*** 
> GotoStateBehavior **item**( Mixed **index** )
> 
> Returns the GotoStateBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoStateBehavior **itemByName**( String **name** )
> 
> Returns the GotoStateBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoStateBehavior **itemByID**( Number **id** )
> 
> Returns the GotoStateBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoStateBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoStateBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoStateBehavior, index, or name at the beginning of the range. Can accept: GotoStateBehavior, Long Integer or String. |
| Mixed | to | The GotoStateBehavior, index, or name at the end of the range. Can accept: GotoStateBehavior, Long Integer or String. |

*** 
> GotoStateBehavior **firstItem**()
> 
> Returns the first GotoStateBehavior in the collection.
*** 
> GotoStateBehavior **lastItem**()
> 
> Returns the last GotoStateBehavior in the collection.
*** 
> GotoStateBehavior **middleItem**()
> 
> Returns the middle GotoStateBehavior in the collection.
*** 
> GotoStateBehavior **previousItem**( GotoStateBehavior **obj** )
> 
> Returns the GotoStateBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoStateBehavior | obj | The index of the GotoStateBehavior that follows the desired GotoStateBehavior. |

*** 
> GotoStateBehavior **nextItem**( GotoStateBehavior **obj** )
> 
> Returns the GotoStateBehavior whose index follows the specified GotoStateBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoStateBehavior | obj | The GotoStateBehavior whose index comes before the desired GotoStateBehavior. |

*** 
> GotoStateBehavior **anyItem**()
> 
> Returns any GotoStateBehavior in the collection.
*** 
> GotoStateBehavior **everyItem**()
> 
> Returns every GotoStateBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoStateBehavior.
*** 
> GotoStateBehavior **[]**( Number **index** )
> 
> Returns the GotoStateBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


