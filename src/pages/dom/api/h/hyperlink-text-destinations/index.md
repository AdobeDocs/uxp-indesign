# HyperlinkTextDestinations
A collection of hyperlink text destinations.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HyperlinkTextDestination **add**( Text **destination**, Object **withProperties** )
> 
> Creates a new hyperlink text destination.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | destination | The text or insertion point location that the hyperlink points to. |
| Object | withProperties | Initial values for properties of the new HyperlinkTextDestination (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the HyperlinkTextDestination.
*** 
> HyperlinkTextDestination **item**( Mixed **index** )
> 
> Returns the HyperlinkTextDestination with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HyperlinkTextDestination **itemByName**( String **name** )
> 
> Returns the HyperlinkTextDestination with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HyperlinkTextDestination **itemByID**( Number **id** )
> 
> Returns the HyperlinkTextDestination with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HyperlinkTextDestination **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyperlinkTextDestinations within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyperlinkTextDestination, index, or name at the beginning of the range. Can accept: HyperlinkTextDestination, Long Integer or String. |
| Mixed | to | The HyperlinkTextDestination, index, or name at the end of the range. Can accept: HyperlinkTextDestination, Long Integer or String. |

*** 
> HyperlinkTextDestination **firstItem**()
> 
> Returns the first HyperlinkTextDestination in the collection.
*** 
> HyperlinkTextDestination **lastItem**()
> 
> Returns the last HyperlinkTextDestination in the collection.
*** 
> HyperlinkTextDestination **middleItem**()
> 
> Returns the middle HyperlinkTextDestination in the collection.
*** 
> HyperlinkTextDestination **previousItem**( HyperlinkTextDestination **obj** )
> 
> Returns the HyperlinkTextDestination with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkTextDestination | obj | The index of the HyperlinkTextDestination that follows the desired HyperlinkTextDestination. |

*** 
> HyperlinkTextDestination **nextItem**( HyperlinkTextDestination **obj** )
> 
> Returns the HyperlinkTextDestination whose index follows the specified HyperlinkTextDestination in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkTextDestination | obj | The HyperlinkTextDestination whose index comes before the desired HyperlinkTextDestination. |

*** 
> HyperlinkTextDestination **anyItem**()
> 
> Returns any HyperlinkTextDestination in the collection.
*** 
> HyperlinkTextDestination **everyItem**()
> 
> Returns every HyperlinkTextDestination in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyperlinkTextDestination.
*** 
> HyperlinkTextDestination **[]**( Number **index** )
> 
> Returns the HyperlinkTextDestination with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


