import { getToken } from './firebase';

async function register() {
  try {
    if (Notification.permission === 'granted') {
      init();
    } else {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        init();
      }
    }
  } catch(e) {
    /* ignore */
  }
}

function init() {
  getToken().then((currentToken) => {
    if (currentToken) {
      console.log({currentToken});
    }
  });
}

export default async function chat() {
  await navigator.serviceWorker.register('/firebase-messaging-sw.js');
  register();
}
