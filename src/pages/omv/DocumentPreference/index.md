# DocumentPreference
Document preferences.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the DocumentPreference (a Application or Document).
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
> Measurement Unit (Number or String)=any **pageHeight** 
>
> The height of the page.
*** 
> Measurement Unit (Number or String)=any **pageWidth** 
>
> The width of the page.
*** 
> PageOrientation **pageOrientation** 
>
> The page orientation.
*** 
> Mixed **columnGuideColor** 
>
> The color of the column guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values,, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Mixed **marginGuideColor** 
>
> The color of the margin guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> Boolean **createPrimaryTextFrame** 
>
> If true, the document A-master has primary text frames when a new document is created.
*** 
> Number **pagesPerDocument** 
>
> The number of pages in the document. (Range: 1 to 9999)
*** 
> Boolean **facingPages** 
>
> If true, the document has facing pages.
*** 
> Measurement Unit (Number or String)=any **documentBleedTopOffset** 
>
> The amount to offset the top document bleed.
*** 
> Measurement Unit (Number or String)=any **documentBleedBottomOffset** 
>
> The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **documentBleedInsideOrLeftOffset** 
>
> The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **documentBleedOutsideOrRightOffset** 
>
> The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false.
*** 
> Boolean **documentBleedUniformSize** 
>
> If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true.
*** 
> Measurement Unit (Number or String)=any **slugTopOffset** 
>
> The amount to offset the top slug.
*** 
> Measurement Unit (Number or String)=any **slugBottomOffset** 
>
> The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **slugInsideOrLeftOffset** 
>
> The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **slugRightOrOutsideOffset** 
>
> The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false.
*** 
> Boolean **documentSlugUniformSize** 
>
> If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false.
*** 
> Boolean **preserveLayoutWhenShuffling** 
>
> If true, preserves the layout of spreads that contained more than two pages when allow page shuffle was turned on. If false, changes multi-page spreads to two-page spreads if the spreads were created or changed since allow page shuffle was turned on.
*** 
> Boolean **allowPageShuffle** 
>
> If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling.
*** 
> Boolean **overprintBlack** 
>
> If true, overprints black when saving the document.
*** 
> Boolean **columnGuideLocked** 
>
> If true, locks column guides.
*** 
> Number **startPageNumber** 
>
> The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1.
*** 
> DocumentIntentOptions **intent** 
>
> The intent for a document.
*** 
> PageBindingOptions **pageBinding** 
>
> The placement of the page binding.
*** 
> HorizontalOrVertical **columnDirection** 
>
> The direction of text in the column.
*** 
> String **pageSize** 
>
> The size of the page.
*** 
> Boolean **snippetImportUsesOriginalLocation** 
>
> If true, causes UI-based snippet import to use original location for page items.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the DocumentPreference.
*** 
> DocumentPreference **getElements**()
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


