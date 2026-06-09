# Language
The language on which to base hyphenation rules and spell checking.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the Language.
<HorizontalLine />
> *Read Only* 
> 
> String **untranslatedName** 
>
> The untranslated name of the language.
<HorizontalLine />
> *Read Only* 
> 
> String **icuLocaleName** 
>
> The full name of the Language object's ICU locale.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Language.
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
> The parent of the Language (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Language within its containing object.
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
> String **singleQuotes** 
>
> The single quotes pair for the language.
<HorizontalLine />
> String **doubleQuotes** 
>
> The double quotes pair for the language.
<HorizontalLine />
> String **hyphenationVendor** 
>
> The hyphenation rules source.
<HorizontalLine />
> String **spellingVendor** 
>
> The spell-checking source.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

<HorizontalLine />
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Language.
<HorizontalLine />
> Language **getElements**()
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


