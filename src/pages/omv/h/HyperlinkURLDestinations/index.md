# HyperlinkURLDestinations
A collection of hyperlink URL destinations.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HyperlinkURLDestination **add**( String **destination**, Object **withProperties** )
> 
> Creates a new hyperlink URL destination.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | destination | The URL that the hyperlink points to. (Optional) |
| Object | withProperties | Initial values for properties of the new HyperlinkURLDestination (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the HyperlinkURLDestination.
*** 
> HyperlinkURLDestination **item**( Mixed **index** )
> 
> Returns the HyperlinkURLDestination with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HyperlinkURLDestination **itemByName**( String **name** )
> 
> Returns the HyperlinkURLDestination with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HyperlinkURLDestination **itemByID**( Number **id** )
> 
> Returns the HyperlinkURLDestination with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HyperlinkURLDestination **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyperlinkURLDestinations within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyperlinkURLDestination, index, or name at the beginning of the range. Can accept: HyperlinkURLDestination, Long Integer or String. |
| Mixed | to | The HyperlinkURLDestination, index, or name at the end of the range. Can accept: HyperlinkURLDestination, Long Integer or String. |

*** 
> HyperlinkURLDestination **firstItem**()
> 
> Returns the first HyperlinkURLDestination in the collection.
*** 
> HyperlinkURLDestination **lastItem**()
> 
> Returns the last HyperlinkURLDestination in the collection.
*** 
> HyperlinkURLDestination **middleItem**()
> 
> Returns the middle HyperlinkURLDestination in the collection.
*** 
> HyperlinkURLDestination **previousItem**( HyperlinkURLDestination **obj** )
> 
> Returns the HyperlinkURLDestination with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkURLDestination | obj | The index of the HyperlinkURLDestination that follows the desired HyperlinkURLDestination. |

*** 
> HyperlinkURLDestination **nextItem**( HyperlinkURLDestination **obj** )
> 
> Returns the HyperlinkURLDestination whose index follows the specified HyperlinkURLDestination in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkURLDestination | obj | The HyperlinkURLDestination whose index comes before the desired HyperlinkURLDestination. |

*** 
> HyperlinkURLDestination **anyItem**()
> 
> Returns any HyperlinkURLDestination in the collection.
*** 
> HyperlinkURLDestination **everyItem**()
> 
> Returns every HyperlinkURLDestination in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyperlinkURLDestination.
*** 
> HyperlinkURLDestination **[]**( Number **index** )
> 
> Returns the HyperlinkURLDestination with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


