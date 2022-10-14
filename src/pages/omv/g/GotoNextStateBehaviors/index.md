# GotoNextStateBehaviors
A collection of goto next state behaviors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoNextStateBehavior.
*** 
> GotoNextStateBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoNextStateBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoNextStateBehavior (Optional) |

*** 
> GotoNextStateBehavior **item**( Mixed **index** )
> 
> Returns the GotoNextStateBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoNextStateBehavior **itemByName**( String **name** )
> 
> Returns the GotoNextStateBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoNextStateBehavior **itemByID**( Number **id** )
> 
> Returns the GotoNextStateBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoNextStateBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoNextStateBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoNextStateBehavior, index, or name at the beginning of the range. Can accept: GotoNextStateBehavior, Long Integer or String. |
| Mixed | to | The GotoNextStateBehavior, index, or name at the end of the range. Can accept: GotoNextStateBehavior, Long Integer or String. |

*** 
> GotoNextStateBehavior **firstItem**()
> 
> Returns the first GotoNextStateBehavior in the collection.
*** 
> GotoNextStateBehavior **lastItem**()
> 
> Returns the last GotoNextStateBehavior in the collection.
*** 
> GotoNextStateBehavior **middleItem**()
> 
> Returns the middle GotoNextStateBehavior in the collection.
*** 
> GotoNextStateBehavior **previousItem**( GotoNextStateBehavior **obj** )
> 
> Returns the GotoNextStateBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoNextStateBehavior | obj | The index of the GotoNextStateBehavior that follows the desired GotoNextStateBehavior. |

*** 
> GotoNextStateBehavior **nextItem**( GotoNextStateBehavior **obj** )
> 
> Returns the GotoNextStateBehavior whose index follows the specified GotoNextStateBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoNextStateBehavior | obj | The GotoNextStateBehavior whose index comes before the desired GotoNextStateBehavior. |

*** 
> GotoNextStateBehavior **anyItem**()
> 
> Returns any GotoNextStateBehavior in the collection.
*** 
> GotoNextStateBehavior **everyItem**()
> 
> Returns every GotoNextStateBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoNextStateBehavior.
*** 
> GotoNextStateBehavior **[]**( Number **index** )
> 
> Returns the GotoNextStateBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


