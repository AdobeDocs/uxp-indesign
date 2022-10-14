# NestedLineStyles
A collection of nested line styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> NestedLineStyle **add**( Object **withProperties** )
> 
> Creates a new NestedLineStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new NestedLineStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the NestedLineStyle.
*** 
> NestedLineStyle **item**( Mixed **index** )
> 
> Returns the NestedLineStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> NestedLineStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the NestedLineStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The NestedLineStyle, index, or name at the beginning of the range. Can accept: NestedLineStyle, Long Integer or String. |
| Mixed | to | The NestedLineStyle, index, or name at the end of the range. Can accept: NestedLineStyle, Long Integer or String. |

*** 
> NestedLineStyle **firstItem**()
> 
> Returns the first NestedLineStyle in the collection.
*** 
> NestedLineStyle **lastItem**()
> 
> Returns the last NestedLineStyle in the collection.
*** 
> NestedLineStyle **middleItem**()
> 
> Returns the middle NestedLineStyle in the collection.
*** 
> NestedLineStyle **previousItem**( NestedLineStyle **obj** )
> 
> Returns the NestedLineStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NestedLineStyle | obj | The index of the NestedLineStyle that follows the desired NestedLineStyle. |

*** 
> NestedLineStyle **nextItem**( NestedLineStyle **obj** )
> 
> Returns the NestedLineStyle whose index follows the specified NestedLineStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NestedLineStyle | obj | The NestedLineStyle whose index comes before the desired NestedLineStyle. |

*** 
> NestedLineStyle **anyItem**()
> 
> Returns any NestedLineStyle in the collection.
*** 
> NestedLineStyle **everyItem**()
> 
> Returns every NestedLineStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the NestedLineStyle.
*** 
> NestedLineStyle **[]**( Number **index** )
> 
> Returns the NestedLineStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


