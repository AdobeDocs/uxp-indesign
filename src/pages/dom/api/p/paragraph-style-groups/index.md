# ParagraphStyleGroups
A collection of paragraph style groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ParagraphStyleGroup **add**( Object **withProperties** )
> 
> Creates a new ParagraphStyleGroup.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ParagraphStyleGroup (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the ParagraphStyleGroup.
<HorizontalLine />
> ParagraphStyleGroup **item**( Mixed **index** )
> 
> Returns the ParagraphStyleGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ParagraphStyleGroup **itemByName**( String **name** )
> 
> Returns the ParagraphStyleGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> ParagraphStyleGroup **itemByID**( Number **id** )
> 
> Returns the ParagraphStyleGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> ParagraphStyleGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ParagraphStyleGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ParagraphStyleGroup, index, or name at the beginning of the range. Can accept: ParagraphStyleGroup, Long Integer or String. |
| Mixed | to | The ParagraphStyleGroup, index, or name at the end of the range. Can accept: ParagraphStyleGroup, Long Integer or String. |

<HorizontalLine />
> ParagraphStyleGroup **firstItem**()
> 
> Returns the first ParagraphStyleGroup in the collection.
<HorizontalLine />
> ParagraphStyleGroup **lastItem**()
> 
> Returns the last ParagraphStyleGroup in the collection.
<HorizontalLine />
> ParagraphStyleGroup **middleItem**()
> 
> Returns the middle ParagraphStyleGroup in the collection.
<HorizontalLine />
> ParagraphStyleGroup **previousItem**( ParagraphStyleGroup **obj** )
> 
> Returns the ParagraphStyleGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphStyleGroup | obj | The index of the ParagraphStyleGroup that follows the desired ParagraphStyleGroup. |

<HorizontalLine />
> ParagraphStyleGroup **nextItem**( ParagraphStyleGroup **obj** )
> 
> Returns the ParagraphStyleGroup whose index follows the specified ParagraphStyleGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphStyleGroup | obj | The ParagraphStyleGroup whose index comes before the desired ParagraphStyleGroup. |

<HorizontalLine />
> ParagraphStyleGroup **anyItem**()
> 
> Returns any ParagraphStyleGroup in the collection.
<HorizontalLine />
> ParagraphStyleGroup **everyItem**()
> 
> Returns every ParagraphStyleGroup in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ParagraphStyleGroup.
<HorizontalLine />
> ParagraphStyleGroup **[]**( Number **index** )
> 
> Returns the ParagraphStyleGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


