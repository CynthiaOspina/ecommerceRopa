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


function checkordenes(){
  var text = window.location.hash.substring(1);
  if(text == ""){
    console.log("sin usuario");
  }
  else{
    document.getElementById("nav1").href = 'index.html' + '#' + text;
    document.getElementById("nav2").href = 'Catalogo.html' + '#' + text;
    document.getElementById("perf").href = 'perfil.html' + '#' + text;

    var ele = document.getElementById("signin");
    ele.style.display = "none";
    var ele2 = document.getElementById("perf");
    ele2.style.display = "block";

    var usersReference = db.collection("ordenes");
    usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself
    querySnapshot.forEach((userDoc) => {

    //userDoc contains all metadata of Firestore object, such as reference and id
      var orden = userDoc.data().Cliente;
      if(orden == text){
        var x = userDoc.data().Pedido;
        var y = userDoc.data().Cliente;
        var w = userDoc.data().ClienteID;
        var q = userDoc.data().Direccion;
        var v = userDoc.data().DeliveryRapido;
        var d = userDoc.data().Distrito;
        document.getElementById("info").innerHTML = document.getElementById("info").innerHTML.concat(x,"<br>",y,"<br>",w,"<br>",q,"<br>",v,"<br>",d);



      }

        })});
  }
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
