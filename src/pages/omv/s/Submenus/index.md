# Submenus
A collection of submenus.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> Submenu **add**( String **title**, LocationOptions **at**, MenuElement **reference**, Object **withProperties** )
> 
> Creates a new submenu.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | title | The name of the Submenu for display in the user interface. The title includes any ampersand characters (&), which are used to tell the Windows OS to underline the following character in the name for use with the Alt key to navigate to a menu item. Double ampersands are used to display an actual ampersand character in the name. The Mac OS ignores and removes the extra ampersand characters. |
| LocationOptions | at | The location of the submenu relative to the reference object or within the containing object. (Optional) |
| MenuElement | reference | The reference object. Note: Required when the at parameter specifies before or after. (Optional) |
| Object | withProperties | Initial values for properties of the new Submenu (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the Submenu.
*** 
> Submenu **item**( Mixed **index** )
> 
> Returns the Submenu with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> Submenu **itemByName**( String **name** )
> 
> Returns the Submenu with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> Submenu **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the Submenus within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The Submenu, index, or name at the beginning of the range. Can accept: Submenu, Long Integer or String. |
| Mixed | to | The Submenu, index, or name at the end of the range. Can accept: Submenu, Long Integer or String. |

*** 
> Submenu **firstItem**()
> 
> Returns the first Submenu in the collection.
*** 
> Submenu **lastItem**()
> 
> Returns the last Submenu in the collection.
*** 
> Submenu **middleItem**()
> 
> Returns the middle Submenu in the collection.
*** 
> Submenu **previousItem**( Submenu **obj** )
> 
> Returns the Submenu with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Submenu | obj | The index of the Submenu that follows the desired Submenu. |

*** 
> Submenu **nextItem**( Submenu **obj** )
> 
> Returns the Submenu whose index follows the specified Submenu in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Submenu | obj | The Submenu whose index comes before the desired Submenu. |

*** 
> Submenu **anyItem**()
> 
> Returns any Submenu in the collection.
*** 
> Submenu **everyItem**()
> 
> Returns every Submenu in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Submenu.
*** 
> Submenu **[]**( Number **index** )
> 
> Returns the Submenu with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


