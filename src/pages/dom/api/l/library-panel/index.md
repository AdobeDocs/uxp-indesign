# LibraryPanel
Library panel

## Instance
> *Read Only* 
> 
> Library **associatedLibrary** 
>
> The library displayed in this LibraryPanel
<HorizontalLine />
> *Read Only* 
> 
> String **name** 
>
> The name of the LibraryPanel.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the LibraryPanel (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the LibraryPanel within its containing object.
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
> LibraryPanelViews **view** 
>
> LibraryPanel view
<HorizontalLine />
> SortAssets **sortOrder** 
>
> The sort order of the assets in the LibraryPanel
<HorizontalLine />
> Object **selection** 
>
> The selected object(s). Can also accept: Object or NothingEnum enumerator.
<HorizontalLine />
> Boolean **visible** 
>
> If true, the panel is visible.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **showAll**()
> 
> Show all assets
<HorizontalLine />
> **select**( Mixed **selectableItems**, SelectionOptions **existingSelection** )
> 
> Selects the specified object(s).
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | selectableItems | The objects to select. Can accept: Object, Array of Objects, NothingEnum enumerator or SelectAll enumerator. |
| SelectionOptions | existingSelection | The selection status of the LibraryPanel in relation to previously selected objects. (Optional) |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the LibraryPanel.
<HorizontalLine />
> LibraryPanel **getElements**()
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


