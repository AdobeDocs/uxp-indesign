# TimingLists
A collection of timing lists.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the TimingList.
<HorizontalLine />
> TimingList **add**( DynamicTriggerEvents **triggerEvent**, Object **withProperties** )
> 
> Adds a new event-triggered timing list object.
#### Parameters
| Type | Name | Description |
|---|---|---|
| DynamicTriggerEvents | triggerEvent | Trigger Event |
| Object | withProperties | Initial values for properties of the new TimingList (Optional) |

<HorizontalLine />
> TimingList **item**( Mixed **index** )
> 
> Returns the TimingList with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> TimingList **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TimingLists within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TimingList, index, or name at the beginning of the range. Can accept: TimingList, Long Integer or String. |
| Mixed | to | The TimingList, index, or name at the end of the range. Can accept: TimingList, Long Integer or String. |

<HorizontalLine />
> TimingList **firstItem**()
> 
> Returns the first TimingList in the collection.
<HorizontalLine />
> TimingList **lastItem**()
> 
> Returns the last TimingList in the collection.
<HorizontalLine />
> TimingList **middleItem**()
> 
> Returns the middle TimingList in the collection.
<HorizontalLine />
> TimingList **previousItem**( TimingList **obj** )
> 
> Returns the TimingList with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TimingList | obj | The index of the TimingList that follows the desired TimingList. |

<HorizontalLine />
> TimingList **nextItem**( TimingList **obj** )
> 
> Returns the TimingList whose index follows the specified TimingList in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TimingList | obj | The TimingList whose index comes before the desired TimingList. |

<HorizontalLine />
> TimingList **anyItem**()
> 
> Returns any TimingList in the collection.
<HorizontalLine />
> TimingList **everyItem**()
> 
> Returns every TimingList in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TimingList.
<HorizontalLine />
> TimingList **[]**( Number **index** )
> 
> Returns the TimingList with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


