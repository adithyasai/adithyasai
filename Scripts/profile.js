var expereince;
var age;
var containers = ["about-container", "education-container", "experience-container", "projects-container","blogs-container"];
var education = ["2011", "2015", "2024"];

function onLoad() {
    calculateExpereince();
    calculateAge();
    getElementsById(containers);
    display_ct();
    getElementsById(education);
}

function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date(Date.now());
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    document.getElementById('ct').innerHTML = x1;
    display_c();
}

function calculateExpereince() {
    expereince = calculateYears("1/15/2015");
    document.getElementById("experience").innerHTML = expereince;
}

function calculateAge() {
    age = calculateYears("06/07/1994");
    document.getElementById("age").innerHTML = age;
}

function calculateYears(date) {
    var currentDate = new Date();
    var jobStartedDate = new Date(date);
    const diffTime = Math.abs(currentDate - jobStartedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");

    var years = Math.floor(diffDays / 365);
    var months = Math.floor(diffDays % 365 / 30);
    var days = Math.floor(diffDays % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? "." : ".") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? "" : " ") : "";
    var daysDisplay = days > 0 ? days + (days == 1 ? " " : " ") : "";
    return yearsDisplay + monthsDisplay
}

function getElementsById(ids) {
    containers = ["home-container", "about-container", "education-container", "experience-container", "projects-container","blogs-container"];
    education = ["2009", "2011", "2015", "2024"];
    console.log(ids)
    for (var i = 0; i < ids.length; i++) {
        item = document.getElementById(ids[i]);
        item.style.display = "none"

    }
}

function showContainer(data) {
    document.getElementById(data).style.display = "";
    var array = containers;
    var index = array.indexOf(data);
    if (index !== -1) {
        array.splice(index, 1);
    }
    getElementsById(array)
}

function showEducation(data) {
    document.getElementById(data).style.display = "";
    var array = education;
    var index = array.indexOf(data);
    if (index !== -1) {
        array.splice(index, 1);
    }
    getElementsById(array)
}

// function showAbout(){
//     document.getElementById("about-container").style.display = "";
//     getElementsById("home-container education-container") 
// }
// function showEducation(){
//     document.getElementById("about-container").style.display = "";
//     getElementsById("home-container education-container") 
// }

