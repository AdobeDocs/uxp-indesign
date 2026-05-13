# TextImportPreference
Text import preferences.

## Instance
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
> The parent of the TextImportPreference (a Application).
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
> TextImportCharacterSet **characterSet** 
>
> The computer language character set used to create the text file.
<HorizontalLine />
> ImportPlatform **platform** 
>
> The platform used to create the imported text file.
<HorizontalLine />
> String **dictionary** 
>
> The dictionary to use for the imported text.
<HorizontalLine />
> Boolean **stripReturnsBetweenLines** 
>
> If true, the import filter removes extra carriage returns at the ends of lines.
<HorizontalLine />
> Boolean **stripReturnsBetweenParagraphs** 
>
> If true, the import filter removes extra carriage returns between paragraphs.
<HorizontalLine />
> Boolean **convertSpacesIntoTabs** 
>
> If true, converts the specified number of spaces into a tab. For information on specifying the number of spaces, see spaces into tabs count.
<HorizontalLine />
> Number **spacesIntoTabsCount** 
>
> The number of spaces to convert to a tab. Note: Valid when convert spaces into tabs is true.
<HorizontalLine />
> Boolean **useTypographersQuotes** 
>
> If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextImportPreference.
<HorizontalLine />
> TextImportPreference **getElements**()
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


