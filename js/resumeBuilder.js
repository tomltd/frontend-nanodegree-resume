/*var name = ("Tom Freestone");
var role = ("Front-End Developer");

var formattedName = HTMLheaderName.replace("%data%", name);
$('#header').prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').prepend(formattedRole); */

var bio = {
    "name" : "Tom Freestone",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+44 7941 244 293",
        "email": "tomfreestone@gmail.com",
        "github": "tomltd",
        "twitter": "@tomltd",
        "location": "Norwich"
},
    "welcomeMessage": "Front-End Developer looking for exciting projects",
    "skills":
    [
        "HTML5", "CSS3", "JS", "Git", "grunt"
    ],
    "bioPic": "images/fry.jpg"
}


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

