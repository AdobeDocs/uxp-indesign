# EventListeners
A collection of event listeners.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> EventListener **add**( String **eventType**, Mixed **handler**, Boolean **captures**, Object **withProperties** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |
| Object | withProperties | Initial values for properties of the new EventListener (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the EventListener.
*** 
> EventListener **item**( Mixed **index** )
> 
> Returns the EventListener with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> EventListener **itemByName**( String **name** )
> 
> Returns the EventListener with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> EventListener **itemByID**( Number **id** )
> 
> Returns the EventListener with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> EventListener **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the EventListeners within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The EventListener, index, or name at the beginning of the range. Can accept: EventListener, Long Integer or String. |
| Mixed | to | The EventListener, index, or name at the end of the range. Can accept: EventListener, Long Integer or String. |

*** 
> EventListener **firstItem**()
> 
> Returns the first EventListener in the collection.
*** 
> EventListener **lastItem**()
> 
> Returns the last EventListener in the collection.
*** 
> EventListener **middleItem**()
> 
> Returns the middle EventListener in the collection.
*** 
> EventListener **previousItem**( EventListener **obj** )
> 
> Returns the EventListener with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EventListener | obj | The index of the EventListener that follows the desired EventListener. |

*** 
> EventListener **nextItem**( EventListener **obj** )
> 
> Returns the EventListener whose index follows the specified EventListener in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| EventListener | obj | The EventListener whose index comes before the desired EventListener. |

*** 
> EventListener **anyItem**()
> 
> Returns any EventListener in the collection.
*** 
> EventListener **everyItem**()
> 
> Returns every EventListener in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EventListener.
*** 
> EventListener **[]**( Number **index** )
> 
> Returns the EventListener with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


