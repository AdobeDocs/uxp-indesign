# GotoFirstPageBehaviors
A collection of goto first page behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoFirstPageBehavior.
*** 
> GotoFirstPageBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoFirstPageBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoFirstPageBehavior (Optional) |

*** 
> GotoFirstPageBehavior **item**( Mixed **index** )
> 
> Returns the GotoFirstPageBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GotoFirstPageBehavior **itemByName**( String **name** )
> 
> Returns the GotoFirstPageBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> GotoFirstPageBehavior **itemByID**( Number **id** )
> 
> Returns the GotoFirstPageBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> GotoFirstPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoFirstPageBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoFirstPageBehavior, index, or name at the beginning of the range. Can accept: GotoFirstPageBehavior, Long Integer or String. |
| Mixed | to | The GotoFirstPageBehavior, index, or name at the end of the range. Can accept: GotoFirstPageBehavior, Long Integer or String. |

*** 
> GotoFirstPageBehavior **firstItem**()
> 
> Returns the first GotoFirstPageBehavior in the collection.
*** 
> GotoFirstPageBehavior **lastItem**()
> 
> Returns the last GotoFirstPageBehavior in the collection.
*** 
> GotoFirstPageBehavior **middleItem**()
> 
> Returns the middle GotoFirstPageBehavior in the collection.
*** 
> GotoFirstPageBehavior **previousItem**( GotoFirstPageBehavior **obj** )
> 
> Returns the GotoFirstPageBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoFirstPageBehavior | obj | The index of the GotoFirstPageBehavior that follows the desired GotoFirstPageBehavior. |

*** 
> GotoFirstPageBehavior **nextItem**( GotoFirstPageBehavior **obj** )
> 
> Returns the GotoFirstPageBehavior whose index follows the specified GotoFirstPageBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoFirstPageBehavior | obj | The GotoFirstPageBehavior whose index comes before the desired GotoFirstPageBehavior. |

*** 
> GotoFirstPageBehavior **anyItem**()
> 
> Returns any GotoFirstPageBehavior in the collection.
*** 
> GotoFirstPageBehavior **everyItem**()
> 
> Returns every GotoFirstPageBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoFirstPageBehavior.
*** 
> GotoFirstPageBehavior **[]**( Number **index** )
> 
> Returns the GotoFirstPageBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


