# HyperlinkTextSources
A collection of hyperlink text sources.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> HyperlinkTextSource **add**( Text **source**, Object **withProperties** )
> 
> Creates a new hyperlink text source.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | source | The text or insertion point to hyperlink. |
| Object | withProperties | Initial values for properties of the new HyperlinkTextSource (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the HyperlinkTextSource.
*** 
> HyperlinkTextSource **item**( Mixed **index** )
> 
> Returns the HyperlinkTextSource with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> HyperlinkTextSource **itemByName**( String **name** )
> 
> Returns the HyperlinkTextSource with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> HyperlinkTextSource **itemByID**( Number **id** )
> 
> Returns the HyperlinkTextSource with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> HyperlinkTextSource **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyperlinkTextSources within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyperlinkTextSource, index, or name at the beginning of the range. Can accept: HyperlinkTextSource, Long Integer or String. |
| Mixed | to | The HyperlinkTextSource, index, or name at the end of the range. Can accept: HyperlinkTextSource, Long Integer or String. |

*** 
> HyperlinkTextSource **firstItem**()
> 
> Returns the first HyperlinkTextSource in the collection.
*** 
> HyperlinkTextSource **lastItem**()
> 
> Returns the last HyperlinkTextSource in the collection.
*** 
> HyperlinkTextSource **middleItem**()
> 
> Returns the middle HyperlinkTextSource in the collection.
*** 
> HyperlinkTextSource **previousItem**( HyperlinkTextSource **obj** )
> 
> Returns the HyperlinkTextSource with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkTextSource | obj | The index of the HyperlinkTextSource that follows the desired HyperlinkTextSource. |

*** 
> HyperlinkTextSource **nextItem**( HyperlinkTextSource **obj** )
> 
> Returns the HyperlinkTextSource whose index follows the specified HyperlinkTextSource in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyperlinkTextSource | obj | The HyperlinkTextSource whose index comes before the desired HyperlinkTextSource. |

*** 
> HyperlinkTextSource **anyItem**()
> 
> Returns any HyperlinkTextSource in the collection.
*** 
> HyperlinkTextSource **everyItem**()
> 
> Returns every HyperlinkTextSource in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyperlinkTextSource.
*** 
> HyperlinkTextSource **[]**( Number **index** )
> 
> Returns the HyperlinkTextSource with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


