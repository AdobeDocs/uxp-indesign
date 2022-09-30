# ExcelImportPreference
Excel import preferences.

## Instance
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
> The parent of the ExcelImportPreference (a Application).
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
> Boolean **useTypographersQuotes** 
>
> If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
*** 
> Boolean **preserveGraphics** 
>
> If true, preserves inline graphics.
*** 
> String **viewName** 
>
> The stored custom or personal view(s) to import with the file.
*** 
> String **sheetName** 
>
> The worksheet to import.
*** 
> Number **sheetIndex** 
>
> The worksheet's index. For information, see sheet name.
*** 
> String **rangeName** 
>
> The range of cells to import. Note: Use a colon (:) to separate the start and end cell names in the range.
*** 
> AlignmentStyleOptions **alignmentStyle** 
>
> The cell alignment for the imported document.
*** 
> Number **decimalPlaces** 
>
> The number of decimal places to include. Note: Valid only when alignment style is decimal.
*** 
> Boolean **showHiddenCells** 
>
> If true, shows hidden cells.
*** 
> Number **errorCode** 
>
> The import error code. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error)
*** 
> TableFormattingOptions **tableFormatting** 
>
> The format for imported spreadsheets.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ExcelImportPreference.
*** 
> ExcelImportPreference **getElements**()
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


