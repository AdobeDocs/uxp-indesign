# SubmitFormBehaviors
A collection of submit form behavior objects.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Number **count**()
> 
> Displays the number of elements in the SubmitFormBehavior.
*** 
> SubmitFormBehavior **add**( Object **withProperties** )
> 
> Creates a new SubmitFormBehavior.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Object | withProperties | Initial values for properties of the new SubmitFormBehavior (Optional) |

*** 
> SubmitFormBehavior **item**( Mixed **index** )
> 
> Returns the SubmitFormBehavior with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> SubmitFormBehavior **itemByName**( String **name** )
> 
> Returns the SubmitFormBehavior with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> SubmitFormBehavior **itemByID**( Number **id** )
> 
> Returns the SubmitFormBehavior with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> SubmitFormBehavior **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the SubmitFormBehaviors within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The SubmitFormBehavior, index, or name at the beginning of the range. Can accept: SubmitFormBehavior, Long Integer or String. |
| Mixed | to | The SubmitFormBehavior, index, or name at the end of the range. Can accept: SubmitFormBehavior, Long Integer or String. |

*** 
> SubmitFormBehavior **firstItem**()
> 
> Returns the first SubmitFormBehavior in the collection.
*** 
> SubmitFormBehavior **lastItem**()
> 
> Returns the last SubmitFormBehavior in the collection.
*** 
> SubmitFormBehavior **middleItem**()
> 
> Returns the middle SubmitFormBehavior in the collection.
*** 
> SubmitFormBehavior **previousItem**( SubmitFormBehavior **obj** )
> 
> Returns the SubmitFormBehavior with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SubmitFormBehavior | obj | The index of the SubmitFormBehavior that follows the desired SubmitFormBehavior. |

*** 
> SubmitFormBehavior **nextItem**( SubmitFormBehavior **obj** )
> 
> Returns the SubmitFormBehavior whose index follows the specified SubmitFormBehavior in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| SubmitFormBehavior | obj | The SubmitFormBehavior whose index comes before the desired SubmitFormBehavior. |

*** 
> SubmitFormBehavior **anyItem**()
> 
> Returns any SubmitFormBehavior in the collection.
*** 
> SubmitFormBehavior **everyItem**()
> 
> Returns every SubmitFormBehavior in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the SubmitFormBehavior.
*** 
> SubmitFormBehavior **[]**( Number **index** )
> 
> Returns the SubmitFormBehavior with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


