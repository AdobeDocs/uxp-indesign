# ParagraphDestinations
A collection of paragraph destinations.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ParagraphDestination **add**( Text **destination**, Object **withProperties** )
> 
> Creates a new paragraph destination.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | destination | The text or insertion point inside the paragraph that the cross reference points to. The insertion point is always adjusted to the beginning of the paragraph. |
| Object | withProperties | Initial values for properties of the new ParagraphDestination (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the ParagraphDestination.
<HorizontalLine />
> ParagraphDestination **item**( Mixed **index** )
> 
> Returns the ParagraphDestination with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ParagraphDestination **itemByName**( String **name** )
> 
> Returns the ParagraphDestination with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> ParagraphDestination **itemByID**( Number **id** )
> 
> Returns the ParagraphDestination with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> ParagraphDestination **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ParagraphDestinations within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ParagraphDestination, index, or name at the beginning of the range. Can accept: ParagraphDestination, Long Integer or String. |
| Mixed | to | The ParagraphDestination, index, or name at the end of the range. Can accept: ParagraphDestination, Long Integer or String. |

<HorizontalLine />
> ParagraphDestination **firstItem**()
> 
> Returns the first ParagraphDestination in the collection.
<HorizontalLine />
> ParagraphDestination **lastItem**()
> 
> Returns the last ParagraphDestination in the collection.
<HorizontalLine />
> ParagraphDestination **middleItem**()
> 
> Returns the middle ParagraphDestination in the collection.
<HorizontalLine />
> ParagraphDestination **previousItem**( ParagraphDestination **obj** )
> 
> Returns the ParagraphDestination with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphDestination | obj | The index of the ParagraphDestination that follows the desired ParagraphDestination. |

<HorizontalLine />
> ParagraphDestination **nextItem**( ParagraphDestination **obj** )
> 
> Returns the ParagraphDestination whose index follows the specified ParagraphDestination in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ParagraphDestination | obj | The ParagraphDestination whose index comes before the desired ParagraphDestination. |

<HorizontalLine />
> ParagraphDestination **anyItem**()
> 
> Returns any ParagraphDestination in the collection.
<HorizontalLine />
> ParagraphDestination **everyItem**()
> 
> Returns every ParagraphDestination in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ParagraphDestination.
<HorizontalLine />
> ParagraphDestination **[]**( Number **index** )
> 
> Returns the ParagraphDestination with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


