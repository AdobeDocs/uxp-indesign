# Conditions
A collection of conditions for conditional text.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Condition **add**( Object **withProperties** )
> 
> Creates a new Condition.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new Condition (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Condition.
*** 
> Condition **item**( Mixed **index** )
> 
> Returns the Condition with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Condition **itemByName**( String **name** )
> 
> Returns the Condition with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Condition **itemByID**( Number **id** )
> 
> Returns the Condition with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Condition **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Conditions within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Condition, index, or name at the beginning of the range. Can accept: Condition, Long Integer or String. |
| Mixed | to | The Condition, index, or name at the end of the range. Can accept: Condition, Long Integer or String. |

*** 
> Condition **firstItem**()
> 
> Returns the first Condition in the collection.
*** 
> Condition **lastItem**()
> 
> Returns the last Condition in the collection.
*** 
> Condition **middleItem**()
> 
> Returns the middle Condition in the collection.
*** 
> Condition **previousItem**( Condition **obj** )
> 
> Returns the Condition with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Condition | obj | The index of the Condition that follows the desired Condition. |

*** 
> Condition **nextItem**( Condition **obj** )
> 
> Returns the Condition whose index follows the specified Condition in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Condition | obj | The Condition whose index comes before the desired Condition. |

*** 
> Condition **anyItem**()
> 
> Returns any Condition in the collection.
*** 
> Condition **everyItem**()
> 
> Returns every Condition in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Condition.
*** 
> Condition **[]**( Number **index** )
> 
> Returns the Condition with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


