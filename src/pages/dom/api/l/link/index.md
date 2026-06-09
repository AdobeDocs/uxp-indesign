# Link
A link to a placed file.

## Class
> *Read Only* 
> 
> String **AFTER_NEW** = afterNew
> 
> Dispatched after a Link is created. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_DELETE** = beforeDelete
> 
> Dispatched before a Link is deleted. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_DELETE** = afterDelete
> 
> Dispatched after a Link is deleted. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_UPDATE** = beforeUpdate
> 
> Dispatched before a Link is updated. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_UPDATE** = afterUpdate
> 
> Dispatched after a Link is updated. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_EMBED** = beforeEmbed
> 
> Dispatched before a Link is embedded. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_EMBED** = afterEmbed
> 
> Dispatched after a Link is embedded. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_UNEMBED** = beforeUnembed
> 
> Dispatched before a Link is unembedded. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_UNEMBED** = afterUnembed
> 
> Dispatched after a Link is unembedded. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **BEFORE_MOVE** = beforeMove
> 
> Dispatched before a Link is relocated from one object to another. This event bubbles. This event is cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_MOVE** = afterMove
> 
> Dispatched after a Link is relocated from one object to another. This event bubbles. This event is not cancelable.
<HorizontalLine />
> *Read Only* 
> 
> String **AFTER_ATTRIBUTE_CHANGED** = afterAttributeChanged
> 
> Dispatched when the value of a property changes on this Link. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> VersionState **versionState** 
>
> The Version Cue version state of the file.
<HorizontalLine />
> *Read Only* 
> 
> EditingState **editingState** 
>
> The Version Cue editing state of the file.
<HorizontalLine />
> *Read Only* 
> 
> LinkMetadata **linkXmp** 
>
> XMP data for the link source file.
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the link in the links collection.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **parent** 
>
> The linked object. Can return: Story, Graphic, Movie or Sound.
<HorizontalLine />
> *Read Only* 
> 
> String **assetURL** 
>
> The asset URL of the linked object.
<HorizontalLine />
> *Read Only* 
> 
> String **assetID** 
>
> The asset ID of the linked object.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **edited** 
>
> If true, indicates the linked object has been edited in the current document but the source file has not been updated.
<HorizontalLine />
> *Read Only* 
> 
> String **name** 
>
> The name of the Link.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **needed** 
>
> If true, indicates a link to a full-resolution version of the source file is needed. If false, indicates the object is embedded.
<HorizontalLine />
> *Read Only* 
> 
> LinkStatus **status** 
>
> The status of the link.
<HorizontalLine />
> *Read Only* 
> 
> String **linkType** 
>
> The file type of the linked object.
<HorizontalLine />
> *Read Only* 
> 
> Date **date** 
>
> The date and time the Link was created.
<HorizontalLine />
> *Read Only* 
> 
> Number **size** 
>
> The size of the Link file.
<HorizontalLine />
> *Read Only* 
> 
> LinkResourceRenditionType **renditionData** 
>
> The rendition data of the link resource.
<HorizontalLine />
> *Read Only* 
> 
> String **linkResourceURI** 
>
> The URI of the linked resource.
<HorizontalLine />
> *Read Only* 
> 
> String **filePath** 
>
> The file path (colon delimited on the Mac OS). Can also accept: File.
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Link.
<HorizontalLine />
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
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
> Preferences **preferences** 
>
> A collection of preferences objects.
<HorizontalLine />
> *Read Only* 
> 
> Links **links** 
>
> A collection of links.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **checkIn**( String **versionComments**, Boolean **forceSave** )
> 
> Check in to Version Cue.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | versionComments | The comment for this version (Optional) |
| Boolean | forceSave | Forcibly save a version (Optional) |

<HorizontalLine />
> **relink**( Mixed **to** )
> 
> Points the link to a new source file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | to | The full path name of the new source file. Can accept: File or String. |

<HorizontalLine />
> **unlink**()
> 
> Embeds the source file in the document.
<HorizontalLine />
> Link **update**()
> 
> Updates the link if the source file has been changed.
<HorizontalLine />
> **unembed**( File **to**, String **versionComments**, Boolean **forceSave** )
> 
> Unembeds the source file. If no folder is specified, creates a link to the original source file; if a folder is specified, copies the file to the folder and creates a link to the copied file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The folder to which to copy the unembedded file. (Optional) |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

<HorizontalLine />
> **replaceWithOriginal**()
> 
> Experimental: Download the original asset and replace FPO with it.
<HorizontalLine />
> **relinkTextFragmentLink**( String **linkResourceURI**, String **name** )
> 
> Experimental: Relink the text fragment link to a new uri
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | linkResourceURI | Resource URI to relink to. |
| String | name | The tag name for the key. (Optional) |

<HorizontalLine />
> **reinitLink**( String **linkResourceURI** )
> 
> Experimental: Reinitialize the link to a new uri
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | linkResourceURI | Resource URI to relink. |

<HorizontalLine />
> **editOriginal**()
> 
> Opens the source file of the link in the default editor for the source file type.
<HorizontalLine />
> **show**()
> 
> Selects the link.
<HorizontalLine />
> **revealInSystem**()
> 
> Opens the file system to the folder that contains the source file of the link, and selects the file.
<HorizontalLine />
> **revealInBridge**()
> 
> Opens Adobe Bridge and selects the source file of the link.
<HorizontalLine />
> **copyLink**( File **to**, String **versionComments**, Boolean **forceSave** )
> 
> Copies the link file to the specified location.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The file or folder to which to copy the file. |
| String | versionComments | The comment for this version. (Optional) |
| Boolean | forceSave | If true, forcibly saves a version. (Optional) |

<HorizontalLine />
> **goToSource**()
> 
> Opens the source file of the link in InDesign for SharedContent links.
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
> Generates a string which, if executed, will return the Link.
<HorizontalLine />
> Link **getElements**()
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


