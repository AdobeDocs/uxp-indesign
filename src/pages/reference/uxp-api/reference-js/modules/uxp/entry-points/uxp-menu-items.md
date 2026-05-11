
<a name="uxpmenuitems" id="uxpmenuitems"></a>

# UxpMenuItems


<a name="new-uxpmenuitems-new" id="new-uxpmenuitems-new"></a>

## UxpMenuItems()
Class describing the menu of a panel.



<a name="uxpmenuitems-size" id="uxpmenuitems-size"></a>

## size : `Number`
**Read only**
Get number of menu items



<a name="uxpmenuitems-getitem" id="uxpmenuitems-getitem"></a>

## getItem(id)
Get menu item with specified id

**Returns**: `UxpMenuItem`  

| Param | Type |
| --- | --- |
| id | `string` | 



<a name="uxpmenuitems-getitemat" id="uxpmenuitems-getitemat"></a>

## getItemAt(index)
Get menu item at specified index

**Returns**: `UxpMenuItem`  

| Param | Type |
| --- | --- |
| index | `Number` | 



<a name="uxpmenuitems-insertat" id="uxpmenuitems-insertat"></a>

## insertAt(index, newItem)
Inserts/replaces the menu item at the specified index with the new menu item.index < size of menuItems array : replaces the existing menu itemindex = size of menuItems array : Inserts menu item at endindex > size of menuItems array : throws invalid index exception


| Param | Type | Description |
| --- | --- | --- |
| index | `Number` |  |
| newItem | `Object` | see 'entrypoints.setup' api for menu item description. |



<a name="uxpmenuitems-removeat" id="uxpmenuitems-removeat"></a>

## removeAt(index)
Removes menu item from specified index.


| Param | Type |
| --- | --- |
| index | `Number` | 


  