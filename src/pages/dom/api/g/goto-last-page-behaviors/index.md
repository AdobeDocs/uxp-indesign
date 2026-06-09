# GotoLastPageBehaviors
A collection of goto last page behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoLastPageBehavior.
<HorizontalLine />
> GotoLastPageBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoLastPageBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoLastPageBehavior (Optional) |

<HorizontalLine />
> GotoLastPageBehavior **item**( Mixed **index** )
> 
> Returns the GotoLastPageBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> GotoLastPageBehavior **itemByName**( String **name** )
> 
> Returns the GotoLastPageBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> GotoLastPageBehavior **itemByID**( Number **id** )
> 
> Returns the GotoLastPageBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> GotoLastPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoLastPageBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoLastPageBehavior, index, or name at the beginning of the range. Can accept: GotoLastPageBehavior, Long Integer or String. |
| Mixed | to | The GotoLastPageBehavior, index, or name at the end of the range. Can accept: GotoLastPageBehavior, Long Integer or String. |

<HorizontalLine />
> GotoLastPageBehavior **firstItem**()
> 
> Returns the first GotoLastPageBehavior in the collection.
<HorizontalLine />
> GotoLastPageBehavior **lastItem**()
> 
> Returns the last GotoLastPageBehavior in the collection.
<HorizontalLine />
> GotoLastPageBehavior **middleItem**()
> 
> Returns the middle GotoLastPageBehavior in the collection.
<HorizontalLine />
> GotoLastPageBehavior **previousItem**( GotoLastPageBehavior **obj** )
> 
> Returns the GotoLastPageBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoLastPageBehavior | obj | The index of the GotoLastPageBehavior that follows the desired GotoLastPageBehavior. |

<HorizontalLine />
> GotoLastPageBehavior **nextItem**( GotoLastPageBehavior **obj** )
> 
> Returns the GotoLastPageBehavior whose index follows the specified GotoLastPageBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoLastPageBehavior | obj | The GotoLastPageBehavior whose index comes before the desired GotoLastPageBehavior. |

<HorizontalLine />
> GotoLastPageBehavior **anyItem**()
> 
> Returns any GotoLastPageBehavior in the collection.
<HorizontalLine />
> GotoLastPageBehavior **everyItem**()
> 
> Returns every GotoLastPageBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoLastPageBehavior.
<HorizontalLine />
> GotoLastPageBehavior **[]**( Number **index** )
> 
> Returns the GotoLastPageBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


