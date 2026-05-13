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

<HorizontalLine />
> Number **count**()
> 
> Displays the number of elements in the MotionPreset.
<HorizontalLine />
> MotionPreset **item**( Mixed **index** )
> 
> Returns the MotionPreset with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

<HorizontalLine />
> MotionPreset **itemByName**( String **name** )
> 
> Returns the MotionPreset with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

<HorizontalLine />
> MotionPreset **itemByID**( Number **id** )
> 
> Returns the MotionPreset with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

<HorizontalLine />
> MotionPreset **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MotionPresets within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MotionPreset, index, or name at the beginning of the range. Can accept: MotionPreset, Long Integer or String. |
| Mixed | to | The MotionPreset, index, or name at the end of the range. Can accept: MotionPreset, Long Integer or String. |

<HorizontalLine />
> MotionPreset **firstItem**()
> 
> Returns the first MotionPreset in the collection.
<HorizontalLine />
> MotionPreset **lastItem**()
> 
> Returns the last MotionPreset in the collection.
<HorizontalLine />
> MotionPreset **middleItem**()
> 
> Returns the middle MotionPreset in the collection.
<HorizontalLine />
> MotionPreset **previousItem**( MotionPreset **obj** )
> 
> Returns the MotionPreset with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MotionPreset | obj | The index of the MotionPreset that follows the desired MotionPreset. |

<HorizontalLine />
> MotionPreset **nextItem**( MotionPreset **obj** )
> 
> Returns the MotionPreset whose index follows the specified MotionPreset in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MotionPreset | obj | The MotionPreset whose index comes before the desired MotionPreset. |

<HorizontalLine />
> MotionPreset **anyItem**()
> 
> Returns any MotionPreset in the collection.
<HorizontalLine />
> MotionPreset **everyItem**()
> 
> Returns every MotionPreset in the collection.
<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the MotionPreset.
<HorizontalLine />
> MotionPreset **[]**( Number **index** )
> 
> Returns the MotionPreset with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


