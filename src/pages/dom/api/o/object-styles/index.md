# ObjectStyles
A collection of object styles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ObjectStyle **add**( Object **withProperties** )
> 
> Creates a new ObjectStyle.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new ObjectStyle (Optional) |

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the ObjectStyle.
<HorizontalLine />
> ObjectStyle **item**( Mixed **index** )
> 
> Returns the ObjectStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> ObjectStyle **itemByName**( String **name** )
> 
> Returns the ObjectStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> ObjectStyle **itemByID**( Number **id** )
> 
> Returns the ObjectStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> ObjectStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ObjectStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ObjectStyle, index, or name at the beginning of the range. Can accept: ObjectStyle, Long Integer or String. |
| Mixed | to | The ObjectStyle, index, or name at the end of the range. Can accept: ObjectStyle, Long Integer or String. |

<HorizontalLine />
> ObjectStyle **firstItem**()
> 
> Returns the first ObjectStyle in the collection.
<HorizontalLine />
> ObjectStyle **lastItem**()
> 
> Returns the last ObjectStyle in the collection.
<HorizontalLine />
> ObjectStyle **middleItem**()
> 
> Returns the middle ObjectStyle in the collection.
<HorizontalLine />
> ObjectStyle **previousItem**( ObjectStyle **obj** )
> 
> Returns the ObjectStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | obj | The index of the ObjectStyle that follows the desired ObjectStyle. |

<HorizontalLine />
> ObjectStyle **nextItem**( ObjectStyle **obj** )
> 
> Returns the ObjectStyle whose index follows the specified ObjectStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | obj | The ObjectStyle whose index comes before the desired ObjectStyle. |

<HorizontalLine />
> ObjectStyle **anyItem**()
> 
> Returns any ObjectStyle in the collection.
<HorizontalLine />
> ObjectStyle **everyItem**()
> 
> Returns every ObjectStyle in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyle.
<HorizontalLine />
> ObjectStyle **[]**( Number **index** )
> 
> Returns the ObjectStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


