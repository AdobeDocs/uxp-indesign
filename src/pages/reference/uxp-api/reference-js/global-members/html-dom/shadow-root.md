
<a name="shadowroot" id="shadowroot"></a>

# window.ShadowRoot
[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [Web APIs - ShadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)  
**Since**: v7.0.0  


<a name="shadowroot-mode" id="shadowroot-mode"></a>

## mode : `Element`
**Read only**
Returns the mode of the ShadowRoot — either open or closed. This defines whether or not the shadow root's internal features are accessible from JavaScript.

**See**: [ShadowRoot - mode](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode)  


<a name="shadowroot-host" id="shadowroot-host"></a>

## host : `Element`
**Read only**
Returns a reference to the DOM element the ShadowRoot is attached to.

**See**: [ShadowRoot - host](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host)  


<a name="shadowroot-innerhtml" id="shadowroot-innerhtml"></a>

## innerHTML : `string`
Returns a reference to the DOM tree inside the ShadowRoot

**See**: [ShadowRoot - innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML)  


<a name="shadowroot-activeelement" id="shadowroot-activeelement"></a>

## activeElement : `Element`
**Read only**
Returns the element within the shadow tree that has focus

**See**: [ShadowRoot - activeElement](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/activeElement)  


<a name="shadowroot-clonenode" id="shadowroot-clonenode"></a>

## cloneNode(deep)
Duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not

**See**: [ShadowRoot - cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)  

| Param | Type | Description |
| --- | --- | --- |
| deep | `boolean` | Optional param to clone whole sub tree(True) or only node (False) |


  