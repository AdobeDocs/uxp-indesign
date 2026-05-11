# Assignments
A collection of assignments.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Assignment **add**( File **filePath**, String **versionComments**, Boolean **forceSave**, Object **withProperties** )
> 
> Creates a new assignment.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | filePath | The full path name of the new assignment. |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |
| Object | withProperties | Initial values for properties of the new Assignment (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Assignment.
*** 
> Assignment **item**( Mixed **index** )
> 
> Returns the Assignment with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Assignment **itemByName**( String **name** )
> 
> Returns the Assignment with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Assignment **itemByID**( Number **id** )
> 
> Returns the Assignment with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> Assignment **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Assignments within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Assignment, index, or name at the beginning of the range. Can accept: Assignment, Long Integer or String. |
| Mixed | to | The Assignment, index, or name at the end of the range. Can accept: Assignment, Long Integer or String. |

*** 
> Assignment **firstItem**()
> 
> Returns the first Assignment in the collection.
*** 
> Assignment **lastItem**()
> 
> Returns the last Assignment in the collection.
*** 
> Assignment **middleItem**()
> 
> Returns the middle Assignment in the collection.
*** 
> Assignment **previousItem**( Assignment **obj** )
> 
> Returns the Assignment with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Assignment | obj | The index of the Assignment that follows the desired Assignment. |

*** 
> Assignment **nextItem**( Assignment **obj** )
> 
> Returns the Assignment whose index follows the specified Assignment in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Assignment | obj | The Assignment whose index comes before the desired Assignment. |

*** 
> Assignment **anyItem**()
> 
> Returns any Assignment in the collection.
*** 
> Assignment **everyItem**()
> 
> Returns every Assignment in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Assignment.
*** 
> Assignment **[]**( Number **index** )
> 
> Returns the Assignment with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


