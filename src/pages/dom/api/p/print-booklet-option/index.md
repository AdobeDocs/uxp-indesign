# PrintBookletOption
Print booklet options.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the PrintBookletOption (a Document).
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
> Mixed **pageRange** 
>
> The pages to print, specified either as an enumeration or a string. To specify a range, separate page numbers in the string with a hyphen (-). To specify separate pages, separate page numbers in the string with a comma (,). Can return: PageRange enumerator or String.
*** 
> BookletTypeOptions **bookletType** 
>
> The type of booklet.
*** 
> Measurement Unit (Number or String)=any **spaceBetweenPages** 
>
> The amount of space between pages.
*** 
> Measurement Unit (Number or String)=any **bleedBetweenPages** 
>
> The amount of bleed between pages.
*** 
> Measurement Unit (Number or String)=any **creep** 
>
> The amount of creep (binding adjustment based on paper thickness) to add.
*** 
> SignatureSizeOptions **signatureSize** 
>
> The signature size of booklet (for perfect binding).
*** 
> Measurement Unit (Number or String)=any **topMargin** 
>
> Top margin of the printed booklet.
*** 
> Measurement Unit (Number or String)=any **bottomMargin** 
>
> Bottom margin of the printed booklet.
*** 
> Measurement Unit (Number or String)=any **leftMargin** 
>
> Left margin of the printed booklet.
*** 
> Measurement Unit (Number or String)=any **rightMargin** 
>
> Right margin of the printed booklet.
*** 
> Boolean **autoAdjustMargins** 
>
> If true, automatically adjust margins to fit the specified printer's marks and bleed area.
*** 
> Boolean **marginsUniformSize** 
>
> If true, make all margins equal to the top margin.
*** 
> Boolean **printBlankPrinterSpreads** 
>
> If true, print blank spreads.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the PrintBookletOption.
*** 
> PrintBookletOption **getElements**()
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


