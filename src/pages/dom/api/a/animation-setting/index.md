# AnimationSetting
Animation settings.

## Instance
> *Read Only* 
> 
> Boolean **hasCustomSettings** 
>
> Determines if this animated object has custom settings.
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
> The parent of the AnimationSetting (a PageItem, HtmlItem, FormField, SignatureField, TextBox, RadioButton, ListBox, ComboBox, CheckBox, MultiStateObject, Button, MediaItem, Sound, Movie, EPSText, SplineItem, Polygon, GraphicLine, Rectangle, Oval, Graphic, SVG, ImportedPage, PICT, WMF, PDF, EPS, Image, Group, TextFrame or EndnoteTextFrame).
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
> Mixed **preset** 
>
> The base animation preset applied. Can return: MotionPreset, String or NothingEnum enumerator.
*** 
> Number **transformOffsets** 
>
> The tranform offset percentage from the target object bounding box's left-top corner.
*** 
> Number **duration** 
>
> The duration in second for this animation.
*** 
> Mixed **motionPathPoints** 
>
> The list of motion path points for this animation. Can return: Ordered array containing pathPointArray:Array of Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals, pathOpen:Boolean.
*** 
> Mixed **motionPath** 
>
> The list of motion path points and key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, pathPoint:Ordered array containing anchor:Array of 2 Reals, leftDirection:Array of 2 Reals, rightDirection:Array of 2 Reals.
*** 
> Mixed **opacityArray** 
>
> The list of opacity key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
*** 
> Mixed **rotationArray** 
>
> The list of rotation key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
*** 
> Mixed **scaleXArray** 
>
> The list of scale x key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
*** 
> Mixed **scaleYArray** 
>
> The list of scale y key frames for this animation. Can return: Ordered array containing keyFrame:Long Integer, value:Real.
*** 
> DesignOptions **designOption** 
>
> The animation design option.
*** 
> AnimationEaseOptions **easeType** 
>
> The ease type.
*** 
> Number **plays** 
>
> The number of times this animation plays.
*** 
> Boolean **playsLoop** 
>
> Set to true if animation play loops.
*** 
> Boolean **initiallyHidden** 
>
> Determines if this object is initially hidden when displayed in an exported SWF file.
*** 
> Boolean **hiddenAfter** 
>
> Determines if this object is hidden after its animation is played in an exported SWF file.
*** 
> Object **properties** 
>
> A property that allows setting of several properties at the same time.

### Methods
> **saveACopy**( File **to** )
> 
> Save a copy of this motion preset to a InDesign motion preset file.
#### Parameters
| Type | Name | Description |
|---|---|---|
| File | to | The Flash motion preset file to export to. |

*** 
> MotionPreset **save**( String **name** )
> 
> Save this motion preset as custom preset.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name for the new motion preset. |

*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the AnimationSetting.
*** 
> AnimationSetting **getElements**()
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


