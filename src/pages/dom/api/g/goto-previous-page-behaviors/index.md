# GotoPreviousPageBehaviors
A collection of goto previous page behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoPreviousPageBehavior.
*** 
> GotoPreviousPageBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoPreviousPageBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoPreviousPageBehavior (Optional) |

*** 
> GotoPreviousPageBehavior **item**( Mixed **index** )
> 
> Returns the GotoPreviousPageBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoPreviousPageBehavior **itemByName**( String **name** )
> 
> Returns the GotoPreviousPageBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoPreviousPageBehavior **itemByID**( Number **id** )
> 
> Returns the GotoPreviousPageBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoPreviousPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoPreviousPageBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoPreviousPageBehavior, index, or name at the beginning of the range. Can accept: GotoPreviousPageBehavior, Long Integer or String. |
| Mixed | to | The GotoPreviousPageBehavior, index, or name at the end of the range. Can accept: GotoPreviousPageBehavior, Long Integer or String. |

*** 
> GotoPreviousPageBehavior **firstItem**()
> 
> Returns the first GotoPreviousPageBehavior in the collection.
*** 
> GotoPreviousPageBehavior **lastItem**()
> 
> Returns the last GotoPreviousPageBehavior in the collection.
*** 
> GotoPreviousPageBehavior **middleItem**()
> 
> Returns the middle GotoPreviousPageBehavior in the collection.
*** 
> GotoPreviousPageBehavior **previousItem**( GotoPreviousPageBehavior **obj** )
> 
> Returns the GotoPreviousPageBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPreviousPageBehavior | obj | The index of the GotoPreviousPageBehavior that follows the desired GotoPreviousPageBehavior. |

*** 
> GotoPreviousPageBehavior **nextItem**( GotoPreviousPageBehavior **obj** )
> 
> Returns the GotoPreviousPageBehavior whose index follows the specified GotoPreviousPageBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPreviousPageBehavior | obj | The GotoPreviousPageBehavior whose index comes before the desired GotoPreviousPageBehavior. |

*** 
> GotoPreviousPageBehavior **anyItem**()
> 
> Returns any GotoPreviousPageBehavior in the collection.
*** 
> GotoPreviousPageBehavior **everyItem**()
> 
> Returns every GotoPreviousPageBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoPreviousPageBehavior.
*** 
> GotoPreviousPageBehavior **[]**( Number **index** )
> 
> Returns the GotoPreviousPageBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


