# Library
An object library.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the Library.
*** 
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the Library, including the name of the Library.
*** 
> *Read Only* 
> 
> File **filePath** 
>
> The full path to the file.
*** 
> *Read Only* 
> 
> Panel **associatedPanel** 
>
> The associated panel.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the Library (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Library within its containing object.
*** 
> *Read Only* 
> 
> Assets **assets** 
>
> A collection of object library assets.
*** 
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
*** 
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **close**()
> 
> Closes the Library.
*** 
> Asset **store**( Mixed **using**, Object **withProperties** )
> 
> Stores the specified object in the library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The page item(s) to store. Can accept: Array of PageItems, Movies, Sounds, Graphics or XMLElements. |
| Object | withProperties | Initial values for properties of the new Library (Optional) |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Library.
*** 
> Library **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
*** 
> String **toSpecifier**()
> 
> Retrieves the object specifier.
*** 
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

*** 
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


