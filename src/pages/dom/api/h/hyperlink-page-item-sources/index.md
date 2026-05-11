# HyperlinkPageItemSources
A collection of hyperlink page item sources.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HyperlinkPageItemSource **add**( PageItem **source**, Object **withProperties** )
> 
> Creates a new hyperlink page item source.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PageItem | source | The page item to hyperlink. |
| Object | withProperties | Initial values for properties of the new HyperlinkPageItemSource (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the HyperlinkPageItemSource.
*** 
> HyperlinkPageItemSource **item**( Mixed **index** )
> 
> Returns the HyperlinkPageItemSource with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HyperlinkPageItemSource **itemByName**( String **name** )
> 
> Returns the HyperlinkPageItemSource with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HyperlinkPageItemSource **itemByID**( Number **id** )
> 
> Returns the HyperlinkPageItemSource with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HyperlinkPageItemSource **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyperlinkPageItemSources within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyperlinkPageItemSource, index, or name at the beginning of the range. Can accept: HyperlinkPageItemSource, Long Integer or String. |
| Mixed | to | The HyperlinkPageItemSource, index, or name at the end of the range. Can accept: HyperlinkPageItemSource, Long Integer or String. |

*** 
> HyperlinkPageItemSource **firstItem**()
> 
> Returns the first HyperlinkPageItemSource in the collection.
*** 
> HyperlinkPageItemSource **lastItem**()
> 
> Returns the last HyperlinkPageItemSource in the collection.
*** 
> HyperlinkPageItemSource **middleItem**()
> 
> Returns the middle HyperlinkPageItemSource in the collection.
*** 
> HyperlinkPageItemSource **previousItem**( HyperlinkPageItemSource **obj** )
> 
> Returns the HyperlinkPageItemSource with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkPageItemSource | obj | The index of the HyperlinkPageItemSource that follows the desired HyperlinkPageItemSource. |

*** 
> HyperlinkPageItemSource **nextItem**( HyperlinkPageItemSource **obj** )
> 
> Returns the HyperlinkPageItemSource whose index follows the specified HyperlinkPageItemSource in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkPageItemSource | obj | The HyperlinkPageItemSource whose index comes before the desired HyperlinkPageItemSource. |

*** 
> HyperlinkPageItemSource **anyItem**()
> 
> Returns any HyperlinkPageItemSource in the collection.
*** 
> HyperlinkPageItemSource **everyItem**()
> 
> Returns every HyperlinkPageItemSource in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyperlinkPageItemSource.
*** 
> HyperlinkPageItemSource **[]**( Number **index** )
> 
> Returns the HyperlinkPageItemSource with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


