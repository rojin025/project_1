console.log("hello!!!")
var names = ["Irene", "Rojin", "Jade", "Ed","Luis", "David","Patrick"];
var email = ["irene.florez@gmail.com","ro_jin25@icloud.com","jade.a.manrique@gmail.com", "edtihcode@gmail.com", "lfr4707@gmail.com", "davidrubioll@gmail.com", "porcuna.patrickj@gmail.com",];

// Hello.lenght will give the length of hello=5
for (var i = 0; i < names.length; i++) {
  //document.getElementById("text").innerHTML = "test";
  var html =    "<div>" +
                "<p>Name: " + names[i] + "</p>" +
                "<p>E-mail: " + email[i] + "</p>"
                "</div>";
  // var htmlName =    "<div><p>Name: " + names[i] + "</p>";
  // var htmlEmail = " <p>" + "E-mail: " + email[i] + "</p></div>";

  document.getElementById("text").insertAdjacentHTML('beforeend', html);

  // document.getElementById("text").insertAdjacentHTML('beforeend', htmlEmail);
  // console.log(name[i]);
  // console.log(email[i]);
}
