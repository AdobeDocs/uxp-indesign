
<a name="uxpmenuitem" id="uxpmenuitem"></a>

# UxpMenuItem


<a name="new-uxpmenuitem-new" id="new-uxpmenuitem-new"></a>

## UxpMenuItem()
Class describing a single menu item of a panel



<a name="uxpmenuitem-id" id="uxpmenuitem-id"></a>

## id : `string`
**Read only**
Get menu item id



<a name="uxpmenuitem-label" id="uxpmenuitem-label"></a>

## label ⇒ `string`
Get menu item label, localized string

**Returns**: `string`  


<a name="uxpmenuitem-enabled" id="uxpmenuitem-enabled"></a>

## enabled ⇒ `boolean`
Get menu item enable state

**Returns**: `boolean`  


<a name="uxpmenuitem-checked" id="uxpmenuitem-checked"></a>

## checked ⇒ `boolean`
Get menu item checked state

**Returns**: `boolean`  


<a name="uxpmenuitem-submenu" id="uxpmenuitem-submenu"></a>

## submenu ⇒ `UxpMenuItems`
Get menu submenu

**Returns**: `UxpMenuItems`  


<a name="uxpmenuitem-parent" id="uxpmenuitem-parent"></a>

## parent ⇒ `UxpMenuItems`
Get menu parent.

**Returns**: `UxpMenuItems`  


<a name="uxpmenuitem-label" id="uxpmenuitem-label"></a>

## label
Set label of the menu item. The label will be updated immediately, asynchronously.


| Param | Type | Description |
| --- | --- | --- |
| label | `string` | should be a localized string |



<a name="uxpmenuitem-enabled" id="uxpmenuitem-enabled"></a>

## enabled
Set enabled state of the menu item. The state will be updated immediately, asynchronously.


| Param | Type |
| --- | --- |
| enabled | `boolean` | 



<a name="uxpmenuitem-checked" id="uxpmenuitem-checked"></a>

## checked
Set checked state of the menu item. The state will be updated immediately, asynchronously.


| Param | Type |
| --- | --- |
| checked | `boolean` | 



<a name="uxpmenuitem-remove" id="uxpmenuitem-remove"></a>

## remove()
Remove the menu item


  