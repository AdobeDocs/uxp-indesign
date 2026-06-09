# GotoURLBehaviors
A collection of goto URL behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoURLBehavior.
<HorizontalLine />
> GotoURLBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoURLBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoURLBehavior (Optional) |

<HorizontalLine />
> GotoURLBehavior **item**( Mixed **index** )
> 
> Returns the GotoURLBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> GotoURLBehavior **itemByName**( String **name** )
> 
> Returns the GotoURLBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> GotoURLBehavior **itemByID**( Number **id** )
> 
> Returns the GotoURLBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> GotoURLBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoURLBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoURLBehavior, index, or name at the beginning of the range. Can accept: GotoURLBehavior, Long Integer or String. |
| Mixed | to | The GotoURLBehavior, index, or name at the end of the range. Can accept: GotoURLBehavior, Long Integer or String. |

<HorizontalLine />
> GotoURLBehavior **firstItem**()
> 
> Returns the first GotoURLBehavior in the collection.
<HorizontalLine />
> GotoURLBehavior **lastItem**()
> 
> Returns the last GotoURLBehavior in the collection.
<HorizontalLine />
> GotoURLBehavior **middleItem**()
> 
> Returns the middle GotoURLBehavior in the collection.
<HorizontalLine />
> GotoURLBehavior **previousItem**( GotoURLBehavior **obj** )
> 
> Returns the GotoURLBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoURLBehavior | obj | The index of the GotoURLBehavior that follows the desired GotoURLBehavior. |

<HorizontalLine />
> GotoURLBehavior **nextItem**( GotoURLBehavior **obj** )
> 
> Returns the GotoURLBehavior whose index follows the specified GotoURLBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoURLBehavior | obj | The GotoURLBehavior whose index comes before the desired GotoURLBehavior. |

<HorizontalLine />
> GotoURLBehavior **anyItem**()
> 
> Returns any GotoURLBehavior in the collection.
<HorizontalLine />
> GotoURLBehavior **everyItem**()
> 
> Returns every GotoURLBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoURLBehavior.
<HorizontalLine />
> GotoURLBehavior **[]**( Number **index** )
> 
> Returns the GotoURLBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


