import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import moment from "moment";
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

  export {firebase , database as default};
/*    database.ref().set({
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
})****** *
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

database.ref().once('value')
.then((snapshot) => {
   const val = snapshot.val();
   console.log(val)
})
.catch(() => {

})
database.ref('location').once('value')
.then((snapshot) => {
   const val = snapshot.val();
   console.log(val)
})
.catch(() => {
    
})


database.ref().on('value',(snapshot) => {
    const val= snapshot.val();
    console.log(`${val.name} is a ${val.job}`)
})

const notes = [{
    id:'1',
    title:'First note',
    body:'This is my note'
},
{
    id:'2',
    title:'Second Nnote',
    body:'This is my note'

}]
//database.ref('notes').set(notes)

const firebasenotes = {
    notes:{
        id1: {
            title:'first',
            body:'This is my note'
        },
        id2:{
           title:'second',
           body:'This is my second note' 
        }
    }
}

database.ref('notes').push({
    title:'To Do',
    body:'Go for run'
})*/
/*
database.ref('expenses').push({
    description:'First expense',
    amount:'100',
    note:'ok',
    createdAt:12345678
})
database.ref('expenses').push({
    description:'second expense',
    amount:'200',
    note:'okie',
    createdAt:98884848656
})
database.ref('expenses').push({
    description:'Third expense',
    amount:'300',
    note:'okie dokie',
    createdAt:988848485464
})*/


/*database.ref('expenses').once('value')
.then((snapshot) => {
    console.log(snapshot.val());
   const expenses = [];
     snapshot.forEach((childsnapshot) => {
        expenses.push({
            id:childsnapshot.key,
            ...childsnapshot
        })
     })
     console.log(expenses);
})*/


/*database.ref('expenses').on('value',(snapshot) => {

    const expenses = [];
     snapshot.forEach((childsnapshot) => {
        expenses.push({
            id:childsnapshot.key,
            ...childsnapshot.val()
        })
     })
     console.log(expenses);
})*/

/*
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})*/










