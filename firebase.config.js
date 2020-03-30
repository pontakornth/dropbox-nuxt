import dotenv from 'dotenv'
dotenv.config()
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'lunch-picker-657ec.firebaseapp.com',
  databaseURL: 'https://lunch-picker-657ec.firebaseio.com',
  projectId: 'lunch-picker-657ec',
  storageBucket: 'lunch-picker-657ec.appspot.com',
  messagingSenderId: '365364142092',
  appId: '1:365364142092:web:a4529ad876a6c306674e29'
}

export default firebaseConfig
