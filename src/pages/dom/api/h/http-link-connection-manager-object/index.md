# HttpLinkConnectionManagerObject
Experimental: An http link connection manager.

## Instance
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
> The parent of the HttpLinkConnectionManagerObject (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the HttpLinkConnectionManagerObject within its containing object.
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
> **httpConnect**( String **serverurl**, String **jsonData** )
> 
> Experimental: Create a url connection for the given server address
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | serverurl | Server URL to connect |
| String | jsonData | JSON data |

<HorizontalLine />
> Boolean **isConnected**( String **serverurl** )
> 
> Experimental: Checks if the given server URL is connected or not.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | serverurl | Server URL to check |

<HorizontalLine />
> **logout**( String **serverurl** )
> 
> Experimental: Logout from the given URL
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | serverurl | Server URL to logout from |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the HttpLinkConnectionManagerObject.
<HorizontalLine />
> HttpLinkConnectionManagerObject **getElements**()
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


