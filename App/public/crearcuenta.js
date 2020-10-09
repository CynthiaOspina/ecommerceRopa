

function crear(){
  //Get them
  var nombr =document.getElementById("nombre").value;
  var pass =document.getElementById("password").value;
  var email =document.getElementById("name").value;

  if(document.getElementById('tipo1').checked) {
    var tipo = "Comprador";
  }else if(document.getElementById('tipo2').checked) {
    var tipo = "Vendedor";
  };

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

  var db = firebase.firestore();
  var newuser = db.collection("usuarios").doc();

  newuser.set({
    Contraseña: pass,
    Correo: email,
    Nombre: nombr,
    Tipo: tipo
  });
  console.log("usuario agregado");
  alert("Usuario creado");
  document.getElementById("nombre").value ="";
  document.getElementById("password").value ="";
  document.getElementById("name").value ="";
  document.getElementById('tipo1').checked = false;
  document.getElementById('tipo2').checked = false;
  location.href = "login.html" + '#' + session;

};

function checkses(){
  var text = window.location.hash.substring(1);
  if(text == ""){
    alert("Inicia sesion primero");
  }
  else{
    document.getElementById("shopping").href = 'cart.html' + '#' + text;
  }
};
