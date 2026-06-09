# ViewZoomBehaviors
A collection of view zoom behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the ViewZoomBehavior.
<HorizontalLine />
> ViewZoomBehavior **add**( Object **withProperties** )
> 
> Creates a new ViewZoomBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ViewZoomBehavior (Optional) |

<HorizontalLine />
> ViewZoomBehavior **item**( Mixed **index** )
> 
> Returns the ViewZoomBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ViewZoomBehavior **itemByName**( String **name** )
> 
> Returns the ViewZoomBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> ViewZoomBehavior **itemByID**( Number **id** )
> 
> Returns the ViewZoomBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> ViewZoomBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ViewZoomBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ViewZoomBehavior, index, or name at the beginning of the range. Can accept: ViewZoomBehavior, Long Integer or String. |
| Mixed | to | The ViewZoomBehavior, index, or name at the end of the range. Can accept: ViewZoomBehavior, Long Integer or String. |

<HorizontalLine />
> ViewZoomBehavior **firstItem**()
> 
> Returns the first ViewZoomBehavior in the collection.
<HorizontalLine />
> ViewZoomBehavior **lastItem**()
> 
> Returns the last ViewZoomBehavior in the collection.
<HorizontalLine />
> ViewZoomBehavior **middleItem**()
> 
> Returns the middle ViewZoomBehavior in the collection.
<HorizontalLine />
> ViewZoomBehavior **previousItem**( ViewZoomBehavior **obj** )
> 
> Returns the ViewZoomBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ViewZoomBehavior | obj | The index of the ViewZoomBehavior that follows the desired ViewZoomBehavior. |

<HorizontalLine />
> ViewZoomBehavior **nextItem**( ViewZoomBehavior **obj** )
> 
> Returns the ViewZoomBehavior whose index follows the specified ViewZoomBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ViewZoomBehavior | obj | The ViewZoomBehavior whose index comes before the desired ViewZoomBehavior. |

<HorizontalLine />
> ViewZoomBehavior **anyItem**()
> 
> Returns any ViewZoomBehavior in the collection.
<HorizontalLine />
> ViewZoomBehavior **everyItem**()
> 
> Returns every ViewZoomBehavior in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ViewZoomBehavior.
<HorizontalLine />
> ViewZoomBehavior **[]**( Number **index** )
> 
> Returns the ViewZoomBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


