# ArticleChild
Member of a group that is part of an article.

## Instance
> *Read Only* 
> 
> PageItem **itemRef** 
>
> The underlying page item
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the ArticleChild.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Group **parent** 
>
> The parent of the ArticleChild (a Group).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the ArticleChild within its containing object.
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
> ArticleChild **move**( LocationOptions **to**, ArticleChild **reference** )
> 
> Moves the ArticleChild to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The location relative to the reference object or within the containing object. |
| ArticleChild | reference | The reference object. Note: Required when the to value specifies before or after. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the ArticleChild.
<HorizontalLine />
> ArticleChild **getElements**()
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


