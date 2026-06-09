# HyphenationException
A hyphenation exceptions list.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the HyphenationException.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the HyphenationException (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the HyphenationException within its containing object.
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
> String **removedExceptions** 
>
> A list of words removed from the hyphenation exceptions list.
<HorizontalLine />
> String **addedExceptions** 
>
> A list of words added to the hyphenation exceptions list.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **addException**( String **addedExceptions**, Boolean **removedList** )
> 
> Adds the specified words to the hyphenation exceptions list.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | addedExceptions | The list of words to add. |
| Boolean | removedList | If true, adds the words to the removed exceptions list. If false or unspecified, adds the words to the added exceptions list. (Optional) |

<HorizontalLine />
> **removeException**( String **removedExceptions**, Boolean **removedList** )
> 
> Removes the specified words from the hyphenation exceptions list.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | removedExceptions | The list of words to remove. |
| Boolean | removedList | If true, removes the words from the removed exceptions list. If false or unspecified, adds the words to the added exceptions list. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the HyphenationException.
<HorizontalLine />
> HyphenationException **getElements**()
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


