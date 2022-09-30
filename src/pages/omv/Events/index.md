# Events
A collection of events.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Event.
*** 
> Event **item**( Mixed **index** )
> 
> Returns the Event with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Event **itemByID**( Number **id** )
> 
> Returns the Event with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Event **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Events within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Event, index, or name at the beginning of the range. Can accept: Event, Long Integer or String. |
| Mixed | to | The Event, index, or name at the end of the range. Can accept: Event, Long Integer or String. |

*** 
> Event **firstItem**()
> 
> Returns the first Event in the collection.
*** 
> Event **lastItem**()
> 
> Returns the last Event in the collection.
*** 
> Event **middleItem**()
> 
> Returns the middle Event in the collection.
*** 
> Event **previousItem**( Event **obj** )
> 
> Returns the Event with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Event | obj | The index of the Event that follows the desired Event. |

*** 
> Event **nextItem**( Event **obj** )
> 
> Returns the Event whose index follows the specified Event in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Event | obj | The Event whose index comes before the desired Event. |

*** 
> Event **anyItem**()
> 
> Returns any Event in the collection.
*** 
> Event **everyItem**()
> 
> Returns every Event in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Event.
*** 
> Event **[]**( Number **index** )
> 
> Returns the Event with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


