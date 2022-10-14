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

*** 
> Number **count**()
> 
> Displays the number of elements in the ObjectStyle.
*** 
> ObjectStyle **item**( Mixed **index** )
> 
> Returns the ObjectStyle with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ObjectStyle **itemByName**( String **name** )
> 
> Returns the ObjectStyle with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ObjectStyle **itemByID**( Number **id** )
> 
> Returns the ObjectStyle with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ObjectStyle **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ObjectStyles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ObjectStyle, index, or name at the beginning of the range. Can accept: ObjectStyle, Long Integer or String. |
| Mixed | to | The ObjectStyle, index, or name at the end of the range. Can accept: ObjectStyle, Long Integer or String. |

*** 
> ObjectStyle **firstItem**()
> 
> Returns the first ObjectStyle in the collection.
*** 
> ObjectStyle **lastItem**()
> 
> Returns the last ObjectStyle in the collection.
*** 
> ObjectStyle **middleItem**()
> 
> Returns the middle ObjectStyle in the collection.
*** 
> ObjectStyle **previousItem**( ObjectStyle **obj** )
> 
> Returns the ObjectStyle with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | obj | The index of the ObjectStyle that follows the desired ObjectStyle. |

*** 
> ObjectStyle **nextItem**( ObjectStyle **obj** )
> 
> Returns the ObjectStyle whose index follows the specified ObjectStyle in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ObjectStyle | obj | The ObjectStyle whose index comes before the desired ObjectStyle. |

*** 
> ObjectStyle **anyItem**()
> 
> Returns any ObjectStyle in the collection.
*** 
> ObjectStyle **everyItem**()
> 
> Returns every ObjectStyle in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ObjectStyle.
*** 
> ObjectStyle **[]**( Number **index** )
> 
> Returns the ObjectStyle with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


