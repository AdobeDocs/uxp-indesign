
<a name="module-global--websocket" id="module-global--websocket"></a>

# window.WebSocket


<a name="new-module-global--websocket-new" id="new-module-global--websocket-new"></a>

## WebSocket(url, protocols)
WebSocket provides the API for creating and managing a WebSocket connection to a server,
as well as for sending and receiving data on the connection.
In order to leverage `WebSocket`, update the `manifest.json` with the `network.domains` permission shown in the example section
<b>Example:</b>

```json
{
  "permissions": {
      "network": {
          "domains": [
              "https://www.adobe.com",
              "https://*.adobeprerelease.com",
              "wss://*.myplugin.com"
          ]
      }
  }
}
```
<b>Limitation:</b>
From UXP v7.4.0 onwards `permissions.network.domains` does not support WildCards in top-level domains.
Example:
```json
"domains": [ "https://www.adobe.*", "https://www.*" ]
```

**Throws**:

- `Error` If invalid url or protocols is passed


| Param | Type | Description |
| --- | --- | --- |
| url | `string` | URL to which to connect; this should be the URL to which the WebSocket server will respond. |
| protocols | `string` \| `Array<string>` | Either a single protocol string or an array of protocol strings. |

**Example**  
```js
var ws = new WebSocket("wss://demos.kaazing.com/echo","wss");
```


<a name="module-global--websocket-readystate" id="module-global--websocket-readystate"></a>

## readyState : `number`
**Read only**
Current state of the WebSocket connection.
One of the following values:
<table>
  <tr>
    <th>Number</th>
    <th>Status</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>0</td>
    <td>CONNECTING</td>
    <td>Socket has been created. The connection is not yet opened.</td>
  </tr>
  <tr>
    <td>1</td>
    <td>OPEN</td>
    <td>Connection is open and ready to communicate.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CLOSING</td>
    <td>Connection is in the process of closing.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CLOSED</td>
    <td>Connection is closed or couldn't be opened.</td>
  </tr>
</table>



<a name="module-global--websocket-url" id="module-global--websocket-url"></a>

## url : `string`
**Read only**
URL of the WebSocket as resolved by the constructor.



<a name="module-global--websocket-protocol" id="module-global--websocket-protocol"></a>

## protocol : `string`
Name of the sub-protocol the server selected.
This will be one of the strings specified in the protocols parameter when creating the WebSocket object.
It returns an empty string if no connection is established.



<a name="module-global--websocket-bufferedamount" id="module-global--websocket-bufferedamount"></a>

## bufferedAmount : `number`
**Read only**
Number of bytes of data that have been queued using calls to send() but not yet transmitted to the network.
This value resets to zero once all queued data has been sent.
This value does not reset to zero when the connection is closed;
If you keep calling send(), this will continue to climb.



<a name="module-global--websocket-binarytype" id="module-global--websocket-binarytype"></a>

## binaryType : `string`
Type of the binary data being received over WebSocket connection.
Available binary types: "blob", "arraybuffer".



<a name="module-global--websocket-send" id="module-global--websocket-send"></a>

## send(data)
Enqueues the specified data to be transmitted to the other end over the WebSocket connection,
increasing the value of bufferedAmount by the number of bytes needed to contain the data.
If the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically.


| Param | Type | Description |
| --- | --- | --- |
| data | `string` \| `ArrayBuffer` \| `ArrayBufferView` | Data to send to the server. |

**Example**  
```js
ws.send(new Float32Array([ 5, 2, 1, 3, 6, -1 ]))
```
**Example**  
```js
ws.send(new Int32Array([5,-1]).buffer)
```


<a name="module-global--websocket-close" id="module-global--websocket-close"></a>

## close([code], [reason])
Closes the websocket connection.

**Throws**:

- `Error` If invalid code or reason is passed


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [code] | `number` | `1000` | Integer value as per https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close(). |
| [reason] | `string` |  | Human-readable string explaining why the connection is closing. The default value is "". |


  