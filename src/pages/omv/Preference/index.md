# Preference
A preferences object.

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
> The parent of the Preference (a Application, Document, Book, DataMerge, XmlStory, Spread, FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting, FindChangeContentTransparencySetting, HtmlItem, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, FormField, Sound, Movie, MediaItem, EPSText, Polygon, GraphicLine, Rectangle, Oval, SplineItem, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, EndnoteTextFrame, TextFrame, PageItem, PageItemDefault, TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, ContentTransparencySetting, FindObjectPreference, ChangeObjectPreference, Story, TextVariable, TextWrapPreference, Page, Link, ObjectStyle, MasterSpread, NamedGrid, TextDefault, ParagraphStyle, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Text, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference or ChangeTransliteratePreference).
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
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the Preference.
*** 
> Preference **getElements**()
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


