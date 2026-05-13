# Hyperlinks
A collection of hyperlinks.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Hyperlink **add**( Mixed **hyperlinkSource**, Mixed **hyperlinkDestination**, Object **withProperties** )
> 
> Creates a new hyperlink.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | hyperlinkSource | The hyperlinked object. Can accept: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource. |
| Mixed | hyperlinkDestination | The destination that the hyperlink points to. Can accept: Ordered array containing fileName:String, volumn:String, directoryId:Long Integer, dataLinkClassId:Long Integer, destinationUid:Long Integer, HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination. (Optional) |
| Object | withProperties | Initial values for properties of the new Hyperlink (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the Hyperlink.
<HorizontalLine />
> Hyperlink **item**( Mixed **index** )
> 
> Returns the Hyperlink with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Hyperlink **itemByName**( String **name** )
> 
> Returns the Hyperlink with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> Hyperlink **itemByID**( Number **id** )
> 
> Returns the Hyperlink with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> Hyperlink **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Hyperlinks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Hyperlink, index, or name at the beginning of the range. Can accept: Hyperlink, Long Integer or String. |
| Mixed | to | The Hyperlink, index, or name at the end of the range. Can accept: Hyperlink, Long Integer or String. |

<HorizontalLine />
> Hyperlink **firstItem**()
> 
> Returns the first Hyperlink in the collection.
<HorizontalLine />
> Hyperlink **lastItem**()
> 
> Returns the last Hyperlink in the collection.
<HorizontalLine />
> Hyperlink **middleItem**()
> 
> Returns the middle Hyperlink in the collection.
<HorizontalLine />
> Hyperlink **previousItem**( Hyperlink **obj** )
> 
> Returns the Hyperlink with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Hyperlink | obj | The index of the Hyperlink that follows the desired Hyperlink. |

<HorizontalLine />
> Hyperlink **nextItem**( Hyperlink **obj** )
> 
> Returns the Hyperlink whose index follows the specified Hyperlink in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Hyperlink | obj | The Hyperlink whose index comes before the desired Hyperlink. |

<HorizontalLine />
> Hyperlink **anyItem**()
> 
> Returns any Hyperlink in the collection.
<HorizontalLine />
> Hyperlink **everyItem**()
> 
> Returns every Hyperlink in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Hyperlink.
<HorizontalLine />
> Hyperlink **[]**( Number **index** )
> 
> Returns the Hyperlink with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


