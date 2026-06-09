# AnchoredObjectDefault
Anchored object default settings.

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
> The parent of the AnchoredObjectDefault (a Application or Document).
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
> ContentType **anchorContent** 
>
> The initial frame type of a new anchored object.
<HorizontalLine />
> Measurement Unit (Number or String)=any **initialAnchorHeight** 
>
> The initial height of a new anchored object.
<HorizontalLine />
> Measurement Unit (Number or String)=any **initialAnchorWidth** 
>
> The initial width of a new anchored object.
<HorizontalLine />
> ParagraphStyle **anchoredParagraphStyle** 
>
> The initial paragraph style of a new anchored object. Note: Valid when anchor content is text.
<HorizontalLine />
> ObjectStyle **anchoredObjectStyle** 
>
> The initial object style of a new anchored object.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the AnchoredObjectDefault.
<HorizontalLine />
> AnchoredObjectDefault **getElements**()
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


