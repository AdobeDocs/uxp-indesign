# ColorGroupSwatches
A collection of color group swatches.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ColorGroupSwatch **add**( Swatch **swatchItemRef**, Object **withProperties** )
> 
> Adds a color group swatch.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Swatch | swatchItemRef | swatch to be added to color group |
| Object | withProperties | Initial values for properties of the new ColorGroupSwatch (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the ColorGroupSwatch.
<HorizontalLine />
> ColorGroupSwatch **item**( Mixed **index** )
> 
> Returns the ColorGroupSwatch with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ColorGroupSwatch **itemByID**( Number **id** )
> 
> Returns the ColorGroupSwatch with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> ColorGroupSwatch **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ColorGroupSwatches within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ColorGroupSwatch, index, or name at the beginning of the range. Can accept: ColorGroupSwatch, Long Integer or String. |
| Mixed | to | The ColorGroupSwatch, index, or name at the end of the range. Can accept: ColorGroupSwatch, Long Integer or String. |

<HorizontalLine />
> ColorGroupSwatch **firstItem**()
> 
> Returns the first ColorGroupSwatch in the collection.
<HorizontalLine />
> ColorGroupSwatch **lastItem**()
> 
> Returns the last ColorGroupSwatch in the collection.
<HorizontalLine />
> ColorGroupSwatch **middleItem**()
> 
> Returns the middle ColorGroupSwatch in the collection.
<HorizontalLine />
> ColorGroupSwatch **previousItem**( ColorGroupSwatch **obj** )
> 
> Returns the ColorGroupSwatch with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ColorGroupSwatch | obj | The index of the ColorGroupSwatch that follows the desired ColorGroupSwatch. |

<HorizontalLine />
> ColorGroupSwatch **nextItem**( ColorGroupSwatch **obj** )
> 
> Returns the ColorGroupSwatch whose index follows the specified ColorGroupSwatch in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ColorGroupSwatch | obj | The ColorGroupSwatch whose index comes before the desired ColorGroupSwatch. |

<HorizontalLine />
> ColorGroupSwatch **anyItem**()
> 
> Returns any ColorGroupSwatch in the collection.
<HorizontalLine />
> ColorGroupSwatch **everyItem**()
> 
> Returns every ColorGroupSwatch in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ColorGroupSwatch.
<HorizontalLine />
> ColorGroupSwatch **[]**( Number **index** )
> 
> Returns the ColorGroupSwatch with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


