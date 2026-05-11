
<a name="htmlvideoelement" id="htmlvideoelement"></a>

# window.HTMLVideoElement
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| preload | `string` |  | Determines how much the media data be loaded when the plugin loads.      This can be one of the followings. Default is "metadata".      <ul>          <li>'none': Video should not be loaded</li>          <li>'metadata': Only video metadata is fetched</li>          <li>'auto': The whole video file can be downloaded</li>          <li>''(empty string): Synonym of the 'auto' value</li>      </ul>      example: <br></br>`<video src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata"></video>` |
| autoplay | `boolean` | `false` | Video automatically begins to play back as soon as loading the data.      example: <br></br>`<video src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" autoplay></video>` |



<a name="htmlvideoelement-src" id="htmlvideoelement-src"></a>

## src : `string`
URL of a media resource.



<a name="htmlvideoelement-currenttime" id="htmlvideoelement-currenttime"></a>

## currentTime : `number`
Current playback time in seconds.
The seeked event is fired since v7.3.0

**Emits**: `event:seeked`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.currentTime = 10;
vid.addEventListener("seeked", (ev) => {
    console.log("Event - seeked");
});
</script>
```


<a name="htmlvideoelement-duration" id="htmlvideoelement-duration"></a>

## duration : `number`
Length of the media in seconds.

**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.addEventListener("loadeddata", (ev) => {
    vid.currentTime = vid.duration; //seek to the end of the video
});
</script>
```


<a name="htmlvideoelement-muted" id="htmlvideoelement-muted"></a>

## muted : `boolean`
Whether the media element is muted.



<a name="htmlvideoelement-volume" id="htmlvideoelement-volume"></a>

## volume : `number`
The volume at which the media will be played.
Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.



<a name="htmlvideoelement-volume" id="htmlvideoelement-volume"></a>

## volume
Set the volume.
Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.

**Emits**: `event:volumechange`  

| Param | Type | Description |
| --- | --- | --- |
| newValue | `number` | new volume |



<a name="htmlvideoelement-played" id="htmlvideoelement-played"></a>

## played : `TimeRanges`
Range of the media source.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/TimeRanges  


<a name="htmlvideoelement-paused" id="htmlvideoelement-paused"></a>

## paused : `boolean`
Whether the media element is paused.



<a name="htmlvideoelement-ended" id="htmlvideoelement-ended"></a>

## ended : `boolean`
Whether the media element has ended playback.



<a name="htmlvideoelement-error" id="htmlvideoelement-error"></a>

## error : `MediaError`
MediaError for the most recent error, or null if there has not been an error.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/MediaError  


<a name="htmlvideoelement-loop" id="htmlvideoelement-loop"></a>

## loop : `boolean`
Whether the media element should start over when it reaches the end.



<a name="htmlvideoelement-audiotracks" id="htmlvideoelement-audiotracks"></a>

## audioTracks : `AudioTrackList`
AudioTrackList object listing all of the AudioTrack objects representing the media's audio tracks.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/AudioTrackList  


<a name="htmlvideoelement-videotracks" id="htmlvideoelement-videotracks"></a>

## videoTracks : `VideoTrackList`
VideoTrackList object listing all of the VideoTrack objects representing the media's video tracks.

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/VideoTrackList  


<a name="htmlvideoelement-texttracks" id="htmlvideoelement-texttracks"></a>

## textTracks : `TextTrackList`
TextTrackList object listing all of the TextTrack objects representing the media's text tracks

**See:**: https://developer.mozilla.org/en-US/docs/Web/API/TextTrackList  


<a name="htmlvideoelement-videowidth" id="htmlvideoelement-videowidth"></a>

## videoWidth : `number`
**Read only**
Width of the video in pixel.

**Since**: v7.4.0  


<a name="htmlvideoelement-videoheight" id="htmlvideoelement-videoheight"></a>

## videoHeight : `number`
**Read only**
Height of the video in pixel.

**Since**: v7.4.0  


<a name="htmlvideoelement-playbackrate" id="htmlvideoelement-playbackrate"></a>

## playbackRate : `number`
The rate at which the media is being played back.
1.0 is normal speed, values lower than 1.0 make the media play slower than normal,
higher values make it play faster. Default is 1.0.



<a name="htmlvideoelement-playbackrate" id="htmlvideoelement-playbackrate"></a>

