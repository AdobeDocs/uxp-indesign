# AnchoredObjectSetting
The settings for an anchored object.

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
> The parent of the AnchoredObjectSetting (a Application, Document, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Group, TextFrame, EndnoteTextFrame, Button, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject or ObjectStyle).
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
> AnchorPosition **anchoredPosition** 
>
> The position of the anchored object relative to the anchor.
*** 
> Boolean **spineRelative** 
>
> If true, the position of the anchored object is relative to the binding spine of the page or spread.
*** 
> Boolean **lockPosition** 
>
> If true, prevents manual positioning of the anchored object.
*** 
> Boolean **pinPosition** 
>
> If true, pins the position of the anchored object within the text frame top and bottom.
*** 
> AnchorPoint **anchorPoint** 
>
> The point in the anchored object to position.
*** 
> HorizontalAlignment **horizontalAlignment** 
>
> When anchored position is above line, the position of the anchored object is relative to the text area. When anchored position is custom, the horizontal alignment of the anchored object is set by the horizontal reference point. Note: Not valid when anchored position is inline.
*** 
> AnchoredRelativeTo **horizontalReferencePoint** 
>
> The horizontal reference point on the page. Valid only when anchored position is custom.
*** 
> VerticalAlignment **verticalAlignment** 
>
> The vertical alignment of the anchored object reference point with the vertical reference point on the page. Notes: Valid only when anchored position is custom.
*** 
> VerticallyRelativeTo **verticalReferencePoint** 
>
> The vertical reference point on the page. Valid when anchored position is custom.
*** 
> Measurement Unit (Number or String)=any **anchorXoffset** 
>
> The horizontal (x) offset of the anchored object.
*** 
> Measurement Unit (Number or String)=any **anchorYoffset** 
>
> The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning.
*** 
> Measurement Unit (Number or String)=any **anchorSpaceAbove** 
>
> The space above an above-line anchored object.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **insertAnchoredObject**( InsertionPoint **storyOffset**, AnchorPosition **anchoredPosition** )
> 
> Inserts the anchored object into specified story.
#### Parameters
| Type | Name | Description |
|---|---|---|
| InsertionPoint | storyOffset | The location within the story, specified as an insertion point. |
| AnchorPosition | anchoredPosition | The position of the anchored object relative to the anchor. (Optional) |

*** 
> **releaseAnchoredObject**()
> 
> Releases the anchored object from its associated text.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AnchoredObjectSetting.
*** 
> AnchoredObjectSetting **getElements**()
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


