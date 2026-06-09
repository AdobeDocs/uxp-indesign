# StrokeStyles
A collection of stroke styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the StrokeStyle.
<HorizontalLine />
> StrokeStyle **item**( Mixed **index** )
> 
> Returns the StrokeStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> StrokeStyle **itemByName**( String **name** )
> 
> Returns the StrokeStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> StrokeStyle **itemByID**( Number **id** )
> 
> Returns the StrokeStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> StrokeStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the StrokeStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The StrokeStyle, index, or name at the beginning of the range. Can accept: StrokeStyle, Long Integer or String. |
| Mixed | to | The StrokeStyle, index, or name at the end of the range. Can accept: StrokeStyle, Long Integer or String. |

<HorizontalLine />
> StrokeStyle **firstItem**()
> 
> Returns the first StrokeStyle in the collection.
<HorizontalLine />
> StrokeStyle **lastItem**()
> 
> Returns the last StrokeStyle in the collection.
<HorizontalLine />
> StrokeStyle **middleItem**()
> 
> Returns the middle StrokeStyle in the collection.
<HorizontalLine />
> StrokeStyle **previousItem**( StrokeStyle **obj** )
> 
> Returns the StrokeStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StrokeStyle | obj | The index of the StrokeStyle that follows the desired StrokeStyle. |

<HorizontalLine />
> StrokeStyle **nextItem**( StrokeStyle **obj** )
> 
> Returns the StrokeStyle whose index follows the specified StrokeStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| StrokeStyle | obj | The StrokeStyle whose index comes before the desired StrokeStyle. |

<HorizontalLine />
> StrokeStyle **anyItem**()
> 
> Returns any StrokeStyle in the collection.
<HorizontalLine />
> StrokeStyle **everyItem**()
> 
> Returns every StrokeStyle in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the StrokeStyle.
<HorizontalLine />
> StrokeStyle **[]**( Number **index** )
> 
> Returns the StrokeStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


