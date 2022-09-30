# PagesPanel
Pages panel.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the PagesPanel.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Application **parent** 
>
> The parent of the PagesPanel (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the PagesPanel within its containing object.
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
> PageViewOptions **pagesViewSetting** 
>
> View setting for how to arrange the pages in the page section of the panel.
*** 
> IconSizes **iconSize** 
>
> Page icon size.
*** 
> IconSizes **masterIconSize** 
>
> Master page icon size.
*** 
> Boolean **masterVerticalView** 
>
> If true, master page icons will be arranged vertically around the binding spine. If false, master page icons will be arranged horizontally.
*** 
> PanelLayoutResize **resizeBehavior** 
>
> Specifies the behavior of the document and master page areas of the panel when the panel is resized.
*** 
> Boolean **pagesOnTop** 
>
> If true, the pages area of the panel will be drawn above the master pages area.
*** 
> Boolean **pagesThumbnails** 
>
> If true, display thumbnails of the pages in the pages area of the panel.
*** 
> Boolean **mastersThumbnails** 
>
> If true, display thumbnails of the pages in the master pages area of the panel.
*** 
> Boolean **transparencyIcons** 
>
> If true, a transparency icon will display next to spreads with elements having transparency applied.
*** 
> Boolean **transitionsIcons** 
>
> If true, a page transitions icon will display next to spreads with page transitions applied.
*** 
> Boolean **rotationIcons** 
>
> If true, a rotation icon will display next to spreads with non-zero rotation applied.
*** 
> Boolean **visible** 
>
> If true, the panel is visible.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> String **toSource**()
> 
> Generates a string which, if executed, will return the PagesPanel.
*** 
> PagesPanel **getElements**()
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


