# OpacityGradientStops
A collection of opacity gradient stops.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> OpacityGradientStop **add**( Object **withProperties** )
> 
> Creates a new OpacityGradientStop.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new OpacityGradientStop (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the OpacityGradientStop.
<HorizontalLine />
> OpacityGradientStop **item**( Mixed **index** )
> 
> Returns the OpacityGradientStop with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> OpacityGradientStop **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the OpacityGradientStops within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The OpacityGradientStop, index, or name at the beginning of the range. Can accept: OpacityGradientStop, Long Integer or String. |
| Mixed | to | The OpacityGradientStop, index, or name at the end of the range. Can accept: OpacityGradientStop, Long Integer or String. |

<HorizontalLine />
> OpacityGradientStop **firstItem**()
> 
> Returns the first OpacityGradientStop in the collection.
<HorizontalLine />
> OpacityGradientStop **lastItem**()
> 
> Returns the last OpacityGradientStop in the collection.
<HorizontalLine />
> OpacityGradientStop **middleItem**()
> 
> Returns the middle OpacityGradientStop in the collection.
<HorizontalLine />
> OpacityGradientStop **previousItem**( OpacityGradientStop **obj** )
> 
> Returns the OpacityGradientStop with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| OpacityGradientStop | obj | The index of the OpacityGradientStop that follows the desired OpacityGradientStop. |

<HorizontalLine />
> OpacityGradientStop **nextItem**( OpacityGradientStop **obj** )
> 
> Returns the OpacityGradientStop whose index follows the specified OpacityGradientStop in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| OpacityGradientStop | obj | The OpacityGradientStop whose index comes before the desired OpacityGradientStop. |

<HorizontalLine />
> OpacityGradientStop **anyItem**()
> 
> Returns any OpacityGradientStop in the collection.
<HorizontalLine />
> OpacityGradientStop **everyItem**()
> 
> Returns every OpacityGradientStop in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the OpacityGradientStop.
<HorizontalLine />
> OpacityGradientStop **[]**( Number **index** )
> 
> Returns the OpacityGradientStop with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


