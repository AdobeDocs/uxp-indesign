# Groups
A collection of groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Group.
<HorizontalLine />
> Group **add**( PageItem **groupItems**, Layer **layer**, LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new Group.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | groupItems | The objects to group. |
| Layer | layer | The layer on which to create the Group. (Optional) |
| LocationOptions | at | The location at which to insert the Group relative to the reference object or within the container object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the at parameter is before or after. Can accept: Document, Spread, MasterSpread, Page, Layer or PageItem. (Optional) |
| Object | withProperties | Initial values for properties of the new Group (Optional) |

<HorizontalLine />
> Group **item**( Mixed **index** )
> 
> Returns the Group with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Group **itemByName**( String **name** )
> 
> Returns the Group with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Group **itemByID**( Number **id** )
> 
> Returns the Group with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Group **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Groups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Group, index, or name at the beginning of the range. Can accept: Group, Long Integer or String. |
| Mixed | to | The Group, index, or name at the end of the range. Can accept: Group, Long Integer or String. |

<HorizontalLine />
> Group **firstItem**()
> 
> Returns the first Group in the collection.
<HorizontalLine />
> Group **lastItem**()
> 
> Returns the last Group in the collection.
<HorizontalLine />
> Group **middleItem**()
> 
> Returns the middle Group in the collection.
<HorizontalLine />
> Group **previousItem**( Group **obj** )
> 
> Returns the Group with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Group | obj | The index of the Group that follows the desired Group. |

<HorizontalLine />
> Group **nextItem**( Group **obj** )
> 
> Returns the Group whose index follows the specified Group in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Group | obj | The Group whose index comes before the desired Group. |

<HorizontalLine />
> Group **anyItem**()
> 
> Returns any Group in the collection.
<HorizontalLine />
> Group **everyItem**()
> 
> Returns every Group in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Group.
<HorizontalLine />
> Group **[]**( Number **index** )
> 
> Returns the Group with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


