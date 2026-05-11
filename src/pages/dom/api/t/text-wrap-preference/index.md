# TextWrapPreference
Text wrap preferences.

## Instance
> *Read Only* 
> 
> ContourOption **contourOptions** 
>
> The contour of the text wrap. Valid only when when text wrap type is contour.
*** 
> *Read Only* 
> 
> Boolean **userModifiedWrap** 
>
> If true, the text wrap path has been explicitly modified by the user.
*** 
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
> The parent of the TextWrapPreference (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame, EndnoteTextFrame, Application, Document or ObjectStyle).
*** 
> *Read Only* 
> 
> Preferences **preferences** 
>
> A collection of preferences objects.
*** 
> *Read Only* 
> 
> Paths **paths** 
>
> A collection of paths.
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
> Mixed **textWrapOffset** 
>
> The minimum space between text and the edges of the wrapped object. The format for defining text wrap offset values depends on the text wrap type. If text wrap type is jump object text wrap, specify 2 values in the format [top, bottom]. If text wrap type is next column text wrap or contour, specify a single value. For bounding box text wrap, specify 4 values in the format in the format [top, left, bottom, right]. . Can return: Unit, Array of Units or NothingEnum enumerator.
*** 
> Boolean **inverse** 
>
> If true, inverts the text wrap.
*** 
> Boolean **applyToMasterPageOnly** 
>
> If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to.
*** 
> TextWrapSideOptions **textWrapSide** 
>
> Text wrap side options.
*** 
> TextWrapModes **textWrapMode** 
>
> The text wrap mode.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TextWrapPreference.
*** 
> TextWrapPreference **getElements**()
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


