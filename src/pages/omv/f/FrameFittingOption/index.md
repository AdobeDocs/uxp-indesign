# FrameFittingOption
Options for fitting placed or pasted content in a frame.

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
> The parent of the FrameFittingOption (a ObjectStyle, Oval, Rectangle, Polygon, Application or Document).
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
> Boolean **autoFit** 
>
> If true, the last saved fitting options will be applied to the contents of a frame when it is resized.
*** 
> Measurement Unit (Number or String)=any **leftCrop** 
>
> The amount in measurement units to crop the left edge of a graphic.
*** 
> Measurement Unit (Number or String)=any **topCrop** 
>
> The amount in measurement units to crop the top edge of a graphic.
*** 
> Measurement Unit (Number or String)=any **rightCrop** 
>
> The amount in measurement units to crop the right edge of a graphic.
*** 
> Measurement Unit (Number or String)=any **bottomCrop** 
>
> The amount in measurement units to crop the bottom edge of a graphic.
*** 
> EmptyFrameFittingOptions **fittingOnEmptyFrame** 
>
> The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application.
*** 
> AnchorPoint **fittingAlignment** 
>
> The point with which to align the image empty when fitting in a frame. For information, see frame fitting options.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the FrameFittingOption.
*** 
> FrameFittingOption **getElements**()
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


