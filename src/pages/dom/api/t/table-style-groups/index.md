# TableStyleGroups
A collection of table style groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TableStyleGroup **add**( Object **withProperties** )
> 
> Creates a new TableStyleGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TableStyleGroup (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the TableStyleGroup.
<HorizontalLine />
> TableStyleGroup **item**( Mixed **index** )
> 
> Returns the TableStyleGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> TableStyleGroup **itemByName**( String **name** )
> 
> Returns the TableStyleGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> TableStyleGroup **itemByID**( Number **id** )
> 
> Returns the TableStyleGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> TableStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TableStyleGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TableStyleGroup, index, or name at the beginning of the range. Can accept: TableStyleGroup, Long Integer or String. |
| Mixed | to | The TableStyleGroup, index, or name at the end of the range. Can accept: TableStyleGroup, Long Integer or String. |

<HorizontalLine />
> TableStyleGroup **firstItem**()
> 
> Returns the first TableStyleGroup in the collection.
<HorizontalLine />
> TableStyleGroup **lastItem**()
> 
> Returns the last TableStyleGroup in the collection.
<HorizontalLine />
> TableStyleGroup **middleItem**()
> 
> Returns the middle TableStyleGroup in the collection.
<HorizontalLine />
> TableStyleGroup **previousItem**( TableStyleGroup **obj** )
> 
> Returns the TableStyleGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyleGroup | obj | The index of the TableStyleGroup that follows the desired TableStyleGroup. |

<HorizontalLine />
> TableStyleGroup **nextItem**( TableStyleGroup **obj** )
> 
> Returns the TableStyleGroup whose index follows the specified TableStyleGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TableStyleGroup | obj | The TableStyleGroup whose index comes before the desired TableStyleGroup. |

<HorizontalLine />
> TableStyleGroup **anyItem**()
> 
> Returns any TableStyleGroup in the collection.
<HorizontalLine />
> TableStyleGroup **everyItem**()
> 
> Returns every TableStyleGroup in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TableStyleGroup.
<HorizontalLine />
> TableStyleGroup **[]**( Number **index** )
> 
> Returns the TableStyleGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


