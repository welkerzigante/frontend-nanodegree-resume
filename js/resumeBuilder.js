var name = "Welker Zigante"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Programador Web";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
