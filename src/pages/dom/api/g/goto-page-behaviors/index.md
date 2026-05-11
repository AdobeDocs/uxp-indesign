# GotoPageBehaviors
A collection of go to page behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoPageBehavior.
*** 
> GotoPageBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoPageBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoPageBehavior (Optional) |

*** 
> GotoPageBehavior **item**( Mixed **index** )
> 
> Returns the GotoPageBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoPageBehavior **itemByName**( String **name** )
> 
> Returns the GotoPageBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoPageBehavior **itemByID**( Number **id** )
> 
> Returns the GotoPageBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoPageBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoPageBehavior, index, or name at the beginning of the range. Can accept: GotoPageBehavior, Long Integer or String. |
| Mixed | to | The GotoPageBehavior, index, or name at the end of the range. Can accept: GotoPageBehavior, Long Integer or String. |

*** 
> GotoPageBehavior **firstItem**()
> 
> Returns the first GotoPageBehavior in the collection.
*** 
> GotoPageBehavior **lastItem**()
> 
> Returns the last GotoPageBehavior in the collection.
*** 
> GotoPageBehavior **middleItem**()
> 
> Returns the middle GotoPageBehavior in the collection.
*** 
> GotoPageBehavior **previousItem**( GotoPageBehavior **obj** )
> 
> Returns the GotoPageBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPageBehavior | obj | The index of the GotoPageBehavior that follows the desired GotoPageBehavior. |

*** 
> GotoPageBehavior **nextItem**( GotoPageBehavior **obj** )
> 
> Returns the GotoPageBehavior whose index follows the specified GotoPageBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoPageBehavior | obj | The GotoPageBehavior whose index comes before the desired GotoPageBehavior. |

*** 
> GotoPageBehavior **anyItem**()
> 
> Returns any GotoPageBehavior in the collection.
*** 
> GotoPageBehavior **everyItem**()
> 
> Returns every GotoPageBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoPageBehavior.
*** 
> GotoPageBehavior **[]**( Number **index** )
> 
> Returns the GotoPageBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


