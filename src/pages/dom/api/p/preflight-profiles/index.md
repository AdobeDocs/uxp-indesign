# PreflightProfiles
A collection of preflight profiles.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PreflightProfile **add**( Object **withProperties** )
> 
> Creates a new PreflightProfile.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new PreflightProfile (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PreflightProfile.
*** 
> PreflightProfile **item**( Mixed **index** )
> 
> Returns the PreflightProfile with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PreflightProfile **itemByName**( String **name** )
> 
> Returns the PreflightProfile with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> PreflightProfile **itemByID**( Number **id** )
> 
> Returns the PreflightProfile with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> PreflightProfile **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PreflightProfiles within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PreflightProfile, index, or name at the beginning of the range. Can accept: PreflightProfile, Long Integer or String. |
| Mixed | to | The PreflightProfile, index, or name at the end of the range. Can accept: PreflightProfile, Long Integer or String. |

*** 
> PreflightProfile **firstItem**()
> 
> Returns the first PreflightProfile in the collection.
*** 
> PreflightProfile **lastItem**()
> 
> Returns the last PreflightProfile in the collection.
*** 
> PreflightProfile **middleItem**()
> 
> Returns the middle PreflightProfile in the collection.
*** 
> PreflightProfile **previousItem**( PreflightProfile **obj** )
> 
> Returns the PreflightProfile with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightProfile | obj | The index of the PreflightProfile that follows the desired PreflightProfile. |

*** 
> PreflightProfile **nextItem**( PreflightProfile **obj** )
> 
> Returns the PreflightProfile whose index follows the specified PreflightProfile in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightProfile | obj | The PreflightProfile whose index comes before the desired PreflightProfile. |

*** 
> PreflightProfile **anyItem**()
> 
> Returns any PreflightProfile in the collection.
*** 
> PreflightProfile **everyItem**()
> 
> Returns every PreflightProfile in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightProfile.
*** 
> PreflightProfile **[]**( Number **index** )
> 
> Returns the PreflightProfile with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


