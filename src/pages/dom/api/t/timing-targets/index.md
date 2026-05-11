# TimingTargets
A collection of timing target.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TimingTarget **add**( Mixed **dynamicTarget**, Number **delaySeconds**, Object **withProperties** )
> 
> Adds a new target item.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | dynamicTarget | A page item target that is an animation, media, or mso. Can accept: PageItem, Graphic, Behavior or MediaItem. |
| Number | delaySeconds | The time delay in seconds for a target. (Optional) |
| Object | withProperties | Initial values for properties of the new TimingTarget (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TimingTarget.
*** 
> TimingTarget **item**( Mixed **index** )
> 
> Returns the TimingTarget with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TimingTarget **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TimingTargets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TimingTarget, index, or name at the beginning of the range. Can accept: TimingTarget, Long Integer or String. |
| Mixed | to | The TimingTarget, index, or name at the end of the range. Can accept: TimingTarget, Long Integer or String. |

*** 
> TimingTarget **firstItem**()
> 
> Returns the first TimingTarget in the collection.
*** 
> TimingTarget **lastItem**()
> 
> Returns the last TimingTarget in the collection.
*** 
> TimingTarget **middleItem**()
> 
> Returns the middle TimingTarget in the collection.
*** 
> TimingTarget **previousItem**( TimingTarget **obj** )
> 
> Returns the TimingTarget with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TimingTarget | obj | The index of the TimingTarget that follows the desired TimingTarget. |

*** 
> TimingTarget **nextItem**( TimingTarget **obj** )
> 
> Returns the TimingTarget whose index follows the specified TimingTarget in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TimingTarget | obj | The TimingTarget whose index comes before the desired TimingTarget. |

*** 
> TimingTarget **anyItem**()
> 
> Returns any TimingTarget in the collection.
*** 
> TimingTarget **everyItem**()
> 
> Returns every TimingTarget in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TimingTarget.
*** 
> TimingTarget **[]**( Number **index** )
> 
> Returns the TimingTarget with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


