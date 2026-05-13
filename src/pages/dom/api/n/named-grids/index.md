# NamedGrids
A collection of named grids.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> NamedGrid **add**( Object **withProperties** )
> 
> Creates a new NamedGrid.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new NamedGrid (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the NamedGrid.
<HorizontalLine />
> NamedGrid **item**( Mixed **index** )
> 
> Returns the NamedGrid with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> NamedGrid **itemByName**( String **name** )
> 
> Returns the NamedGrid with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> NamedGrid **itemByID**( Number **id** )
> 
> Returns the NamedGrid with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> NamedGrid **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the NamedGrids within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The NamedGrid, index, or name at the beginning of the range. Can accept: NamedGrid, Long Integer or String. |
| Mixed | to | The NamedGrid, index, or name at the end of the range. Can accept: NamedGrid, Long Integer or String. |

<HorizontalLine />
> NamedGrid **firstItem**()
> 
> Returns the first NamedGrid in the collection.
<HorizontalLine />
> NamedGrid **lastItem**()
> 
> Returns the last NamedGrid in the collection.
<HorizontalLine />
> NamedGrid **middleItem**()
> 
> Returns the middle NamedGrid in the collection.
<HorizontalLine />
> NamedGrid **previousItem**( NamedGrid **obj** )
> 
> Returns the NamedGrid with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NamedGrid | obj | The index of the NamedGrid that follows the desired NamedGrid. |

<HorizontalLine />
> NamedGrid **nextItem**( NamedGrid **obj** )
> 
> Returns the NamedGrid whose index follows the specified NamedGrid in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NamedGrid | obj | The NamedGrid whose index comes before the desired NamedGrid. |

<HorizontalLine />
> NamedGrid **anyItem**()
> 
> Returns any NamedGrid in the collection.
<HorizontalLine />
> NamedGrid **everyItem**()
> 
> Returns every NamedGrid in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the NamedGrid.
<HorizontalLine />
> NamedGrid **[]**( Number **index** )
> 
> Returns the NamedGrid with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


