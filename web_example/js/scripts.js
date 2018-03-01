console.log("hello!!!")
var names = ["Irene", "Rojin", "Jade", "Ed","Luis", "David","Patrick","Ram"];
var email = ["irene@gmail.com","ro_@icloud.com","jaanrique@gmail.com", "edtihc@gmail.com", "lfr4@gmail.com", "dav@gmail.com", "porcuna@gmail.com","ram@gmail.com"];

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
  //Object
  var person = {firstName: "ram", lastName: "baral", email: "ram@gmail.com"};
  console.log(person["firstName"]);
  console.log(person["lastName"]);

// //var array=["first" , "second", "third"];
// array[2];
//
// //Object
// var data = {firstName: "ram", lastName: "baral", email: "ram@gmail.com"}
//
// var name = person.firstName();
