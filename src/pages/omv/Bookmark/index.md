# Bookmark
A bookmark.

## Instance
> *Read Only* 
> 
> Number **indent** 
>
> The indent level of the bookmark.
*** 
> *Read Only* 
> 
> Mixed **destination** 
>
> The destination that the hyperlink points to. Can return: HyperlinkTextDestination, HyperlinkPageDestination, HyperlinkExternalPageDestination or Page.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Bookmark.
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
> The parent of the Bookmark (a Document or Bookmark).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the Bookmark within its containing object.
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
> *Read Only* 
> 
> Bookmarks **bookmarks** 
>
> A collection of bookmarks.
*** 
> String **name** 
>
> The name of the Bookmark.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the Bookmark.
*** 
> Bookmark **move**( LocationOptions **to**, Mixed **reference** )
> 
> Moves the bookmark to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| LocationOptions | to | The bookmark location relative to the reference object or within the containing object. (Optional) |
| Mixed | reference | The reference object. Note: Required when the to parameter specifies before or after. Can accept: Bookmark, Document or Bookmark. (Optional) |

*** 
> **showBookmark**()
> 
> Go to the bookmark.
*** 
> **insertLabel**( String **key**, String **value** )
> 
> Sets the label to the value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |
| String | value | The value. |

*** 
> String **extractLabel**( String **key** )
> 
> Gets the label value associated with the specified key.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | key | The key. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the Bookmark.
*** 
> Bookmark **getElements**()
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


