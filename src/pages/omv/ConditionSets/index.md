# ConditionSets
A collection of condition sets for conditional text.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ConditionSet **add**( Object **withProperties** )
> 
> Creates a new ConditionSet.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ConditionSet (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the ConditionSet.
*** 
> ConditionSet **item**( Mixed **index** )
> 
> Returns the ConditionSet with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ConditionSet **itemByName**( String **name** )
> 
> Returns the ConditionSet with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ConditionSet **itemByID**( Number **id** )
> 
> Returns the ConditionSet with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ConditionSet **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ConditionSets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ConditionSet, index, or name at the beginning of the range. Can accept: ConditionSet, Long Integer or String. |
| Mixed | to | The ConditionSet, index, or name at the end of the range. Can accept: ConditionSet, Long Integer or String. |

*** 
> ConditionSet **firstItem**()
> 
> Returns the first ConditionSet in the collection.
*** 
> ConditionSet **lastItem**()
> 
> Returns the last ConditionSet in the collection.
*** 
> ConditionSet **middleItem**()
> 
> Returns the middle ConditionSet in the collection.
*** 
> ConditionSet **previousItem**( ConditionSet **obj** )
> 
> Returns the ConditionSet with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ConditionSet | obj | The index of the ConditionSet that follows the desired ConditionSet. |

*** 
> ConditionSet **nextItem**( ConditionSet **obj** )
> 
> Returns the ConditionSet whose index follows the specified ConditionSet in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ConditionSet | obj | The ConditionSet whose index comes before the desired ConditionSet. |

*** 
> ConditionSet **anyItem**()
> 
> Returns any ConditionSet in the collection.
*** 
> ConditionSet **everyItem**()
> 
> Returns every ConditionSet in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ConditionSet.
*** 
> ConditionSet **[]**( Number **index** )
> 
> Returns the ConditionSet with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


