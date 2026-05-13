# HyperlinkExternalPageDestination
A hyperlink destination that is a page in a document other than the document that contains the hyperlink source. For information on hyperlink sources, hyperlink page item source or hyperlink text source.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the HyperlinkExternalPageDestination.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **hidden** 
>
> If true, the hyperlink is hidden.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the HyperlinkExternalPageDestination.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the HyperlinkExternalPageDestination (a Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the HyperlinkExternalPageDestination within its containing object.
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
> File **documentPath** 
>
> The path to the document that the hyperlink destination points to.
<HorizontalLine />
> Number **destinationPageIndex** 
>
> The index of the page that the hyperlink destination points to. Note: Valid only when hyperlink destination is an external page.
<HorizontalLine />
> HyperlinkDestinationPageSetting **viewSetting** 
>
> The destination page size when the page is reached by clicking the hyperlink.
<HorizontalLine />
> Mixed **viewBounds** 
>
> The view rectangle, specified in the format [y1, x1, y2, x2]. Note: Valid only when view setting is fixed. Can return: Ordered array containing top:Unit, left:Unit, bottom:Unit, right:Unit.
<HorizontalLine />
> Number **viewPercentage** 
>
> The zoom percentage. (Range: 5 to 4000) Note: Valid only when view setting is fixed.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the HyperlinkExternalPageDestination.
<HorizontalLine />
> **showDestination**()
> 
> Jumps to the hyperlink destination.
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
> Generates a string which, if executed, will return the HyperlinkExternalPageDestination.
<HorizontalLine />
> HyperlinkExternalPageDestination **getElements**()
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


