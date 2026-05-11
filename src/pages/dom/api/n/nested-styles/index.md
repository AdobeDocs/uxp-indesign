# NestedStyles
A collection of nested styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> NestedStyle **add**( Object **withProperties** )
> 
> Creates a new NestedStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new NestedStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the NestedStyle.
*** 
> NestedStyle **item**( Mixed **index** )
> 
> Returns the NestedStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> NestedStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the NestedStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The NestedStyle, index, or name at the beginning of the range. Can accept: NestedStyle, Long Integer or String. |
| Mixed | to | The NestedStyle, index, or name at the end of the range. Can accept: NestedStyle, Long Integer or String. |

*** 
> NestedStyle **firstItem**()
> 
> Returns the first NestedStyle in the collection.
*** 
> NestedStyle **lastItem**()
> 
> Returns the last NestedStyle in the collection.
*** 
> NestedStyle **middleItem**()
> 
> Returns the middle NestedStyle in the collection.
*** 
> NestedStyle **previousItem**( NestedStyle **obj** )
> 
> Returns the NestedStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NestedStyle | obj | The index of the NestedStyle that follows the desired NestedStyle. |

*** 
> NestedStyle **nextItem**( NestedStyle **obj** )
> 
> Returns the NestedStyle whose index follows the specified NestedStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NestedStyle | obj | The NestedStyle whose index comes before the desired NestedStyle. |

*** 
> NestedStyle **anyItem**()
> 
> Returns any NestedStyle in the collection.
*** 
> NestedStyle **everyItem**()
> 
> Returns every NestedStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the NestedStyle.
*** 
> NestedStyle **[]**( Number **index** )
> 
> Returns the NestedStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


