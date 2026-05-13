# Ink
An ink.

## Instance
> *Read Only* 
> 
> Boolean **isProcessInk** 
>
> If true, the ink is a process ink.
<HorizontalLine />
> *Read Only* 
> 
> String **name** 
>
> The name of the Ink.
<HorizontalLine />
> *Read Only* 
> 
> Number **solidity** 
>
> The solidity value of the ink. (Range: 0.0 to 1.0)
<HorizontalLine />
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the Ink.
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
> The parent of the Ink (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the Ink within its containing object.
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
> String **aliasInkName** 
>
> The ink object to map this ink to.
<HorizontalLine />
> Number **angle** 
>
> The angle of the ink. (Range: 0 to 360)
<HorizontalLine />
> Boolean **convertToProcess** 
>
> Converts spot inks to process inks.
<HorizontalLine />
> Number **frequency** 
>
> The frequency of the ink. (Range: 1 to 500)
<HorizontalLine />
> Number **neutralDensity** 
>
> The neutral density of the ink. (Range: 0.001 to 10.0)
<HorizontalLine />
> Boolean **printInk** 
>
> If true, prints the ink. Only valid when printing separations.
<HorizontalLine />
> Number **trapOrder** 
>
> The place of the ink in the trapping sequence.
<HorizontalLine />
> InkTypes **inkType** 
>
> The trapping type of the ink.
<HorizontalLine />
> String **label** 
>
> A property that can be set to any string.
<HorizontalLine />
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
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
> Generates a string which, if executed, will return the Ink.
<HorizontalLine />
> Ink **getElements**()
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


