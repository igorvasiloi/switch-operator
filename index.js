var day = prompt("Please eneter your day, for example - thursday" );


if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" ) {
  alert("Working day");
} else if (day === "Saturday" || day === "Sunday") {
  alert("Weekend");

} else {
  alert("Try another value");
}