# TimingGroups
A collection of timing data objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TimingGroup **add**( Mixed **dynamicTarget**, Number **delaySeconds**, Object **withProperties** )
> 
> Adds a new timing group.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | dynamicTarget | A page item target that is an animation, media, or mso. Can accept: PageItem, Graphic, Behavior or MediaItem. |
| Number | delaySeconds | The time delay in seconds for a target. (Optional) |
| Object | withProperties | Initial values for properties of the new TimingGroup (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TimingGroup.
*** 
> TimingGroup **item**( Mixed **index** )
> 
> Returns the TimingGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TimingGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TimingGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TimingGroup, index, or name at the beginning of the range. Can accept: TimingGroup, Long Integer or String. |
| Mixed | to | The TimingGroup, index, or name at the end of the range. Can accept: TimingGroup, Long Integer or String. |

*** 
> TimingGroup **firstItem**()
> 
> Returns the first TimingGroup in the collection.
*** 
> TimingGroup **lastItem**()
> 
> Returns the last TimingGroup in the collection.
*** 
> TimingGroup **middleItem**()
> 
> Returns the middle TimingGroup in the collection.
*** 
> TimingGroup **previousItem**( TimingGroup **obj** )
> 
> Returns the TimingGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TimingGroup | obj | The index of the TimingGroup that follows the desired TimingGroup. |

*** 
> TimingGroup **nextItem**( TimingGroup **obj** )
> 
> Returns the TimingGroup whose index follows the specified TimingGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TimingGroup | obj | The TimingGroup whose index comes before the desired TimingGroup. |

*** 
> TimingGroup **anyItem**()
> 
> Returns any TimingGroup in the collection.
*** 
> TimingGroup **everyItem**()
> 
> Returns every TimingGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TimingGroup.
*** 
> TimingGroup **[]**( Number **index** )
> 
> Returns the TimingGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


