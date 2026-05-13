# Font
A font.

## Instance
> *Read Only* 
> 
> Boolean **allowEditableEmbedding** 
>
> If true, the font can be embedded.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **allowOutlines** 
>
> If true, the font can be converted to outlines.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **allowPDFEmbedding** 
>
> If true, the font can be embedded in a PDF document.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **allowPrinting** 
>
> If true, the can font be printed.
<HorizontalLine />
> *Read Only* 
> 
> String **fontFamily** 
>
> The name of the font family
<HorizontalLine />
> *Read Only* 
> 
> String **location** 
>
> The full path to the Font.
<HorizontalLine />
> *Read Only* 
> 
> String **name** 
>
> The name of the Font.
<HorizontalLine />
> *Read Only* 
> 
> String **postscriptName** 
>
> The PostScript name of the font.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **restrictedPrinting** 
>
> If true, the font allows only restricted printing.
<HorizontalLine />
> *Read Only* 
> 
> FontStatus **status** 
>
> The status of the font.
<HorizontalLine />
> *Read Only* 
> 
> String **fontStyleName** 
>
> The name of the font style.
<HorizontalLine />
> *Read Only* 
> 
> FontTypes **fontType** 
>
> The type of font.
<HorizontalLine />
> *Read Only* 
> 
> Number **numDesignAxes** 
>
> Number of design axes in variable font.
<HorizontalLine />
> *Read Only* 
> 
> String **designAxesName** 
>
> The name of design axes in variable font.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **designAxesRange** 
>
> Range of design axes in variable font. Can return: Array of Arrays of 2 Reals.
<HorizontalLine />
> *Read Only* 
> 
> Number **designAxesValues** 
>
> Value of design axes in variable font.
<HorizontalLine />
> *Read Only* 
> 
> Number **writingScript** 
>
> The writing script.
<HorizontalLine />
> *Read Only* 
> 
> String **fullName** 
>
> The full font name.
<HorizontalLine />
> *Read Only* 
> 
> String **fullNameNative** 
>
> The full native name of the font.
<HorizontalLine />
> *Read Only* 
> 
> String **fontStyleNameNative** 
>
> The native name of the font style.
<HorizontalLine />
> *Read Only* 
> 
> String **platformName** 
>
> The platform font name.
<HorizontalLine />
> *Read Only* 
> 
> String **version** 
>
> The font version.
<HorizontalLine />
> *Read Only* 
> 
> String **registry** 
>
> The registry of a CID font.
<HorizontalLine />
> *Read Only* 
> 
> String **ordering** 
>
> The ordering of a CID font.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the Font (a Document or Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Font within its containing object.
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
> Boolean **checkOpenTypeFeature**( Mixed **using** )
> 
> Checks whether the font supports the specified OpenType feature.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The OpenType feature to check for, specified either as an OpenType feature or a string. Can accept: OpenTypeFeature enumerator or String. |

<HorizontalLine />
> **createSubsetFont**( String **charactersForSubset**, File **fontDestination** )
> 
> Create a copy of the font with just enough information to render the list of characters given.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | charactersForSubset | String with all the characters used in the resulting font. |
| File | fontDestination | File location for the new font. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the Font.
<HorizontalLine />
> Font **getElements**()
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


