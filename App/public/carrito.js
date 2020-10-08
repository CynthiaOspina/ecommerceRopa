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

var usersReference = db.collection("Carritos");
//Get them
usersReference.get().then((querySnapshot) => {

    //querySnapshot is "iteratable" itself
    querySnapshot.forEach((userDoc) => {
        console.log("correcto");
      var x1 = '<tr><td><div class="media"><div class="d-flex"><img src="';
      var foto = userDoc.data().photo;
      var x2 = '" alt="" /></div><div class="media-body"><p>';
      var nombre = userDoc.data().name;
      var x3 = '</p></div></div></td><td><h5> S/.';
      var preciounitario = userDoc.data().price;
      var x4 = '</h5></td><td><div class="product_count"><h5>';
      var unidades = userDoc.data().cantidad;
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
    })
});

