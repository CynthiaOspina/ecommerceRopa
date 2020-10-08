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

    var db = firebase.firestore();

    var usersReference = db.collection("productos");
    //Get them
    usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself
    querySnapshot.forEach((userDoc) => {
        console.log("buen intento");
    if(globaid==params['variable']){
        console.log("intento correcto");
    precio = userDoc.data().Precio;
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
    var cant = "";
    cant = document.getElementById("cantidadproducto").value;
    console.log(cant)
    db.collection("Carritos").doc("producto"+params['variable']).set({
        name: nombre,
        photo: foto,
        price: precio,
        cantidad: cant,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    window.open("cart.html","ventana1");
}
