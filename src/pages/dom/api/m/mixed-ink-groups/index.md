# MixedInkGroups
A collection of mixed ink groups.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the MixedInkGroup.
*** 
> MixedInkGroup **add**( Ink **inkList**, Number **inkPercentages**, Number **repeatValues**, Number **incrementValues**, Object **withProperties** )
> 
> Creates a new mixed ink group.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Ink | inkList | The inks to include in the mix. |
| Number | inkPercentages | The percent of each ink in the ink list. (Range: 0 to 100 for each ink) (Optional) |
| Number | repeatValues | The number of repetitions for each ink in the ink list. (Range: 0 to 100 for each ink) (Optional) |
| Number | incrementValues | The increment percent per repetition for each ink. (Range: 0 to 100) Note: The cumulative ink percentage per ink cannot exceed 100.) (Optional) |
| Object | withProperties | Initial values for properties of the new MixedInkGroup (Optional) |

*** 
> MixedInkGroup **item**( Mixed **index** )
> 
> Returns the MixedInkGroup with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> MixedInkGroup **itemByName**( String **name** )
> 
> Returns the MixedInkGroup with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> MixedInkGroup **itemByID**( Number **id** )
> 
> Returns the MixedInkGroup with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> MixedInkGroup **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the MixedInkGroups within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The MixedInkGroup, index, or name at the beginning of the range. Can accept: MixedInkGroup, Long Integer or String. |
| Mixed | to | The MixedInkGroup, index, or name at the end of the range. Can accept: MixedInkGroup, Long Integer or String. |

*** 
> MixedInkGroup **firstItem**()
> 
> Returns the first MixedInkGroup in the collection.
*** 
> MixedInkGroup **lastItem**()
> 
> Returns the last MixedInkGroup in the collection.
*** 
> MixedInkGroup **middleItem**()
> 
> Returns the middle MixedInkGroup in the collection.
*** 
> MixedInkGroup **previousItem**( MixedInkGroup **obj** )
> 
> Returns the MixedInkGroup with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MixedInkGroup | obj | The index of the MixedInkGroup that follows the desired MixedInkGroup. |

*** 
> MixedInkGroup **nextItem**( MixedInkGroup **obj** )
> 
> Returns the MixedInkGroup whose index follows the specified MixedInkGroup in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| MixedInkGroup | obj | The MixedInkGroup whose index comes before the desired MixedInkGroup. |

*** 
> MixedInkGroup **anyItem**()
> 
> Returns any MixedInkGroup in the collection.
*** 
> MixedInkGroup **everyItem**()
> 
> Returns every MixedInkGroup in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MixedInkGroup.
*** 
> MixedInkGroup **[]**( Number **index** )
> 
> Returns the MixedInkGroup with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


