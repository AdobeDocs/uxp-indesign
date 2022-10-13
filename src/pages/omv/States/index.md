# States
A collection of states.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> State **add**( Object **withProperties** )
> 
> Creates a new State.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new State (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the State.
*** 
> State **item**( Mixed **index** )
> 
> Returns the State with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> State **itemByName**( String **name** )
> 
> Returns the State with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> State **itemByID**( Number **id** )
> 
> Returns the State with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> State **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the States within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The State, index, or name at the beginning of the range. Can accept: State, Long Integer or String. |
| Mixed | to | The State, index, or name at the end of the range. Can accept: State, Long Integer or String. |

*** 
> State **firstItem**()
> 
> Returns the first State in the collection.
*** 
> State **lastItem**()
> 
> Returns the last State in the collection.
*** 
> State **middleItem**()
> 
> Returns the middle State in the collection.
*** 
> State **previousItem**( State **obj** )
> 
> Returns the State with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| State | obj | The index of the State that follows the desired State. |

*** 
> State **nextItem**( State **obj** )
> 
> Returns the State whose index follows the specified State in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| State | obj | The State whose index comes before the desired State. |

*** 
> State **anyItem**()
> 
> Returns any State in the collection.
*** 
> State **everyItem**()
> 
> Returns every State in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the State.
*** 
> State **[]**( Number **index** )
> 
> Returns the State with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


