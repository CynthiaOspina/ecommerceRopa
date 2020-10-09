var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split ("&");
var params = {};
var nombre ="";
var foto = "";
var precio ="";
globaid=1;
for ( var i = 0; i < paramarr.length; i++) {
var tmparr = paramarr[i].split("=");
params[tmparr[0]] = tmparr[1];
}
if (params['variable']) {
console.log('El valor del parámetro variable es: '+params['variable']);
} else {
console.log('No se envió el parámetro variable');
}
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

    var usersReference = db.collection("productos");
    //Get them
    usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself
    querySnapshot.forEach((userDoc) => {
        console.log("buen intento");
    if(globaid==params['variable']){
        console.log("intento correcto");
    precio = userDoc.data().Precio;
    idprod= userDoc.id;
    console.log(precio);
    var descripcion = userDoc.data().Descripcion;
    foto = userDoc.data().Foto;
    console.log(foto);
    nombre = userDoc.data().Nombre;
    var x = document.getElementById("imagenprodc");
    x.innerHTML = x.innerHTML.concat('<img src="',foto,'"  alt="" class="img-fluid" >',
        '<h3> <p> S/.',precio,'</p> </h3>');
        console.log(x);
    var x1 = document.getElementById("textoproducto");
    x1.innerHTML= nombre;
    var x2 = document.getElementById("descripcionproducto");
    x2.innerHTML= descripcion;
    }

    globaid=globaid+1;
    })
});

function agregarcarrito(){
    var text = window.location.hash.substring(1);
    var ddl = document.getElementById("sizes");
    var selectedValue = ddl.options[ddl.selectedIndex].innerHTML;
    console.log(selectedValue);
    console.log(text);
    console.log(ddl);
    var usersReference = db.collection("usuarios");
    usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself
    querySnapshot.forEach((userDoc) => {

    //userDoc contains all metadata of Firestore object, such as reference and id

    //If you want to get doc data
        var session = userDoc.id;
        if(session == text){
          var newcar = db.collection("carritos").doc();

          newcar.set({
            Producto: idprod,
            Cliente: session,
            Talla: selectedValue
          });
          alert("Producto agregado");
        }})});

}




function checkusuario(){
  var text = window.location.hash.substring(1);
  if(text == ""){
    console.log("chill");
  }
  else{
    document.getElementById("nav1").href = 'index.html' + '#' + text;
    document.getElementById("nav2").href = 'Catalogo.html' + '#' + text;
    document.getElementById("perf").href = 'perfil.html' + '#' + text;

    var ele = document.getElementById("signin");
    ele.style.display = "none";
    var ele2 = document.getElementById("perf");
    ele2.style.display = "block";

    var usersReference = db.collection("usuarios");
    usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself
    querySnapshot.forEach((userDoc) => {

    //userDoc contains all metadata of Firestore object, such as reference and id

    //If you want to get doc data
        var x = userDoc.data().Nombre;
        var session = userDoc.id;
        if(session == text){
          ele2.innerHTML=x;

        }})});




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
