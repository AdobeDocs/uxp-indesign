
<a name="uxppanelinfo" id="uxppanelinfo"></a>

# UxpPanelInfo


<a name="new-uxppanelinfo-new" id="new-uxppanelinfo-new"></a>

## UxpPanelInfo()
Class describing a panel of the plugin.



<a name="uxppanelinfo-id" id="uxppanelinfo-id"></a>

## id : `string`
**Read only**
Get panel id



<a name="uxppanelinfo-label" id="uxppanelinfo-label"></a>

## label : `string`
**Read only**
Get panel label, localized string



<a name="uxppanelinfo-description" id="uxppanelinfo-description"></a>

## description : `string`
**Read only**
Get panel description, localized string



<a name="uxppanelinfo-shortcut" id="uxppanelinfo-shortcut"></a>

## shortcut ⇒ `Object`
**Read only**
Get panel shortcut

**Returns**: `Object` - which consists of following keys:                 {string} shortcutKey                 {boolean} commandKey                 {boolean} altKey                 {boolean} shiftKey                 {boolean} ctrlKey  


<a name="uxppanelinfo-title" id="uxppanelinfo-title"></a>

## title : `string`
**Read only**
Get panel title, localized string



<a name="uxppanelinfo-icons" id="uxppanelinfo-icons"></a>

## icons ⇒ `Array`
**Read only**
Get panel icons

**Returns**: `Array` - each object contains following properties:                           {string} path                           {Array of Number} scale                           {Array of string} theme                           {Array of string} species  


<a name="uxppanelinfo-minimumsize" id="uxppanelinfo-minimumsize"></a>

## minimumSize ⇒ `Object`
**Read only**
Get panel minimum size

**Returns**: `Object` - each object contains following properties:                           {Number} width                           {Number} height  


<a name="uxppanelinfo-maximumsize" id="uxppanelinfo-maximumsize"></a>

## maximumSize ⇒ `Object`
**Read only**
Get panel maximum size

**Returns**: `Object` - each object contains following properties:                           {Number} width                           {Number} height  


<a name="uxppanelinfo-preferreddockedsize" id="uxppanelinfo-preferreddockedsize"></a>

## preferredDockedSize ⇒ `Object`
**Read only**
Get panel preferred docked size

**Returns**: `Object` - each object contains following properties:                           {Number} width                           {Number} height  


<a name="uxppanelinfo-preferredfloatingsize" id="uxppanelinfo-preferredfloatingsize"></a>

## preferredFloatingSize ⇒ `Object`
**Read only**
Get panel preferred floating size

**Returns**: `Object` - each object contains following properties:                           {Number} width                           {Number} height  


<a name="uxppanelinfo-menuitems" id="uxppanelinfo-menuitems"></a>

## menuItems : `UxpMenuItems`
**Read only**
Get panel menu items


  