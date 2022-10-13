# RuleDataObjects
A collection of prefight rule data objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> RuleDataObject **add**( String **name**, RuleDataType **dataType**, Mixed **dataValue**, Object **withProperties** )
> 
> Add a new preflight rule data to a preflight profile rule.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name of the rule data to add |
| RuleDataType | dataType | The type of data |
| Mixed | dataValue | The value of data. Can accept: String, Real, Long Integer, Short Integer, Boolean, Object or Array of Strings, Reals, Long Integers, Short Integers, Booleans, Objects or Arrays of Array of Arrays of Array of Strings, Reals, Long Integers, Short Integers, Booleans or Objects. |
| Object | withProperties | Initial values for properties of the new RuleDataObject (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the RuleDataObject.
*** 
> RuleDataObject **item**( Mixed **index** )
> 
> Returns the RuleDataObject with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> RuleDataObject **itemByName**( String **name** )
> 
> Returns the RuleDataObject with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> RuleDataObject **itemByID**( Number **id** )
> 
> Returns the RuleDataObject with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> RuleDataObject **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the RuleDataObjects within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The RuleDataObject, index, or name at the beginning of the range. Can accept: RuleDataObject, Long Integer or String. |
| Mixed | to | The RuleDataObject, index, or name at the end of the range. Can accept: RuleDataObject, Long Integer or String. |

*** 
> RuleDataObject **firstItem**()
> 
> Returns the first RuleDataObject in the collection.
*** 
> RuleDataObject **lastItem**()
> 
> Returns the last RuleDataObject in the collection.
*** 
> RuleDataObject **middleItem**()
> 
> Returns the middle RuleDataObject in the collection.
*** 
> RuleDataObject **previousItem**( RuleDataObject **obj** )
> 
> Returns the RuleDataObject with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RuleDataObject | obj | The index of the RuleDataObject that follows the desired RuleDataObject. |

*** 
> RuleDataObject **nextItem**( RuleDataObject **obj** )
> 
> Returns the RuleDataObject whose index follows the specified RuleDataObject in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| RuleDataObject | obj | The RuleDataObject whose index comes before the desired RuleDataObject. |

*** 
> RuleDataObject **anyItem**()
> 
> Returns any RuleDataObject in the collection.
*** 
> RuleDataObject **everyItem**()
> 
> Returns every RuleDataObject in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the RuleDataObject.
*** 
> RuleDataObject **[]**( Number **index** )
> 
> Returns the RuleDataObject with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


