# GotoPreviousViewBehaviors
A collection of goto previous view behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoPreviousViewBehavior.
*** 
> GotoPreviousViewBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoPreviousViewBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoPreviousViewBehavior (Optional) |

*** 
> GotoPreviousViewBehavior **item**( Mixed **index** )
> 
> Returns the GotoPreviousViewBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoPreviousViewBehavior **itemByName**( String **name** )
> 
> Returns the GotoPreviousViewBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoPreviousViewBehavior **itemByID**( Number **id** )
> 
> Returns the GotoPreviousViewBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoPreviousViewBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoPreviousViewBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoPreviousViewBehavior, index, or name at the beginning of the range. Can accept: GotoPreviousViewBehavior, Long Integer or String. |
| Mixed | to | The GotoPreviousViewBehavior, index, or name at the end of the range. Can accept: GotoPreviousViewBehavior, Long Integer or String. |

*** 
> GotoPreviousViewBehavior **firstItem**()
> 
> Returns the first GotoPreviousViewBehavior in the collection.
*** 
> GotoPreviousViewBehavior **lastItem**()
> 
> Returns the last GotoPreviousViewBehavior in the collection.
*** 
> GotoPreviousViewBehavior **middleItem**()
> 
> Returns the middle GotoPreviousViewBehavior in the collection.
*** 
> GotoPreviousViewBehavior **previousItem**( GotoPreviousViewBehavior **obj** )
> 
> Returns the GotoPreviousViewBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPreviousViewBehavior | obj | The index of the GotoPreviousViewBehavior that follows the desired GotoPreviousViewBehavior. |

*** 
> GotoPreviousViewBehavior **nextItem**( GotoPreviousViewBehavior **obj** )
> 
> Returns the GotoPreviousViewBehavior whose index follows the specified GotoPreviousViewBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPreviousViewBehavior | obj | The GotoPreviousViewBehavior whose index comes before the desired GotoPreviousViewBehavior. |

*** 
> GotoPreviousViewBehavior **anyItem**()
> 
> Returns any GotoPreviousViewBehavior in the collection.
*** 
> GotoPreviousViewBehavior **everyItem**()
> 
> Returns every GotoPreviousViewBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoPreviousViewBehavior.
*** 
> GotoPreviousViewBehavior **[]**( Number **index** )
> 
> Returns the GotoPreviousViewBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


