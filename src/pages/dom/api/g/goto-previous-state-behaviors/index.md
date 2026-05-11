# GotoPreviousStateBehaviors
A collection of goto previous state behaviors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoPreviousStateBehavior.
*** 
> GotoPreviousStateBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoPreviousStateBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoPreviousStateBehavior (Optional) |

*** 
> GotoPreviousStateBehavior **item**( Mixed **index** )
> 
> Returns the GotoPreviousStateBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoPreviousStateBehavior **itemByName**( String **name** )
> 
> Returns the GotoPreviousStateBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoPreviousStateBehavior **itemByID**( Number **id** )
> 
> Returns the GotoPreviousStateBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoPreviousStateBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoPreviousStateBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoPreviousStateBehavior, index, or name at the beginning of the range. Can accept: GotoPreviousStateBehavior, Long Integer or String. |
| Mixed | to | The GotoPreviousStateBehavior, index, or name at the end of the range. Can accept: GotoPreviousStateBehavior, Long Integer or String. |

*** 
> GotoPreviousStateBehavior **firstItem**()
> 
> Returns the first GotoPreviousStateBehavior in the collection.
*** 
> GotoPreviousStateBehavior **lastItem**()
> 
> Returns the last GotoPreviousStateBehavior in the collection.
*** 
> GotoPreviousStateBehavior **middleItem**()
> 
> Returns the middle GotoPreviousStateBehavior in the collection.
*** 
> GotoPreviousStateBehavior **previousItem**( GotoPreviousStateBehavior **obj** )
> 
> Returns the GotoPreviousStateBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPreviousStateBehavior | obj | The index of the GotoPreviousStateBehavior that follows the desired GotoPreviousStateBehavior. |

*** 
> GotoPreviousStateBehavior **nextItem**( GotoPreviousStateBehavior **obj** )
> 
> Returns the GotoPreviousStateBehavior whose index follows the specified GotoPreviousStateBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPreviousStateBehavior | obj | The GotoPreviousStateBehavior whose index comes before the desired GotoPreviousStateBehavior. |

*** 
> GotoPreviousStateBehavior **anyItem**()
> 
> Returns any GotoPreviousStateBehavior in the collection.
*** 
> GotoPreviousStateBehavior **everyItem**()
> 
> Returns every GotoPreviousStateBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoPreviousStateBehavior.
*** 
> GotoPreviousStateBehavior **[]**( Number **index** )
> 
> Returns the GotoPreviousStateBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


