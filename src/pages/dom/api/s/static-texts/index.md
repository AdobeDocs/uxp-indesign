# StaticTexts
A collection of static text objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> StaticText **add**( Object **withProperties** )
> 
> Creates a new StaticText.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new StaticText (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the StaticText.
<HorizontalLine />
> StaticText **item**( Mixed **index** )
> 
> Returns the StaticText with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> StaticText **itemByID**( Number **id** )
> 
> Returns the StaticText with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> StaticText **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the StaticTexts within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The StaticText, index, or name at the beginning of the range. Can accept: StaticText, Long Integer or String. |
| Mixed | to | The StaticText, index, or name at the end of the range. Can accept: StaticText, Long Integer or String. |

<HorizontalLine />
> StaticText **firstItem**()
> 
> Returns the first StaticText in the collection.
<HorizontalLine />
> StaticText **lastItem**()
> 
> Returns the last StaticText in the collection.
<HorizontalLine />
> StaticText **middleItem**()
> 
> Returns the middle StaticText in the collection.
<HorizontalLine />
> StaticText **previousItem**( StaticText **obj** )
> 
> Returns the StaticText with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StaticText | obj | The index of the StaticText that follows the desired StaticText. |

<HorizontalLine />
> StaticText **nextItem**( StaticText **obj** )
> 
> Returns the StaticText whose index follows the specified StaticText in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StaticText | obj | The StaticText whose index comes before the desired StaticText. |

<HorizontalLine />
> StaticText **anyItem**()
> 
> Returns any StaticText in the collection.
<HorizontalLine />
> StaticText **everyItem**()
> 
> Returns every StaticText in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the StaticText.
<HorizontalLine />
> StaticText **[]**( Number **index** )
> 
> Returns the StaticText with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


