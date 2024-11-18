# Firebase bug

Reproduction of a bug in [firebase/firebase-js-sdk#7784](https://github.com/firebase/firebase-js-sdk/issues/7784)

## Install

```bash
git clone https://github.com/jcubic/firebase-sw-bug.git
cd firebase-sw-bug
npm instal
npm run dev
```

## Reproduction

1. Open URL: http://localhost:5173/
2. click the chat button

## Effect

First time there is an error:

```
firebase_messaging.js?v=1da0b173:1020 Uncaught (in promise) AbortError:
Failed to execute 'subscribe' on 'PushManager': Subscription failed - no active Service Worker
    at getPushSubscription (firebase_messaging.js?v=1da0b173:1020:37)
    at async getTokenInternal (firebase_messaging.js?v=1da0b173:955:28)
```

Second and next time error:

```
Uncaught (in promise) AbortError: Registration failed - push service error
```

## License
[Public Domain](https://creativecommons.org/public-domain/cc0/)
