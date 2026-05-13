# HyperlinkExternalPageDestinations
A collection of hyperlink external page destinations.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HyperlinkExternalPageDestination **add**( Page **destination**, Object **withProperties** )
> 
> Creates a new hyperlink external page destination.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Page | destination | The destination page. (Optional) |
| Object | withProperties | Initial values for properties of the new HyperlinkExternalPageDestination (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the HyperlinkExternalPageDestination.
<HorizontalLine />
> HyperlinkExternalPageDestination **item**( Mixed **index** )
> 
> Returns the HyperlinkExternalPageDestination with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> HyperlinkExternalPageDestination **itemByName**( String **name** )
> 
> Returns the HyperlinkExternalPageDestination with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> HyperlinkExternalPageDestination **itemByID**( Number **id** )
> 
> Returns the HyperlinkExternalPageDestination with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> HyperlinkExternalPageDestination **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyperlinkExternalPageDestinations within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyperlinkExternalPageDestination, index, or name at the beginning of the range. Can accept: HyperlinkExternalPageDestination, Long Integer or String. |
| Mixed | to | The HyperlinkExternalPageDestination, index, or name at the end of the range. Can accept: HyperlinkExternalPageDestination, Long Integer or String. |

<HorizontalLine />
> HyperlinkExternalPageDestination **firstItem**()
> 
> Returns the first HyperlinkExternalPageDestination in the collection.
<HorizontalLine />
> HyperlinkExternalPageDestination **lastItem**()
> 
> Returns the last HyperlinkExternalPageDestination in the collection.
<HorizontalLine />
> HyperlinkExternalPageDestination **middleItem**()
> 
> Returns the middle HyperlinkExternalPageDestination in the collection.
<HorizontalLine />
> HyperlinkExternalPageDestination **previousItem**( HyperlinkExternalPageDestination **obj** )
> 
> Returns the HyperlinkExternalPageDestination with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkExternalPageDestination | obj | The index of the HyperlinkExternalPageDestination that follows the desired HyperlinkExternalPageDestination. |

<HorizontalLine />
> HyperlinkExternalPageDestination **nextItem**( HyperlinkExternalPageDestination **obj** )
> 
> Returns the HyperlinkExternalPageDestination whose index follows the specified HyperlinkExternalPageDestination in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkExternalPageDestination | obj | The HyperlinkExternalPageDestination whose index comes before the desired HyperlinkExternalPageDestination. |

<HorizontalLine />
> HyperlinkExternalPageDestination **anyItem**()
> 
> Returns any HyperlinkExternalPageDestination in the collection.
<HorizontalLine />
> HyperlinkExternalPageDestination **everyItem**()
> 
> Returns every HyperlinkExternalPageDestination in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyperlinkExternalPageDestination.
<HorizontalLine />
> HyperlinkExternalPageDestination **[]**( Number **index** )
> 
> Returns the HyperlinkExternalPageDestination with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


