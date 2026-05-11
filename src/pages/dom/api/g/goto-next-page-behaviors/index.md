# GotoNextPageBehaviors
A collection of goto next page behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoNextPageBehavior.
*** 
> GotoNextPageBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoNextPageBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoNextPageBehavior (Optional) |

*** 
> GotoNextPageBehavior **item**( Mixed **index** )
> 
> Returns the GotoNextPageBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoNextPageBehavior **itemByName**( String **name** )
> 
> Returns the GotoNextPageBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoNextPageBehavior **itemByID**( Number **id** )
> 
> Returns the GotoNextPageBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoNextPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoNextPageBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoNextPageBehavior, index, or name at the beginning of the range. Can accept: GotoNextPageBehavior, Long Integer or String. |
| Mixed | to | The GotoNextPageBehavior, index, or name at the end of the range. Can accept: GotoNextPageBehavior, Long Integer or String. |

*** 
> GotoNextPageBehavior **firstItem**()
> 
> Returns the first GotoNextPageBehavior in the collection.
*** 
> GotoNextPageBehavior **lastItem**()
> 
> Returns the last GotoNextPageBehavior in the collection.
*** 
> GotoNextPageBehavior **middleItem**()
> 
> Returns the middle GotoNextPageBehavior in the collection.
*** 
> GotoNextPageBehavior **previousItem**( GotoNextPageBehavior **obj** )
> 
> Returns the GotoNextPageBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoNextPageBehavior | obj | The index of the GotoNextPageBehavior that follows the desired GotoNextPageBehavior. |

*** 
> GotoNextPageBehavior **nextItem**( GotoNextPageBehavior **obj** )
> 
> Returns the GotoNextPageBehavior whose index follows the specified GotoNextPageBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoNextPageBehavior | obj | The GotoNextPageBehavior whose index comes before the desired GotoNextPageBehavior. |

*** 
> GotoNextPageBehavior **anyItem**()
> 
> Returns any GotoNextPageBehavior in the collection.
*** 
> GotoNextPageBehavior **everyItem**()
> 
> Returns every GotoNextPageBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoNextPageBehavior.
*** 
> GotoNextPageBehavior **[]**( Number **index** )
> 
> Returns the GotoNextPageBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


