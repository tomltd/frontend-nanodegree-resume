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
        "mobile": "+447941244293",
        "email": "tomfreestone@gmail.com",
        "github": "tomltd",
        "twitter": "@tomltd",
        "location": "Norwich UK"
},
    "welcomeMessage": "Front-End Developer looking for exciting projects",
    "skills":
    [
        "HTML5", " CSS3", " JS", " Git", " grunt"
    ],
    "bioPic": "images/tom.jpg"
}


name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

contactLocation = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", contactLocation);
$("#topContacts").append(formattedLocation);

welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMsg);


skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(formattedBioPic);

// Next Quiz

var work =
 {
	"jobs": [
	{
		"employer" : "University of East Anglia",
		"title" : "Web Administrator",
		"dates" : "December 2013 - Present",
		"location" : "Norwich UK",
		"description" : "Administrating and Designing various University websites"
		},
		{
		"employer" : "Amnesty International",
		"title" : "Technical Assistant",
		"dates" : "April 2009 - December 2013",
		"location:" : "London UK",
		"description" : "Supporting the Web Development Team"	
		}
		]	

}

var education =
{
    "schools": [
        {
            "name" : "University of East Anglia",
            "location" : "Norwich UK",
            "degree" : "Computer Science BSc",
            "majors" : "Computer Sciences",
            "dates" : "062003",
            "url" : "http://uea.ac.uk"
        }
        ],
    "onlineCourses":[
        {
        "title" : "FrontEnd Web Development",
        "school" : "udacity",
        "date" : "122015",
        "url" : "http://udacity.com"
        }
        ]    
}


// Add multiple jobs to this
/*var work = {"uea":{
            "employer" : "University of East Anglia",
            "location" : "Norwich",
},
"amnesty":{
    "employer" : "Amnesty International",
    "location" : "London"
}
}*/
//var work.employer = "University of East Anglia";
//employer = work.employer;
//var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
$("#workExperience").append(HTMLworkStart);
//$("#workExperience").append(employer);

var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
//var formattedEmployer = HTMLworkEmployer.replace("%data%", work.uea.employer);
$(".work-entry:last").append(formattedEmployer);
// add proper object with different jobs

var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
$(".work-entry:last").append(formattedLocation);


//var education["schoolName"] = "University of East Anglia";


$("#education").append(HTMLschoolStart);