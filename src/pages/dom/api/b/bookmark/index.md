# Bookmark
A bookmark.

## Instance
> *Read Only* 
> 
> Number **indent** 
>
> The indent level of the bookmark.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **destination** 
>
> The destination that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Bookmark.
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
> The parent of the Bookmark (a Document or Bookmark).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Bookmark within its containing object.
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
> *Read Only* 
> 
> Bookmarks **bookmarks** 
>
> A collection of bookmarks.
<HorizontalLine />
> String **name** 
>
> The name of the Bookmark.
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
> Deletes the Bookmark.
<HorizontalLine />
> Bookmark **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the bookmark to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The bookmark location relative to the reference object or within the containing object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: Bookmark, Document or Bookmark. (Optional) |

<HorizontalLine />
> **showBookmark**()
> 
> Go to the bookmark.
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
> Generates a string which, if executed, will return the Bookmark.
<HorizontalLine />
> Bookmark **getElements**()
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


