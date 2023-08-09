import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBKagZHQT-Ep4YC1y9nfTYKpdnSXwwAd7A',
    authDomain: 'recipe-box-d5b78.firebaseapp.com',
    databaseURL: 'https://recipe-box-d5b78-default-rtdb.firebaseio.com',
    projectId: 'recipe-box-d5b78',
    storageBucket: 'recipe-box-d5b78.appspot.com',
    messagingSenderId: '617304007397',
    appId: '1:617304007397:ios:f7570b01ccf08b5b38ea0c',
    measurementId: 'G-measurement-id',
  };
  
  const app = initializeApp(firebaseConfig);