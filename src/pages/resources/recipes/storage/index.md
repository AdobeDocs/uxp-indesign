# Storages

Sometimes, you may want to simply store a key-value pair and use it later with a quick lookup mechanism. For such situations, Storages offer you an easy way.

UXP supports three types of storages `Session Storage`, `Local Storage` and `Secure Storage`. The APIs for all three look very similar, but you should choose the right storage based on your use case.

**Session Storage** keeps data only valid up to a session. 
//TODO: Q: How do we define a 'session' for plugins and scripts?

To store the data for an extended period you can choose from **Local storage** and **Secure storage**. Secure Storage is apt for storing sensitive information such as passwords.

<InlineAlert variant="info" slots="text"/>

Note that though technically the stored data should last forever, there is a possibility that the data gets erased accidentally by a user's action. Make sure you store data that can be regenerated after the time of loss.

```js
// Session storage
const storage = window.sessionStorage;
```

```js
// Local storage
const storage = window.localStorage;
```

```js
// Secure storage
const storage = require('uxp').storage.secureStorage;
```

Once you have decided the right storage for you, save and retrieve key-value pair with ease.
```js
await storage.setItem('key', 'value');
await storage.getItem('key');
```

// TODO Q: Any size constraints?

## Reference material
- [Local Storage](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Storage/LocalStorage/)
- [Session Storage](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Storage/SessionStorage/)
- [Secure Storage](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Key-Value%20Storage/SecureStorage/)