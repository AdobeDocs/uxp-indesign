# MotionPresets
A collection of Motion presets.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> MotionPreset **add**( Object **withProperties** )
> 
> Creates a new MotionPreset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new MotionPreset (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the MotionPreset.
*** 
> MotionPreset **item**( Mixed **index** )
> 
> Returns the MotionPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MotionPreset **itemByName**( String **name** )
> 
> Returns the MotionPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MotionPreset **itemByID**( Number **id** )
> 
> Returns the MotionPreset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MotionPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MotionPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MotionPreset, index, or name at the beginning of the range. Can accept: MotionPreset, Long Integer or String. |
| Mixed | to | The MotionPreset, index, or name at the end of the range. Can accept: MotionPreset, Long Integer or String. |

*** 
> MotionPreset **firstItem**()
> 
> Returns the first MotionPreset in the collection.
*** 
> MotionPreset **lastItem**()
> 
> Returns the last MotionPreset in the collection.
*** 
> MotionPreset **middleItem**()
> 
> Returns the middle MotionPreset in the collection.
*** 
> MotionPreset **previousItem**( MotionPreset **obj** )
> 
> Returns the MotionPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MotionPreset | obj | The index of the MotionPreset that follows the desired MotionPreset. |

*** 
> MotionPreset **nextItem**( MotionPreset **obj** )
> 
> Returns the MotionPreset whose index follows the specified MotionPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MotionPreset | obj | The MotionPreset whose index comes before the desired MotionPreset. |

*** 
> MotionPreset **anyItem**()
> 
> Returns any MotionPreset in the collection.
*** 
> MotionPreset **everyItem**()
> 
> Returns every MotionPreset in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MotionPreset.
*** 
> MotionPreset **[]**( Number **index** )
> 
> Returns the MotionPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


