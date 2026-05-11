# MetadataPreference
Metadata preferences.

## Instance
> *Read Only* 
> 
> String **serverURL** 
>
> The location of the document on the asset management server.
*** 
> *Read Only* 
> 
> Date **modificationDate** 
>
> The most recent modification date of the document.
*** 
> *Read Only* 
> 
> Date **creationDate** 
>
> The creation date of the document.
*** 
> *Read Only* 
> 
> String **creator** 
>
> The name of the application used to create the document.
*** 
> *Read Only* 
> 
> String **format** 
>
> The format of the document.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Document **parent** 
>
> The parent of the MetadataPreference (a Document).
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
> String **author** 
>
> The author of the document.
*** 
> String **description** 
>
> The description of the MetadataPreference.
*** 
> String **jobName** 
>
> The job name.
*** 
> CopyrightStatus **copyrightStatus** 
>
> The copyright status of the document.
*** 
> String **copyrightNotice** 
>
> The text to use as a copyright notice.
*** 
> String **copyrightInfoURL** 
>
> The URL of the file that contains the linked copyright statement.
*** 
> String **keywords** 
>
> The list of keywords associated with the document.
*** 
> String **documentTitle** 
>
> The title of the document.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **save**( File **to** )
> 
> Saves the metadata in the document to an external file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The path to the external file. |

*** 
> **replace**( File **using**, Boolean **affectAll** )
> 
> Replaces the current metadata in the document with metadata from the specified file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | using | The full path to the file that contains the replacement metadata. |
| Boolean | affectAll | If true, treats all properties as external. Note: Defaults to false. (Optional) |

*** 
> **append**( File **from**, Boolean **affectAll** )
> 
> Uses metadata from the specified external file to define any undefined metadata properties in the document.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | from | The path to the external file that contains the metadata. |
| Boolean | affectAll | If true, also replaces existing metadata with data from the external file. If false, does not replace existing metadata. Note: Defaults to false. (Optional) |

*** 
> String **getProperty**( String **namespace**, String **path** )
> 
> Gets the XMP property value associated with the specified path.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | namespace | The namespace of the property. |
| String | path | The specified path. |

*** 
> **setProperty**( String **namespace**, String **path**, String **value** )
> 
> Sets the XMP property associated with the specified path.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | namespace | The namespace of the property. |
| String | path | The specified path(s). |
| String | value | The value to assign to the property. Note: To remove the property, pass an empty string. |

*** 
> **createContainerItem**( String **namespace**, String **path**, Number **index**, ContainerType **container** )
> 
> Creates an empty container.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | namespace | The namespace of the container. |
| String | path | The path to the container. |
| Number | index | The index of the item within the container. Specified values must be 1 or greater. To append the item to the end of the index and allow the next available value to be assigned, use 0. (Optional) |
| ContainerType | container | The container type. Note: Required when the new item is the first item added to the container. (Optional) |

*** 
> Number **countContainer**( String **namespace**, String **path** )
> 
> Counts the number of items in the container.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | namespace | The namespace of the container. |
| String | path | The path to the container. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the MetadataPreference.
*** 
> MetadataPreference **getElements**()
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


