# LanguageWithVendors
A language that allows the specification of a hyphenation rules source, a spell-checking source, and a thesaurus.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the LanguageWithVendors.
*** 
> *Read Only* 
> 
> String **untranslatedName** 
>
> The untranslated name of the language.
*** 
> *Read Only* 
> 
> String **icuLocaleName** 
>
> The full name of the Language object's ICU locale.
*** 
> *Read Only* 
> 
> String **spellingVendorList** 
>
> A list of spelling vendors.
*** 
> *Read Only* 
> 
> String **hyphenationVendorList** 
>
> A list of hyphenation vendors.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the LanguageWithVendors.
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
> The parent of the LanguageWithVendors (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the LanguageWithVendors within its containing object.
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
> String **singleQuotes** 
>
> The single quotes pair for the language.
*** 
> String **doubleQuotes** 
>
> The double quotes pair for the language.
*** 
> String **hyphenationVendor** 
>
> The hyphenation rules source.
*** 
> String **spellingVendor** 
>
> The spell-checking source.
*** 
> String **thesaurusVendor** 
>
> The thesaurus source.
*** 
> String **dictionaryPaths** 
>
> The user dictionaries for the language.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **addDictionaryPath**( String **filePath** )
> 
> Adds the specified user dictionary.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | filePath | The path to the dictionary file. |

*** 
> String **removeDictionaryPath**( String **filePath** )
> 
> Removes the specified user dictionary.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | filePath | The path to the dictionary file. |

*** 
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the LanguageWithVendors.
*** 
> LanguageWithVendors **getElements**()
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


