# LinkMetadata
MetaData properties for the link source file.

## Instance
> *Read Only* 
> 
> String **author** 
>
> The author of the document.
<HorizontalLine />
> *Read Only* 
> 
> String **description** 
>
> The description of the LinkMetadata.
<HorizontalLine />
> *Read Only* 
> 
> String **jobName** 
>
> The job name.
<HorizontalLine />
> *Read Only* 
> 
> CopyrightStatus **copyrightStatus** 
>
> The copyright status of the document.
<HorizontalLine />
> *Read Only* 
> 
> String **copyrightNotice** 
>
> The text to use as a copyright notice.
<HorizontalLine />
> *Read Only* 
> 
> String **copyrightInfoURL** 
>
> The URL of the file that contains the linked copyright statement.
<HorizontalLine />
> *Read Only* 
> 
> String **keywords** 
>
> The list of keywords associated with the document.
<HorizontalLine />
> *Read Only* 
> 
> String **serverURL** 
>
> The location of the document on the asset management server.
<HorizontalLine />
> *Read Only* 
> 
> Date **modificationDate** 
>
> The most recent modification date of the document.
<HorizontalLine />
> *Read Only* 
> 
> Date **creationDate** 
>
> The creation date of the document.
<HorizontalLine />
> *Read Only* 
> 
> String **documentTitle** 
>
> The title of the document.
<HorizontalLine />
> *Read Only* 
> 
> String **creator** 
>
> The name of the application used to create the document.
<HorizontalLine />
> *Read Only* 
> 
> String **format** 
>
> The format of the document.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
<HorizontalLine />
> *Read Only* 
> 
> Link **parent** 
>
> The parent of the LinkMetadata (a Link).
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
> String **getProperty**( String **namespace**, String **path** )
> 
> Gets the XMP property value associated with the specified path.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | namespace | The namespace of the property. |
| String | path | The specified path. |

<HorizontalLine />
> Number **countContainer**( String **namespace**, String **path** )
> 
> Counts the number of items in the container.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | namespace | The namespace of the container. |
| String | path | The path to the container. |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the LinkMetadata.
<HorizontalLine />
> LinkMetadata **getElements**()
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


