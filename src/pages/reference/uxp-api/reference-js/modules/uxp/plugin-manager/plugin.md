
<a name="plugin" id="plugin"></a>

# Plugin
Plugin object received in the PluginManager.getPlugins list,used for IPC(Inter Plugin Communication)



<a name="plugin-id" id="plugin-id"></a>

## id : `string`
**Read only**
Get plugin id



<a name="plugin-version" id="plugin-version"></a>

## version : `string`
**Read only**
Get plugin version



<a name="plugin-name" id="plugin-name"></a>

## name : `string`
Get plugin name



<a name="plugin-manifest" id="plugin-manifest"></a>

## manifest : `Object`
**Read only**
Get plugin manifest



<a name="plugin-enabled" id="plugin-enabled"></a>

## enabled : `boolean`
**Read only**
Get plugin enabled/disabled state



<a name="plugin-showpanel" id="plugin-showpanel"></a>

## showPanel(panelId)
Show panel with the given ID. This api may be routed to the host app which can chose to disallow it.Used for commmunicating with other plugins (IPC : Inter Plugin Communication)Note: Currently there is no API to hide a panel, panels can be shown but can not be hidden.

**Returns**: `Promise<void>|string` Resolves with a void if success else returns a rejection message  

| Param | Type | Description |
| --- | --- | --- |
| panelId | `string` | id of the panel to be shown |



<a name="plugin-invokecommand" id="plugin-invokecommand"></a>

## invokeCommand(commandId, ...params)
Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.Used for commmunicating with other plugins (IPC : Inter Plugin Communication)

**Returns**: `Promise<void>`  

| Param | Type | Description |
| --- | --- | --- |
| commandId | `string` | id of the command to be invoked |
| ...params | `*` | arguments to be passed to the command entrypoint as defined in the plugin |


  