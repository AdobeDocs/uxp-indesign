# PreflightProfile
A preflight profile.

## Instance
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the PreflightProfile.
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
> The parent of the PreflightProfile (a Application or Document).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the PreflightProfile within its containing object.
<HorizontalLine />
> *Read Only* 
> 
> PreflightProfileRules **preflightProfileRules** 
>
> A collection of preflight profile rules.
<HorizontalLine />
> *Read Only* 
> 
> PreflightRuleInstances **preflightRuleInstances** 
>
> A collection of preflight rule instances.
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
> String **name** 
>
> The name of the PreflightProfile.
<HorizontalLine />
> String **description** 
>
> The description of the PreflightProfile.
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
> Deletes the PreflightProfile.
<HorizontalLine />
> PreflightProfile **duplicate**()
> 
> Duplicates the PreflightProfile.
<HorizontalLine />
> **update**( Mixed **using** )
> 
> Update the preflight profile by copying from another profile.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | using | The preflight profile to copy. Can accept: String or PreflightProfile. (Optional) |

<HorizontalLine />
> **unembed**()
> 
> Unembed this profile.
<HorizontalLine />
> **save**( File **to** )
> 
> Saves this preflight profile to a InDesign preflight profile file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The preflight profile file to save to. |

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
> Generates a string which, if executed, will return the PreflightProfile.
<HorizontalLine />
> PreflightProfile **getElements**()
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


