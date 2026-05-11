# GradientStops
A collection of gradient stops.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> GradientStop **add**( Object **withProperties** )
> 
> Creates a new GradientStop.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new GradientStop (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the GradientStop.
*** 
> GradientStop **item**( Mixed **index** )
> 
> Returns the GradientStop with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> GradientStop **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the GradientStops within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The GradientStop, index, or name at the beginning of the range. Can accept: GradientStop, Long Integer or String. |
| Mixed | to | The GradientStop, index, or name at the end of the range. Can accept: GradientStop, Long Integer or String. |

*** 
> GradientStop **firstItem**()
> 
> Returns the first GradientStop in the collection.
*** 
> GradientStop **lastItem**()
> 
> Returns the last GradientStop in the collection.
*** 
> GradientStop **middleItem**()
> 
> Returns the middle GradientStop in the collection.
*** 
> GradientStop **previousItem**( GradientStop **obj** )
> 
> Returns the GradientStop with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GradientStop | obj | The index of the GradientStop that follows the desired GradientStop. |

*** 
> GradientStop **nextItem**( GradientStop **obj** )
> 
> Returns the GradientStop whose index follows the specified GradientStop in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| GradientStop | obj | The GradientStop whose index comes before the desired GradientStop. |

*** 
> GradientStop **anyItem**()
> 
> Returns any GradientStop in the collection.
*** 
> GradientStop **everyItem**()
> 
> Returns every GradientStop in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the GradientStop.
*** 
> GradientStop **[]**( Number **index** )
> 
> Returns the GradientStop with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


