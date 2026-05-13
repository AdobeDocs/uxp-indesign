# Preference
A preferences object.

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
> The parent of the Preference (a Application, Document, Book, DataMerge, XmlStory, Spread, FindChangeTransparencySetting, FindChangeStrokeTransparencySetting, FindChangeFillTransparencySetting, FindChangeContentTransparencySetting, HtmlItem, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, FormField, Sound, Movie, MediaItem, EPSText, Polygon, GraphicLine, Rectangle, Oval, SplineItem, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Graphic, Group, EndnoteTextFrame, TextFrame, PageItem, PageItemDefault, TransparencySetting, StrokeTransparencySetting, FillTransparencySetting, ContentTransparencySetting, FindObjectPreference, ChangeObjectPreference, Story, TextVariable, TextWrapPreference, Page, Link, ObjectStyle, MasterSpread, NamedGrid, TextDefault, ParagraphStyle, InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, Word, Character, Text, FindTextPreference, ChangeTextPreference, FindGrepPreference, ChangeGrepPreference, FindTransliteratePreference or ChangeTransliteratePreference).
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
> String **toSource**()
> 
> Generates a string which, if executed, will return the Preference.
<HorizontalLine />
> Preference **getElements**()
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


