# CompositeFonts
A collection of composite fonts.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> CompositeFont **add**( Object **withProperties** )
> 
> Creates a new CompositeFont.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new CompositeFont (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the CompositeFont.
*** 
> CompositeFont **item**( Mixed **index** )
> 
> Returns the CompositeFont with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> CompositeFont **itemByName**( String **name** )
> 
> Returns the CompositeFont with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> CompositeFont **itemByID**( Number **id** )
> 
> Returns the CompositeFont with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> CompositeFont **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the CompositeFonts within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The CompositeFont, index, or name at the beginning of the range. Can accept: CompositeFont, Long Integer or String. |
| Mixed | to | The CompositeFont, index, or name at the end of the range. Can accept: CompositeFont, Long Integer or String. |

*** 
> CompositeFont **firstItem**()
> 
> Returns the first CompositeFont in the collection.
*** 
> CompositeFont **lastItem**()
> 
> Returns the last CompositeFont in the collection.
*** 
> CompositeFont **middleItem**()
> 
> Returns the middle CompositeFont in the collection.
*** 
> CompositeFont **previousItem**( CompositeFont **obj** )
> 
> Returns the CompositeFont with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CompositeFont | obj | The index of the CompositeFont that follows the desired CompositeFont. |

*** 
> CompositeFont **nextItem**( CompositeFont **obj** )
> 
> Returns the CompositeFont whose index follows the specified CompositeFont in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| CompositeFont | obj | The CompositeFont whose index comes before the desired CompositeFont. |

*** 
> CompositeFont **anyItem**()
> 
> Returns any CompositeFont in the collection.
*** 
> CompositeFont **everyItem**()
> 
> Returns every CompositeFont in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the CompositeFont.
*** 
> CompositeFont **[]**( Number **index** )
> 
> Returns the CompositeFont with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


