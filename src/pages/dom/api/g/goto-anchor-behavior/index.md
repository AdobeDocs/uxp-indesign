# GotoAnchorBehavior
A behavior object that jumps to an anchor.

## Instance
> *Read Only* 
> 
> String **anchorName** 
>
> The anchor name.
<HorizontalLine />
> *Read Only* 
> 
> String **name** 
>
> The name of the GotoAnchorBehavior.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the GotoAnchorBehavior.
<HorizontalLine />
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
> The parent of the GotoAnchorBehavior (a Button, CheckBox, ComboBox, ListBox, RadioButton, TextBox or SignatureField).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the GotoAnchorBehavior within its containing object.
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
> Mixed **anchorItem** 
>
> The anchor item, specified as a bookmark or a hyperlink text or page destination. Can return: Bookmark, HyperlinkTextDestination or HyperlinkPageDestination.
<HorizontalLine />
> GoToZoomOptions **zoomSetting** 
>
> The zoom setting.
<HorizontalLine />
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
<HorizontalLine />
> Boolean **enableBehavior** 
>
> If true, the behavior is enabled.
<HorizontalLine />
> BehaviorEvents **behaviorEvent** 
>
> The event which triggers the behavior.
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
> Deletes the GotoAnchorBehavior.
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
> Generates a string which, if executed, will return the GotoAnchorBehavior.
<HorizontalLine />
> GotoAnchorBehavior **getElements**()
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


