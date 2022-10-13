# XMLRuleProcessor
An XML rule processor.

## Instance
> *Read Only* 
> 
> Boolean **halted** 
>
> If true, the XML rule process has halted.
*** 
> *Read Only* 
> 
> String **rulePaths** 
>
> The XPath condition paths of the rules in the rule set.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the XMLRuleProcessor.
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
> The parent of the XMLRuleProcessor (a Application).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the XMLRuleProcessor within its containing object.
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
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the XMLRuleProcessor; this is an alias to the XMLRuleProcessor's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **remove**()
> 
> Deletes the XMLRuleProcessor.
*** 
> XMLRuleMatchData **startProcessingRuleSet**( XMLElement **initialElement** )
> 
> Start processing an XML rule set.
#### Parameters
| Type | Name | Description |
|---|---|---|
| XMLElement | initialElement | The XML element at which to start processing the rule set. |

*** 
> XMLRuleMatchData **findNextMatch**()
> 
> Finds the next matching XML element.
*** 
> XMLRuleMatchData **startProcessingSubtree**()
> 
> Process the XML elements of the current XML element.
*** 
> **skipChildren**()
> 
> Do not process XML elements (children) of the current XML element.
*** 
> **endProcessingRuleSet**()
> 
> Stop processing XML rule set.
*** 
> **halt**()
> 
> Halt the XML rule processor.
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
> Generates a string which, if executed, will return the XMLRuleProcessor.
*** 
> XMLRuleProcessor **getElements**()
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


