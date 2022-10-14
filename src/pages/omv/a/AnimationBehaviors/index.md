# AnimationBehaviors
A collection of animation behaviors.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the AnimationBehavior.
*** 
> AnimationBehavior **add**( Object **withProperties** )
> 
> Creates a new AnimationBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new AnimationBehavior (Optional) |

*** 
> AnimationBehavior **item**( Mixed **index** )
> 
> Returns the AnimationBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> AnimationBehavior **itemByName**( String **name** )
> 
> Returns the AnimationBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> AnimationBehavior **itemByID**( Number **id** )
> 
> Returns the AnimationBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> AnimationBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the AnimationBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The AnimationBehavior, index, or name at the beginning of the range. Can accept: AnimationBehavior, Long Integer or String. |
| Mixed | to | The AnimationBehavior, index, or name at the end of the range. Can accept: AnimationBehavior, Long Integer or String. |

*** 
> AnimationBehavior **firstItem**()
> 
> Returns the first AnimationBehavior in the collection.
*** 
> AnimationBehavior **lastItem**()
> 
> Returns the last AnimationBehavior in the collection.
*** 
> AnimationBehavior **middleItem**()
> 
> Returns the middle AnimationBehavior in the collection.
*** 
> AnimationBehavior **previousItem**( AnimationBehavior **obj** )
> 
> Returns the AnimationBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AnimationBehavior | obj | The index of the AnimationBehavior that follows the desired AnimationBehavior. |

*** 
> AnimationBehavior **nextItem**( AnimationBehavior **obj** )
> 
> Returns the AnimationBehavior whose index follows the specified AnimationBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| AnimationBehavior | obj | The AnimationBehavior whose index comes before the desired AnimationBehavior. |

*** 
> AnimationBehavior **anyItem**()
> 
> Returns any AnimationBehavior in the collection.
*** 
> AnimationBehavior **everyItem**()
> 
> Returns every AnimationBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AnimationBehavior.
*** 
> AnimationBehavior **[]**( Number **index** )
> 
> Returns the AnimationBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


