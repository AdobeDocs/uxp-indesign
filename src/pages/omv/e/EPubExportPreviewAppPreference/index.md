# EPubExportPreviewAppPreference
EPub export preview app preferences.

## Instance
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
> The parent of the EPubExportPreviewAppPreference (a Application).
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
> Boolean **viewDocumentAfterExport** 
>
> If true, open docuemnt in viewer after export.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **addApplication**( String **applicationPath**, Boolean **selectedForReflowableEpub**, Boolean **selectedForFixedLayoutEpub**, Object **withProperties** )
> 
> Add a new preview application preference
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | applicationPath | The full path of the application to be added. |
| Boolean | selectedForReflowableEpub | Check if the app is selected in Reflowable ePub export. |
| Boolean | selectedForFixedLayoutEpub | Check if the app is selected in Fixed Layout ePub export. |
| Object | withProperties | Initial values for properties of the new EPubExportPreviewAppPreference (Optional) |

*** 
> **removeApplication**( Number **indexOfApp**, Object **withProperties** )
> 
> Remove an application at specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | indexOfApp | The index of the application to be removed. |
| Object | withProperties | Initial values for properties of the new EPubExportPreviewAppPreference (Optional) |

*** 
> Mixed **getApplicationAtIndex**( Boolean **indexOfApp**, Object **withProperties** )
> 
> Get the application at index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | indexOfApp | The index of the application to get information for. |
| Object | withProperties | Initial values for properties of the new EPubExportPreviewAppPreference (Optional) |

*** 
> Number **getApplicationCount**()
> 
> Number of applications added for ePub Preview.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the EPubExportPreviewAppPreference.
*** 
> EPubExportPreviewAppPreference **getElements**()
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


