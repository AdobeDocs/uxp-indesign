# LinkedPageItemOption
The link options for a linked Page Item.

## Instance
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
> The parent of the LinkedPageItemOption (a Application, Document, PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame or EndnoteTextFrame).
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
> Boolean **updateLinkWhileSaving** 
>
> If true, the linked Page Item will be updated while saving.
<HorizontalLine />
> Boolean **warnOnUpdateOfEditedPageItem** 
>
> If true, a warning will be shown if the update link operation will override local edits.
<HorizontalLine />
> Boolean **preserveSizeAndShape** 
>
> If true, size and shape edits will be preserved during update.
<HorizontalLine />
> Boolean **preserveAppearance** 
>
> If true, appearance edits will be preserved during update.
<HorizontalLine />
> Boolean **preserveInteractivity** 
>
> If true, interactivity edits will be preserved during update.
<HorizontalLine />
> Boolean **preserveFrameContent** 
>
> If true, frame content edits will be preserved during update.
<HorizontalLine />
> Boolean **preserveOthers** 
>
> If true, text wrap, hyperLinks, text frame options, object export settings will be preserved during update.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the LinkedPageItemOption.
<HorizontalLine />
> LinkedPageItemOption **getElements**()
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


