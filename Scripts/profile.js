var expereince;
var age;

function onLoad(){
    calculateExpereince();
    calculateAge();
    document.getElementById("about-container").style.display = "none";  
    document.getElementById("education-container").style.display = "none";  
    document.getElementById("experience-container").style.display = "none";  
    document.getElementById("projects-container").style.display = "none";  
}

function calculateExpereince(){
    expereince = calculateYears("1/15/2015");
    document.getElementById("experience").innerHTML = expereince;
}

function calculateAge(){
    age = calculateYears("06/07/1994");
    document.getElementById("age").innerHTML = age;
}

function calculateYears(date){
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
    return yearsDisplay+monthsDisplay
}

function showHome(){
    document.getElementById("content").style.display = "none";
    document.getElementById("home-container").style.display = "";

}

function showAbout(){
    document.getElementById("home-container").style.display = "none";
    document.getElementById("about-container").style.display = "";

}


