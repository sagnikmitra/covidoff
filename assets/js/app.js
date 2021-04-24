// Initialize Firebase(2)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCT5A8OzcobxD_8-gnymi90RA13KRKcaN8",
    authDomain: "covidoff-bc740.firebaseapp.com",
    projectId: "covidoff-bc740",
    storageBucket: "covidoff-bc740.appspot.com",
    messagingSenderId: "913996952312",
    appId: "1:913996952312:web:693ac027ccdf559008010d",
    measurementId: "G-ENYT036DR0"
};

firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
    .getElementById('registrationform')
    .addEventListener('submit', formSubmit)