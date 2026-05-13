# TransformationMatrix
A transformation matrix.

## Instance
> *Read Only* 
> 
> String **name** 
>
> The name of the TransformationMatrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **matrixValues** 
>
> The values of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **horizontalScaleFactor** 
>
> The horizontal scale factor of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **verticalScaleFactor** 
>
> The vertical scale factor of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **clockwiseShearAngle** 
>
> The shear angle of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **counterclockwiseRotationAngle** 
>
> The rotation angle of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **horizontalTranslation** 
>
> The horizontal translation of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Number **verticalTranslation** 
>
> The vertical translation of the transformation matrix.
<HorizontalLine />
> *Read Only* 
> 
> Mixed **matrixMapping** 
>
> The mapping the transformation matrix performs on the unit triangle. Can return: Array of Array of 2 Arrays of 2 Reals.
<HorizontalLine />
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
> The parent of the TransformationMatrix (a Application).
<HorizontalLine />
> *Read Only* 
> 
> Number **index** 
>
> The index of the TransformationMatrix within its containing object.
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
> TransformationMatrix **scaleMatrix**( Number **horizontallyBy**, Number **verticallyBy** )
> 
> Scale the transformation matrix.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | horizontallyBy | The horizontal scale factor (Optional) |
| Number | verticallyBy | The vertical scale factor (Optional) |

<HorizontalLine />
> TransformationMatrix **shearMatrix**( Number **byAngle**, Number **bySlope** )
> 
> Shear the transformation matrix.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | byAngle | The horizontal shear angle (Optional) |
| Number | bySlope | The horizontal shear slope (Optional) |

<HorizontalLine />
> TransformationMatrix **rotateMatrix**( Number **byAngle**, Number **byCosine**, Number **bySine** )
> 
> Rotate the transformation matrix.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | byAngle | The counterclockwise rotation angle (Optional) |
| Number | byCosine | The cosine of the desired rotation (Optional) |
| Number | bySine | The sine of the desired rotation (Optional) |

<HorizontalLine />
> TransformationMatrix **translateMatrix**( Number **horizontallyBy**, Number **verticallyBy** )
> 
> Translate the transformation matrix.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | horizontallyBy | The horizontal translation distance (Optional) |
| Number | verticallyBy | The vertical translation distance (Optional) |

<HorizontalLine />
> TransformationMatrix **catenateMatrix**( TransformationMatrix **withMatrix** )
> 
> Multiply the transformation matrix by another.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TransformationMatrix | withMatrix | The right hand matrix factor |

<HorizontalLine />
> TransformationMatrix **invertMatrix**()
> 
> Invert the transformation matrix.
<HorizontalLine />
> Number **changeCoordinates**( Number **point** )
> 
> Multiply the point by the matrix.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | point | The point to transform |

<HorizontalLine />
> String **toSource**()
> 
> Generates a string which, if executed, will return the TransformationMatrix.
<HorizontalLine />
> TransformationMatrix **getElements**()
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


