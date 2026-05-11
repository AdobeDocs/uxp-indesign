# DocumentPreset
A preset that contains all of the new document settings.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the DocumentPreset.
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
> The parent of the DocumentPreset (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the DocumentPreset within its containing object.
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
> String **name** 
>
> The name of the DocumentPreset.
*** 
> Number **pagesPerDocument** 
>
> The number of pages in the document. (Range: 1 to 9999)
*** 
> Boolean **facingPages** 
>
> If true, the document has facing pages.
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
> Number **columnCount** 
>
> The number of columns to place on the page.
*** 
> Measurement Unit (Number or String)=any **columnGutter** 
>
> The distance between columns.
*** 
> Measurement Unit (Number or String)=any **top** 
>
> The top edge of the DocumentPreset.
*** 
> Measurement Unit (Number or String)=any **bottom** 
>
> The bottom edge of the DocumentPreset.
*** 
> Measurement Unit (Number or String)=any **left** 
>
> The left edge of the DocumentPreset.
*** 
> Measurement Unit (Number or String)=any **right** 
>
> The right edge of the DocumentPreset.
*** 
> Measurement Unit (Number or String)=any **documentBleedInsideOrLeftOffset** 
>
> The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **documentBleedTopOffset** 
>
> The amount to offset the top document bleed.
*** 
> Measurement Unit (Number or String)=any **documentBleedOutsideOrRightOffset** 
>
> The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **documentBleedBottomOffset** 
>
> The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **slugInsideOrLeftOffset** 
>
> The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **slugTopOffset** 
>
> The amount to offset the top slug.
*** 
> Measurement Unit (Number or String)=any **slugRightOrOutsideOffset** 
>
> The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false.
*** 
> Measurement Unit (Number or String)=any **slugBottomOffset** 
>
> The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false.
*** 
> Boolean **createPrimaryTextFrame** 
>
> If true, the document A-master has primary text frames when a new document is created.
*** 
> Number **startPageNumber** 
>
> The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1.
*** 
> DocumentIntentOptions **intent** 
>
> The intent for a document.
*** 
> Boolean **documentBleedUniformSize** 
>
> If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true.
*** 
> Boolean **documentSlugUniformSize** 
>
> If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false.
*** 
> String **pageSize** 
>
> The size of the page.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the DocumentPreset.
*** 
> DocumentPreset **duplicate**()
> 
> Duplicates the DocumentPreset.
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
> Generates a string which, if executed, will return the DocumentPreset.
*** 
> DocumentPreset **getElements**()
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


