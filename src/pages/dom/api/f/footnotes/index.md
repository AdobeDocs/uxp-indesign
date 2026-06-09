# Footnotes
A collection of footnotes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Footnote.
<HorizontalLine />
> Footnote **add**( LocationOptions **at**, Mixed **reference**, Object **withProperties** )
> 
> Creates a new footnote.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | at | The location of the footnote reference number in the main text relative to the reference object or within the story. (Optional) |
| Mixed | reference | The reference object. Note: Must be an insertion point or a note. Required when the at parameter specifies before or after. Can accept: Note or InsertionPoint. (Optional) |
| Object | withProperties | Initial values for properties of the new Footnote (Optional) |

<HorizontalLine />
> Footnote **item**( Mixed **index** )
> 
> Returns the Footnote with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Footnote **itemByName**( String **name** )
> 
> Returns the Footnote with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Footnote **itemByID**( Number **id** )
> 
> Returns the Footnote with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Footnote **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Footnotes within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Footnote, index, or name at the beginning of the range. Can accept: Footnote, Long Integer or String. |
| Mixed | to | The Footnote, index, or name at the end of the range. Can accept: Footnote, Long Integer or String. |

<HorizontalLine />
> Footnote **firstItem**()
> 
> Returns the first Footnote in the collection.
<HorizontalLine />
> Footnote **lastItem**()
> 
> Returns the last Footnote in the collection.
<HorizontalLine />
> Footnote **middleItem**()
> 
> Returns the middle Footnote in the collection.
<HorizontalLine />
> Footnote **previousItem**( Footnote **obj** )
> 
> Returns the Footnote with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Footnote | obj | The index of the Footnote that follows the desired Footnote. |

<HorizontalLine />
> Footnote **nextItem**( Footnote **obj** )
> 
> Returns the Footnote whose index follows the specified Footnote in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Footnote | obj | The Footnote whose index comes before the desired Footnote. |

<HorizontalLine />
> Footnote **anyItem**()
> 
> Returns any Footnote in the collection.
<HorizontalLine />
> Footnote **everyItem**()
> 
> Returns every Footnote in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Footnote.
<HorizontalLine />
> Footnote **[]**( Number **index** )
> 
> Returns the Footnote with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


