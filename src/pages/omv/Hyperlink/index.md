# Hyperlink
A hyperlink.

## Instance
> *Read Only* 
> 
> Boolean **hidden** 
>
> If true, the hyperlink is hidden.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Hyperlink.
*** 
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
> The parent of the Hyperlink (a Document).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Hyperlink within its containing object.
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
> The name of the Hyperlink.
*** 
> Mixed **source** 
>
> The hyperlinked text or page item. Can return: HyperlinkPageItemSource, HyperlinkTextSource or CrossReferenceSource.
*** 
> Boolean **visible** 
>
> If true, the Hyperlink is visible.
*** 
> HyperlinkAppearanceHighlight **highlight** 
>
> The hyperlink highlight style.
*** 
> HyperlinkAppearanceWidth **width** 
>
> The stroke weight of the hyperlink border.
*** 
> Mixed **borderColor** 
>
> The hyperlink border color. Can return: Array of 3 Reals (0 - 255) or UIColors enumerator.
*** 
> HyperlinkAppearanceStyle **borderStyle** 
>
> The hyperlink border style.
*** 
> Mixed **destination** 
>
> The text, page, or URL that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination, HyperlinkURLDestination or ParagraphDestination.
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
> Deletes the Hyperlink.
*** 
> **showSource**()
> 
> Jumps to the hyperlink source.
*** 
> **showDestination**()
> 
> Jumps to the hyperlink destination.
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
> Generates a string which, if executed, will return the Hyperlink.
*** 
> Hyperlink **getElements**()
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


