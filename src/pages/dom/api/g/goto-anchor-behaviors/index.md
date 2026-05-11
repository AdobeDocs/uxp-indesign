# GotoAnchorBehaviors
A collection of goto anchor behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoAnchorBehavior.
*** 
> GotoAnchorBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoAnchorBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoAnchorBehavior (Optional) |

*** 
> GotoAnchorBehavior **item**( Mixed **index** )
> 
> Returns the GotoAnchorBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoAnchorBehavior **itemByName**( String **name** )
> 
> Returns the GotoAnchorBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoAnchorBehavior **itemByID**( Number **id** )
> 
> Returns the GotoAnchorBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoAnchorBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoAnchorBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoAnchorBehavior, index, or name at the beginning of the range. Can accept: GotoAnchorBehavior, Long Integer or String. |
| Mixed | to | The GotoAnchorBehavior, index, or name at the end of the range. Can accept: GotoAnchorBehavior, Long Integer or String. |

*** 
> GotoAnchorBehavior **firstItem**()
> 
> Returns the first GotoAnchorBehavior in the collection.
*** 
> GotoAnchorBehavior **lastItem**()
> 
> Returns the last GotoAnchorBehavior in the collection.
*** 
> GotoAnchorBehavior **middleItem**()
> 
> Returns the middle GotoAnchorBehavior in the collection.
*** 
> GotoAnchorBehavior **previousItem**( GotoAnchorBehavior **obj** )
> 
> Returns the GotoAnchorBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoAnchorBehavior | obj | The index of the GotoAnchorBehavior that follows the desired GotoAnchorBehavior. |

*** 
> GotoAnchorBehavior **nextItem**( GotoAnchorBehavior **obj** )
> 
> Returns the GotoAnchorBehavior whose index follows the specified GotoAnchorBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoAnchorBehavior | obj | The GotoAnchorBehavior whose index comes before the desired GotoAnchorBehavior. |

*** 
> GotoAnchorBehavior **anyItem**()
> 
> Returns any GotoAnchorBehavior in the collection.
*** 
> GotoAnchorBehavior **everyItem**()
> 
> Returns every GotoAnchorBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoAnchorBehavior.
*** 
> GotoAnchorBehavior **[]**( Number **index** )
> 
> Returns the GotoAnchorBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


