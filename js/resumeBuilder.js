var name = ("Tom Freestone");
var role = ("Front-End Developer");

var formattedName = HTMLheaderName.replace("%data%", name);
$('#header').append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').append(formattedRole);

/*$("#main").append("Tom Freestone");


var email = "tomfreestone@gmail.com";

var newEmail = email.replace ("tomfreestone", "mickthecoat");

console.log(email);
console.log(newEmail);

var awesomeThoughts = (" I am Tom and I am AWESOME");
var funThoughts = awesomeThoughts.replace ("AWESOME","fun");

console.log(awesomeThoughts);
console.log(funThoughts);

$("#main").append(funThoughts);
*/
