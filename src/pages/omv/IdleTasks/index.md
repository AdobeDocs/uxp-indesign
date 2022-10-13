# IdleTasks
All attachable idle tasks.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> IdleTask **add**( Object **withProperties** )
> 
> Creates a new IdleTask.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new IdleTask (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the IdleTask.
*** 
> IdleTask **item**( Mixed **index** )
> 
> Returns the IdleTask with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> IdleTask **itemByName**( String **name** )
> 
> Returns the IdleTask with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> IdleTask **itemByID**( Number **id** )
> 
> Returns the IdleTask with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> IdleTask **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the IdleTasks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The IdleTask, index, or name at the beginning of the range. Can accept: IdleTask, Long Integer or String. |
| Mixed | to | The IdleTask, index, or name at the end of the range. Can accept: IdleTask, Long Integer or String. |

*** 
> IdleTask **firstItem**()
> 
> Returns the first IdleTask in the collection.
*** 
> IdleTask **lastItem**()
> 
> Returns the last IdleTask in the collection.
*** 
> IdleTask **middleItem**()
> 
> Returns the middle IdleTask in the collection.
*** 
> IdleTask **previousItem**( IdleTask **obj** )
> 
> Returns the IdleTask with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IdleTask | obj | The index of the IdleTask that follows the desired IdleTask. |

*** 
> IdleTask **nextItem**( IdleTask **obj** )
> 
> Returns the IdleTask whose index follows the specified IdleTask in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| IdleTask | obj | The IdleTask whose index comes before the desired IdleTask. |

*** 
> IdleTask **anyItem**()
> 
> Returns any IdleTask in the collection.
*** 
> IdleTask **everyItem**()
> 
> Returns every IdleTask in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the IdleTask.
*** 
> IdleTask **[]**( Number **index** )
> 
> Returns the IdleTask with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


