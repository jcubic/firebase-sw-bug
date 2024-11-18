importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: 'AIzaSyCJhLo__GsvoEcP3Tp8G5jAhMo0OLPuBec',
    authDomain: 'jcubic-1500107003772.firebaseapp.com',
    databaseURL: 'https://jcubic-1500107003772.firebaseio.com',
    projectId: 'jcubic-1500107003772',
    storageBucket: 'jcubic-1500107003772.appspot.com',
    messagingSenderId: '1005897028349',
    appId: '1:1005897028349:web:fc2d0f5524864d5d17e494'
});

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
});

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/logo.svg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('install', self.skipWaiting);
self.addEventListener('activate', self.skipWaiting);
