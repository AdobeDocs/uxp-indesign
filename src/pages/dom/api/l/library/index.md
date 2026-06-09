# Library
An object library.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the Library.
<HorizontalLine />
> *Read Only* 
> 
> File **fullName** 
>
> The full path to the Library, including the name of the Library.
<HorizontalLine />
> *Read Only* 
> 
> File **filePath** 
>
> The full path to the file.
<HorizontalLine />
> *Read Only* 
> 
> Panel **associatedPanel** 
>
> The associated panel.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the Library (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Library within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> Assets **assets** 
>
> A collection of object library assets.
<HorizontalLine />
> *Read Only* 
> 
> Events **events** 
>
> A collection of events.
<HorizontalLine />
> *Read Only* 
> 
> EventListeners **eventListeners** 
>
> A collection of event listeners.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **close**()
> 
> Closes the Library.
<HorizontalLine />
> Asset **store**( Mixed **using**, Object **withProperties** )
> 
> Stores the specified object in the library.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The page item(s) to store. Can accept: Array of PageItems, Movies, Sounds, Graphics or XMLElements. |
| Object | withProperties | Initial values for properties of the new Library (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Library.
<HorizontalLine />
> Library **getElements**()
> 
> Resolves the object specifier, creating an array of object references.
<HorizontalLine />
> String **toSpecifier**()
> 
> Retrieves the object specifier.
<HorizontalLine />
> EventListener **addEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Adds an event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The event type. |
| Mixed | handler | The event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |

<HorizontalLine />
> Boolean **removeEventListener**( String **eventType**, Mixed **handler**, Boolean **captures** )
> 
> Removes the event listener.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | eventType | The registered event type. |
| Mixed | handler | The registered event handler. Can accept: File or JavaScript Function. |
| Boolean | captures | This parameter is obsolete. (Optional) |