## playbackRate
Set the rate at which the media is being played back.

**Emits**: `event:ratechange`  

| Param | Type | Description |
| --- | --- | --- |
| newValue | `number` | playback rate |



<a name="htmlelement-dataset" id="htmlelement-dataset"></a>

## dataset
Access to all the custom data attributes (data-*) set.

**See**: [HTMLElement - dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  


<a name="htmlelement-innertext" id="htmlelement-innertext"></a>

## innerText : `string`


<a name="htmlelement-lang" id="htmlelement-lang"></a>

## lang : `string`
Base language of an element's attribute values and text content.

**See**: [HTMLElement - lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)  


<a name="htmlelement-dir" id="htmlelement-dir"></a>

## dir : `string`
The text writing directionality of the content of the current element limited to only known values.

**See**: [HTMLElement - dir](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir)  
**Since**: v7.1  


<a name="htmlelement-hidden" id="htmlelement-hidden"></a>

## hidden : `boolean` \| `string`
Indicates the browser should not render the contents of the element. Note: "until-found" is not supported.

**See**: [HTMLElement - hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden), [Spec - `hidden` attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)  


<a name="element-nodename" id="element-nodename"></a>

## nodeName : `string`
**Read only**


<a name="element-localname" id="element-localname"></a>

## localName : `string`
**Read only**
A string representing the local part of the qualified name of the element

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/localName  


<a name="element-tagname" id="element-tagname"></a>

## tagName : `string`
**Read only**
A string indicating the element's tag name

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName  


<a name="element-nodetype" id="element-nodetype"></a>

## nodeType : `number`
**Read only**


<a name="element-namespaceuri" id="element-namespaceuri"></a>

## namespaceURI : `string`
**Read only**
Returns the namespace URI of the element, or null if the element is not in a namespace.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI  


<a name="element-id" id="element-id"></a>

## id : `string`
Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/id  


<a name="element-tabindex" id="element-tabindex"></a>

## tabIndex : `number`


<a name="element-classname" id="element-classname"></a>

## className : `string`


<a name="element-attributes" id="element-attributes"></a>

## attributes : `NamedNodeMap`
**Read only**


<a name="element-style" id="element-style"></a>

## style : `Style`
**Read only**


<a name="element-clientleft" id="element-clientleft"></a>

## clientLeft : `number`
**Read only**


<a name="element-clienttop" id="element-clienttop"></a>

## clientTop : `number`
**Read only**


<a name="element-clientwidth" id="element-clientwidth"></a>

## clientWidth : `number`
**Read only**


<a name="element-clientheight" id="element-clientheight"></a>

## clientHeight : `number`
**Read only**


<a name="element-offsetparent" id="element-offsetparent"></a>

## offsetParent : `Element`
**Read only**


<a name="element-offsetleft" id="element-offsetleft"></a>

## offsetLeft : `number`
**Read only**


<a name="element-offsettop" id="element-offsettop"></a>

## offsetTop : `number`
**Read only**


<a name="element-offsetwidth" id="element-offsetwidth"></a>

## offsetWidth : `number`
**Read only**


<a name="element-offsetheight" id="element-offsetheight"></a>

## offsetHeight : `number`
**Read only**


<a name="element-scrollleft" id="element-scrollleft"></a>

## scrollLeft : `number`


<a name="element-scrolltop" id="element-scrolltop"></a>

## scrollTop : `number`


<a name="element-scrollwidth" id="element-scrollwidth"></a>

## scrollWidth : `number`
**Read only**


<a name="element-scrollheight" id="element-scrollheight"></a>

## scrollHeight : `number`
**Read only**


<a name="element-autofocus" id="element-autofocus"></a>

## autofocus : `boolean`
Indicates if the element will focus automatically when it is loaded



<a name="element-uxpcontainer" id="element-uxpcontainer"></a>

## uxpContainer : `number`
**Read only**


<a name="element-shadowroot" id="element-shadowroot"></a>

## shadowRoot : `ShadowRoot`
**Read only**
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.

**See**: [Element - shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)  


<a name="element-disabled" id="element-disabled"></a>

## disabled : `boolean`


<a name="element-innerhtml" id="element-innerhtml"></a>

## innerHTML
**Read only**


<a name="element-outerhtml" id="element-outerhtml"></a>

## outerHTML : `string`


<a name="element-slot" id="element-slot"></a>

## slot : `string`
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [Element - slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)  


<a name="element-assignedslot" id="element-assignedslot"></a>

## assignedSlot : `HTMLSlotElement`
**Read only**
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [Element - assignedSlot](https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot)  


<a name="node-contenteditable" id="node-contenteditable"></a>

## contentEditable
**Read only**


<a name="node-isconnected" id="node-isconnected"></a>

## isConnected : `boolean`
**Read only**


<a name="node-parentnode" id="node-parentnode"></a>

## parentNode : `Node`
**Read only**


<a name="node-parentelement" id="node-parentelement"></a>

## parentElement : `Element`
**Read only**


<a name="node-firstchild" id="node-firstchild"></a>

## firstChild : `Node`
**Read only**


<a name="node-lastchild" id="node-lastchild"></a>

## lastChild : `Node`
**Read only**


<a name="node-previoussibling" id="node-previoussibling"></a>

## previousSibling : `Node`
**Read only**


<a name="node-nextsibling" id="node-nextsibling"></a>

## nextSibling : `Node`
**Read only**


<a name="node-firstelementchild" id="node-firstelementchild"></a>

## firstElementChild : `Node`
**Read only**


<a name="node-lastelementchild" id="node-lastelementchild"></a>

## lastElementChild : `Node`
**Read only**


<a name="node-previouselementsibling" id="node-previouselementsibling"></a>

## previousElementSibling : `Node`
**Read only**


<a name="node-nextelementsibling" id="node-nextelementsibling"></a>

## nextElementSibling : `Node`
**Read only**


<a name="node-textcontent" id="node-textcontent"></a>

## textContent : `string`


<a name="node-childnodes" id="node-childnodes"></a>

## childNodes : `NodeList`
**Read only**


<a name="node-children" id="node-children"></a>

## children : `HTMLCollection`
**Read only**


<a name="node-ownerdocument" id="node-ownerdocument"></a>

## ownerDocument
**Read only**


<a name="htmlvideoelement-canplaytype" id="htmlvideoelement-canplaytype"></a>

## canPlayType(mimeType)
How likely it is that UXP's media player will be able to play media of a given MIME type.

**Returns**: `string` - How likely it is that the media can be played. One of the followings.
     <ul>
         <li>''(empty string): Media cannot be played on the current device.</li>
         <li>'probably': Media is probably playable on the current device.</li>
         <li>'maybe': There is not enough information to determine whether the media can play.</li>
     </ul>  

| Param | Type | Description |
| --- | --- | --- |
| mimeType | `string` | MIME type of the media. |



<a name="htmlvideoelement-load" id="htmlvideoelement-load"></a>

## load()
Resets the media to its initial state and begins the process of selecting a media source
and loading the media in preparation for playback.
The amount of media data that is prefetched is determined by the value of 'preload' attribute.

**Emits**: `event:loadedmetadata`, `event:loadeddata`, `event:uxpvideoload - Deprecated: Use loadeddata instead`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="none">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.load();
vid.addEventListener("loadedmetadata", (ev) => {
    console.log("Event - loadedmetadata");
});
vid.addEventListener("loadeddata", (ev) => {
    console.log("Event - loadeddata");
});
</script>
```


<a name="htmlvideoelement-play" id="htmlvideoelement-play"></a>

## play()
Attempts to begin playback of the media.
<br></br>Note that it returns a resolved Promise regardless of the actual result.
It notifies an error over the error event.

**Returns**: `Promise<void>` Resolved when playback has been started, or rejected if playback cannot be started.  
**Emits**: `event:play`, `event:uxpvideoplay - Deprecated: Use play instead`, `event:ended`, `event:uxpvideocomplete - Deprecated: Use ended instead`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.addEventListener("play", (ev) => {
    console.log("Event - play");
});
</script>
```


<a name="htmlvideoelement-pause" id="htmlvideoelement-pause"></a>

## pause()
Pause the playback of the media. If the media is already in a paused state, no effect.

**Emits**: `event:pause`, `event:uxpvideopause - Deprecated: Use pause instead`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.pause();
vid.addEventListener("pause", (ev) => {
    console.log("Event - pause");
});
</script>
```


<a name="htmlvideoelement-fastseek" id="htmlvideoelement-fastseek"></a>

## fastSeek()
Seeks the media to the new time quickly with precision tradeoff.

**Emits**: `event:seeked`  
**See**: [fastSeek](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/fastSeek)  
**Since**: v7.4.0  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.fastSeek(10);
vid.addEventListener("seeked", (ev) => {
    console.log("Event - seeked");
});
</script>
```


<a name="htmlvideoelement-stop" id="htmlvideoelement-stop"></a>

## stop()
Pause the playback of the media and set the current playback time to the beginning.

**Emits**: `event:uxpvideostop`, `event:seeked`  
**Example**  
```js
<video id="sampleVideo"  src="https://images-tv.adobe.com/mpcv3/b6a5d5f7-5a6c-4bd6-9ee9-ddb6c9c779b3_1564010305.854x480at800_h264.mp4" preload="metadata">
</video>
<script>
let vid = document.getElementById("sampleVideo");
vid.play();
vid.stop();
vid.addEventListener("uxpvideostop", (ev) => {
    console.log("Event - uxpvideostop");
});
vid.addEventListener("seeked", (ev) => {
    console.log("Event - seeked");
});
</script>
```


<a name="element-append" id="element-append"></a>

## append(...nodes)
Inserts a set of Node objects or string objects after the last child of the Element.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/append  
**Since**: v8.0  

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="element-prepend" id="element-prepend"></a>

## prepend(...nodes)
Inserts a set of Node objects or string objects before the first child of the Element.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend  
**Since**: v8.0  

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="element-replacechildren" id="element-replacechildren"></a>

## replaceChildren(...nodes)
Replaces the existing children of a Node with a specified new set of children. These can be string or Node objects.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren  
**Since**: v8.0  

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="element-scrollto" id="element-scrollto"></a>

## scrollTo(xOrOptions, y)
Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo  

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | either the new scrollLeft position or an options object. |
| y | `*` | the optional new scrollTop position. |



<a name="element-scrollintoview" id="element-scrollintoview"></a>

## scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` | 



<a name="element-scrollintoviewifneeded" id="element-scrollintoviewifneeded"></a>

## scrollIntoViewIfNeeded()


<a name="element-attachshadow" id="element-attachshadow"></a>

## attachShadow(init)
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.

**Returns**: `ShadowRoot`  
**See**: [Element - attachShadow](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)  

| Param | Description |
| --- | --- |
| init | An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment |



<a name="element-focus" id="element-focus"></a>

## focus()


<a name="element-blur" id="element-blur"></a>

## blur()


<a name="element-getattribute" id="element-getattribute"></a>

## getAttribute(name)
**Returns**: `string`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the attribute whose value you want to get. |



<a name="element-setattribute" id="element-setattribute"></a>

## setAttribute(name, value)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name of the attribute whose value is to be set |
| value | `string` | Value to assign to the attribute |



<a name="element-removeattribute" id="element-removeattribute"></a>

## removeAttribute(name)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-hasattribute" id="element-hasattribute"></a>

## hasAttribute(name)
**Returns**: `boolean`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-hasattributes" id="element-hasattributes"></a>

## hasAttributes()
Returns a boolean value indicating whether the current element has any attributes or not.

**Returns**: `boolean`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes  


<a name="element-getattributenames" id="element-getattributenames"></a>

## getAttributeNames()
Returns the attribute names of the element as an Array of strings

**Returns**: `Array`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames  


<a name="element-getattributenode" id="element-getattributenode"></a>

## getAttributeNode(name)
**Returns**: `*`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-setattributenode" id="element-setattributenode"></a>

## setAttributeNode(newAttr)
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode  

| Param | Type |
| --- | --- |
| newAttr | `*` | 



<a name="element-removeattributenode" id="element-removeattributenode"></a>

## removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `*` | 



<a name="element-click" id="element-click"></a>

## click()


<a name="element-getelementsbyclassname" id="element-getelementsbyclassname"></a>

## getElementsByClassName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-getelementsbytagname" id="element-getelementsbytagname"></a>

## getElementsByTagName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 



<a name="element-queryselector" id="element-queryselector"></a>

## querySelector(selector)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| selector | `string` | 



<a name="element-queryselectorall" id="element-queryselectorall"></a>

## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 



<a name="element-setpointercapture" id="element-setpointercapture"></a>

## setPointerCapture(pointerId)
Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.

**Throws**:

- `DOMException` If the element is not connected to the DOM.

**See**: [Element - setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)  
**Since**: v7.1  

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | The unique identifier of the pointer to be captured. |

**Example**  
```js
// HTML
<style>
    div {
        width: 140px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fbe;
        position: absolute;
    }
</style>
<div id="slider">SLIDE ME</div>

// JS
function beginSliding(e) {
     slider.setPointerCapture(e.pointerId);
     slider.addEventListener("pointermove", slide);
 }

 function stopSliding(e) {
     slider.releasePointerCapture(e.pointerId);
     slider.removeEventListener("pointermove", slide);
 }

 function slide(e) {
     slider.style.left = e.clientX;
 }

 const slider = document.getElementById("slider");

 slider.addEventListener("pointerdown", beginSliding);
 slider.addEventListener("pointerup", stopSliding);
```


<a name="element-releasepointercapture" id="element-releasepointercapture"></a>

## releasePointerCapture(pointerId)
Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.

**See**: [Element - releasePointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/releasePointerCapture)  
**Since**: v7.1  

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | The unique identifier of the pointer to be released. |



<a name="element-haspointercapture" id="element-haspointercapture"></a>

## hasPointerCapture(pointerId)
Checks if the element has pointer capture for the specified pointer.

**Returns**: `boolean` - True if the element has pointer capture for the specified pointer, false otherwise.  
**See**: [Element - hasPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture)  
**Since**: v7.1  

| Param | Type | Description |
| --- | --- | --- |
| pointerId | `number` | The unique identifier of the pointer to check. |



<a name="element-getboundingclientrect" id="element-getboundingclientrect"></a>

## getBoundingClientRect()
**Returns**: `*`  


<a name="element-closest" id="element-closest"></a>

## closest(selectorString)
**Returns**: `Element`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest  

| Param | Type |
| --- | --- |
| selectorString | `string` | 



<a name="element-matches" id="element-matches"></a>

## matches(selectorString)
**Returns**: `boolean`  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches  

| Param | Type |
| --- | --- |
| selectorString | `string` | 



<a name="element-insertadjacenthtml" id="element-insertadjacenthtml"></a>

## insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 



<a name="element-insertadjacentelement" id="element-insertadjacentelement"></a>

## insertAdjacentElement(position, node)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 



<a name="element-insertadjacenttext" id="element-insertadjacenttext"></a>

## insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 



<a name="node-haschildnodes" id="node-haschildnodes"></a>

## hasChildNodes()
**Returns**: `boolean`  


<a name="node-clonenode" id="node-clonenode"></a>

## cloneNode(deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 



<a name="node-appendchild" id="node-appendchild"></a>

## appendChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



<a name="node-insertbefore" id="node-insertbefore"></a>

## insertBefore(child, before)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 
| before | `Node` | 



<a name="node-replacechild" id="node-replacechild"></a>

## replaceChild(newChild, oldChild)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| newChild | `Node` | 
| oldChild | `Node` | 



<a name="node-removechild" id="node-removechild"></a>

## removeChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 



<a name="node-remove" id="node-remove"></a>

## remove()


<a name="node-before" id="node-before"></a>

## before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="node-after" id="node-after"></a>

## after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="node-replacewith" id="node-replacewith"></a>

## replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 



<a name="node-contains" id="node-contains"></a>

## contains(node)

| Param | Type |
| --- | --- |
| node | `Node` | 



<a name="node-getrootnode" id="node-getrootnode"></a>

## getRootNode(options)
**Returns**: `Node` - root node  

| Param | Type |
| --- | --- |
| options | `Object` | 



<a name="eventtarget-addeventlistener" id="eventtarget-addeventlistener"></a>

## addEventListener(eventName, callback, options)
**See**: [EventTarget - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Boolean value denoting capture value or options object. Currently supports only capture in options object ({ capture: bool_value }). |



<a name="eventtarget-removeeventlistener" id="eventtarget-removeeventlistener"></a>

## removeEventListener(eventName, callback, options)
**See**: [EventTarget - removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)  

| Param | Type | Description |
| --- | --- | --- |
| eventName | `*` |  |
| callback | `*` |  |
| options | `boolean` \| `Object` | Boolean value denoting capture value or options object. Currently supports only capture in options object ({ capture: bool_value }). |



<a name="eventtarget-dispatchevent" id="eventtarget-dispatchevent"></a>

## dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` | 


  