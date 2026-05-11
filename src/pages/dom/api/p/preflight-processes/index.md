# PreflightProcesses
A collection of preflight processes.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> PreflightProcess **add**( Document **targetObject**, PreflightProfile **appliedProfile**, PreflightOption **preflightOptions**, Object **withProperties** )
> 
> Adds a new preflight process.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Document | targetObject | The document the process should inspect. |
| PreflightProfile | appliedProfile | The preflight profile that should be used. |
| PreflightOption | preflightOptions | The preflight options that should be used. (Optional) |
| Object | withProperties | Initial values for properties of the new PreflightProcess (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the PreflightProcess.
*** 
> PreflightProcess **item**( Mixed **index** )
> 
> Returns the PreflightProcess with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> PreflightProcess **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the PreflightProcesses within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The PreflightProcess, index, or name at the beginning of the range. Can accept: PreflightProcess, Long Integer or String. |
| Mixed | to | The PreflightProcess, index, or name at the end of the range. Can accept: PreflightProcess, Long Integer or String. |

*** 
> PreflightProcess **firstItem**()
> 
> Returns the first PreflightProcess in the collection.
*** 
> PreflightProcess **lastItem**()
> 
> Returns the last PreflightProcess in the collection.
*** 
> PreflightProcess **middleItem**()
> 
> Returns the middle PreflightProcess in the collection.
*** 
> PreflightProcess **previousItem**( PreflightProcess **obj** )
> 
> Returns the PreflightProcess with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightProcess | obj | The index of the PreflightProcess that follows the desired PreflightProcess. |

*** 
> PreflightProcess **nextItem**( PreflightProcess **obj** )
> 
> Returns the PreflightProcess whose index follows the specified PreflightProcess in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| PreflightProcess | obj | The PreflightProcess whose index comes before the desired PreflightProcess. |

*** 
> PreflightProcess **anyItem**()
> 
> Returns any PreflightProcess in the collection.
*** 
> PreflightProcess **everyItem**()
> 
> Returns every PreflightProcess in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the PreflightProcess.
*** 
> PreflightProcess **[]**( Number **index** )
> 
> Returns the PreflightProcess with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


