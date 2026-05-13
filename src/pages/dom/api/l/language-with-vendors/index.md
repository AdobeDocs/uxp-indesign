# LanguageWithVendors
A language that allows the specification of a hyphenation rules source, a spell-checking source, and a thesaurus.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the LanguageWithVendors.
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
> String **spellingVendorList** 
>
> A list of spelling vendors.
<HorizontalLine />
> *Read Only* 
> 
> String **hyphenationVendorList** 
>
> A list of hyphenation vendors.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the LanguageWithVendors.
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
> The parent of the LanguageWithVendors (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the LanguageWithVendors within its containing object.
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
> String **thesaurusVendor** 
>
> The thesaurus source.
<HorizontalLine />
> String **dictionaryPaths** 
>
> The user dictionaries for the language.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
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

<HorizontalLine />
> String **removeDictionaryPath**( String **filePath** )
> 
> Removes the specified user dictionary.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | filePath | The path to the dictionary file. |

<HorizontalLine />
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
> Generates a string which, if executed, will return the LanguageWithVendors.
<HorizontalLine />
> LanguageWithVendors **getElements**()
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


