# TOCStyles
A collection of TOC styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TOCStyle **add**( Object **withProperties** )
> 
> Creates a new TOCStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new TOCStyle (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the TOCStyle.
<HorizontalLine />
> TOCStyle **item**( Mixed **index** )
> 
> Returns the TOCStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> TOCStyle **itemByName**( String **name** )
> 
> Returns the TOCStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> TOCStyle **itemByID**( Number **id** )
> 
> Returns the TOCStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> TOCStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TOCStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TOCStyle, index, or name at the beginning of the range. Can accept: TOCStyle, Long Integer or String. |
| Mixed | to | The TOCStyle, index, or name at the end of the range. Can accept: TOCStyle, Long Integer or String. |

<HorizontalLine />
> TOCStyle **firstItem**()
> 
> Returns the first TOCStyle in the collection.
<HorizontalLine />
> TOCStyle **lastItem**()
> 
> Returns the last TOCStyle in the collection.
<HorizontalLine />
> TOCStyle **middleItem**()
> 
> Returns the middle TOCStyle in the collection.
<HorizontalLine />
> TOCStyle **previousItem**( TOCStyle **obj** )
> 
> Returns the TOCStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TOCStyle | obj | The index of the TOCStyle that follows the desired TOCStyle. |

<HorizontalLine />
> TOCStyle **nextItem**( TOCStyle **obj** )
> 
> Returns the TOCStyle whose index follows the specified TOCStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TOCStyle | obj | The TOCStyle whose index comes before the desired TOCStyle. |

<HorizontalLine />
> TOCStyle **anyItem**()
> 
> Returns any TOCStyle in the collection.
<HorizontalLine />
> TOCStyle **everyItem**()
> 
> Returns every TOCStyle in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TOCStyle.
<HorizontalLine />
> TOCStyle **[]**( Number **index** )
> 
> Returns the TOCStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


