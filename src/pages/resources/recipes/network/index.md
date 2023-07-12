

# Network I/O

You may be looking for ways to make network calls for various reasons such as fetching an image, accessing a web API, browsing remote resources, synchronizing content, etc. UXP supports a range of network APIs that can fit your use case. 

<InlineAlert variant="info" slots="header, text1, text2"/>

Scripts and plugins

**In plugins**, you should seek permission for `network` access in the manifest and specify the `domains` of the endpoints. <br></br> 
IMPORTANT: Be sure you know about the [manifest permissions](../../../plugins/concepts/manifest/#permissionsdefinition) module before you proceed.

**In scripts**, assume this value to be ''//TODO get value for scripts and ignore the manifest details below.



The fastest way to try out a network call is by rendering an image from the web

<CodeBlock slots="heading, code" repeat="2" languages="HTML, JSON" />

#### HTML
```html
<img src='https://source.unsplash.com/random'>
```

#### manifest
```json
{
    "requiredPermissions": {
        "network": {
            "domains": [
                "https://source.unsplash.com"
            ]
        }
    }
}
```

As mentioned earlier, UXP has `fetch`, `XHR (XML HTTP Request)`, and `WebSocket` available in the global scope. If you aren't aware of the difference and want to understand which one is the right option for you, we recommend you learn about them first - [fetch](https://javascript.info/fetch) | [WebSocket](https://javascript.info/websocket) | [XHR](https://javascript.info/xmlhttprequest)


## Examples
Now, let's look at some examples.

### fetch

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
async function foo() {
    // Get weather forecast for San Jose
    try {
        const response = await fetch(`https://api.weather.gov/gridpoints/MTR/99,82/forecast`);
        if (!response.ok) {
            throw new Error(`HTTP error fetching weather station; status: ${response.status}`);
        }
        const responseJson = await response.json();
        console.log(`Forecast ${responseJson.properties.periods[0].detailedForecast}`);

    } catch (e) {
        console.error(e);
    }
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "network": {
            "domains": [
                "https://api.weather.gov"
            ]
        }
    }
}
```


### XHR 

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
function foo() {
    // Get weather forecast for San Jose via XHR
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.weather.gov/gridpoints/MTR/99,82/forecast');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        const responseObj = xhr.response;
        console.log(`Forecast ${responseObj.properties.periods[0].detailedForecast}`);
    };
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "network": {
            "domains": [
                "https://api.weather.gov"
            ]
        }
    }
}
```

### WebSockets

<CodeBlock slots="heading, code" repeat="2" languages="JavaScript, JSON" />

#### JavaScript
```js
let socket;
async function foo() {
    // Establish web socket connection
    if (socket) {
        console.log("Already connected; disconnecting first.");
        socket.close();
        return;
      }

    socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

    socket.onopen = function(e) {
      console.log("Connection established");
      // sending data to server
      socket.send("My name is John");
    };
    
    socket.onmessage = function(event) {
      alert(`Data received from server: ${event.data}`);
    };
    
    socket.onclose = function(event) {
      console.log("Connection closed");
    };
    
    socket.onerror = function(error) {
      console.error(`Connection error ${error}`);
    };
}
```

#### manifest
```json
{
    "requiredPermissions": {
        "network": {
            "domains": [
                "wss://javascript.info"
            ]
        }
    }
}
```

## Additional notes
- These APIs are available in the global scope. Note, that you didn't have to mount them using `require`.
- The `domains` in the plugin's manifest also let you configure variations of the endpoints. For example, your plugin may access 'api.dev.example.com', 'api.stage.example.com' or 'api.prod.example.com' depending upon the environment. You can configure the domains with `["https://api.*.example.com"]` to manage all three.



## Reference material
- [fetch API](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/fetch/)
- [XHR API](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/XMLHttpRequest/)
- [WebSocket API](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Transfers/WebSocket/)
