import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-ZI18qeRPbRutCb1tAFzdgphMaX0-oh8",
    authDomain: "expensify-app-ccbd1.firebaseapp.com",
    databaseURL: "https://expensify-app-ccbd1.firebaseio.com",
    projectId: "expensify-app-ccbd1",
    storageBucket: "expensify-app-ccbd1.appspot.com",
    messagingSenderId: "157442204771",
    appId: "1:157442204771:web:06057c9cf8775d84718456",
    measurementId: "G-5VTLYN5FNN"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database = firebase.database()
    database.ref().set({
      name:'Abhi joshi',
      age:28,
      isSingle:true,
      location:{
          city:'Bangalore',
          country:'India'
      }
  })
 
  database.ref('name').set("Abhijit Joshi")
  database.ref('location/city').set('Zurich');
  database.ref('attributes').set({
      height:164,
      weight:60
  }).then(() => {
      console.log('Data is Saved');
  }).catch((err) => console.log(err,'this failed'))

/*database.ref('isSingle')
.remove()
.then(() => {
    console.log("Removed")
})
.catch(() => {
    console.log("Error while removing")
})*/
database.ref('isSingle').set(null);

database.ref().update({
    name:'Bhargavi',
    age:27,
    job:'software developer'
})

database.ref().update({
    job:'Manager',
    stressLevel:9,
    'location/city':'Java Developer'
})







