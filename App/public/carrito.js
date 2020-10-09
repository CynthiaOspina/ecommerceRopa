text = window.location.hash.substring(1);
var total = 0;
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



var usersReference = db.collection("carritos");
//Get them

usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself

    querySnapshot.forEach((userDoc) => {
        var session = userDoc.data().Cliente;
        if(session == text){
          var idproducto = userDoc.data().Producto;
          var docRef = db.collection("productos").doc(idproducto);

          docRef.get().then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            var x1 = '<tr><td><div class="media"><div class="d-flex"><img src="';
            var foto = doc.data().Foto;
            var x2 = '" alt="" /></div><div class="media-body"><p>';
            var nombre = doc.data().Nombre;
            var x3 = '</p></div></div></td><td><h5> S/.';
            var preciounitario = doc.data().Precio;
            var x4 = '</h5></td><td><div class="product_count"><h5>';
            var unidades = 1;
            var x5 = '</h5></div></td><td><h5> S/.';
            console.log(nombre);
            console.log(unidades);
            console.log(preciounitario);
            var preciototal = preciounitario * unidades;
            total = total+preciototal;
            console.log(total);
            var x6 = '</h5></td></tr>';
            var x = document.getElementById("cajacarrito");
            x.innerHTML= x1+foto+x2+nombre+x3+preciounitario+x4+unidades+x5+preciototal+x6+x.innerHTML;
            var x11 = document.getElementById("totalventa");
            x11.innerHTML= '<h5> S/.'+total+'</h5>';
          }
        })
      }})});







function checkusuario(){
  var text = window.location.hash.substring(1);
  if(text == ""){
    console.log("chill");
  }
  else{
    document.getElementById("nav1").href = 'index.html' + '#' + text;
    document.getElementById("nav2").href = 'Catalogo.html' + '#' + text;
    document.getElementById("nav3").href = 'Catalogo.html' + '#' + text;
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

        var session = userDoc.id;
        if(session == text){
          nombrecliente = userDoc.data().Nombre;
          ele2.innerHTML=nombrecliente;

        }})});
  }
}

function checkses(){
  var text = window.location.hash.substring(1);
  if(text == ""){
    alert("Inicia sesion primero");
  }
  else{
    document.getElementById("shopping").href = 'cart.html' + '#' + text;
  }
};

function crearorden(){
  var pedidoentero =" ";

  var usersReference = db.collection("carritos");
  usersReference.get().then((querySnapshot) => {
  querySnapshot.forEach((userDoc) => {
      var talla = userDoc.data().Talla;
      var session = userDoc.data().Cliente;

      if(session == text){
        var idproducto = userDoc.data().Producto;
        var docRef = db.collection("productos").doc(idproducto);
        docRef.get().then(function(doc) {
        if (doc.exists) {
          var nombre = doc.data().Nombre;
          var nombreytalla = nombre.concat(" en talla ",talla);
          console.log(nombreytalla);
          pedidoentero = pedidoentero.concat(nombreytalla, " y ");
          console.log(nombrecliente);
          var direc = document.getElementById("direcc").value;
          console.log(direc);
          if(document.getElementById('tipo1').checked) {
            var del = false;
          }else if(document.getElementById('tipo2').checked) {
            var del = true;
          };
          console.log(del);

          var ddl = document.getElementById("distrito");
          var selectedValue = ddl.options[ddl.selectedIndex].innerHTML;
          console.log(selectedValue);
          console.log(pedidoentero);




        }

      })

    }})});

      var neworder = db.collection("ordenes").doc();

      neworder.set({
        Pedido: pedidoentero,
        Cliente: nombrecliente,
        ClienteID: text,
        Direccion: direc,
        DeliveryRapido: del,
        Distrito: selectedValue
      });

      alert("Orden creada");
      var cosasaborrar = db.collection('carritos').where('Cliente','==',text);
      cosasaborrar.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
      doc.ref.delete();
      });
      });
      document.getElementById("direcc").value ="";
      location.href = "pago.html" + '#' + session;










};
