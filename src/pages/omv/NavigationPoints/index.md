# NavigationPoints
A collection of navigation points.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> NavigationPoint **add**( Object **withProperties** )
> 
> Creates a new NavigationPoint.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new NavigationPoint (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the NavigationPoint.
*** 
> NavigationPoint **item**( Mixed **index** )
> 
> Returns the NavigationPoint with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> NavigationPoint **itemByName**( String **name** )
> 
> Returns the NavigationPoint with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> NavigationPoint **itemByID**( Number **id** )
> 
> Returns the NavigationPoint with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> NavigationPoint **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the NavigationPoints within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The NavigationPoint, index, or name at the beginning of the range. Can accept: NavigationPoint, Long Integer or String. |
| Mixed | to | The NavigationPoint, index, or name at the end of the range. Can accept: NavigationPoint, Long Integer or String. |

*** 
> NavigationPoint **firstItem**()
> 
> Returns the first NavigationPoint in the collection.
*** 
> NavigationPoint **lastItem**()
> 
> Returns the last NavigationPoint in the collection.
*** 
> NavigationPoint **middleItem**()
> 
> Returns the middle NavigationPoint in the collection.
*** 
> NavigationPoint **previousItem**( NavigationPoint **obj** )
> 
> Returns the NavigationPoint with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NavigationPoint | obj | The index of the NavigationPoint that follows the desired NavigationPoint. |

*** 
> NavigationPoint **nextItem**( NavigationPoint **obj** )
> 
> Returns the NavigationPoint whose index follows the specified NavigationPoint in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NavigationPoint | obj | The NavigationPoint whose index comes before the desired NavigationPoint. |

*** 
> NavigationPoint **anyItem**()
> 
> Returns any NavigationPoint in the collection.
*** 
> NavigationPoint **everyItem**()
> 
> Returns every NavigationPoint in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the NavigationPoint.
*** 
> NavigationPoint **[]**( Number **index** )
> 
> Returns the NavigationPoint with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


