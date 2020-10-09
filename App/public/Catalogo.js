var globalid=1;
var text = window.location.hash.substring(1);
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

 //userDoc contains all metadata of Firestore object, such as reference and id

 //If you want to get doc data
    var precio = userDoc.data().Precio;
    var descripcion = userDoc.data().Descripcion;
    var descuento = userDoc.data().Descuento;
    var foto = userDoc.data().Foto;
    var nombre = userDoc.data().Nombre;
    var nuevo = userDoc.data().Nuevo;
    var rating = userDoc.data().Rating;
    var tag = userDoc.data().Tag;

    var x = document.getElementById("todo");
    var x1 = '<div class="col-xl-4 col-lg-4 col-md-6"><div class="single-product mb-60"><div class="product-img"><img src=';
    var x2 = ' alt=""><div class="new-product">';
    if(nuevo == true){var x3 ="<span>New</span>"} else {var x3=""};
    var x4 = '</div></div><div class="product-caption"><div class="product-ratting">';
    if(rating == 5){
      var x5 ='<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star">';
    }
    if(rating == 4){
      var x5 ='<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star "></i><i class="far fa-star low-star">';
    }
    if(rating == 3){
      var x5 ='<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star low-star"></i><i class="far fa-star low-star">';
    }
    if(rating == 2){
      var x5 ='<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star low-star"></i><i class="far fa-star low-star"></i><i class="far fa-star low-star">';
    }
    if(rating == 1){
      var x5 ='<i class="far fa-star"></i><i class="far fa-star low-star"></i><i class="far fa-star low-star"></i><i class="far fa-star low-star"></i><i class="far fa-star low-star">';
    }
    if(globalid>0){
    var x6 ='</i></div><h4><a href="single-product.html?variable='+globalid+'#'+text+'">';
    globalid=globalid+1;
    console.log(globalid+"id");
    }
    var x7 ='</a></h4><div class="price"><ul><li>S/.';
    var x8 ='.00</li>';
    if(descuento == true){var x9 ='<li class="discount">S/.';x9 = x9.concat(precio+25,'.00</li>');} else {var x9=""};
    x10 ='</ul></div></div></div></div>';
    x.innerHTML=  x.innerHTML.concat(x1,foto,x2, x3,x4,x5,x6,nombre,x7,precio,x8,x9,x10);


    var m = document.getElementById("hombres");
    for(var i=0;i<tag.length;i++)
      {if( tag[i] == "Hombre" ){
        console.log(i);
        m.innerHTML = m.innerHTML.concat(x1,foto,x2, x3,x4,x5,x6,nombre,x7,precio,x8,x9,x10);
    }};

    var f = document.getElementById("mujeres");
    for(var i=0;i<tag.length;i++)
      {if( tag[i] == "Mujer" ){
        console.log(i);
        f.innerHTML = f.innerHTML.concat(x1,foto,x2, x3,x4,x5,x6,nombre,x7,precio,x8,x9,x10);
    }};



 })

});


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

}
