---
title: Storage
description: storages in UXP
keywords:
  - local storage
  - session storage
  - secure storage
contributors:
  - https://github.com/padmkris123
---

# Storages

Sometimes, you may want to simply store a key-value pair and use it later with a quick lookup mechanism. For such situations, Storages offer you an easy way.

UXP supports three types of storages `Session Storage`, `Local Storage` and `Secure Storage`. The APIs for all three look very similar, but you should choose the right storage based on your use case.

**Session Storage** keeps data only valid up to a session.
- In plugins, a session lasts from 'Load' to 'Unload' of the plugin when managed from UDT. If installed, it lasts from the launch till the quit of the application.
- In scripts, every execution is considered a separate session.

To store the data for an extended period choose from **Local storage** and **Secure storage**. Secure Storage is apt for storing sensitive information such as passwords.

<InlineAlert variant="info" slots="header, text1, text2, text3"/>

Plugins and Scripts

**In plugins**, you can use either of the three storages.

**In scripts**, you can only use session storage since they last only for the length of their execution. It may produce erroneous results if you use persistent, such as local or secure, storage. Read more about [script lifespan](../../../scripts/concepts/script-lifespan/). 

In either case, note that though technically the stored data should last forever, there is a possibility that the data gets erased accidentally by a user's action. Make sure you store data that can be regenerated after the time of loss.


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

Once you have decided on the right storage for you, save and retrieve key-value pair with ease.
```js
await storage.setItem('key', 'value');
await storage.getItem('key');
```

## Reference material
- [Local Storage](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Storage/LocalStorage/)
- [Session Storage](/indesign/uxp/reference/uxp-api/reference-js/Global%20Members/Data%20Storage/SessionStorage/)
- [Secure Storage](/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Key-Value%20Storage/SecureStorage/)