# ShowHideFieldsBehaviors
A collection of show/hide fields behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ShowHideFieldsBehavior.
*** 
> ShowHideFieldsBehavior **add**( Object **withProperties** )
> 
> Creates a new ShowHideFieldsBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ShowHideFieldsBehavior (Optional) |

*** 
> ShowHideFieldsBehavior **item**( Mixed **index** )
> 
> Returns the ShowHideFieldsBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ShowHideFieldsBehavior **itemByName**( String **name** )
> 
> Returns the ShowHideFieldsBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ShowHideFieldsBehavior **itemByID**( Number **id** )
> 
> Returns the ShowHideFieldsBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ShowHideFieldsBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ShowHideFieldsBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ShowHideFieldsBehavior, index, or name at the beginning of the range. Can accept: ShowHideFieldsBehavior, Long Integer or String. |
| Mixed | to | The ShowHideFieldsBehavior, index, or name at the end of the range. Can accept: ShowHideFieldsBehavior, Long Integer or String. |

*** 
> ShowHideFieldsBehavior **firstItem**()
> 
> Returns the first ShowHideFieldsBehavior in the collection.
*** 
> ShowHideFieldsBehavior **lastItem**()
> 
> Returns the last ShowHideFieldsBehavior in the collection.
*** 
> ShowHideFieldsBehavior **middleItem**()
> 
> Returns the middle ShowHideFieldsBehavior in the collection.
*** 
> ShowHideFieldsBehavior **previousItem**( ShowHideFieldsBehavior **obj** )
> 
> Returns the ShowHideFieldsBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ShowHideFieldsBehavior | obj | The index of the ShowHideFieldsBehavior that follows the desired ShowHideFieldsBehavior. |

*** 
> ShowHideFieldsBehavior **nextItem**( ShowHideFieldsBehavior **obj** )
> 
> Returns the ShowHideFieldsBehavior whose index follows the specified ShowHideFieldsBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ShowHideFieldsBehavior | obj | The ShowHideFieldsBehavior whose index comes before the desired ShowHideFieldsBehavior. |

*** 
> ShowHideFieldsBehavior **anyItem**()
> 
> Returns any ShowHideFieldsBehavior in the collection.
*** 
> ShowHideFieldsBehavior **everyItem**()
> 
> Returns every ShowHideFieldsBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ShowHideFieldsBehavior.
*** 
> ShowHideFieldsBehavior **[]**( Number **index** )
> 
> Returns the ShowHideFieldsBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


