# TextPath
A text object that is on a path.

## Class
> *Read Only* 
> 
> String **BEFORE_PLACE** = beforePlace
> 
> Dispatched before a TextPath is placed. This event bubbles. This event is cancelable.
*** 
> *Read Only* 
> 
> String **AFTER_PLACE** = afterPlace
> 
> Dispatched after a TextPath is placed. This event bubbles. This event is not cancelable.

## Instance
> *Read Only* 
> 
> Number **centerBracket** 
>
> The halfway point between the start bracket and the end bracket.
*** 
> *Read Only* 
> 
> Story **parentStory** 
>
> The story that contains the text.
*** 
> *Read Only* 
> 
> Mixed **startTextFrame** 
>
> The first text frame in the thread. Can return: TextFrame or TextPath.
*** 
> *Read Only* 
> 
> Mixed **endTextFrame** 
>
> The last text frame in the thread. Can return: TextFrame or TextPath.
*** 
> *Read Only* 
> 
> Number **textFrameIndex** 
>
> The index of the text frame within the story.
*** 
> *Read Only* 
> 
> Boolean **overflows** 
>
> If true, the story has overset text.
*** 
> *Read Only* 
> 
> Number **id** 
>
> The unique ID of the TextPath.
*** 
> *Read Only* 
> 
> Boolean **isValid** 
>
> Returns true if the object specifier resolves to valid objects.
*** 
> *Read Only* 
> 
> Mixed **parent** 
>
> The parent of the TextPath (a SplineItem, Polygon, GraphicLine, Rectangle, Oval, TextFrame, EndnoteTextFrame or EPSText).
*** 
> *Read Only* 
> 
> Number **index** 
>
> The index of the TextPath within its containing object.
*** 
> *Read Only* 
> 
> Texts **texts** 
>
> A collection of text objects.
*** 
> *Read Only* 
> 
> Characters **characters** 
>
> A collection of characters.
*** 
> *Read Only* 
> 
> Words **words** 
>
> A collection of words.
*** 
> *Read Only* 
> 
> Lines **lines** 
>
> A collection of lines.
*** 
> *Read Only* 
> 
> TextColumns **textColumns** 
>
> A collection of text columns.
*** 
> *Read Only* 
> 
> Paragraphs **paragraphs** 
>
> A collection of paragraphs.
*** 
> *Read Only* 
> 
> InsertionPoints **insertionPoints** 
>
> A collection of insertion points.
*** 
> *Read Only* 
> 
> TextStyleRanges **textStyleRanges** 
>
> A collection of text style ranges.
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
> PathTypeAlignments **pathAlignment** 
>
> The alignment of the type on a path.
*** 
> TextTypeAlignments **textAlignment** 
>
> The alignment applied to the type on a path.
*** 
> TextPathEffects **pathEffect** 
>
> The effect applied to the type on a path.
*** 
> FlipValues **flipPathEffect** 
>
> The flip effect applied to the type on a path.
*** 
> Number **pathSpacing** 
>
> The spacing applied to the type on a path.
*** 
> Number **startBracket** 
>
> The location of the start of the type on the path, expressed in points. Note: 0 is the first point on the path.
*** 
> Number **endBracket** 
>
> The end of the type on a path. Note: Additional text becomes overset text unless the text is linked to another path or text frame.
*** 
> Mixed **previousTextFrame** 
>
> The previous text frame in the thread. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
*** 
> Mixed **nextTextFrame** 
>
> The next text frame in the thread. Can return: TextFrame or TextPath. Can also accept: NothingEnum enumerator.
*** 
> Mixed **contents** 
>
> The contents of the text frame. Can return: String, TextFrameContents enumerator or SpecialCharacters enumerator.
*** 
> String **label** 
>
> A property that can be set to any string.
*** 
> String **name** 
>
> The name of the TextPath; this is an alias to the TextPath's label property.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> Text **findText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeText**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeGrep**( Boolean **reverseOrder** )
> 
> Finds text that matches the find what value and replaces the text with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findGlyph**( Boolean **reverseOrder** )
> 
> Finds glyphs that match the find what value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeGlyph**( Boolean **reverseOrder** )
> 
> Finds glyphs that match the find what value and replaces the glyphs with the change to value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **findTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> Text **changeTransliterate**( Boolean **reverseOrder** )
> 
> Finds text that matches the find character type value and replaces the text with the change character type value.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Boolean | reverseOrder | If true, returns the results in reverse order. (Optional) |

*** 
> **remove**()
> 
> Deletes the TextPath.
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
> Generates a string which, if executed, will return the TextPath.
*** 
> TextPath **getElements**()
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


