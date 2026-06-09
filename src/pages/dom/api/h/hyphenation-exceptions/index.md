# HyphenationExceptions
A collection of hyphenation exceptions lists.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the HyphenationException.
<HorizontalLine />
> HyphenationException **item**( Mixed **index** )
> 
> Returns the HyphenationException with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> HyphenationException **itemByName**( String **name** )
> 
> Returns the HyphenationException with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> HyphenationException **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the HyphenationExceptions within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The HyphenationException, index, or name at the beginning of the range. Can accept: HyphenationException, Long Integer or String. |
| Mixed | to | The HyphenationException, index, or name at the end of the range. Can accept: HyphenationException, Long Integer or String. |

<HorizontalLine />
> HyphenationException **firstItem**()
> 
> Returns the first HyphenationException in the collection.
<HorizontalLine />
> HyphenationException **lastItem**()
> 
> Returns the last HyphenationException in the collection.
<HorizontalLine />
> HyphenationException **middleItem**()
> 
> Returns the middle HyphenationException in the collection.
<HorizontalLine />
> HyphenationException **previousItem**( HyphenationException **obj** )
> 
> Returns the HyphenationException with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyphenationException | obj | The index of the HyphenationException that follows the desired HyphenationException. |

<HorizontalLine />
> HyphenationException **nextItem**( HyphenationException **obj** )
> 
> Returns the HyphenationException whose index follows the specified HyphenationException in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| HyphenationException | obj | The HyphenationException whose index comes before the desired HyphenationException. |

<HorizontalLine />
> HyphenationException **anyItem**()
> 
> Returns any HyphenationException in the collection.
<HorizontalLine />
> HyphenationException **everyItem**()
> 
> Returns every HyphenationException in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyphenationException.
<HorizontalLine />
> HyphenationException **[]**( Number **index** )
> 
> Returns the HyphenationException with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


