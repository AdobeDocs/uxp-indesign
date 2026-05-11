# ScriptMenuActions
A collection of script menu actions.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> ScriptMenuAction **add**( String **title**, Object **withProperties** )
> 
> Creates a new action.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | title | The name of the ScriptMenuAction for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters. (Optional) |
| Object | withProperties | Initial values for properties of the new ScriptMenuAction (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the ScriptMenuAction.
*** 
> ScriptMenuAction **item**( Mixed **index** )
> 
> Returns the ScriptMenuAction with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> ScriptMenuAction **itemByName**( String **name** )
> 
> Returns the ScriptMenuAction with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> ScriptMenuAction **itemByID**( Number **id** )
> 
> Returns the ScriptMenuAction with the specified ID.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | id | The ID. |

*** 
> ScriptMenuAction **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the ScriptMenuActions within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The ScriptMenuAction, index, or name at the beginning of the range. Can accept: ScriptMenuAction, Long Integer or String. |
| Mixed | to | The ScriptMenuAction, index, or name at the end of the range. Can accept: ScriptMenuAction, Long Integer or String. |

*** 
> ScriptMenuAction **firstItem**()
> 
> Returns the first ScriptMenuAction in the collection.
*** 
> ScriptMenuAction **lastItem**()
> 
> Returns the last ScriptMenuAction in the collection.
*** 
> ScriptMenuAction **middleItem**()
> 
> Returns the middle ScriptMenuAction in the collection.
*** 
> ScriptMenuAction **previousItem**( ScriptMenuAction **obj** )
> 
> Returns the ScriptMenuAction with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ScriptMenuAction | obj | The index of the ScriptMenuAction that follows the desired ScriptMenuAction. |

*** 
> ScriptMenuAction **nextItem**( ScriptMenuAction **obj** )
> 
> Returns the ScriptMenuAction whose index follows the specified ScriptMenuAction in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| ScriptMenuAction | obj | The ScriptMenuAction whose index comes before the desired ScriptMenuAction. |

*** 
> ScriptMenuAction **anyItem**()
> 
> Returns any ScriptMenuAction in the collection.
*** 
> ScriptMenuAction **everyItem**()
> 
> Returns every ScriptMenuAction in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the ScriptMenuAction.
*** 
> ScriptMenuAction **[]**( Number **index** )
> 
> Returns the ScriptMenuAction with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


