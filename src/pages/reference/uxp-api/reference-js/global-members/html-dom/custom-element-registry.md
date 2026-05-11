
<a name="customelementregistry" id="customelementregistry"></a>

# window.CustomElementRegistry
**See**: Refer [Web APIs - CustomElementRegistry](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)  


<a name="customelementregistry-define" id="customelementregistry-define"></a>

## define(name, constructor, options)
Defines a new custom element.

**See**

- [CustomElementRegistry - define](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- [HTML Spec - Element definition](https://html.spec.whatwg.org/multipage/custom-elements.html#element-definition)


| Param | Type | Description |
| --- | --- | --- |
| name | `string` | Name for the new custom element |
| constructor | `CustomElement` | Constructor for the new custom element |
| options | `Object` | Object that controls how the element is defined |
| options.extends | `string` | The name of a built-in element to extend |



<a name="customelementregistry-get" id="customelementregistry-get"></a>

## get(name)
Returns the constructor for the named custom element

**See**: [CustomElementRegistry - get](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/get)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | The name of the custom element |



<a name="customelementregistry-upgrade" id="customelementregistry-upgrade"></a>

## upgrade(root)
Upgrade all potential custom elements under tree rooted at 'root'.

[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [CustomElementRegistry - upgrade](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade)  

| Param | Description |
| --- | --- |
| root | Node instance with shadow-containing descendant elements to upgrade |



<a name="customelementregistry-whendefined" id="customelementregistry-whendefined"></a>

## whenDefined(name)
Returns a Promise that resolves when the named custom-element is defined.

[ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]

**See**: [CustomElementRegistry - whenDefined](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/whenDefined)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | The name of the custom element |


  