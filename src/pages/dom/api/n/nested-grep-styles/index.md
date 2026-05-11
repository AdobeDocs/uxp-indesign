# NestedGrepStyles
A collection of nested GREP styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> NestedGrepStyle **add**( Object **withProperties** )
> 
> Creates a new NestedGrepStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new NestedGrepStyle (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the NestedGrepStyle.
*** 
> NestedGrepStyle **item**( Mixed **index** )
> 
> Returns the NestedGrepStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> NestedGrepStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the NestedGrepStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The NestedGrepStyle, index, or name at the beginning of the range. Can accept: NestedGrepStyle, Long Integer or String. |
| Mixed | to | The NestedGrepStyle, index, or name at the end of the range. Can accept: NestedGrepStyle, Long Integer or String. |

*** 
> NestedGrepStyle **firstItem**()
> 
> Returns the first NestedGrepStyle in the collection.
*** 
> NestedGrepStyle **lastItem**()
> 
> Returns the last NestedGrepStyle in the collection.
*** 
> NestedGrepStyle **middleItem**()
> 
> Returns the middle NestedGrepStyle in the collection.
*** 
> NestedGrepStyle **previousItem**( NestedGrepStyle **obj** )
> 
> Returns the NestedGrepStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NestedGrepStyle | obj | The index of the NestedGrepStyle that follows the desired NestedGrepStyle. |

*** 
> NestedGrepStyle **nextItem**( NestedGrepStyle **obj** )
> 
> Returns the NestedGrepStyle whose index follows the specified NestedGrepStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| NestedGrepStyle | obj | The NestedGrepStyle whose index comes before the desired NestedGrepStyle. |

*** 
> NestedGrepStyle **anyItem**()
> 
> Returns any NestedGrepStyle in the collection.
*** 
> NestedGrepStyle **everyItem**()
> 
> Returns every NestedGrepStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the NestedGrepStyle.
*** 
> NestedGrepStyle **[]**( Number **index** )
> 
> Returns the NestedGrepStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


