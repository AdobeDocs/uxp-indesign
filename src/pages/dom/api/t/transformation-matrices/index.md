# TransformationMatrices
A collection of transformation matrices.

## Instance
> *Read Only* 
> 
> Number **length** 
>
> The number of objects in the collection.

### Methods
> TransformationMatrix **add**( Number **horizontalScaleFactor**, Number **verticalScaleFactor**, Number **clockwiseShearAngle**, Number **counterclockwiseRotationAngle**, Number **horizontalTranslation**, Number **verticalTranslation**, Number **matrixValues**, Mixed **matrixMapping**, Object **withProperties** )
> 
> Create a new TransformationMatrix.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | horizontalScaleFactor | The horizontal scale factor of the transformation matrix (Optional) |
| Number | verticalScaleFactor | The vertical scale factor of the transformation matrix (Optional) |
| Number | clockwiseShearAngle | The shear angle of the transformation matrix (Optional) |
| Number | counterclockwiseRotationAngle | The rotation angle of the transformation matrix (Optional) |
| Number | horizontalTranslation | The horizontal translation of the transformation matrix (Optional) |
| Number | verticalTranslation | The vertical translation of the transformation matrix (Optional) |
| Number | matrixValues | The values of the transformation matrix (Optional) |
| Mixed | matrixMapping | The mapping the transformation matrix performs on the unit triangle. Can accept: Array of Array of 2 Arrays of 2 Reals. (Optional) |
| Object | withProperties | Initial values for properties of the new TransformationMatrix (Optional) |

*** 
> Number **count**()
> 
> Displays the number of elements in the TransformationMatrix.
*** 
> TransformationMatrix **item**( Mixed **index** )
> 
> Returns the TransformationMatrix with the specified index or name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | index | The index or name. Can accept: Long Integer or String. |

*** 
> TransformationMatrix **itemByName**( String **name** )
> 
> Returns the TransformationMatrix with the specified name.
#### Parameters
| Type | Name | Description |
|---|---|---|
| String | name | The name. |

*** 
> TransformationMatrix **itemByRange**( Mixed **from**, Mixed **to** )
> 
> Returns the TransformationMatrices within the specified range.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Mixed | from | The TransformationMatrix, index, or name at the beginning of the range. Can accept: TransformationMatrix, Long Integer or String. |
| Mixed | to | The TransformationMatrix, index, or name at the end of the range. Can accept: TransformationMatrix, Long Integer or String. |

*** 
> TransformationMatrix **firstItem**()
> 
> Returns the first TransformationMatrix in the collection.
*** 
> TransformationMatrix **lastItem**()
> 
> Returns the last TransformationMatrix in the collection.
*** 
> TransformationMatrix **middleItem**()
> 
> Returns the middle TransformationMatrix in the collection.
*** 
> TransformationMatrix **previousItem**( TransformationMatrix **obj** )
> 
> Returns the TransformationMatrix with the index previous to the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TransformationMatrix | obj | The index of the TransformationMatrix that follows the desired TransformationMatrix. |

*** 
> TransformationMatrix **nextItem**( TransformationMatrix **obj** )
> 
> Returns the TransformationMatrix whose index follows the specified TransformationMatrix in the collection.
#### Parameters
| Type | Name | Description |
|---|---|---|
| TransformationMatrix | obj | The TransformationMatrix whose index comes before the desired TransformationMatrix. |

*** 
> TransformationMatrix **anyItem**()
> 
> Returns any TransformationMatrix in the collection.
*** 
> TransformationMatrix **everyItem**()
> 
> Returns every TransformationMatrix in the collection.
*** 
> String **toSource**()
> 
> Generates a string which, if executed, will return the TransformationMatrix.
*** 
> TransformationMatrix **[]**( Number **index** )
> 
> Returns the TransformationMatrix with the specified index.
#### Parameters
| Type | Name | Description |
|---|---|---|
| Number | index | The index. |


