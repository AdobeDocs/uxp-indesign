# TransformAttributeOption
Options for applying layout attributes to any page item.

## Instance
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> ObjectStyle **parent** 
>
> The parent of the TransformAttributeOption (a ObjectStyle).
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
> Measurement Unit (Number or String)=any **transformAttrX** 
>
> The left position of the object, defined by the object style.
*** 
> Measurement Unit (Number or String)=any **transformAttrY** 
>
> The top position of the object, defined by the object style.
*** 
> Measurement Unit (Number or String)=any **transformAttrWidth** 
>
> The width of the object, defined by the object style.
*** 
> Measurement Unit (Number or String)=any **transformAttrHeight** 
>
> The height of the object, defined by the object style.
*** 
> TransformPositionReference **transformAttrLeftReference** 
>
> The reference point to be used while setting the X attribute of object style.
*** 
> TransformPositionReference **transformAttrTopReference** 
>
> The reference point to be used while setting the Y attribute of object style.
*** 
> AnchorPoint **transformAttrRefAnchorPoint** 
>
> Option to specify the achor point to be used by the style for anchoring the object while applying the position.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the TransformAttributeOption.
*** 
> TransformAttributeOption **getElements**()
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


