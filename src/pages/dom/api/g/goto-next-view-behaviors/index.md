# GotoNextViewBehaviors
A collection of goto next view behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the GotoNextViewBehavior.
<HorizontalLine />
> GotoNextViewBehavior **add**( Object **withProperties** )
> 
> Creates a new GotoNextViewBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GotoNextViewBehavior (Optional) |

<HorizontalLine />
> GotoNextViewBehavior **item**( Mixed **index** )
> 
> Returns the GotoNextViewBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> GotoNextViewBehavior **itemByName**( String **name** )
> 
> Returns the GotoNextViewBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> GotoNextViewBehavior **itemByID**( Number **id** )
> 
> Returns the GotoNextViewBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> GotoNextViewBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GotoNextViewBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GotoNextViewBehavior, index, or name at the beginning of the range. Can accept: GotoNextViewBehavior, Long Integer or String. |
| Mixed | to | The GotoNextViewBehavior, index, or name at the end of the range. Can accept: GotoNextViewBehavior, Long Integer or String. |

<HorizontalLine />
> GotoNextViewBehavior **firstItem**()
> 
> Returns the first GotoNextViewBehavior in the collection.
<HorizontalLine />
> GotoNextViewBehavior **lastItem**()
> 
> Returns the last GotoNextViewBehavior in the collection.
<HorizontalLine />
> GotoNextViewBehavior **middleItem**()
> 
> Returns the middle GotoNextViewBehavior in the collection.
<HorizontalLine />
> GotoNextViewBehavior **previousItem**( GotoNextViewBehavior **obj** )
> 
> Returns the GotoNextViewBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoNextViewBehavior | obj | The index of the GotoNextViewBehavior that follows the desired GotoNextViewBehavior. |

<HorizontalLine />
> GotoNextViewBehavior **nextItem**( GotoNextViewBehavior **obj** )
> 
> Returns the GotoNextViewBehavior whose index follows the specified GotoNextViewBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GotoNextViewBehavior | obj | The GotoNextViewBehavior whose index comes before the desired GotoNextViewBehavior. |

<HorizontalLine />
> GotoNextViewBehavior **anyItem**()
> 
> Returns any GotoNextViewBehavior in the collection.
<HorizontalLine />
> GotoNextViewBehavior **everyItem**()
> 
> Returns every GotoNextViewBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the GotoNextViewBehavior.
<HorizontalLine />
> GotoNextViewBehavior **[]**( Number **index** )
> 
> Returns the GotoNextViewBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


