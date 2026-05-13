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
<HorizontalLine />
> GotoFirstPageBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoFirstPageBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoFirstPageBehavior (Optional) |

<HorizontalLine />
> GotoFirstPageBehavior **item**( Mixed **index** )
> 
> Returns the GotoFirstPageBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> GotoFirstPageBehavior **itemByName**( String **name** )
> 
> Returns the GotoFirstPageBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> GotoFirstPageBehavior **itemByID**( Number **id** )
> 
> Returns the GotoFirstPageBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> GotoFirstPageBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoFirstPageBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoFirstPageBehavior, index, or name at the beginning of the range. Can accept: GotoFirstPageBehavior, Long Integer or String. |
| Mixed | to | The GotoFirstPageBehavior, index, or name at the end of the range. Can accept: GotoFirstPageBehavior, Long Integer or String. |

<HorizontalLine />
> GotoFirstPageBehavior **firstItem**()
> 
> Returns the first GotoFirstPageBehavior in the collection.
<HorizontalLine />
> GotoFirstPageBehavior **lastItem**()
> 
> Returns the last GotoFirstPageBehavior in the collection.
<HorizontalLine />
> GotoFirstPageBehavior **middleItem**()
> 
> Returns the middle GotoFirstPageBehavior in the collection.
<HorizontalLine />
> GotoFirstPageBehavior **previousItem**( GotoFirstPageBehavior **obj** )
> 
> Returns the GotoFirstPageBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoFirstPageBehavior | obj | The index of the GotoFirstPageBehavior that follows the desired GotoFirstPageBehavior. |

<HorizontalLine />
> GotoFirstPageBehavior **nextItem**( GotoFirstPageBehavior **obj** )
> 
> Returns the GotoFirstPageBehavior whose index follows the specified GotoFirstPageBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoFirstPageBehavior | obj | The GotoFirstPageBehavior whose index comes before the desired GotoFirstPageBehavior. |

<HorizontalLine />
> GotoFirstPageBehavior **anyItem**()
> 
> Returns any GotoFirstPageBehavior in the collection.
<HorizontalLine />
> GotoFirstPageBehavior **everyItem**()
> 
> Returns every GotoFirstPageBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoFirstPageBehavior.
<HorizontalLine />
> GotoFirstPageBehavior **[]**( Number **index** )
> 
> Returns the GotoFirstPageBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


