
<a name="canvasrenderingcontext2d" id="canvasrenderingcontext2d"></a>

# window.CanvasRenderingContext2D
**See**: [Web APIs - CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) for more details<br></br>
Also, refer to the interface [HTMLCanvasElement](../HTML%20Elements/HTMLCanvasElement.md#module:global.htmlcanvaselement)<br></br>  
**Since**: v7.0.0  


<a name="new-canvasrenderingcontext2d-new" id="new-canvasrenderingcontext2d-new"></a>

## CanvasRenderingContext2D()
Creates an instance of CanvasRenderingContext2D.



<a name="canvasrenderingcontext2d-linewidth" id="canvasrenderingcontext2d-linewidth"></a>

## lineWidth : `number`
Get the thickness of lines.

**See**: [CanvasRenderingContext2D - lineWidth](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth) for more details  


<a name="canvasrenderingcontext2d-linejoin" id="canvasrenderingcontext2d-linejoin"></a>

## lineJoin : `string`
Get the shape used to join two line segments where they meet.

**See**: [CanvasRenderingContext2D - lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) for more details  


<a name="canvasrenderingcontext2d-linecap" id="canvasrenderingcontext2d-linecap"></a>

## lineCap : `string`
Get the shape used to draw the end points of lines.

**See**: [CanvasRenderingContext2D - lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) for more details  


<a name="canvasrenderingcontext2d-globalalpha" id="canvasrenderingcontext2d-globalalpha"></a>

## globalAlpha : `number`
Get the global alpha(transparency) value.

**See**: [CanvasRenderingContext2D - globalAlpha](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha) for more details  


<a name="canvasrenderingcontext2d-fillstyle" id="canvasrenderingcontext2d-fillstyle"></a>

## fillStyle : `string` \| `CanvasGradient`
Get the fill style used inside shapes.

**See**: [CanvasRenderingContext2D - fillStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) for more details  


<a name="canvasrenderingcontext2d-strokestyle" id="canvasrenderingcontext2d-strokestyle"></a>

## strokeStyle : `string`
Get the color to use for the strokes (outlines) around shapes.

**See**: [CanvasRenderingContext2D - strokeStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) for more details  


<a name="canvasrenderingcontext2d-createlineargradient" id="canvasrenderingcontext2d-createlineargradient"></a>

## createLinearGradient(x0, y0, x1, y1)
Creates a gradient along the line connecting two given coordinates.

**Returns**: `CanvasGradient` - A linear CanvasGradient object initialized with the specified line.  
**Throws**:

- `DOMException` 

**See**: [CanvasRenderingContext2D - createLinearGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x0 | `number` | The x-axis coordinate of the start point. |
| y0 | `number` | The y-axis coordinate of the start point. |
| x1 | `number` | The x-axis coordinate of the end point. |
| y1 | `number` | The y-axis coordinate of the end point. |



<a name="canvasrenderingcontext2d-createradialgradient" id="canvasrenderingcontext2d-createradialgradient"></a>

## createRadialGradient(x0, y0, r0, x1, y1, r1)
Creates a radial gradient using the size and coordinates of two circles.

**Returns**: `CanvasGradient` - A radial CanvasGradient object initialized with the two specified circles.  
**Throws**:

- `DOMException` 

**See**: [CanvasRenderingContext2D - createRadialGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x0 | `number` | The x-axis coordinate of the start circle. |
| y0 | `number` | The y-axis coordinate of the start circle. |
| r0 | `number` | The radius of the start circle. Must be non-negative and finite. |
| x1 | `number` | The x-axis coordinate of the end circle. |
| y1 | `number` | The y-axis coordinate of the end circle. |
| r1 | `number` | The radius of the end circle. Must be non-negative and finite. |



<a name="canvasrenderingcontext2d-beginpath" id="canvasrenderingcontext2d-beginpath"></a>

## beginPath()
Creates a new path.

**See**: [CanvasRenderingContext2D - beginPath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) for more details  


<a name="canvasrenderingcontext2d-closepath" id="canvasrenderingcontext2d-closepath"></a>

## closePath()
Add a straight line from the current point to the start of the current sub-path.

**See**: [CanvasRenderingContext2D - closePath](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath) for more details  


<a name="canvasrenderingcontext2d-moveto" id="canvasrenderingcontext2d-moveto"></a>

## moveTo(x, y)
Begins a new sub-path at the point specified by the given (x, y) coordinates.

**See**: [CanvasRenderingContext2D - moveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis (horizontal) coordinate of the point. |
| y | `number` | The y-axis (vertical) coordinate of the point. |



<a name="canvasrenderingcontext2d-lineto" id="canvasrenderingcontext2d-lineto"></a>

## lineTo(x, y)
Adds a straight line to the current sub-path by connecting the sub-path's
last point to the specified (x, y) coordinates.

**See**: [CanvasRenderingContext2D - lineTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the line's end point. |
| y | `number` | The y-axis coordinate of the line's end point. |



<a name="canvasrenderingcontext2d-arc" id="canvasrenderingcontext2d-arc"></a>

## arc(x, y, radius, startAngle, endAngle, counterclockwise)
Adds a circular arc to the current sub-path.

**See**: [CanvasRenderingContext2D - arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) for more details  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | `number` |  | The horizontal coordinate of the arc's center. |
| y | `number` |  | The vertical coordinate of the arc's center. |
| radius | `number` |  | The arc's radius. Must be positive. |
| startAngle | `number` |  | The angle at which the arc starts in radians, measured from the positive x-axis. |
| endAngle | `number` |  | The angle at which the arc ends in radians, measured from the positive x-axis. |
| counterclockwise | `boolean` | `false` | An optional boolean value. If true, draws the arc counter-clockwise between the start and end angles. The default is false (clockwise). |



<a name="canvasrenderingcontext2d-arcto" id="canvasrenderingcontext2d-arcto"></a>

## arcTo(x1, y1, x2, y2, radius)
Adds a circular arc to the current sub-path, using the given control points and radius.

**See**: [CanvasRenderingContext2D - arcTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x1 | `number` | The x-axis coordinate of the first control point. |
| y1 | `number` | The y-axis coordinate of the first control point. |
| x2 | `number` | The x-axis coordinate of the second control point. |
| y2 | `number` | The y-axis coordinate of the second control point. |
| radius | `number` | The arc's radius. Must be non-negative. |



<a name="canvasrenderingcontext2d-beziercurveto" id="canvasrenderingcontext2d-beziercurveto"></a>

## bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
Adds a cubic Bézier curve to the current sub-path.

**See**: [CanvasRenderingContext2D - bezierCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| cp1x | `number` | The x-axis coordinate of the first control point. |
| cp1y | `number` | The y-axis coordinate of the first control point. |
| cp2x | `number` | The x-axis coordinate of the second control point. |
| cp2y | `number` | The y-axis coordinate of the second control point. |
| x | `number` | The x-axis coordinate of the end point. |
| y | `number` | The y-axis coordinate of the end point. |



<a name="canvasrenderingcontext2d-quadraticcurveto" id="canvasrenderingcontext2d-quadraticcurveto"></a>

## quadraticCurveTo(cpx, cpy, x, y)
Adds a quadratic Bézier curve to the current sub-path.

**See**: [CanvasRenderingContext2D - quadraticCurveTo](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo) for more details  

| Param | Type | Description |
| --- | --- | --- |
| cpx | `number` | The x-axis coordinate of the control point. |
| cpy | `number` | The y-axis coordinate of the control point. |
| x | `number` | The x-axis coordinate of the end point. |
| y | `number` | The y-axis coordinate of the end point. |



<a name="canvasrenderingcontext2d-rect" id="canvasrenderingcontext2d-rect"></a>

## rect(x, y, width, height)
Adds a rectangle to the current path.

**See**: [CanvasRenderingContext2D - rect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |



<a name="canvasrenderingcontext2d-stroke" id="canvasrenderingcontext2d-stroke"></a>

## stroke(path)
Strokes (outlines) the current or given path with the current stroke style.

**See**: [CanvasRenderingContext2D - stroke](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) for more details  

| Param | Type | Description |
| --- | --- | --- |
| path | `Path2D` | An optional Path2D object to stroke. |



<a name="canvasrenderingcontext2d-fill" id="canvasrenderingcontext2d-fill"></a>

## fill(pathOrFillRule)
Fills the current or given path with the current fillStyle.<br></br>

**See**: [CanvasRenderingContext2D - fill](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) for more details  

| Param | Type | Description |
| --- | --- | --- |
| pathOrFillRule | `Path2D` \| `string` | An optional Path2D object to fill or String which defines an algorithm to determine if a point is inside or outside the filling region. |



<a name="canvasrenderingcontext2d-fillrect" id="canvasrenderingcontext2d-fillrect"></a>

## fillRect(x, y, width, height)
Draws a rectangle that is filled according to the current fillStyle.

**See**: [CanvasRenderingContext2D - fillRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |



<a name="canvasrenderingcontext2d-strokerect" id="canvasrenderingcontext2d-strokerect"></a>

## strokeRect(x, y, width, height)
Draws a rectangle that is stroked (outlined) according to the current strokeStyle

**See**: [CanvasRenderingContext2D - strokeRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |



<a name="canvasrenderingcontext2d-clearrect" id="canvasrenderingcontext2d-clearrect"></a>

## clearRect(x, y, width, height)
Erases the pixels in a rectangular area by setting them to transparent black.

**See**: [CanvasRenderingContext2D - clearRect](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect) for more details  

| Param | Type | Description |
| --- | --- | --- |
| x | `number` | The x-axis coordinate of the rectangle's starting point. |
| y | `number` | The y-axis coordinate of the rectangle's starting point. |
| width | `number` | The rectangle's width. |
| height | `number` | The rectangle's height. |


  