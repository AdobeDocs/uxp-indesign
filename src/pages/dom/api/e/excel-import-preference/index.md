# ExcelImportPreference
Excel import preferences.

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
> The parent of the ExcelImportPreference (a Application).
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
> Boolean **useTypographersQuotes** 
>
> If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes.
<HorizontalLine />
> Boolean **preserveGraphics** 
>
> If true, preserves inline graphics.
<HorizontalLine />
> String **viewName** 
>
> The stored custom or personal view(s) to import with the file.
<HorizontalLine />
> String **sheetName** 
>
> The worksheet to import.
<HorizontalLine />
> Number **sheetIndex** 
>
> The worksheet's index. For information, see sheet name.
<HorizontalLine />
> String **rangeName** 
>
> The range of cells to import. Note: Use a colon (:) to separate the start and end cell names in the range.
<HorizontalLine />
> AlignmentStyleOptions **alignmentStyle** 
>
> The cell alignment for the imported document.
<HorizontalLine />
> Number **decimalPlaces** 
>
> The number of decimal places to include. Note: Valid only when alignment style is decimal.
<HorizontalLine />
> Boolean **showHiddenCells** 
>
> If true, shows hidden cells.
<HorizontalLine />
> Number **errorCode** 
>
> The import error code. (Key: 0=Success; 1=Empty Sheet; 2=Invalid sheet; 3=Invalid range; 4=Invalid View; 5=Misc. Error)
<HorizontalLine />
> TableFormattingOptions **tableFormatting** 
>
> The format for imported spreadsheets.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the ExcelImportPreference.
<HorizontalLine />
> ExcelImportPreference **getElements**()
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


