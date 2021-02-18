var greeting;
var time = new Date().getHours();
if (time < 12) {
	greeting = "Good morning";
} else if (time < 18) {
	greeting = "Good afternoon";
} else {
	greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;