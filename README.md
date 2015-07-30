# rk

> it just joins keys together by colons. Useful when working with Redis.

Idea from [Dancing around strings in Node.js and Redis](https://medium.com/@stockholmux/dancing-around-strings-in-node-js-and-redis-2a8f91ebe0bf)


# npm

```shell
npm install rk -s
```

# usage

```javascript
var rk = require('rk');
var userId = 10;

redis.get(rk('users', userId), console.log.bind(console));
```
