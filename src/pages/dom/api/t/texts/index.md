# Texts
A collection of text objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Text.
<HorizontalLine />
> Text **item**( Mixed **index** )
> 
> Returns the Text with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> Text **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Texts within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Text, index, or name at the beginning of the range. Can accept: Text, Long Integer or String. |
| Mixed | to | The Text, index, or name at the end of the range. Can accept: Text, Long Integer or String. |

<HorizontalLine />
> Text **firstItem**()
> 
> Returns the first Text in the collection.
<HorizontalLine />
> Text **lastItem**()
> 
> Returns the last Text in the collection.
<HorizontalLine />
> Text **middleItem**()
> 
> Returns the middle Text in the collection.
<HorizontalLine />
> Text **previousItem**( Text **obj** )
> 
> Returns the Text with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | obj | The index of the Text that follows the desired Text. |

<HorizontalLine />
> Text **nextItem**( Text **obj** )
> 
> Returns the Text whose index follows the specified Text in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Text | obj | The Text whose index comes before the desired Text. |

<HorizontalLine />
> Text **anyItem**()
> 
> Returns any Text in the collection.
<HorizontalLine />
> Text **everyItem**()
> 
> Returns every Text in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Text.
<HorizontalLine />
> Text **[]**( Number **index** )
> 
> Returns the Text with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


