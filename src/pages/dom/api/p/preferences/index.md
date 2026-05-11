# Preferences
A collection of preferences objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the Preference.
*** 
> Preference **item**( Mixed **index** )
> 
> Returns the Preference with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Preference **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Preferences within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Preference, index, or name at the beginning of the range. Can accept: Preference, Long Integer or String. |
| Mixed | to | The Preference, index, or name at the end of the range. Can accept: Preference, Long Integer or String. |

*** 
> Preference **firstItem**()
> 
> Returns the first Preference in the collection.
*** 
> Preference **lastItem**()
> 
> Returns the last Preference in the collection.
*** 
> Preference **middleItem**()
> 
> Returns the middle Preference in the collection.
*** 
> Preference **previousItem**( Preference **obj** )
> 
> Returns the Preference with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Preference | obj | The index of the Preference that follows the desired Preference. |

*** 
> Preference **nextItem**( Preference **obj** )
> 
> Returns the Preference whose index follows the specified Preference in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Preference | obj | The Preference whose index comes before the desired Preference. |

*** 
> Preference **anyItem**()
> 
> Returns any Preference in the collection.
*** 
> Preference **everyItem**()
> 
> Returns every Preference in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Preference.
*** 
> Preference **[]**( Number **index** )
> 
> Returns the Preference with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


