# HyperlinkPageDestinations
A collection of hyperlink page destinations.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HyperlinkPageDestination **add**( Page **destination**, Object **withProperties** )
> 
> Creates a new hyperlink page destination.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | destination | The document page that the hyperlink points to. (Optional) |
| Object | withProperties | Initial values for properties of the new HyperlinkPageDestination (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the HyperlinkPageDestination.
*** 
> HyperlinkPageDestination **item**( Mixed **index** )
> 
> Returns the HyperlinkPageDestination with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HyperlinkPageDestination **itemByName**( String **name** )
> 
> Returns the HyperlinkPageDestination with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HyperlinkPageDestination **itemByID**( Number **id** )
> 
> Returns the HyperlinkPageDestination with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HyperlinkPageDestination **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyperlinkPageDestinations within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyperlinkPageDestination, index, or name at the beginning of the range. Can accept: HyperlinkPageDestination, Long Integer or String. |
| Mixed | to | The HyperlinkPageDestination, index, or name at the end of the range. Can accept: HyperlinkPageDestination, Long Integer or String. |

*** 
> HyperlinkPageDestination **firstItem**()
> 
> Returns the first HyperlinkPageDestination in the collection.
*** 
> HyperlinkPageDestination **lastItem**()
> 
> Returns the last HyperlinkPageDestination in the collection.
*** 
> HyperlinkPageDestination **middleItem**()
> 
> Returns the middle HyperlinkPageDestination in the collection.
*** 
> HyperlinkPageDestination **previousItem**( HyperlinkPageDestination **obj** )
> 
> Returns the HyperlinkPageDestination with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkPageDestination | obj | The index of the HyperlinkPageDestination that follows the desired HyperlinkPageDestination. |

*** 
> HyperlinkPageDestination **nextItem**( HyperlinkPageDestination **obj** )
> 
> Returns the HyperlinkPageDestination whose index follows the specified HyperlinkPageDestination in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkPageDestination | obj | The HyperlinkPageDestination whose index comes before the desired HyperlinkPageDestination. |

*** 
> HyperlinkPageDestination **anyItem**()
> 
> Returns any HyperlinkPageDestination in the collection.
*** 
> HyperlinkPageDestination **everyItem**()
> 
> Returns every HyperlinkPageDestination in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyperlinkPageDestination.
*** 
> HyperlinkPageDestination **[]**( Number **index** )
> 
> Returns the HyperlinkPageDestination with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


