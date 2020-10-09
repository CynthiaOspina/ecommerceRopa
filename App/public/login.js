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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();

function entrar(){
  //Get them
  var pass =document.getElementById("password").value;
  var email =document.getElementById("name").value;



  var usersReference = db.collection("usuarios");
  usersReference.get().then((querySnapshot) => {

  //querySnapshot is "iteratable" itself
  querySnapshot.forEach((userDoc) => {

  //userDoc contains all metadata of Firestore object, such as reference and id

  //If you want to get doc data
      var x = userDoc.data().Correo;
      var y = userDoc.data().Contraseña;
      if(email == x){
        if(y==pass){
          insession= true;
          alert("Bienvenido");
          document.getElementById("password").value ="";
          document.getElementById("name").value ="";
          location.href = "index.html";
        }
      }})});




};
