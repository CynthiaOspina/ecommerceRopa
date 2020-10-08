

document.getElementById("but").onclick = function() {myFunction()};

function myFunction() {
  var firebaseConfig = {
  apiKey: "AIzaSyCy3lw3o0NE1E4GYhqVcnuIxG0NxeqT6B8",
  authDomain: "ing-soft-2.firebaseapp.com",
  databaseURL: "https://ing-soft-2.firebaseio.com",
  projectId: "ing-soft-2",
  storageBucket: "ing-soft-2.appspot.com",
  messagingSenderId: "892080002396",
  appId: "1:892080002396:web:2fc715e88c1ec250261d99",
  measurementId: "G-EH50HQXHVX"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();
  var x = document.getElementById("name");
  var y = document.getElementById("password");
  var usersReference = db.collection("usuarios");

  document.getElementById("but").innerHTML = "YOU CLICKED ME!";
}
