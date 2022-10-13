# Behaviors
A collection of behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Behavior.
*** 
> Behavior **item**( Mixed **index** )
> 
> Returns the Behavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Behavior **itemByName**( String **name** )
> 
> Returns the Behavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Behavior **itemByID**( Number **id** )
> 
> Returns the Behavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Behavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Behaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Behavior, index, or name at the beginning of the range. Can accept: Behavior, Long Integer or String. |
| Mixed | to | The Behavior, index, or name at the end of the range. Can accept: Behavior, Long Integer or String. |

*** 
> Behavior **firstItem**()
> 
> Returns the first Behavior in the collection.
*** 
> Behavior **lastItem**()
> 
> Returns the last Behavior in the collection.
*** 
> Behavior **middleItem**()
> 
> Returns the middle Behavior in the collection.
*** 
> Behavior **previousItem**( Behavior **obj** )
> 
> Returns the Behavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Behavior | obj | The index of the Behavior that follows the desired Behavior. |

*** 
> Behavior **nextItem**( Behavior **obj** )
> 
> Returns the Behavior whose index follows the specified Behavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Behavior | obj | The Behavior whose index comes before the desired Behavior. |

*** 
> Behavior **anyItem**()
> 
> Returns any Behavior in the collection.
*** 
> Behavior **everyItem**()
> 
> Returns every Behavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Behavior.
*** 
> Behavior **[]**( Number **index** )
> 
> Returns the Behavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


