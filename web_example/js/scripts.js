console.log("hello!!!")
var names = ["Irene", "Rojin", "Jade", "Ed","Luis", "David","Patrick","Ram"];
var email = ["irene.florez@gmail.com","ro_jin25@icloud.com","jade.a.manrique@gmail.com", "edtihcode@gmail.com", "lfr4707@gmail.com", "davidrubioll@gmail.com", "porcuna.patrickj@gmail.com","ram@gmail.com"];

// Hello.lenght will give the length of hello=5
for (var i = 0; i < names.length; i++) {
  //document.getElementById("text").innerHTML = "test";
  var html =    "<div class=\"contact\">" +
                "<p>" + (j=i+1) + ". Name: " + names[i] + "</p>" +
                "<p>" + " &nbsp&nbsp&nbsp " + " E-mail: " + email[i] + "</p>"
                "</div>";
  // var htmlName =    "<div><p>Name: " + names[i] + "</p>";
  // var htmlEmail = " <p>" + "E-mail: " + email[i] + "</p></div>";

  document.getElementById("text").insertAdjacentHTML('beforeend', html);
  //FOR extra Html and Seperate Email
  // document.getElementById("text").insertAdjacentHTML('beforeend', htmlEmail);
}
