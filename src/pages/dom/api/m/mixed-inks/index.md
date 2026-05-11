# MixedInks
A collection of mixed inks.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MixedInk.
*** 
> MixedInk **add**( Mixed **inkList**, Number **inkPercentages**, Object **withProperties** )
> 
> Creates a new mixed ink swatch.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | inkList | The inks to mix. Note: Must contain at least two process inks and one spot ink. Can accept: Array of Inks or MixedInkGroup. |
| Number | inkPercentages | The percent to use of each ink in the ink list. (Range: 0 to 100 for each ink) |
| Object | withProperties | Initial values for properties of the new MixedInk (Optional) |

*** 
> MixedInk **item**( Mixed **index** )
> 
> Returns the MixedInk with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MixedInk **itemByName**( String **name** )
> 
> Returns the MixedInk with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MixedInk **itemByID**( Number **id** )
> 
> Returns the MixedInk with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MixedInk **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MixedInks within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MixedInk, index, or name at the beginning of the range. Can accept: MixedInk, Long Integer or String. |
| Mixed | to | The MixedInk, index, or name at the end of the range. Can accept: MixedInk, Long Integer or String. |

*** 
> MixedInk **firstItem**()
> 
> Returns the first MixedInk in the collection.
*** 
> MixedInk **lastItem**()
> 
> Returns the last MixedInk in the collection.
*** 
> MixedInk **middleItem**()
> 
> Returns the middle MixedInk in the collection.
*** 
> MixedInk **previousItem**( MixedInk **obj** )
> 
> Returns the MixedInk with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MixedInk | obj | The index of the MixedInk that follows the desired MixedInk. |

*** 
> MixedInk **nextItem**( MixedInk **obj** )
> 
> Returns the MixedInk whose index follows the specified MixedInk in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MixedInk | obj | The MixedInk whose index comes before the desired MixedInk. |

*** 
> MixedInk **anyItem**()
> 
> Returns any MixedInk in the collection.
*** 
> MixedInk **everyItem**()
> 
> Returns every MixedInk in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MixedInk.
*** 
> MixedInk **[]**( Number **index** )
> 
> Returns the MixedInk with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


